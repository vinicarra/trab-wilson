import { Bus, BusLine, BusStop } from "./app.types";
import { point } from "@turf/turf";

const bus1: Bus = {
  id: 1,
  name: "Bus one",
};

const bus2: Bus = {
  id: 2,
  name: "Bus two",
};

const busStop1: BusStop = {
  id: 100,
  position: point([-49.04328525066375, -22.3384506891088]),
};

const busStop2: BusStop = {
  id: 101,
  position: point([-49.03367221355438, -22.335840734460632]),
};

const busStop3: BusStop = {
  id: 102,
  position: point([-49.03305530548096, -22.34747599216518]),
};

const busStop4: BusStop = {
  id: 103,
  position: point([-49.03625249862671, -22.336331965398106]),
};

const busStop5: BusStop = {
  id: 104,
  position: point([-49.04244303703308, -22.338028931685912]),
};

const busStop6: BusStop = {
  id: 105,
  position: point([-49.04526337981224, -22.337192855847192]),
};

const busStop7: BusStop = {
  id: 106,
  position: point([-49.04439568519592, -22.33591516350177]),
};

const busStop8: BusStop = {
  id: 107,
  position: point([-49.04375195503235, -22.33730946019674]),
};

export const busStops: ReadonlyArray<BusStop> = [
  busStop1,
  busStop2,
  busStop3,
  busStop4,
  busStop5,
  busStop6,
  busStop7,
  busStop8,
];

export const busLineUnesp: BusLine = {
  id: 1000,
  name: "Ouro verde",
  stops: [busStop1, busStop2, busStop3, busStop4, busStop5],
  buses: [bus1],
  geoJson: {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: [
        [-49.044930785894394, -22.338575975626892],
        [-49.045013934373856, -22.338669010097195],
        [-49.045046120882034, -22.338742197170216],
        [-49.04502600431442, -22.338815384204818],
        [-49.044988453388214, -22.338869964341207],
        [-49.04493346810341, -22.33893694902485],
        [-49.044893234968185, -22.33895927724557],
        [-49.044814109802246, -22.338933227654373],
        [-49.04470682144165, -22.33890965897243],
        [-49.04426425695419, -22.33870250249131],
        [-49.04388204216957, -22.338573494706836],
        [-49.043065309524536, -22.338334085713594],
        [-49.04205948114395, -22.338072347950106],
        [-49.041564613580704, -22.337935896788537],
        [-49.04089003801346, -22.337836659496247],
        [-49.04037371277809, -22.337675398745645],
        [-49.0401765704155, -22.337600970644004],
        [-49.03932496905327, -22.337359079039317],
        [-49.038665145635605, -22.33718169159585],
        [-49.037993252277374, -22.337014227718388],
        [-49.036963284015656, -22.336725196997488],
        [-49.036249816417694, -22.336509353922505],
        [-49.03528690338135, -22.33622528407897],
        [-49.03471156954765, -22.33607394532345],
        [-49.03347909450531, -22.335748938588484],
        [-49.03245583176613, -22.335494638897437],
        [-49.03214067220688, -22.335485955485158],
        [-49.031507670879364, -22.335494638897437],
        [-49.031219333410256, -22.335472310121926],
        [-49.03101816773414, -22.335433855000176],
        [-49.030736535787575, -22.335567827636535],
        [-49.03017595410347, -22.33599951636705],
        [-49.02906954288483, -22.336838080311715],
        [-49.028871059417725, -22.337210222458626],
        [-49.02898907661438, -22.33747816418944],
        [-49.02915000915527, -22.3378751139554],
        [-49.02923583984374, -22.338152978119194],
        [-49.030330181121826, -22.3412292943586],
        [-49.031590819358826, -22.344910861015027],
        [-49.03178393840789, -22.34533259761892],
        [-49.032095074653625, -22.345784102451155],
        [-49.032636880874634, -22.34644895305812],
        [-49.03301775455475, -22.346940146618756],
        [-49.03303384780884, -22.347451184546475],
        [-49.03303116559982, -22.348147036575956],
        [-49.03301574289799, -22.34816440182282],
        [-49.032988250255585, -22.348204093807517],
        [-49.03293862938881, -22.34823696372376],
        [-49.032881632447236, -22.34825742989414],
        [-49.03281256556511, -22.34827045381916],
        [-49.03275892138481, -22.348259910641843],
        [-49.032696560025215, -22.34824130503288],
        [-49.03263285756111, -22.348205334181845],
        [-49.03256043791771, -22.347975864741183],
        [-49.03234988451004, -22.34740901158454],
        [-49.03202265501022, -22.34645143383801],
        [-49.03165519237518, -22.34537725200817],
        [-49.03100878000259, -22.343558814476527],
        [-49.03054475784301, -22.342248929360235],
        [-49.03002440929413, -22.34074800420017],
        [-49.02954429388046, -22.339381031854366],
        [-49.02906954288483, -22.337994198664816],
        [-49.02891665697098, -22.33765431078754],
        [-49.02866452932358, -22.33737644563004],
        [-49.02842313051224, -22.337284650768837],
        [-49.02836412191391, -22.337170527343616],
        [-49.02835875749587, -22.337056403824988],
        [-49.028398990631096, -22.336979494444524],
        [-49.028530418872826, -22.33689514217204],
        [-49.02870208024978, -22.336857927917947],
        [-49.028865694999695, -22.336805827945554],
        [-49.029364585876465, -22.336483303873624],
        [-49.02998149394988, -22.335987111537122],
        [-49.030719101428986, -22.335468588658998],
        [-49.03106242418289, -22.335312287126175],
        [-49.03140038251876, -22.335232895804317],
        [-49.03177052736282, -22.33524530070133],
        [-49.0326851606369, -22.335453702806273],
        [-49.034358859062195, -22.33588042995418],
        [-49.036096930503845, -22.33633940827779],
        [-49.03768748044968, -22.336785980331893],
        [-49.039621353149414, -22.337294574540522],
        [-49.04054939746857, -22.337525302033278],
        [-49.04087394475937, -22.33755011141837],
        [-49.041128754615784, -22.337622058610165],
        [-49.04146134853363, -22.33774114353572],
        [-49.042687118053436, -22.338103359559113],
        [-49.04317192733288, -22.33823670939927],
        [-49.04355816543102, -22.338327263171497],
        [-49.044024869799614, -22.33844076541939],
        [-49.04432527720928, -22.338502788466634],
        [-49.04442586004734, -22.338511471691042],
        [-49.044565334916115, -22.338518294224134],
        [-49.04460489749908, -22.33851767399386],
        [-49.04465585947036, -22.338526977447575],
        [-49.044862389564514, -22.338557368725397],
        [-49.044930785894394, -22.338575975626892],
      ],
    },
  },
};

export const busLineFalcao: BusLine = {
  id: 1000,
  name: "Falcão",
  stops: [busStop6, busStop7, busStop8, busStop5, busStop1],
  buses: [bus2],
  geoJson: {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: [
        [-49.0410053730011, -22.337582363612388],
        [-49.04154717922211, -22.337785800356578],
        [-49.042121171951294, -22.33794458004825],
        [-49.042823910713196, -22.338138092553024],
        [-49.04367685317993, -22.338361375878655],
        [-49.04425621032715, -22.338490383859394],
        [-49.04455125331879, -22.338520154914917],
        [-49.04479801654816, -22.338490383859394],
        [-49.044926762580864, -22.338396108808304],
        [-49.04500186443329, -22.338301833693453],
        [-49.04502868652344, -22.338078550272467],
        [-49.045130610466, -22.337701448571835],
        [-49.04526472091675, -22.33722510812385],
        [-49.04540419578552, -22.336803346994003],
        [-49.045559763908386, -22.336232726964354],
        [-49.04484629631042, -22.33603424988499],
        [-49.044229388237, -22.33587050608185],
        [-49.04415965080261, -22.336019364092643],
        [-49.044073820114136, -22.33629227003309],
        [-49.04401481151581, -22.336515556314378],
        [-49.0439236164093, -22.33679342318734],
        [-49.043832421302795, -22.337125870325714],
        [-49.04374122619629, -22.33739381221861],
        [-49.043623208999634, -22.337780838488293],
        [-49.04354810714722, -22.33805374098139],
        [-49.04371440410614, -22.33820755851486],
        [-49.04399335384369, -22.338455650953243],
        [-49.044696092605584, -22.338525116756895],
        [-49.044937491416924, -22.338584658846745],
        [-49.04502332210541, -22.33867397193388],
        [-49.04502868652344, -22.33879305596104],
        [-49.044937491416924, -22.33895183450573],
        [-49.044824838638306, -22.33894191085198],
        [-49.044578075408936, -22.338857559766627],
        [-49.04436349868774, -22.338728552125623],
        [-49.044116735458374, -22.33867893377037],
        [-49.043869972229, -22.338584658846745],
        [-49.04353737831115, -22.338475498329256],
        [-49.04321551322936, -22.338396108808304],
        [-49.042877554893494, -22.33830679554319],
        [-49.04244303703308, -22.33819267295453],
        [-49.042099714279175, -22.338083512130154],
        [-49.041643738746636, -22.337954503772977],
        [-49.04146671295166, -22.33792969445983],
        [-49.04095709323883, -22.337850304628127],
        [-49.040812253952026, -22.337800685960357],
        [-49.040849804878235, -22.33764190610482],
        [-49.04089272022247, -22.337557554233047],
        [-49.0410053730011, -22.337582363612388],
      ],
    },
  },
};

export const busLines = [busLineUnesp, busLineFalcao];
