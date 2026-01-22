from pydantic import BaseModel, EmailStr

class Teacher(BaseModel):
     email: EmailStr
     ID: int
     Surname: str
     Name: str
     SubjectID: int