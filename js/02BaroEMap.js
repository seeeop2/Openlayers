var map1;

/* 기본 지도 로딩
window.onload = function(){
    map1 = new ngii_wmts.map("map1", {zoom : 2});
};
*/

/* 배경지도 전환버튼 생성
window.onload = function(){
    map1 = new ngii_wmts.map("map1",{mapMode:0});
    /!*
        mapMode에 따라서 컨트롤 박스에 있는 맵 중 하나가 기본으로 설정된다.
        0:일반, 1:색각, 2:큰 글씨, 3:백지도, 4:영문, 5:중문, 6:일문, 7:교육용백지도
    *!/
    map1._addDefaultMapModeBox({right:"0px", top:"35px"});
    /!*Right, Top 기준으로 컨트롤 박스 이동 가능*!/
};
*/

/* 기본 컨트롤러 사용
window.onload = function(){
    map1 = new ngii_wmts.map("map1");
    map1._gfn_add_vector();
};
*/

window.onload = function(){
    map1 = new ngii_wmts.map("map1",{
        center:[960561.862625, 1919786.384620],
        extent:[958551.04896058,1917735.5150606,962551.04896058,1921735.5150606],   //동,서,남,북
        zoom:6,
        minZoom:6,
        maxZoom:14,
        mapMode:0
    });
};