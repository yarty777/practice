import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
          <Route path="/" element={<Home />} />
          {/*Головна*/}
          <Route path="/login" element={<Login />} />
          {/*Реєстрація*/}

          {/*<Route path="/student/dashboard" element={<StudentDashboard />} />
          {профіль студента (ПІБ група статистика)}
          <Route path="/student/labs" element={<StudentLabs />} />
          {список лаб}
          
          <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
          {статистика по групам і профіль вчителя}
          <Route path="/teacher/students" element={<TeacherStudents />} />
          {список студентів}
          <Route path="/teacher/labs" element={<TeacherLabs />} />
          {створення редагування лабараторних робіт}
          
          <Route path="*" element={<div>404 - Сторінку не знайдено</div>} />
          {ПОМИЛКА!!!}*/}
        </Routes>
    </BrowserRouter>
    </>
  );
}

function Home(){

  return (
    <>
    
    </>
  )
}

function Login(){
  
  return (
    <>
    
    </>
  )
}

export default App;