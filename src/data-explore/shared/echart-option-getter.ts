export const pieOption = (dataMap, isDoughnut?: boolean) => {
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
      formatter: (name) => {
        const str = `<span><i>${name}</i><i>${
          dataMap?.get(name).value
        } 份</i></span>`;
        return str;
      },
    },
    series: (() => {
      const data = [...dataMap.values()];
      return data.map((d) => {
        return {
          type: 'pie',
          name: data.length > 1 ? d.name : '',
          radius: isDoughnut ? ['30%', '50%'] : '50%',
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
export const pieDoughnutOption = (dataMap) => pieOption(dataMap, true);

export const pictorialBarOption = (dataMap, series) => {
  return {
    legend: {
      data: [...dataMap.keys()],
    },
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
      data: ['治愈', '未愈'],
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
    series,
    // series: () => {
    //   const r = [];
    //   [...dataMap.keys()].forEach((name) => {
    //     r.push({
    //       name: name,
    //       type: 'pictorialBar',
    //       label: labelSetting,
    //       symbolRepeat: true,
    //       symbolSize: ['6.21', '16'],
    //       data: [
    //         {
    //           value: dataMap.get(name),
    //           symbol: pathSymbols.car
    //         },
    //       ],
    //     });
    //   });
    //   return r;
    // },
  };
};

export const barOption = (data) => {
  return {
    xAxis: {
      type: 'category',
      data: data[0].groupData.map((d) => d.name),
    },
    yAxis: {
      type: 'value',
    },
    series: (() => {
      return data.map((d) => {
        return {
          type: 'bar',
          data: d.groupData.map((d) => d.value),
        };
      });
    })(),
  };
};
