import React, { useState, useRef, useMemo, useEffect } from "react";
import ReactMapboxGl, { GeoJSONLayer, Marker } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { along, lineDistance, Position } from "@turf/turf";

import { busLines, busStops } from "./data";
import { Bus, BusLine, BusStop } from "./app.types";

// @ts-ignore
import busStopImg from "./busStop.png";
// @ts-ignore
import * as styles from "./_app.module.scss";

const STEPS = 30100;
const CENTER: [number, number] = [-49.04350020939314, -22.338231968616707];
const ZOOM: [number] = [15];

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoidmluaWNpdXNjYXJyYSIsImEiOiJja2oxZG50bG4yeGl6MnZyeGJ4M2cwOGt5In0.WF4Lrt_ImpReZHCxLQQ9Rw",
  customAttribution: "a",
  attributionControl: false,
});

let frameId;

export const App = () => {
  const refStart = useRef<HTMLInputElement>();
  const refEnd = useRef<HTMLInputElement>();

  const [busLoc, setBusLoc] = useState<Position>(null);

  const [start, setStart] = useState<BusStop>(null);
  const [end, setEnd] = useState<BusStop>(null);
  const [search, setSearch] = useState(false);

  const onClickMarker = (busStop: BusStop) => {
    if (!start) {
      setStart(busStop);
    } else if (busStop.id !== start.id) setEnd(busStop);
  };

  const clear = () => {
    setStart(null);
    setEnd(null);
    setSearch(false);
    refStart.current?.focus();
  };

  const line: BusLine | null = useMemo(() => {
    if (!search) return null;

    const newLine = busLines.find((line) => {
      return (
        line.stops.find((stop) => stop.id === start?.id) &&
        line.stops.find((stop) => stop.id === end?.id)
      );
    });

    if (!newLine) alert("Nenhuma linha de ônibus encontrada!");

    return newLine;
  }, [start, end, search]);

  const bus: Bus | null = useMemo(() => {
    return line?.buses[Math.floor(Math.random() * line.buses.length)] || null;
  }, [line]);

  // Animate bus
  useEffect(() => {
    if (bus && line) {
      let arc: Position[] = [];
      let startTime = 0;

      const distance = lineDistance(line.geoJson, { units: "kilometers" });

      for (let i = 0; i < distance; i += distance / STEPS) {
        const segment = along(line.geoJson, i);
        arc.push(segment.geometry.coordinates);
      }

      let startOffset = Math.floor(Math.random() * arc.length);

      // @ts-ignore
      function animate(timestamp) {
        const runtime = timestamp - startTime;
        const timeStep = Math.round(runtime) + startOffset;

        setBusLoc(arc[timeStep] || arc[arc.length - 1]);

        if (timeStep <= STEPS) {
          frameId = window.requestAnimationFrame(animate);
        } else {
          startOffset = 0;
          startTime = timestamp;
          frameId = window.requestAnimationFrame(animate);
        }
      }

      window.cancelAnimationFrame(frameId);

      frameId = window.requestAnimationFrame((timeStamp) => {
        startTime = timeStamp;
        animate(timeStamp);
      });
    } else {
      window.cancelAnimationFrame(frameId);
    }

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [bus, line]);

  return (
    <div className={styles.container}>
      <div className={styles.interactiveContainer}>
        <div className={styles.form}>
          <input
            type="text"
            ref={refStart}
            placeholder="Primeira parada"
            value={start?.id || ""}
            disabled
          />
          {start && (
            <input
              type="text"
              ref={refEnd}
              placeholder="Segunda parada"
              value={end?.id || ""}
              disabled
            />
          )}
          <div className={styles.actions}>
            <button onClick={clear}>Limpar</button>
            <button
              className={styles.btnPrimary}
              onClick={() => setSearch(true)}
              disabled={!(start && end)}
            >
              Procurar
            </button>
          </div>
        </div>
      </div>
      <Map
        style="mapbox://styles/viniciuscarra/cl64621s1001814mpj0gesjwy"
        containerStyle={{
          height: "100%",
          width: "100%",
        }}
        center={CENTER}
        zoom={ZOOM}
      >
        {line && (
          <GeoJSONLayer
            data={line.geoJson}
            lineLayout={{}}
            linePaint={{
              "line-color": "darkorange",
              "line-width": 3,
            }}
          />
        )}
        <>
          {busStops.map((stop) => {
            if (line && start?.id !== stop.id && line && end?.id !== stop.id)
              return null;

            return (
              <Marker
                key={stop.id}
                coordinates={stop.position.geometry.coordinates}
                onClick={() => onClickMarker(stop)}
              >
                <img
                  alt="Bus Stop"
                  src={busStopImg}
                  width={40}
                  height={40}
                  style={{
                    transition: "transform 500ms",
                    transform:
                      stop.id === start?.id || stop.id === end?.id
                        ? "scale(1.4) translateY(-5px)"
                        : "",
                  }}
                />
              </Marker>
            );
          })}
        </>
        {bus && busLoc && (
          <Marker coordinates={busLoc} anchor="center">
            <div className={styles.bus}>
              <div className={styles.busInfo}>{line.name}</div>
            </div>
          </Marker>
        )}
      </Map>
    </div>
  );
};
