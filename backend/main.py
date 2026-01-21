from fastapi import FastAPI, HTTPException, Depends, Query, Path
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import Optional, List

# Для роботи з базою даних (якщо буде потрібно)
import sqlite3
import json
from datetime import datetime

# Для асинхронності
import asyncio

# Для роботи з файлами
import os

#це бібліотеки від чата



#це для запуску проетку:
#uvicorn main:app --reload


#якщо верхнє не працює то треба ще нижнє ввести
#venv\Scripts\activate