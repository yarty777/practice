from fastapi import FastAPI
from Routers.students import router as students_router
from Routers.teacher import router as teachers_router
from auth.auth import router as auth_router # type: ignore

app = FastAPI(title="Laboratory Accounting System")

# Підключаємо router-и
app.include_router(auth_router)
app.include_router(students_router)
app.include_router(teachers_router)


@app.get("/")
def root():
    return {"message": "FastAPI works"}
# Для асинхронності
import asyncio

# Для роботи з файлами
import os

#це бібліотеки від чата

#це для запуску проетку:
#uvicorn main:app --reload

#якщо верхнє не працює то треба ще нижнє ввести
#venv\Scripts\activate