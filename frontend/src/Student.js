import React from "react";
import { useState,useEffect } from "react";
import './Student.css'

function StudentDashboard()
{
    const [data,setData]=useState([
        {
            id:0,
            Surname:'',
            Name:'',
            Group:'',
            Email:''
        }
    ]);



    return (
        <>
        <div className="profile">
            <div className="leftside">
                <div className="student_info">
                    <h3>Інформація про студента</h3>
                    
                    <p>Прізвище: {data.Surname}</p>
                    <p>Ім'я: {data.Name}</p>
                    <p>Група: {data.Group}</p>
                    <p>Ел. пошта:{data.Email}</p>
                </div>
                <div className="stu_statistic">
                    <h3>Базова статистика</h3>

                    <p>Середній бал:</p>
                    <p>Кількість зданих робіт:</p>
                    <p>Кількість не зданих робіт:</p>
                    <p>Відсоток завершених робіт</p>
                    <p>Найближчі дедлайни:</p>
                </div>
            </div>
            <div className="rightside">
                Here will be charts
            </div>
        </div>
        </>
    )
}

function StudentLabs()
{
return (
    <>

    </>
)
}

export {StudentDashboard ,StudentLabs};