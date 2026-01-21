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
        client = MongoClient("mongodb+srv://ivandmytruk42_db_user:lwokr123@db.rdcvntl.mongodb.net/?appName=DB")
        database = client["Practica"]
        self.personal_collection = database["Laboratory_work_accounting_system"]
    def get_all_students(self):
        return list(self.personal_collection.find({}, {"_id": 0}))
#Class
class Student:
    def __init__(self, full_name, ID, group, email):
        self.full_name = full_name
        self.ID = ID
        self.group = group
        self.email = email
# Для асинхронності
import asyncio

# Для роботи з файлами
import os

#це бібліотеки від чата

#це для запуску проетку:
#uvicorn main:app --reload

#якщо верхнє не працює то треба ще нижнє ввести
#venv\Scripts\activate