// BarChartGrades.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import './App.css';

const BarChartGrades = () => {
  // Дані для стовпчикової діаграми
  const data = [
    { subject: 'Програмування', avgGrade: 87, students: 45, color: '#8884d8' },
    { subject: 'Бази даних', avgGrade: 76, students: 42, color: '#82ca9d' },
    { subject: 'Веб-технології', avgGrade: 82, students: 40, color: '#ffc658' },
    { subject: 'Математика', avgGrade: 68, students: 38, color: '#ff8042' },
    { subject: 'Фізика', avgGrade: 72, students: 35, color: '#0088fe' },
    { subject: 'Іноземна мова', avgGrade: 91, students: 48, color: '#00c49f' },
    { subject: 'Економіка', avgGrade: 79, students: 39, color: '#ffbb28' },
  ];

  // Додаткові дані для групування
  const groupData = [
    { group: 'ІПЗ-21', avgGrade: 85, completed: 92 },
    { group: 'КН-21', avgGrade: 78, completed: 85 },
    { group: 'ПМ-21', avgGrade: 81, completed: 88 },
    { group: 'ФІ-21', avgGrade: 74, completed: 79 },
    { group: 'ЕК-21', avgGrade: 89, completed: 94 },
  ];

  return (
    <div className="bar-chart-page">
      <div className="container" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        <h1 style={{ color: 'var(--deep-twilight)' }}>Стовпчикова діаграма середніх балів</h1>
        
        {/* Фільтри */}
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          width: '100%',
          marginBottom: '30px'
        }}>
          <h3 style={{ color: 'var(--french-blue)', marginBottom: '15px' }}>Налаштування діаграми</h3>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <select style={{ padding: '10px', borderRadius: '5px', border: '1px solid var(--frosted-blue)' }}>
              <option>Усі предмети</option>
              <option>Технічні предмети</option>
              <option>Гуманітарні предмети</option>
            </select>
            <select style={{ padding: '10px', borderRadius: '5px', border: '1px solid var(--frosted-blue)' }}>
              <option>Середній бал</option>
              <option>Кількість студентів</option>
              <option>Відсоток успішності</option>
            </select>
            <select style={{ padding: '10px', borderRadius: '5px', border: '1px solid var(--frosted-blue)' }}>
              <option>Сортування за зростанням</option>
              <option>Сортування за спаданням</option>
              <option>За назвою предмету</option>
            </select>
            <button style={{
              padding: '10px 20px',
              background: 'var(--bright-teal-blue)',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>
              Оновити діаграму
            </button>
          </div>
        </div>

        {/* Основна діаграма */}
        <div style={{
          display: 'flex',
          gap: '30px',
          width: '100%',
          marginBottom: '40px'
        }}>
          <div style={{
            flex: 2,
            background: 'white',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            height: '450px'
          }}>
            <h3 style={{ color: 'var(--french-blue)', marginBottom: '20px' }}>Середні бали по предметам</h3>
            <ResponsiveContainer width="100%" height="90%">
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis 
                  dataKey="subject" 
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  tick={{ fill: 'var(--deep-twilight)' }}
                />
                <YAxis 
                  label={{ 
                    value: 'Середній бал', 
                    angle: -90, 
                    position: 'insideLeft',
                    offset: -10,
                    style: { fill: 'var(--french-blue)' }
                  }}
                  tick={{ fill: 'var(--french-blue)' }}
                />
                <Tooltip 
                  formatter={(value) => [`${value} балів`, 'Середній бал']}
                  labelStyle={{ color: 'var(--deep-twilight)' }}
                  contentStyle={{ 
                    borderRadius: '8px',
                    border: '1px solid var(--frosted-blue)'
                  }}
                />
                <Legend />
                <Bar 
                  dataKey="avgGrade" 
                  name="Середній бал"
                  radius={[5, 5, 0, 0]}
                >
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.avgGrade >= 85 ? '#4CAF50' : 
                            entry.avgGrade >= 75 ? '#FFC107' : 
                            entry.avgGrade >= 65 ? '#FF9800' : '#F44336'} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div style={{ textAlign: 'center', marginTop: '10px', color: 'var(--french-blue)' }}>
              <p>Найвищий бал: <strong>Іноземна мова (91)</strong> | Найнижчий бал: <strong>Математика (68)</strong></p>
            </div>
          </div>

          {/* Додаткова інформація */}
          <div style={{
            flex: 1,
            background: 'white',
            padding: '25px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            height: '450px'
          }}>
            <h3 style={{ color: 'var(--french-blue)', marginBottom: '20px' }}>Статистика</h3>
            <div style={{ marginBottom: '25px' }}>
              <h4 style={{ color: 'var(--bright-teal-blue)' }}>Загальна статистика</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <div>
                  <div style={{ fontSize: '2rem', color: 'var(--deep-twilight)', fontWeight: 'bold' }}>
                    {Math.round(data.reduce((sum, item) => sum + item.avgGrade, 0) / data.length)}
                  </div>
                  <div style={{ color: 'var(--french-blue)' }}>Середній бал</div>
                </div>
                <div>
                  <div style={{ fontSize: '2rem', color: 'var(--turquoise-surf)', fontWeight: 'bold' }}>
                    {data.reduce((sum, item) => sum + item.students, 0)}
                  </div>
                  <div style={{ color: 'var(--french-blue)' }}>Всього студентів</div>
                </div>
              </div>
            </div>

            <div>
              <h4 style={{ color: 'var(--bright-teal-blue)' }}>Топ-3 предмети</h4>
              {[...data]
                .sort((a, b) => b.avgGrade - a.avgGrade)
                .slice(0, 3)
                .map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '10px',
                    marginBottom: '8px',
                    background: 'var(--light-cyan)',
                    borderRadius: '5px'
                  }}>
                    <div>
                      <div style={{ fontWeight: 'bold', color: 'var(--deep-twilight)' }}>{item.subject}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--french-blue)' }}>{item.students} студентів</div>
                    </div>
                    <div style={{
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      color: item.avgGrade >= 85 ? '#4CAF50' : 
                             item.avgGrade >= 75 ? '#FFC107' : '#FF9800'
                    }}>
                      {item.avgGrade}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Друга діаграма - по групах */}
        <div style={{
          background: 'white',
          padding: '25px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          width: '100%',
          marginBottom: '40px'
        }}>
          <h3 style={{ color: 'var(--french-blue)', marginBottom: '20px' }}>Середні бали по групах</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={groupData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis 
                dataKey="group" 
                tick={{ fill: 'var(--deep-twilight)' }}
              />
              <YAxis 
                tick={{ fill: 'var(--french-blue)' }}
              />
              <Tooltip 
                formatter={(value, name) => {
                  if (name === 'avgGrade') return [`${value} балів`, 'Середній бал'];
                  if (name === 'completed') return [`${value}%`, 'Відсоток успішності'];
                  return [value, name];
                }}
              />
              <Legend />
              <Bar 
                dataKey="avgGrade" 
                name="Середній бал" 
                fill="#8884d8"
                radius={[5, 5, 0, 0]}
              />
              <Bar 
                dataKey="completed" 
                name="Відсоток успішності" 
                fill="#82ca9d"
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Таблиця з детальною інформацією */}
        <div style={{
          background: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          width: '100%'
        }}>
          <h3 style={{ color: 'var(--french-blue)', marginBottom: '15px' }}>Детальні дані</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--frosted-blue-2)' }}>
                <th style={{ padding: '12px', textAlign: 'left' }}>Предмет</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Середній бал</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Кількість студентів</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Статус</th>
                <th style={{ padding: '12px', textAlign: 'left' }}>Прогрес</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid var(--frosted-blue)' }}>
                  <td style={{ padding: '12px', fontWeight: 'bold' }}>{item.subject}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{
                      color: item.avgGrade >= 85 ? '#4CAF50' : 
                             item.avgGrade >= 75 ? '#FFC107' : 
                             item.avgGrade >= 65 ? '#FF9800' : '#F44336',
                      fontWeight: 'bold'
                    }}>
                      {item.avgGrade}
                    </span>
                  </td>
                  <td style={{ padding: '12px' }}>{item.students}</td>
                  <td style={{ padding: '12px' }}>
                    <span style={{
                      padding: '4px 8px',
                      borderRadius: '12px',
                      background: item.avgGrade >= 80 ? '#d4edda' : 
                                 item.avgGrade >= 70 ? '#fff3cd' : '#f8d7da',
                      color: item.avgGrade >= 80 ? '#155724' : 
                            item.avgGrade >= 70 ? '#856404' : '#721c24',
                      fontSize: '0.85rem'
                    }}>
                      {item.avgGrade >= 80 ? 'Високий' : 
                       item.avgGrade >= 70 ? 'Середній' : 'Низький'}
                    </span>
                  </td>
                  <td style={{ padding: '12px', width: '150px' }}>
                    <div style={{
                      background: 'var(--frosted-blue)',
                      height: '8px',
                      borderRadius: '4px',
                      width: '100%'
                    }}>
                      <div style={{
                        background: item.avgGrade >= 85 ? '#4CAF50' : 
                                   item.avgGrade >= 75 ? '#FFC107' : '#FF9800',
                        height: '100%',
                        borderRadius: '4px',
                        width: `${item.avgGrade}%`
                      }}></div>
                    </div>
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

export default BarChartGrades;