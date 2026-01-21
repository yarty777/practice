from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from auth.jwt import create_access_token, verify_token

router = APIRouter(prefix="/auth", tags=["Auth"])

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")

fake_user = {
    "email": "admin@gmail.com",
    "password": "1234"
}


@router.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends()):
    if (
        form_data.username != fake_user["email"]
        or form_data.password != fake_user["password"]
    ):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token({"sub": fake_user["email"]})

    return {
        "access_token": token,
        "token_type": "bearer"
    }


def get_current_user(token: str = Depends(oauth2_scheme)):
    payload = verify_token(token)

    if payload is None:
        raise HTTPException(status_code=401, detail="Invalid or expired token")

    return payload
