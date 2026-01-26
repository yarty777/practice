import React from 'react'; 
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'; 
 
const PieChartComponent = ({ data }) =
  const COLORS = ['#4CAF50', '#FFC107', '#F44336', '#9C27B0']; 
 
  return ( 
    <div style={{ width: '100%', height: 400 }}> 
      <ResponsiveContainer width="100%" height="100%"> 
        <PieChart> 
          <Pie data={data} dataKey="value"> 
            {data.map((entry, index) =
              <Cell key={index} fill={COLORS[index % COLORS.length]} /> 
            ))} 
          </Pie> 
          <Tooltip /> 
          <Legend /> 
        </PieChart> 
      </ResponsiveContainer> 
    </div> 
  ); 
}; 
 
export default PieChartComponent; 
