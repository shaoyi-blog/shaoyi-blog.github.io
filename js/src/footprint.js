var myChart = echarts.init(document.getElementById('myMap'));



var data = [
{name: '南阳', value: ['南阳', '∞']},
{name: '郑州', value: ['郑州', '∞']},
{name: '新郑', value: ['新郑', '∞']},
{name: '登封', value: ['登封', '∞']},
{name: '天津', value: ['天津', '∞']},
{name: '北京', value: ['北京', '∞']},
{name: '呼伦贝尔', value: ['呼伦贝尔', '∞']},
{name: '满洲里', value: ['满洲里', '∞']},
{name: '青岛', value: ['青岛', '∞']},
{name: '济南', value: ['济南', '∞']},
{name: '泰山', value: ['泰山', '∞']},
{name: '长岛', value: ['长岛', '∞']},
{name: '呼和浩特', value: ['呼和浩特', '∞']},
{name: '鄂尔多斯', value: ['鄂尔多斯', '∞']},
{name: '镇北台', value: ['镇北台', '∞']},
{name: '靖边', value: ['靖边', '∞']},
{name: '波浪谷', value: ['波浪谷', '∞']},
{name: '壶口瀑布', value: ['壶口瀑布', '∞']},
{name: '平遥', value: ['平遥', '∞']},
{name: '南通', value: ['南通', '∞']},
{name: '苏州', value: ['苏州', '∞']},
{name: '绍兴', value: ['绍兴', '∞']},
{name: '杭州', value: ['杭州', '∞']},
{name: '上海', value: ['上海', '∞']},
{name: '周庄', value: ['周庄', '∞']},
{name: '襄阳', value: ['襄阳', '∞']},
{name: '五台山', value: ['五台山', '∞']},
{name: '大同', value: ['大同', '∞']},
{name: '承德', value: ['承德', '∞']},
{name: '西安', value: ['西安', '∞']},
{name: '西宁', value: ['西宁', '∞']},
{name: '青海湖', value: ['青海湖', '∞']},
{name: '茶卡盐湖', value: ['茶卡盐湖', '∞']},
{name: '德令哈', value: ['德令哈', '∞']},
{name: '水上雅丹', value: ['水上雅丹', '∞']},
{name: '大柴旦', value: ['大柴旦', '∞']},
{name: '阳关', value: ['阳关', '∞']},
{name: '敦煌', value: ['敦煌', '∞']},
{name: '瓜洲', value: ['瓜洲', '∞']},
{name: '嘉峪关', value: ['嘉峪关', '∞']},
{name: '张掖', value: ['张掖', '∞']},
{name: '赤峰', value: ['赤峰', '∞']},
{name: '锡林郭勒盟', value: ['锡林郭勒盟', '∞']},
{name: '厦门', value: ['厦门', '∞']},
{name: '深圳', value: ['深圳', '∞']},

];
var geoCoordMap = {
'南阳':[112.5285100000,32.9907300000],
'郑州':[113.6249300000,34.7472500000],
'新郑':[113.7416100000,34.3960500000],
'登封':[113.0541630000,34.4454140000],
'天津':[117.1993700000, 39.0851000000],
'北京':[116.4071700000,39.9046900000],
'呼伦贝尔':[119.7658400000,49.2116300000],
'满洲里':[117.3783600000,49.5965500000],
'青岛':[120.3829900000,36.0662300000],
'济南':[116.7519900000, 36.5535800000],
'泰山':[117.1020390000,36.2673490000],
'长岛':[120.7427600000,37.9444700000],
'呼和浩特':[111.7519900000,40.8414900000],
'鄂尔多斯':[109.7808700000,39.6084500000,],
'镇北台':[109.7345800000,38.2852000000],
'波浪谷':[ 108.59,37.3],
'壶口瀑布':[110.4489710000,36.1455220000],
'平遥':[112.1755700000, 37.1893400000],
'南通':[120.8937100000, 31.9795800000],
'苏州':[120.5831900000, 31.2983400000],
'绍兴':[120.5802000000, 30.0303300000],
'杭州':[120.1551500000, 30.2741500000],
'上海':[121.4737000000, 31.2303700000],
'周庄':[120.8518390000,31.1135940000],
'襄阳':[112.1225500000,32.0090000000],
'五台山':[113.5907200000,38.9686200000],
'大同':[113.3000100000, 40.0763700000],
'承德':[117.9634000000, 40.9515000000],
'西安':[108.9398400000,34.3412700000],
'西宁':[101.7778200000, 36.6172900000],
'青海湖':[99.6044830000,36.9163660000],
'茶卡盐湖':[99.1484700000,36.6604900000],
'德令哈':[97.3608700000,37.3694700000],
'水上雅丹':[93.5740600000,37.6633800000],
'大柴旦':[91.3438300000,37.6367300000],
'阳关':[94.0565260000,39.9353920000],
'敦煌':[94.8103490000,40.0455430000],
'瓜洲':[95.7782900000,40.5173600000],
'嘉峪关':[98.2154200000,39.8021100000],
'张掖':[100.4498100000,38.9259200000],
'赤峰': [118.8889400000,42.2586000000],
'锡林郭勒盟': [116.0477500000,43.9332000000],
'厦门' : [118.0894800000,24.4795100000],
'深圳': [114.0595600000,22.5428600000],
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
            //console.log(res)
        }
    }
    return res;
};

option = {
    // backgroundColor: '#404a59',
    title: {
    },
    tooltip: {
        trigger: 'item',
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (params) {
            name = params.name
            time = params.value[2]
            describe = params.value[3]
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 15px;padding-bottom: 7px;margin-bottom: 7px">'
                + name
                + '</div>'
                + time
                + '<br>'
                + describe;
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: true,
        zoom:1.5,
        itemStyle: {
            normal: {
                areaColor: '#e6e6e6',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#cccccc'
            }
        }
    },
    series : [
        {
            name: '足迹',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            symbolSize:5,
            showEffectOn: 'emphasis',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true,
                    fontSize:8
                }
            },
            itemStyle: {
                normal: {
                    color: '#4d4d4d',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};

myChart.setOption(option);