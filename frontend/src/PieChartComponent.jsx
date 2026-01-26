import React from 'react'; 
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts'; 
 
const PieChartComponent = ({ data }) =
  const COLORS = ['#4CAF50', '#FFC107', '#F44336', '#9C27B0']; 
 
  return ( 
    <div style={{ width: '100%', height: 400 }}> 
      <h3 style={{ textAlign: 'center', color: 'var(--deep-twilight)', marginBottom: '20px' }}> 
        Статуси лабораторних роб?т 
      </h3> 
      <ResponsiveContainer width="100%" height="100%"> 
        <PieChart> 
          <Pie 
            data={data} 
            cx="50%" 
            cy="50%" 
            labelLine={true} 
            label={(entry) = $"{entry.value}"`} 
            outerRadius={120} 
            fill="#8884d8" 
            dataKey="value" 
          > 
            {data.map((entry, index) =
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} /> 
            ))} 
          </Pie> 
          <Tooltip formatter={(value) = лаб`, 'К?льк?сть']} /> 
          <Legend /> 
        </PieChart> 
      </ResponsiveContainer> 
    </div> 
  ); 
}; 
 
export default PieChartComponent; 
