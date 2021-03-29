import React from 'react'
import { Bar } from 'react-chartjs-2';

const Graph = () => {
  /** グラフデータ */
  // 参考: https://qiita.com/eiji-noguchi/items/3ab0af5058fb47dc0caa
  const graphData = {
    labels: [
      '1/1','1/2','1/3','1/4','1/5','1/6','1/7'
    ],
    datasets: [
      {
        type: 'line',
        yAxisID: 'y-axis-precipitation',
        data: [120, 120, 120, 120, 120, 100, 100],
        backgroundColor:  'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        label: '目標の学習量',
      },
      {
        // type: 'bar',
        yAxisID: 'y-axis-precipitation',
        data: [30, 60, 90, 60, 0, 120, 80],
        backgroundColor: 'rgb(54, 162, 235)',
        label: '学習量(JavaScript)',
      },
      {
        // type: 'bar',
        yAxisID: 'y-axis-precipitation',
        data: [20, 30, 10, 0, 0, 40, 30],
        backgroundColor: 'rgb(75, 192, 192)',
        label: '学習量(SQL)',
      }
    ]
  };

  /** グラフオプション */
  const graphOption = {
    scales: {
      xAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
          scaleLabel: {
            display: true,
            labelString: '今週',
          },
        },
      ],
      yAxes: [
        {
          id: 'y-axis-precipitation',
          stacked: true,
          position: 'right',
          scaleLabel: {
            display: true,
            labelString: '学習量(分)',
          }
        }
      ],
    },
  };

  return (
    <Bar data={graphData} options={graphOption} />
  );
}

export default Graph;