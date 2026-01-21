from fastapi import FastAPI, HTTPException, Depends, Query, Path
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional, List
from pymongo import MongoClient


# Для роботи з базою даних (якщо буде потрібно)
import sqlite3
import json
from datetime import datetime
#Date Base
class MongoDBPersonal:
    def __init__(self):
        self.client = MongoClient(
            "mongodb+srv://ivandmytruk42_db_user:lwokr123@db.rdcvntl.mongodb.net/?appName=DB"
        )
        self.database = self.client["Practica"]
        self.students = self.database["students"]
        self.teachers = self.database["teachers"]
        self.subjects = self.database["subjects"]
        self.labs = self.database["labs"]
#Class
class Student:
    def __init__(self, full_name, student_id, group, email):
        self.full_name = full_name
        self.student_id = student_id
        self.group = group
        self.email = email

    def print_info(self):
        print("ПІБ:", self.full_name)
        print("ID:", self.student_id)
        print("Група:", self.group)
        print("Email:", self.email)

    def to_dict(self):
        return {
            "full_name": self.full_name,
            "student_id": self.student_id,
            "group": self.group,
            "email": self.email
        }
class Teacher:
    def __init__(self, teacher_id, surname, name):
        self.teacher_id = teacher_id
        self.surname = surname
        self.name = name

    def to_dict(self):
        return {
            "teacher_id": self.teacher_id,
            "surname": self.surname,
            "name": self.name
        }
class Subject:
    def __init__(self, subject_id, subject_name, teacher_id, semester, lab_count):
        self.subject_id = subject_id
        self.subject_name = subject_name
        self.teacher_id = teacher_id
        self.semester = semester
        self.lab_count = lab_count

    def to_dict(self):
        return {
            "subject_id": self.subject_id,
            "subject_name": self.subject_name,
            "teacher_id": self.teacher_id,
            "semester": self.semester,
            "lab_count": self.lab_count
        }
class LaboratoryWork:
    def __init__(self, work_id, subject_id, description, max_mark, deadline):
        self.work_id = work_id
        self.subject_id = subject_id
        self.description = description
        self.max_mark = max_mark
        self.deadline = deadline

    def to_dict(self):
        return {
            "work_id": self.work_id,
            "subject_id": self.subject_id,
            "description": self.description,
            "max_mark": self.max_mark,
            "deadline": self.deadline
        }
# Для асинхронності
import asyncio

# Для роботи з файлами
import os

#це бібліотеки від чата

#це для запуску проетку:
#uvicorn main:app --reload

#якщо верхнє не працює то треба ще нижнє ввести
#venv\Scripts\activate