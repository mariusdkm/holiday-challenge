from fastapi import FastAPI
from tortoise.contrib.fastapi import register_tortoise


def create_app() -> FastAPI:
    app = FastAPI()

    register_tortoise(
        app,
        db_url="sqlite://:memory:",
        modules={"models": ["app.models"]},
        generate_schemas=True,
        add_exception_handlers=True,
    )

    return app
