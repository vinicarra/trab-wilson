import {
  Feature,
  FeatureCollection,
  GeoJSONObject,
  LineString,
  Point,
} from "@turf/turf";

export interface Bus {
  id: number;
  name: string;
}

export interface BusStop {
  id: number;
  position: Feature<Point>;
}

export interface BusLine {
  id: number;
  name: string;
  geoJson: Feature<LineString>;
  buses: ReadonlyArray<Bus>;
  stops: ReadonlyArray<BusStop>;
}
