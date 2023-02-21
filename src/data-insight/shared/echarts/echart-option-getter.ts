import { labelSetting, pathSymbols } from './symbols';

export const pieOption = (data, isDoughnut?: boolean) => {
  return {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      top: 'bottom',
      itemGap: 10,
      padding: 2,
      textStyle: {
        color: '#4D4D4D',
        fontSize: 12,
        fontFamily: 'Source Han Sans CN',
        fontStyle: 'normal',
        fontWeight: 400,
      },
      // formatter: (name) => {
      //   const str = `<span><i>${name}</i><i>${
      //     dataMap?.get(name).value
      //   } 份</i></span>`;
      //   return str;
      // },
    },
    series: (() => {
      return data.map((d) => {
        return {
          type: 'pie',
          name: data.length > 1 ? d.name : '',
          radius: isDoughnut ? ['50%', '80%'] : '80%',
          data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        };
      });
    })(),
  };
};
export const pieDoughnutOption = (data) => pieOption(data, true);

export const pictorialBarOption = (data) => {
  return {
    // legend: {
    //   data: [...dataMap.keys()],
    // },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      containLabel: true,
      left: 0,
      right: 80,
    },
    yAxis: {
      data: data.map((d) => d.name),
      inverse: true,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        margin: 14,
        fontSize: 14,
      },
      axisPointer: {
        label: {
          show: true,
          margin: 30,
        },
      },
    },
    xAxis: {
      splitLine: { show: false },
      axisLabel: { show: false },
      axisTick: { show: false },
      axisLine: { show: false },
    },
    series: (() => {
      return [
        {
          name: name,
          type: 'pictorialBar',
          label: labelSetting,
          symbolRepeat: true,
          symbolSize: ['6.21', '16'],
          data: data.map((d) => ({ value: d.value, symbol: pathSymbols.car })),
        },
      ];
    })(),
  };
};

export const barOption = (data) => {
  return {
    xAxis: {
      type: 'category',
      data: data.map((d) => d.name),
    },
    yAxis: {
      type: 'value',
    },
    series: (() => {
      return {
        type: 'bar',
        data: data.map((d) => d.value),
      };
    })(),
  };
};
