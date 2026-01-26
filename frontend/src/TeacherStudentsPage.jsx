import React from 'react'; 
import './App.css'; 
import PieChartComponent from './PieChartComponent'; 
 
const TeacherStudentsPage = () =
  const students = [ 
    {id: 1, name: 'Student 1', group: 'IPZ-21', avgGrade: 95, labsCompleted: 8, totalLabs: 10}, 
  ]; 
 
  const labStatusData = [ 
    {name: 'Complete', value: 25}, 
    {name: 'In Progress', value: 8}, 
    {name: 'Not Started', value: 12}, 
  ]; 
 
  return ( 
    <div> 
      <h1>Students List</h1> 
      <PieChartComponent data={labStatusData} /> 
    </div> 
  ); 
}; 
 
export default TeacherStudentsPage; 
