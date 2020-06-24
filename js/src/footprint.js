// build time:Wed Jun 24 2020 13:58:47 GMT+0800 (中国标准时间)
var myChart=echarts.init(document.getElementById("myMap"));var data=[{name:"南阳",value:["南阳","∞"]},{name:"郑州",value:["郑州","∞"]},{name:"新郑",value:["新郑","∞"]},{name:"登封",value:["登封","∞"]},{name:"天津",value:["天津","∞"]},{name:"北京",value:["北京","∞"]},{name:"呼伦贝尔",value:["呼伦贝尔","∞"]},{name:"满洲里",value:["满洲里","∞"]},{name:"青岛",value:["青岛","∞"]},{name:"济南",value:["济南","∞"]},{name:"泰山",value:["泰山","∞"]},{name:"长岛",value:["长岛","∞"]},{name:"呼和浩特",value:["呼和浩特","∞"]},{name:"鄂尔多斯",value:["鄂尔多斯","∞"]},{name:"镇北台",value:["镇北台","∞"]},{name:"靖边",value:["靖边","∞"]},{name:"波浪谷",value:["波浪谷","∞"]},{name:"壶口瀑布",value:["壶口瀑布","∞"]},{name:"平遥",value:["平遥","∞"]},{name:"南通",value:["南通","∞"]},{name:"苏州",value:["苏州","∞"]},{name:"绍兴",value:["绍兴","∞"]},{name:"杭州",value:["杭州","∞"]},{name:"上海",value:["上海","∞"]},{name:"周庄",value:["周庄","∞"]},{name:"襄阳",value:["襄阳","∞"]},{name:"五台山",value:["五台山","∞"]},{name:"大同",value:["大同","∞"]},{name:"承德",value:["承德","∞"]},{name:"西安",value:["西安","∞"]},{name:"西宁",value:["西宁","∞"]},{name:"青海湖",value:["青海湖","∞"]},{name:"茶卡盐湖",value:["茶卡盐湖","∞"]},{name:"德令哈",value:["德令哈","∞"]},{name:"水上雅丹",value:["水上雅丹","∞"]},{name:"大柴旦",value:["大柴旦","∞"]},{name:"阳关",value:["阳关","∞"]},{name:"敦煌",value:["敦煌","∞"]},{name:"瓜洲",value:["瓜洲","∞"]},{name:"嘉峪关",value:["嘉峪关","∞"]},{name:"张掖",value:["张掖","∞"]},{name:"赤峰",value:["赤峰","∞"]},{name:"锡林郭勒盟",value:["锡林郭勒盟","∞"]},{name:"厦门",value:["厦门","∞"]},{name:"深圳",value:["深圳","∞"]}];var geoCoordMap={"南阳":[112.52851,32.99073],"郑州":[113.62493,34.74725],"新郑":[113.74161,34.39605],"登封":[113.054163,34.445414],"天津":[117.19937,39.0851],"北京":[116.40717,39.90469],"呼伦贝尔":[119.76584,49.21163],"满洲里":[117.37836,49.59655],"青岛":[120.38299,36.06623],"济南":[116.75199,36.55358],"泰山":[117.102039,36.267349],"长岛":[120.74276,37.94447],"呼和浩特":[111.75199,40.84149],"鄂尔多斯":[109.78087,39.60845],"镇北台":[109.73458,38.2852],"波浪谷":[108.59,37.3],"壶口瀑布":[110.448971,36.145522],"平遥":[112.17557,37.18934],"南通":[120.89371,31.97958],"苏州":[120.58319,31.29834],"绍兴":[120.5802,30.03033],"杭州":[120.15515,30.27415],"上海":[121.4737,31.23037],"周庄":[120.851839,31.113594],"襄阳":[112.12255,32.009],"五台山":[113.59072,38.96862],"大同":[113.30001,40.07637],"承德":[117.9634,40.9515],"西安":[108.93984,34.34127],"西宁":[101.77782,36.61729],"青海湖":[99.604483,36.916366],"茶卡盐湖":[99.14847,36.66049],"德令哈":[97.36087,37.36947],"水上雅丹":[93.57406,37.66338],"大柴旦":[91.34383,37.63673],"阳关":[94.056526,39.935392],"敦煌":[94.810349,40.045543],"瓜洲":[95.77829,40.51736],"嘉峪关":[98.21542,39.80211],"张掖":[100.44981,38.92592],"赤峰":[118.88894,42.2586],"锡林郭勒盟":[116.04775,43.9332],"厦门":[118.08948,24.47951],"深圳":[114.05956,22.54286]};var convertData=function(e){var a=[];for(var n=0;n<e.length;n++){var m=geoCoordMap[e[n].name];if(m){a.push({name:e[n].name,value:m.concat(e[n].value)})}}return a};option={title:{},tooltip:{trigger:"item",padding:10,backgroundColor:"#222",borderColor:"#777",borderWidth:1,formatter:function(e){name=e.name;time=e.value[2];describe=e.value[3];return'<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 15px;padding-bottom: 7px;margin-bottom: 7px">'+name+"</div>"+time+"<br>"+describe}},geo:{map:"china",label:{emphasis:{show:false}},roam:true,zoom:2,itemStyle:{normal:{areaColor:"#e6e6e6",borderColor:"#111"},emphasis:{areaColor:"#cccccc"}}},series:[{name:"足迹",type:"effectScatter",coordinateSystem:"geo",data:convertData(data),symbolSize:5,showEffectOn:"emphasis",rippleEffect:{brushType:"stroke"},hoverAnimation:true,label:{normal:{formatter:"{b}",position:"right",show:true,fontSize:8}},itemStyle:{normal:{color:"#4d4d4d",shadowBlur:10,shadowColor:"#333"}},zlevel:1}]};myChart.setOption(option);
//rebuild by neat 