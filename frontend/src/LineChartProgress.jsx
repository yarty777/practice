// LineChartProgress.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './App.css';

const LineChartProgress = () => {
  const groupProgress = [
    { week: 'Тиждень 1', avgGrade: 75, submissions: 42 },
    { week: 'Тиждень 2', avgGrade: 78, submissions: 45 },
    { week: 'Тиждень 3', avgGrade: 82, submissions: 48 },
    { week: 'Тиждень 4', avgGrade: 79, submissions: 44 },
    { week: 'Тиждень 5', avgGrade: 85, submissions: 50 },
    { week: 'Тиждень 6', avgGrade: 88, submissions: 52 },
    { week: 'Тиждень 7', avgGrade: 84, submissions: 47 },
    { week: 'Тиждень 8', avgGrade: 90, submissions: 55 },
  ];

  const otherGroups = [
    { week: 'Тиждень 1', group1: 75, group2: 70, group3: 68 },
    { week: 'Тиждень 2', group1: 78, group2: 74, group3: 72 },
    { week: 'Тиждень 3', group1: 82, group2: 79, group3: 75 },
    { week: 'Тиждень 4', group1: 79, group2: 81, group3: 78 },
    { week: 'Тиждень 5', group1: 85, group2: 83, group3: 80 },
    { week: 'Тиждень 6', group1: 88, group2: 85, group3: 82 },
    { week: 'Тиждень 7', group1: 84, group2: 87, group3: 85 },
    { week: 'Тиждень 8', group1: 90, group2: 88, group3: 87 },
  ];

  return (
    <div className="line-chart-page">
      <div className="container" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        
        <div style={{
          background: 'linear-gradient(135deg, #00b4d8, #0096c7)',
          padding: '20px',
          borderRadius: '10px',
          color: 'white',
          marginBottom: '30px',
          width: '100%'
        }}>
          <h1 style={{ margin: 0 }}>📈 Лінійний графік успішності групи</h1>
          <p style={{ opacity: 0.9, marginTop: '10px' }}>Динаміка середнього балу та активності студентів по тижнях</p>
        </div>

        <div style={{
          background: 'white',
          padding: '15px',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          width: '100%',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <select style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd' }}>
              <option>ІПЗ-21</option>
              <option>КН-21</option>
              <option>ПМ-21</option>
            </select>
            <select style={{ padding: '8px', borderRadius: '5px', border: '1px solid #ddd' }}>
              <option>Останні 8 тижнів</option>
              <option>Останній місяць</option>
              <option>Весь семестр</option>
            </select>
            <button style={{
              padding: '8px 15px',
              background: '#0077b6',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Оновити графік
            </button>
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: '20px',
          width: '100%',
          marginBottom: '30px'
        }}>
          <div style={{
            flex: 2,
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            height: '400px'
          }}>
            <h3 style={{ color: '#023e8a', marginBottom: '15px' }}>Динаміка успішності групи ІПЗ-21</h3>
            <ResponsiveContainer width="100%" height="85%">
              <LineChart
                data={groupProgress}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="week" 
                  tick={{ fill: '#555' }}
                />
                <YAxis 
                  label={{ value: 'Середній бал', angle: -90, position: 'insideLeft' }}
                  tick={{ fill: '#555' }}
                />
                <Tooltip 
                  formatter={(value) => [`${value}`, '']}
                  labelStyle={{ color: '#023e8a' }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="avgGrade" 
                  name="Середній бал" 
                  stroke="#0077b6" 
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 8 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="submissions" 
                  name="Кількість здань" 
                  stroke="#00b4d8" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div style={{
            flex: 1,
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            height: '400px'
          }}>
            <h3 style={{ color: '#023e8a', marginBottom: '15px' }}>Статистика</h3>
            
            <div style={{ marginBottom: '20px' }}>
              <div style={{ color: '#555', fontSize: '0.9rem' }}>Поточний середній бал</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0077b6' }}>90</div>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <div style={{ color: '#555', fontSize: '0.9rem' }}>Прогрес за місяць</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4CAF50' }}>+15%</div>
            </div>
            
            <div style={{ marginBottom: '20px' }}>
              <div style={{ color: '#555', fontSize: '0.9rem' }}>Найкращий тиждень</div>
              <div style={{ fontSize: '1.2rem', color: '#0096c7' }}>Тиждень 8 (90 балів)</div>
            </div>
            
            <div>
              <div style={{ color: '#555', fontSize: '0.9rem' }}>Загальна активність</div>
              <div style={{ fontSize: '1.2rem', color: '#00b4d8' }}>423 здані роботи</div>
            </div>
          </div>
        </div>

        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          width: '100%',
          marginBottom: '30px'
        }}>
          <h3 style={{ color: '#023e8a', marginBottom: '15px' }}>Порівняння груп</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={otherGroups}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="week" tick={{ fill: '#555' }} />
              <YAxis tick={{ fill: '#555' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="group1" name="ІПЗ-21" stroke="#0077b6" strokeWidth={2} />
              <Line type="monotone" dataKey="group2" name="КН-21" stroke="#00b4d8" strokeWidth={2} />
              <Line type="monotone" dataKey="group3" name="ПМ-21" stroke="#0096c7" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={{
          background: 'white',
          padding: '15px',
          borderRadius: '10px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          width: '100%'
        }}>
          <h3 style={{ color: '#023e8a', marginBottom: '15px' }}>Дані за тижнями</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8f9fa' }}>
                <th style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>Тиждень</th>
                <th style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>Середній бал</th>
                <th style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>Кількість здань</th>
                <th style={{ padding: '10px', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>Тенденція</th>
              </tr>
            </thead>
            <tbody>
              {groupProgress.map((week, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '10px' }}>{week.week}</td>
                  <td style={{ padding: '10px', fontWeight: 'bold', color: week.avgGrade >= 85 ? '#4CAF50' : week.avgGrade >= 75 ? '#FFC107' : '#F44336' }}>
                    {week.avgGrade}
                  </td>
                  <td style={{ padding: '10px' }}>{week.submissions}</td>
                  <td style={{ padding: '10px' }}>
                    {index > 0 && week.avgGrade > groupProgress[index - 1].avgGrade ? '↑ Зростання' : 
                     index > 0 && week.avgGrade < groupProgress[index - 1].avgGrade ? '↓ Спад' : '→ Стабільно'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default LineChartProgress;