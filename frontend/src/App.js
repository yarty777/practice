import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { StudentDashboard, StudentLabs } from './Student.js';
import TeacherStudentsPage from './TeacherStudentsPage';
import TeacherLabsPage from './TeacherLabsPage';
import BarChartGrades from './BarChartGrades';
import LineChartProgress from './LineChartProgress';

// Імпортуємо картинки та логотип
import homeImg from './assets/home-img.png';
import loginImg from './assets/login-img.png';
import logoImg from './assets/logo.png';

function App() {
  return (
    <BrowserRouter>
      <nav className="nav-menu">
        <Link to="/" className="logo-container">
          <img src={logoImg} alt="SkyLab Logo" className="nav-logo" />
          <span className="logo-text">SkyLab</span>
        </Link>

        <div className="nav-links">
          <Link to="/" className="nav-link">Головна</Link>
          <Link to="/login" className="nav-link">Увійти</Link>
          <Link to="/student/dashboard" className="nav-link">Профіль студента</Link>
          <Link to="/student/labs" className="nav-link">Лаби студента</Link>
          <Link to="/teacher/students" className="nav-link">Студенти</Link>
          <Link to="/teacher/labs" className="nav-link">Лаби викладача</Link>
          <Link to="/charts/bar" className="nav-link">Діаграма балів</Link>
          <Link to="/charts/line" className="nav-link">Графік успішності</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/labs" element={<StudentLabs />} />
        
        <Route path="/teacher/students" element={<TeacherStudentsPage />} />
        <Route path="/teacher/labs" element={<TeacherLabsPage />} />
        
        <Route path="/charts/bar" element={<BarChartGrades />} />
        <Route path="/charts/line" element={<LineChartProgress />} />
        
        <Route path="*" element={<div>404 - Сторінку не знайдено</div>} />
      </Routes>

      <footer className="footer">
        <p>Контакти: +380 00 000 00 00 | 2026 SYS</p>
      </footer>
    </BrowserRouter>
  );
}

function Home() {
  return (
    <div className="container main-page">
      <div className="left-side side">
        <img src={homeImg} alt="SkyLab System" className="main-img" />
      </div>
      <div className="right-side side">
        <h1 style={{ color: 'var(--deep-twilight)', fontSize: '3rem', marginBottom: '10px' }}>
          SkyLab
        </h1>
        <p style={{ color: 'var(--french-blue)', fontSize: '1.2rem', maxWidth: '600px' }}>
          <strong>Сучасна інтелектуальна система обліку лабораторних робіт.</strong><br/>
          Ми автоматизуємо рутинні процеси, щоб викладачі та студенти могли зосередитися на навчанні, 
          а не на паперовій тяганині.
        </p>
        
        <div style={{ textAlign: 'left', marginTop: '20px' }}>
          <h3 style={{ color: 'var(--bright-teal-blue)' }}>🚀 Основні можливості:</h3>
          <ul style={{ color: 'var(--french-blue)', listStyle: 'none', padding: 0, lineHeight: '2.2' }}>
            <li>🔹 <strong>Моніторинг статусів:</strong> миттєве відстеження виконання робіт у реальному часі.</li>
            <li>🔹 <strong>Аналітика та оцінювання:</strong> зручний інструментарій для аналізу результатів та виставлення балів.</li>
            <li>🔹 <strong>Цифрова база даних:</strong> надійне зберігання інформації про студентів, групи та дисципліни.</li>
            <li>🔹 <strong>Прозорість:</strong> чітке відображення дедлайнів, оцінок та дат здачі для кожного студента.</li>
          </ul>
        </div>

        <p style={{ color: 'var(--blue-green)', fontStyle: 'italic', marginTop: '15px' }}>
          SkyLab — ваш надійний провідник у просторі цифрової освіти 2026 року.
        </p>
      </div>
    </div>
  );
}

function Login() {
  return (
    <div className="container login-page">
      <div className="left-side side">
        <h2>Авторизація</h2>
        <form className="login-form">
          <input type="text" placeholder="Логін" />
          <input type="password" placeholder="Пароль" />
          <button type="submit">Увійти</button>
        </form>
      </div>
      <div className="right-side side">
        <img src={loginImg} alt="Login Illustration" className="main-img" />
      </div>
    </div>
  );
}

export default App;