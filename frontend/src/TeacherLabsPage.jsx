// TeacherLabsPage.jsx
import React from 'react';
import './App.css';

const TeacherLabsPage = () => {
  // Мок дані для лабораторних робіт
  const labs = [
    { id: 1, title: 'ЛР1: Основи Python', subject: 'Програмування', deadline: '2024-03-15', difficulty: 'легка', submissions: 45, avgGrade: 87 },
    { id: 2, title: 'ЛР2: ООП в Python', subject: 'Програмування', deadline: '2024-03-25', difficulty: 'середня', submissions: 42, avgGrade: 76 },
    { id: 3, title: 'ЛР3: Бази даних', subject: 'Бази даних', deadline: '2024-04-05', difficulty: 'складна', submissions: 38, avgGrade: 68 },
    { id: 4, title: 'ЛР4: SQL запити', subject: 'Бази даних', deadline: '2024-04-12', difficulty: 'середня', submissions: 40, avgGrade: 82 },
    { id: 5, title: 'ЛР5: Веб-розробка', subject: 'Веб-технології', deadline: '2024-04-20', difficulty: 'складна', submissions: 35, avgGrade: 72 },
  ];

  const stats = {
    totalLabs: labs.length,
    totalSubmissions: labs.reduce((sum, lab) => sum + lab.submissions, 0),
    avgDifficulty: labs.reduce((sum, lab) => {
      const diff = { 'легка': 1, 'середня': 2, 'складна': 3 }[lab.difficulty];
      return sum + diff;
    }, 0) / labs.length,
  };

  return (
    <div className="teacher-labs-page">
      <div className="container" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '30px' }}>
          <h1 style={{ color: 'var(--deep-twilight)' }}>Лабораторні роботи</h1>
          <button style={{
            padding: '10px 20px',
            background: 'var(--bright-teal-blue)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}>
            + Додати нову лабу
          </button>
        </div>

        {/* Статистика */}
        <div style={{
          display: 'flex',
          gap: '20px',
          marginBottom: '30px',
          width: '100%'
        }}>
          <div style={{
            flex: 1,
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: 'var(--french-blue)' }}>Загальна статистика</h3>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '15px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', color: 'var(--bright-teal-blue)', fontWeight: 'bold' }}>
                  {stats.totalLabs}
                </div>
                <div style={{ color: 'var(--french-blue)' }}>Всього лаб</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', color: 'var(--turquoise-surf)', fontWeight: 'bold' }}>
                  {stats.totalSubmissions}
                </div>
                <div style={{ color: 'var(--french-blue)' }}>Здань</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', color: 'var(--blue-green)', fontWeight: 'bold' }}>
                  {stats.avgDifficulty.toFixed(1)}
                </div>
                <div style={{ color: 'var(--french-blue)' }}>Середня складність</div>
              </div>
            </div>
          </div>

          <div style={{
            flex: 1,
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ color: 'var(--french-blue)' }}>Фільтри</h3>
            <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
              <select style={{ padding: '10px', flex: 1, borderRadius: '5px', border: '1px solid var(--frosted-blue)' }}>
                <option>Всі предмети</option>
                <option>Програмування</option>
                <option>Бази даних</option>
                <option>Веб-технології</option>
              </select>
              <select style={{ padding: '10px', flex: 1, borderRadius: '5px', border: '1px solid var(--frosted-blue)' }}>
                <option>Вся складність</option>
                <option>Легка</option>
                <option>Середня</option>
                <option>Складна</option>
              </select>
              <input 
                type="text" 
                placeholder="Пошук за назвою..." 
                style={{ padding: '10px', flex: 2, borderRadius: '5px', border: '1px solid var(--frosted-blue)' }}
              />
            </div>
          </div>
        </div>

        {/* Таблица лабораторних */}
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
                <th style={{ padding: '15px', textAlign: 'left' }}>Назва лабораторної</th>
                <th style={{ padding: '15px', textAlign: 'left' }}>Предмет</th>
                <th style={{ padding: '15px', textAlign: 'left' }}>Дедлайн</th>
                <th style={{ padding: '15px', textAlign: 'left' }}>Складність</th>
                <th style={{ padding: '15px', textAlign: 'left' }}>Здань</th>
                <th style={{ padding: '15px', textAlign: 'left' }}>Середній бал</th>
                <th style={{ padding: '15px', textAlign: 'left' }}>Дії</th>
              </tr>
            </thead>
            <tbody>
              {labs.map((lab) => (
                <tr key={lab.id} style={{ borderBottom: '1px solid var(--frosted-blue)' }}>
                  <td style={{ padding: '15px' }}>{lab.id}</td>
                  <td style={{ padding: '15px', fontWeight: 'bold' }}>{lab.title}</td>
                  <td style={{ padding: '15px' }}>{lab.subject}</td>
                  <td style={{ padding: '15px' }}>
                    <span style={{
                      color: new Date(lab.deadline) < new Date() ? 'red' : 'inherit',
                      fontWeight: new Date(lab.deadline) < new Date() ? 'bold' : 'normal'
                    }}>
                      {lab.deadline}
                    </span>
                  </td>
                  <td style={{ padding: '15px' }}>
                    <span style={{
                      padding: '5px 10px',
                      borderRadius: '15px',
                      background: lab.difficulty === 'легка' ? '#d4edda' : 
                                 lab.difficulty === 'середня' ? '#fff3cd' : '#f8d7da',
                      color: lab.difficulty === 'легка' ? '#155724' : 
                            lab.difficulty === 'середня' ? '#856404' : '#721c24',
                      fontWeight: 'bold'
                    }}>
                      {lab.difficulty}
                    </span>
                  </td>
                  <td style={{ padding: '15px' }}>{lab.submissions}</td>
                  <td style={{ padding: '15px' }}>
                    <div style={{
                      background: 'var(--frosted-blue)',
                      height: '10px',
                      borderRadius: '5px',
                      width: '100px',
                      display: 'inline-block',
                      marginRight: '10px'
                    }}>
                      <div style={{
                        background: lab.avgGrade >= 80 ? '#4CAF50' : 
                                   lab.avgGrade >= 60 ? '#FFC107' : '#F44336',
                        height: '100%',
                        borderRadius: '5px',
                        width: `${lab.avgGrade}%`
                      }}></div>
                    </div>
                    <span style={{ fontWeight: 'bold' }}>{lab.avgGrade}</span>
                  </td>
                  <td style={{ padding: '15px' }}>
                    <div style={{ display: 'flex', gap: '5px' }}>
                      <button style={{
                        padding: '5px 10px',
                        background: 'var(--bright-teal-blue)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                      }}>
                        Редагувати
                      </button>
                      <button style={{
                        padding: '5px 10px',
                        background: '#dc3545',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                      }}>
                        Видалити
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Графік популярності */}
        <div style={{
          marginTop: '40px',
          background: 'white',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          width: '100%'
        }}>
          <h3 style={{ color: 'var(--french-blue)' }}>Аналіз популярності лабораторних</h3>
          <div style={{ display: 'flex', alignItems: 'flex-end', height: '200px', marginTop: '20px', gap: '20px' }}>
            {labs.map((lab) => (
              <div key={lab.id} style={{ flex: 1, textAlign: 'center' }}>
                <div style={{
                  height: `${(lab.submissions / 50) * 150}px`,
                  background: 'var(--turquoise-surf)',
                  borderRadius: '5px 5px 0 0',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-25px',
                    left: '0',
                    right: '0',
                    fontSize: '0.8rem',
                    color: 'var(--deep-twilight)',
                    fontWeight: 'bold'
                  }}>
                    {lab.submissions}
                  </div>
                </div>
                <div style={{ marginTop: '10px', fontSize: '0.8rem' }}>ЛР{lab.id}</div>
              </div>
            ))}
          </div>
          <p style={{ color: 'var(--french-blue)', marginTop: '20px', fontSize: '0.9rem' }}>
            Найпопулярніша: <strong>ЛР1: Основи Python</strong> (45 здань)<br/>
            Найскладніша: <strong>ЛР3: Бази даних</strong> (середній бал: 68)
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeacherLabsPage;