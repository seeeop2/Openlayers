
let checkSatellite = false;
let checkWhite = false;
let checkMidnight = false;
let checkHybrid = false;


/*======================================레이어 모음======================================*/
let Base = new ol.layer.Tile({
    name : "Base",
    source: new ol.source.XYZ({
        url: 'http://api.vworld.kr/req/wmts/1.0.0/CEB52025-E065-364C-9DBA-44880E3B02B8/Base/{z}/{y}/{x}.png'  // WMTS API 사용
    })
});

let Satellite = new ol.layer.Tile({
    name : "Satellite",
    source: new ol.source.XYZ({
        url: 'http://api.vworld.kr/req/wmts/1.0.0/CEB52025-E065-364C-9DBA-44880E3B02B8/Satellite/{z}/{y}/{x}.jpeg'  // WMTS API 사용
        /*자료 확인하면, Satellite는 .png가 아니라 .jpeg다.*/
    })
});

let white = new ol.layer.Tile({
    name : "white",
    source: new ol.source.XYZ({
        url: 'http://api.vworld.kr/req/wmts/1.0.0/CEB52025-E065-364C-9DBA-44880E3B02B8/white/{z}/{y}/{x}.png'  // WMTS API 사용
    })
});

let MidNight = new ol.layer.Tile({
    name : "midnight",
    source: new ol.source.XYZ({
        url: 'http://api.vworld.kr/req/wmts/1.0.0/CEB52025-E065-364C-9DBA-44880E3B02B8/midnight/{z}/{y}/{x}.png'  // WMTS API 사용
    })
});

let Hybrid = new ol.layer.Tile({
    name : "Hybrid",
    source: new ol.source.XYZ({
        url: 'http://api.vworld.kr/req/wmts/1.0.0/CEB52025-E065-364C-9DBA-44880E3B02B8/Hybrid/{z}/{y}/{x}.png'  // WMTS API 사용
    })
});

/*여기서는 OSM 사용할 필요 없다.*/
let OSM = new ol.layer.Tile({
    name : "Base",
    source: new ol.source.OSM()
});
/*======================================레이어 모음======================================*/

// var debug = new ol.layer.Tile({
// 	name : "debug",
// 	source: new ol.source.TileDebug() //ol 6버전에 생김
// }); // 타일의 넘버링을 확인할 수 있음 z: 레벨  / y 위 아래 , x 좌 우    /{z}7/{y}47/{x}111.png


/* 이렇게 변수로 지정하여도 괜찮으나, 나는 view에 바로 생성자 만들어주는 것이 더 가독성이 있다.
    let olView = new ol.View({
        center: ol.proj.transform([129.1705,35.1614], 'EPSG:4326', 'EPSG:3857'),/!*좌표계 변환
                                                                                    위도 경도를 부산 해운대로 설정해뒀다.*!/
        zoom: 10

    })// 뷰 설정
*/
let map = new ol.Map({
//        layers: [OSM,Base], //[OSM,Base,debug]
    layers: [Base], // <---Base가 VWorld의 베이스임. []빼도 될 것이라 생각했으나, 빼면 오류 뜬다.
    target: 'map',
    view: new ol.View({
        center: ol.proj.transform([129.1705,35.1614], 'EPSG:4326', 'EPSG:3857'),/*좌표계 변환
                                                                                    위도 경도를 부산 해운대로 설정해뒀다.*/
        zoom: 10
    })// 뷰 설정
});//

/*======================================클릭 이벤트 모음======================================*/
function addSatellite(){    //'위성사진' 버튼을 클릭하면 layer 추가
    if(checkSatellite){
        map.removeLayer(Satellite);  //removeLayer 메소드 이용하기 좋다.
        // map.addLayer(Base);
        console.log(checkSatellite);
        checkSatellite = false;
    } else{
        map.addLayer(Satellite);    //addLayer 메소드 이용하기 좋다.
        checkSatellite = true;
    }
}
function addWhite(){    //'화이트' 버튼을 클릭하면 layer 추가
    if(checkWhite){
        map.removeLayer(white);  //removeLayer 메소드 이용하기 좋다.
        // map.addLayer(Base);
        console.log(checkWhite);
        checkWhite = false;
    } else{
        map.addLayer(white);    //addLayer 메소드 이용하기 좋다.
        checkWhite = true;
    }
}

function addMidnight(){    //'Midnight' 버튼을 클릭하면 layer 추가
    if(checkMidnight){
        map.removeLayer(MidNight);  //removeLayer 메소드 이용하기 좋다.
        // map.addLayer(Base);
        console.log(checkMidnight);
        checkMidnight = false;
    } else{
        map.addLayer(MidNight);    //addLayer 메소드 이용하기 좋다.
        checkMidnight = true;
    }
}

function addHybrid(){    //'Hybrid' 버튼을 클릭하면 layer 추가
    if(checkHybrid){
        map.removeLayer(Hybrid);  //removeLayer 메소드 이용하기 좋다.
        // map.addLayer(Base);
        console.log(checkHybrid);
        checkHybrid = false;
    } else{
        map.addLayer(Hybrid);    //addLayer 메소드 이용하기 좋다.
        checkHybrid = true;
    }
}

function removeAll(){    //'Reset' 버튼을 클릭하면 Base 레이어만 남기기
    map.removeLayer(Satellite);
    map.removeLayer(white);
    map.removeLayer(MidNight);
    map.removeLayer(Hybrid);

    checkSatellite = false;
    checkWhite = false;
    checkMidnight = false;
    checkHybrid = false;
}


/*======================================클릭 이벤트 모음======================================*/