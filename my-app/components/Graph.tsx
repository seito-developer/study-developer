import React from 'react'
import { Bar } from 'react-chartjs-2'

// data={args} options={graphOption}
// const Task:React.FC = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  
const Graph: React.FC = ({ graphData, graphOption }) => {
  return (
    <Bar data={graphData} options={graphOption} />
  );
}

export default Graph