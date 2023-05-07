from app import create_app
from app.database import fill_database
from app.routes import api_router

app = create_app()

app.include_router(api_router, prefix="/api")


@app.on_event("startup")
async def startup():
    await fill_database()
    print("Database populated")
