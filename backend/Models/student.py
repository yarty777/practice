from pydantic import BaseModel, EmailStr

class Student(BaseModel):
    full_name: str
    group: str
    email: EmailStr