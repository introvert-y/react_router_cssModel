import React, {
  useEffect, useRef,
} from 'react';
import echarts from '../../echarts';


const provinceNameMap = {
  // 北京市: '北京',
  // 天津市: '天津',
  内蒙古自治区: '内蒙古',
  // 上海市: '上海',
  广西壮族自治区: '广西',
  // 重庆市: '重庆',
  西藏自治区: '西藏',
  宁夏回族自治区: '宁夏',
  新疆维吾尔自治区: '新疆',
  香港特别行政区: '香港',
  澳门特别行政区: '澳门',
};

function replaceProvinceName(key) {
  const val = provinceNameMap[key];
  return val || key;
}

function randomData() {  
  return Math.round(Math.random()*500);  
} 

function initChart(inst, opt = {}) {
  if (!inst) {
    return;
  }
  const mydata = [  
    {name: '北京',value: '100' },{name: '天津',value: randomData() },  
    {name: '上海',value: randomData() },{name: '重庆',value: randomData() },  
    {name: '河北',value: randomData() },{name: '河南',value: randomData() },  
    {name: '云南',value: randomData() },{name: '辽宁',value: randomData() },  
    {name: '黑龙江',value: randomData() },{name: '湖南',value: randomData() },  
    {name: '安徽',value: randomData() },{name: '山东',value: randomData() },  
    {name: '新疆',value: randomData() },{name: '江苏',value: randomData() },  
    {name: '浙江',value: randomData() },{name: '江西',value: randomData() },  
    {name: '湖北',value: randomData() },{name: '广西壮族自治区',value: randomData() },  
    {name: '甘肃',value: randomData() },{name: '山西',value: randomData() },  
    {name: '内蒙古自治区',value: randomData() },{name: '陕西',value: randomData() },  
    {name: '吉林',value: randomData() },{name: '福建',value: randomData() },  
    {name: '贵州',value: randomData() },{name: '广东',value: randomData() },  
    {name: '青海',value: randomData() },{name: '西藏',value: randomData() },  
    {name: '四川',value: randomData() },{name: '宁夏',value: randomData() },  
    {name: '海南',value: randomData() },
    {name: '台湾',value: randomData() },  
    {name: '香港',value: randomData() },{name: '澳门',value: randomData() },
    // {name: '南海诸岛',value: randomData() } 
  ];
  const optionMap = {  
    backgroundColor: '#FFFFFF',  
    title: {  
        text: '全国地图大数据',  
        subtext: '',  
        x:'center'  
    },  
    tooltip : {  
        trigger: 'item'  
    },  
    
    //左侧小导航图标
    visualMap: {  
        show : true,  
        x: 'left',  
        y: 'center',  
        splitList: [   
            {start: 500, end:600},{start: 400, end: 500},  
            {start: 300, end: 400},{start: 200, end: 300},  
            {start: 100, end: 200},{start: 0, end: 100},  
        ],  
        color: ['#5475f5', '#9feaa5', '#85daef','#74e2ca', '#e6ac53', '#9fb5ea']  
    },  
    
    //配置属性
    series: [{  
        name: '数据',  
        type: 'map',  
        mapType: 'china',   
        roam: true,  
        label: {  
          position: 'inside',
          emphasis: {  
              show: false  
          }  
        },
        data: mydata.map(item => ({
          name: replaceProvinceName(item.name),
          value: item.value,
          label: {
            show: true,
          },
        })),  //数据
    }]  
};  

//使用制定的配置项和数据显示图表
inst.setOption(optionMap, opt);
}

function DataChart() {
  const myChart = useRef(null);
  useEffect(() => {
    myChart.current = echarts.init(myChart.current);
    initChart(myChart.current, {
      notMerge: true,
    });
    return () => {
      // console.log('销毁时');
      myChart.current.dispose();
    };
  }, []);
  // const chartDOMRef = useCallback((el) => {
  //   if (el) {
  //     if (!myChart.current) {
  //       myChart.current = echarts.init(el);
  //     }
  //     initChart(myChart.current, {
  //       notMerge: true,
  //     });
  //   } else {
  //     if (!myChart.current) {
  //       return;
  //     }
  //     myChart.current.dispose();
  //   }
  // }, []);

  return (
    <>
      <div ref={myChart} style={{ height: 300, backgroundColor: '#dedede' }} />
    </>
  );
}


export default DataChart;
