import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
// import {
//   useTheme,
//   colors
// } from '@material-ui/core';

const colors = [
  {
    backgroundColor: 'rgba(225, 204,230, .3)',
    borderColor: 'rgb(205, 130, 158)',
    pointBorderColor: 'rgb(205, 130,1 58)',
    pointBackgroundColor: 'rgb(255, 255, 255)',
    pointHoverBackgroundColor: 'rgb(0, 0, 0)',
    pointHoverBorderColor: 'rgba(220, 220, 220,1)',
  },
  {
    backgroundColor: 'rgba(184, 185, 210, .3)',
    borderColor: 'rgb(35, 26, 136)',
    pointBorderColor: 'rgb(35, 26, 136)',
    pointBackgroundColor: 'rgb(255, 255, 255)',
    pointHoverBackgroundColor: 'rgb(0, 0, 0)',
    pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
  }
];
const LineChart = ({ chartData, labels }) => {
  // const theme = useTheme();

  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    if (chartData.length > 0) {
      const temp = chartData.map((col, ind) => ({
        label: col.label,
        fill: true,
        lineTension: 0.3,
        backgroundColor: colors[ind].backgroundColor,
        borderColor: colors[ind].borderColor,
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: colors[ind].pointBorderColor,
        pointBackgroundColor: colors[ind].pointBackgroundColor,
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: colors[ind].pointHoverBackgroundColor,
        pointHoverBorderColor: colors[ind].pointHoverBorderColor,
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: col.data
      }));
      setDatasets(temp);
    }
  }, [chartData]);

  const options = {
    responsive: true,
  };

  return (
    <Line
      data={{ datasets, labels }}
      options={options}
      height={120}
    />
  );
};

LineChart.propTypes = {
  chartData: PropTypes.array,
  labels: PropTypes.array
};

LineChart.defaultProps = {
  chartData: []
};

export default LineChart;
