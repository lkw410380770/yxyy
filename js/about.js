//百度地图API功能
function loadJScript() {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = "http://api.map.baidu.com/api?v=2.0&ak=Nj6F7YxqAEUhrXEsujW3fKM482MRQbc7&callback=init";
	document.body.appendChild(script);
}

function init() {
	var map = new BMap.Map("allmap"); // 创建Map实例
	var point = new BMap.Point(106.697331, 26.575015); // 创建点坐标
	map.centerAndZoom(point, 15);
	var marker = new BMap.Marker(point); // 创建标注
	map.addOverlay(marker); // 将标注添加到地图中
	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画 
	var label = new BMap.Label("测试测试测试测试测试测试", {
		offset: new BMap.Size(20, -10)
	}); //创建文字标注
	marker.setLabel(label); //添加文字标注
}
window.onload = loadJScript; //异步加载地图

//视频点击播放
var video = document.getElementById("video");
var n = 0;
$(".videoBtn").click(function() {
	video.play(); // 播放
	$("#video").attr("controls", "controls")
	$(".videoBtn").hide();
});