// TeacherStudentsPage.jsx
import React from 'react';
import './App.css';

const TeacherStudentsPage = () => {
  const students = [
    { id: 1, name: 'Іваненко Іван', group: 'ІПЗ-21', avgGrade: 95, labsCompleted: 8, totalLabs: 10 },
    { id: 2, name: 'Петренко Петро', group: 'ІПЗ-21', avgGrade: 87, labsCompleted: 9, totalLabs: 10 },
    { id: 3, name: 'Сидоренко Марія', group: 'ІПЗ-21', avgGrade: 92, labsCompleted: 10, totalLabs: 10 },
    { id: 4, name: 'Коваленко Олексій', group: 'КН-21', avgGrade: 78, labsCompleted: 6, totalLabs: 10 },
    { id: 5, name: 'Мельник Анна', group: 'КН-21', avgGrade: 88, labsCompleted: 8, totalLabs: 10 },
  ];

  return (
    <div className="teacher-students-page">
      <div className="container" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        <h1 style={{ color: 'var(--deep-twilight)' }}>Список студентів</h1>
        
        <div style={{ 
          display: 'flex', 
          gap: '20px', 
          marginBottom: '30px',
          width: '100%' 
        }}>
          <div style={{ flex: 1, background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: 'var(--french-blue)' }}>Фільтри</h3>
            <select style={{ padding: '10px', width: '100%', marginBottom: '10px' }}>
              <option>Всі групи</option>
              <option>ІПЗ-21</option>
              <option>КН-21</option>
            </select>
            <input 
              type="text" 
              placeholder="Пошук за іменем..." 
              style={{ padding: '10px', width: '100%' }}
            />
          </div>
          
          <div style={{ flex: 2, background: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: 'var(--french-blue)' }}>Статистика групи</h3>
            <div style={{ display: 'flex', gap: '20px' }}>
              <div>
                <h4>Середній бал</h4>
                <p style={{ fontSize: '2rem', color: 'var(--bright-teal-blue)' }}>88</p>
              </div>
              <div>
                <h4>Здано лаб</h4>
                <p style={{ fontSize: '2rem', color: 'var(--turquoise-surf)' }}>41/50</p>
              </div>
              <div>
                <h4>Відвідуваність</h4>
                <p style={{ fontSize: '2rem', color: 'var(--blue-green)' }}>92%</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ 
          width: '100%', 
          background: 'white', 
          borderRadius: '10px', 
          overflow: 'hidden',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'var(--frosted-blue-2)' }}>
                <th style={{ padding: '15px', textAlign: 'left' }}>ID</th>
                <th style={{ padding: '15px', textAlign: 'left' }}>ПІБ</th>
                <th style={{ padding: '15px', textAlign: 'left' }}>Група</th>
                <th style={{ padding: '15px', textAlign: 'left' }}>Середній бал</th>
                <th style={{ padding: '15px', textAlign: 'left' }}>Виконано лаб</th>
                <th style={{ padding: '15px', textAlign: 'left' }}>Прогрес</th>
                <th style={{ padding: '15px', textAlign: 'left' }}>Дії</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} style={{ borderBottom: '1px solid var(--frosted-blue)' }}>
                  <td style={{ padding: '15px' }}>{student.id}</td>
                  <td style={{ padding: '15px', fontWeight: 'bold' }}>{student.name}</td>
                  <td style={{ padding: '15px' }}>{student.group}</td>
                  <td style={{ padding: '15px' }}>
                    <span style={{ 
                      color: student.avgGrade >= 90 ? 'green' : student.avgGrade >= 75 ? 'orange' : 'red',
                      fontWeight: 'bold'
                    }}>
                      {student.avgGrade}
                    </span>
                  </td>
                  <td style={{ padding: '15px' }}>
                    {student.labsCompleted}/{student.totalLabs}
                  </td>
                  <td style={{ padding: '15px', width: '150px' }}>
                    <div style={{ 
                      background: 'var(--frosted-blue)', 
                      height: '10px', 
                      borderRadius: '5px',
                      width: '100%'
                    }}>
                      <div style={{ 
                        background: 'var(--bright-teal-blue)', 
                        height: '100%', 
                        borderRadius: '5px',
                        width: `${(student.labsCompleted / student.totalLabs) * 100}%`
                      }}></div>
                    </div>
                    <span style={{ fontSize: '0.8rem' }}>
                      {Math.round((student.labsCompleted / student.totalLabs) * 100)}%
                    </span>
                  </td>
                  <td style={{ padding: '15px' }}>
                    <button style={{ 
                      padding: '5px 10px', 
                      background: 'var(--bright-teal-blue)', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: '5px',
                      cursor: 'pointer'
                    }}>
                      Переглянути
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div style={{ marginTop: '30px', color: 'var(--french-blue)' }}>
          <p>Загальна кількість студентів: {students.length}</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherStudentsPage;