import React, {
  useRef, useEffect,
} from 'react';
import echarts from '../../echarts';

function percent(n, toFixed) {
  const fixed = toFixed || 0;
  if (!n) {
    return 0;
  }
  const p = n * 100;
  return p.toFixed(fixed) - 0;
}

function initChart(inst, opt = {}) {
  if (!inst) {
    return;
  }
  const barLimit = 10;
  const list = [
    {"id":"0b2f954dd73e11e882c6246e96766f00","projectId":null,"projectName":null,"groupName":"刘骞的班组","groupId":null,"workerId":null,"workerName":null,"workerImage":null,"workers":0,"attendances":12,"absent":0,"lates":0,"exception":0,"regular":11,"lateEarlyCounts":1,"present":16},
    {"id":"afa94465633311e9ba1c6c92bf628924","projectId":null,"projectName":null,"groupName":"未激活测试","groupId":null,"workerId":null,"workerName":null,"workerImage":null,"workers":0,"attendances":0,"absent":0,"lates":0,"exception":0,"regular":0,"lateEarlyCounts":0,"present":0},
    {"id":"5bfb1a6875ae11e9ba1c6c92bf628924","projectId":null,"projectName":null,"groupName":"老五六","groupId":null,"workerId":null,"workerName":null,"workerImage":null,"workers":0,"attendances":0,"absent":0,"lates":0,"exception":0,"regular":0,"lateEarlyCounts":0,"present":4},
    {"id":"7ea9baaf8d8511e984726c92bf621f6e","projectId":null,"projectName":null,"groupName":"才哥班组","groupId":null,"workerId":null,"workerName":null,"workerImage":null,"workers":0,"attendances":0,"absent":0,"lates":0,"exception":0,"regular":0,"lateEarlyCounts":0,"present":0},
    {"id":"4398cae28d8411e984726c92bf621f6e","projectId":null,"projectName":null,"groupName":"楚莹班组","groupId":null,"workerId":null,"workerName":null,"workerImage":null,"workers":0,"attendances":0,"absent":0,"lates":0,"exception":0,"regular":0,"lateEarlyCounts":0,"present":1},
    {"id":"be62cc2086a611e984726c92bf621f6e","projectId":null,"projectName":null,"groupName":"测试","groupId":null,"workerId":null,"workerName":null,"workerImage":null,"workers":0,"attendances":0,"absent":0,"lates":0,"exception":0,"regular":0,"lateEarlyCounts":0,"present":1},
    {"id":"7c39c027adb911e984726c92bf621f6e","projectId":null,"projectName":null,"groupName":"测试1","groupId":null,"workerId":null,"workerName":null,"workerImage":null,"workers":0,"attendances":0,"absent":0,"lates":0,"exception":0,"regular":0,"lateEarlyCounts":0,"present":0}
  ]
  const option = {
    legend: {
      data: [
        {
          name: '正常',
          icon: 'roundRect',
        },
        {
          name: '迟到早退',
          icon: 'roundRect',
        },
      ],
      itemWidth: 16,
      itemHeight: 8,
      itemGap: 81,
      textStyle: {
        color: 'rgba(255, 255, 255, 0.6)',
      },
      bottom: 0,
    },
    textStyle: {
      color: '#fff',
    },
    grid: {
      left: '3%',
      right: 100,
      bottom: '13%',
      top: 0,
      containLabel: true,
    },
    dataZoom: [
      {
        type: 'slider',
        show: false,
        yAxisIndex: [0],
        filterMode: 'filter',
        zoomLock: true,
        startValue: 0,
        endValue: barLimit - 1,
        right: 0,
        textStyle: {
          color: '#fff',
        },
        handleIcon: 'none',
        labelFormatter: '',
        width: 10,
        fillerColor: '#354f77',
        borderColor: 'rgba(0, 0, 0, 0)',
      },
    ],
    xAxis: {
      type: 'value',
      show: false,
      max: 100,
      splitLine: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    yAxis: {
      type: 'category',
      data: list.map(p => (p.groupName.length > 7 ? `${p.groupName.substr(0, 7)}…` : p.groupName)),
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      inverse: true,
      max: barLimit - 1,
    },
    barWidth: 7,
    series: [
      {
        type: 'bar',
        data: list.map(() => 100),
        color: 'rgba(255, 255, 255, .2)',
        barGap: '-100%',
        label: {
          show: true,
          position: 'right',
          formatter(params) {
            const {
              attendances, present,
            } = list[params.dataIndex];
            return `${(attendances > present) ? 100 : percent(attendances / (present || 1))}% ${attendances}人`;
          },
          align: 'right',
          distance: 100,
          padding: [0, 20, 0, 0],
        },
      },
      {
        name: '正常',
        type: 'bar',
        stack: true,
        data: list.map((p) => {
          const { regular, attendances, present } = p;
          return (attendances > present)
            ? (regular / attendances * 100)
            : (regular / (present || 1) * 100);
        }),
        color: '#007df9',
      },
      {
        name: '迟到早退',
        type: 'bar',
        stack: true,
        data: list.map((p) => {
          const { lateEarlyCounts, attendances, present } = p;
          return (attendances > present)
            ? (lateEarlyCounts / attendances * 100)
            : (lateEarlyCounts / (present || 1) * 100);
        }),
        color: '#fdd966',
      },
    ],
  }
  inst.setOption(option, opt);
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
  return (
    <>
      <div style={{ marginLeft: 50 }}>series数组里的对象可以有formatter</div>
      <div ref={myChart} style={{ height: 300, backgroundColor: 'lightpink' }} />
    </>
  );
}


export default DataChart;
