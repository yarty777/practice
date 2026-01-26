// TeacherProfile.jsx
import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './App.css';

const TeacherProfile = () => {
  // Дані викладача
  const teacherData = {
    name: 'Петренко Олена Іванівна',
    position: 'Старший викладач',
    department: 'Кафедра програмної інженерії',
    email: 'o.petrenko@university.edu',
    avatar: '👩‍🏫'
  };

  // Рейтинг студентів
  const studentRanking = [
    { id: 1, name: 'Іваненко Іван', group: 'ПІ-232', avgGrade: 95, labsCompleted: 10, rank: 1 },
    { id: 2, name: 'Сидоренко Марія', group: 'ПІ-232', avgGrade: 92, labsCompleted: 10, rank: 2 },
    { id: 3, name: 'Петренко Петро', group: 'ПІ-231', avgGrade: 91, labsCompleted: 9, rank: 3 },
    { id: 4, name: 'Коваленко Оксана', group: 'ПІ-233', avgGrade: 89, labsCompleted: 9, rank: 4 },
    { id: 5, name: 'Мельник Андрій', group: 'ПІ-232', avgGrade: 87, labsCompleted: 8, rank: 5 },
    { id: 6, name: 'Шевченко Наталя', group: 'ПІ-231', avgGrade: 85, labsCompleted: 8, rank: 6 },
    { id: 7, name: 'Бондаренко Дмитро', group: 'ПІ-233', avgGrade: 83, labsCompleted: 7, rank: 7 },
    { id: 8, name: 'Ткаченко Олег', group: 'ПІ-232', avgGrade: 81, labsCompleted: 7, rank: 8 },
  ];

  // Статистика по групах
  const groupStats = [
    { group: 'ПІ-232', students: 25, avgGrade: 86, timelySubmissions: 88, labsCompleted: 92 },
    { group: 'ПІ-231', students: 23, avgGrade: 82, timelySubmissions: 79, labsCompleted: 85 },
    { group: 'ПІ-233', students: 27, avgGrade: 84, timelySubmissions: 82, labsCompleted: 88 },
  ];

  // Графік успішності по групах
  const groupProgress = [
    { week: 'Тиждень 1', group1: 75, group2: 72, group3: 70 },
    { week: 'Тиждень 2', group1: 78, group2: 75, group3: 73 },
    { week: 'Тиждень 3', group1: 82, group2: 79, group3: 77 },
    { week: 'Тиждень 4', group1: 85, group2: 81, group3: 79 },
    { week: 'Тиждень 5', group1: 86, group2: 82, group3: 80 },
    { week: 'Тиждень 6', group1: 88, group2: 84, group3: 82 },
    { week: 'Тиждень 7', group1: 89, group2: 85, group3: 83 },
    { week: 'Тиждень 8', group1: 90, group2: 86, group3: 84 },
  ];

  // Відсоток своєчасних здач
  const timelyData = [
    { name: 'Своєчасно', value: 78, color: '#4CAF50' },
    { name: 'З запізненням', value: 15, color: '#FFC107' },
    { name: 'Не здано', value: 7, color: '#F44336' },
  ];

  // Аналіз складності лабораторних
  const labDifficulty = [
    { lab: 'ЛР1: Основи', avgGrade: 88, submissions: 95, difficulty: 'легка' },
    { lab: 'ЛР2: ООП', avgGrade: 76, submissions: 82, difficulty: 'середня' },
    { lab: 'ЛР3: БД', avgGrade: 72, submissions: 78, difficulty: 'складна' },
    { lab: 'ЛР4: SQL', avgGrade: 80, submissions: 85, difficulty: 'середня' },
    { lab: 'ЛР5: Веб', avgGrade: 68, submissions: 70, difficulty: 'дуже складна' },
    { lab: 'ЛР6: API', avgGrade: 75, submissions: 80, difficulty: 'середня' },
    { lab: 'ЛР7: Тести', avgGrade: 82, submissions: 88, difficulty: 'легка' },
    { lab: 'ЛР8: Проєкт', avgGrade: 65, submissions: 68, difficulty: 'дуже складна' },
  ];

  // Загальна статистика
  const overallStats = {
    totalStudents: 75,
    totalLabs: 42,
    avgSuccessRate: 85,
    avgTimeliness: 78,
  };

  return (
    <div className="teacher-profile">
      <div className="container" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        
        {/* Шапка профілю */}
        <div style={{
          background: 'linear-gradient(135deg, #023e8a, #0077b6)',
          padding: '30px',
          borderRadius: '15px',
          color: 'white',
          marginBottom: '30px',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 10px 20px rgba(2,62,138,0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
            <div style={{
              fontSize: '4rem',
              background: 'rgba(255,255,255,0.2)',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {teacherData.avatar}
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: '2.5rem' }}>{teacherData.name}</h1>
              <p style={{ opacity: 0.9, marginTop: '8px', fontSize: '1.2rem' }}>
                {teacherData.position} • {teacherData.department}
              </p>
              <p style={{ opacity: 0.8, marginTop: '5px' }}>{teacherData.email}</p>
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.2rem', opacity: 0.9 }}>Загальна успішність</div>
            <div style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>{overallStats.avgSuccessRate}%</div>
          </div>
        </div>

        {/* Основні метрики */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          width: '100%',
          marginBottom: '30px'
        }}>
          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#0077b6' }}>{overallStats.totalStudents}</div>
            <div style={{ color: '#555', marginTop: '5px' }}>Студентів</div>
          </div>
          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00b4d8' }}>{overallStats.totalLabs}</div>
            <div style={{ color: '#555', marginTop: '5px' }}>Лабораторних</div>
          </div>
          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#4CAF50' }}>{overallStats.avgSuccessRate}%</div>
            <div style={{ color: '#555', marginTop: '5px' }}>Успішність</div>
          </div>
          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#FFC107' }}>{overallStats.avgTimeliness}%</div>
            <div style={{ color: '#555', marginTop: '5px' }}>Своєчасність</div>
          </div>
        </div>

        {/* Два основні блоки: рейтинг та статистика */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px',
          width: '100%',
          marginBottom: '30px'
        }}>
          
          {/* Лівий блок: Рейтинг студентів */}
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{ color: '#023e8a', marginBottom: '20px' }}>🏆 Рейтинг студентів</h3>
            <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ background: '#f8f9fa' }}>
                    <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>Ранг</th>
                    <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>Студент</th>
                    <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>Група</th>
                    <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>Середній бал</th>
                    <th style={{ padding: '12px', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>Лаб</th>
                  </tr>
                </thead>
                <tbody>
                  {studentRanking.map((student) => (
                    <tr key={student.id} style={{ borderBottom: '1px solid #eee' }}>
                      <td style={{ padding: '12px' }}>
                        <div style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          background: student.rank <= 3 ? '#FFD700' : '#e0e0e0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: 'bold',
                          color: student.rank <= 3 ? '#333' : '#666'
                        }}>
                          {student.rank}
                        </div>
                      </td>
                      <td style={{ padding: '12px', fontWeight: 'bold' }}>{student.name}</td>
                      <td style={{ padding: '12px' }}>{student.group}</td>
                      <td style={{ padding: '12px' }}>
                        <span style={{
                          color: student.avgGrade >= 90 ? '#4CAF50' : 
                                 student.avgGrade >= 80 ? '#2196F3' : 
                                 student.avgGrade >= 70 ? '#FFC107' : '#F44336',
                          fontWeight: 'bold'
                        }}>
                          {student.avgGrade}
                        </span>
                      </td>
                      <td style={{ padding: '12px' }}>{student.labsCompleted}/10</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Правий блок: Статистика груп */}
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{ color: '#023e8a', marginBottom: '20px' }}>📊 Статистика по групах</h3>
            <div style={{ height: '400px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={groupStats}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="group" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="avgGrade" name="Середній бал" fill="#0077b6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="timelySubmissions" name="Своєчасність (%)" fill="#00b4d8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="labsCompleted" name="Здано лаб (%)" fill="#4CAF50" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Два блоки: своєчасність та складність */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px',
          width: '100%',
          marginBottom: '30px'
        }}>
          
          {/* Відсоток своєчасних здач */}
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{ color: '#023e8a', marginBottom: '20px' }}>⏱️ Відсоток своєчасних здач</h3>
            <div style={{ display: 'flex', alignItems: 'center', height: '250px' }}>
              <div style={{ flex: 1, height: '200px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={timelyData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(entry) => `${entry.name}: ${entry.value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {timelyData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`${value}%`, '']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div style={{ flex: 1, paddingLeft: '20px' }}>
                <h4 style={{ color: '#555', marginBottom: '15px' }}>Статистика</h4>
                {timelyData.map((item, index) => (
                  <div key={index} style={{ marginBottom: '12px', display: 'flex', alignItems: 'center' }}>
                    <div style={{
                      width: '15px',
                      height: '15px',
                      background: item.color,
                      borderRadius: '3px',
                      marginRight: '10px'
                    }}></div>
                    <div style={{ flex: 1 }}>{item.name}</div>
                    <div style={{ fontWeight: 'bold' }}>{item.value}%</div>
                  </div>
                ))}
                <div style={{ marginTop: '20px', padding: '10px', background: '#f8f9fa', borderRadius: '8px' }}>
                  <div style={{ color: '#555' }}>Загальна своєчасність</div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4CAF50' }}>{overallStats.avgTimeliness}%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Аналіз складності лабораторних */}
          <div style={{
            background: 'white',
            padding: '25px',
            borderRadius: '12px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.08)'
          }}>
            <h3 style={{ color: '#023e8a', marginBottom: '20px' }}>📈 Аналіз складності лабораторних</h3>
            <div style={{ height: '250px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={labDifficulty}
                  margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="lab" 
                    angle={-45}
                    textAnchor="end"
                    height={60}
                  />
                  <YAxis />
                  <Tooltip formatter={(value, name) => {
                    if (name === 'avgGrade') return [`${value} балів`, 'Середній бал'];
                    if (name === 'submissions') return [`${value}%`, 'Здань'];
                    return [value, name];
                  }} />
                  <Legend />
                  <Bar 
                    dataKey="avgGrade" 
                    name="Середній бал" 
                    fill="#0077b6"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    dataKey="submissions" 
                    name="Відсоток здань" 
                    fill="#00b4d8"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={{ marginTop: '15px', color: '#666', fontSize: '0.9rem' }}>
              Найскладніші: ЛР5 (Веб) та ЛР8 (Проєкт)
            </div>
          </div>
        </div>

        {/* Графік динаміки успішності */}
        <div style={{
          background: 'white',
          padding: '25px',
          borderRadius: '12px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
          width: '100%'
        }}>
          <h3 style={{ color: '#023e8a', marginBottom: '20px' }}>📈 Динаміка успішності груп по тижнях</h3>
          <div style={{ height: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={groupProgress}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="group1" name="ПІ-232" stroke="#0077b6" strokeWidth={3} />
                <Line type="monotone" dataKey="group2" name="ПІ-231" stroke="#00b4d8" strokeWidth={3} />
                <Line type="monotone" dataKey="group3" name="ПІ-233" stroke="#0096c7" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TeacherProfile;