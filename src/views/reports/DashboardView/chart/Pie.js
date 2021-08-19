import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
// import {
//   useTheme,
// colors
// } from '@material-ui/core';

const PieChart = ({ chartData, labels }) => {
  // const theme = useTheme();

  const [datasets, setDatasets] = useState([]);
  useEffect(() => {
    const temp = [
      {
        data: chartData,
        backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#F7464A'],
        hoverBackgroundColor: [
          '#FF5A5E',
          '#5AD3D1',
          '#FFC870',
          '#A8B3C5',
          '#616774',
          '#FF5A5E'
        ]
      }
    ];
    setDatasets(temp);
  }, [chartData]);

  const options = {
    responsive: true,
  };

  return (
    <Doughnut
      data={{ datasets, labels }}
      options={options}
      height={120}
    />
  );
};

PieChart.propTypes = {
  chartData: PropTypes.array,
  labels: PropTypes.array
};

PieChart.defaultProps = {
  chartData: []
};

export default PieChart;
