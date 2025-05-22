from dotenv import load_dotenv
import os

load_dotenv()


# Get the Database credentials
def get_db_credentials() -> list:
    USER = os.getenv("POSTGRES_USER", "").strip()
    PASSWORD = os.getenv("POSTGRES_PASSWORD", "").strip()
    HOST = os.getenv("POSTGRES_HOST", "").strip()
    PORT = os.getenv("POSTGRES_PORT", "5432").strip()
    DATABASE = os.getenv("POSTGRES_DB", "").strip()
    SECRET_KEY = os.getenv("SECRET_KEY", "dev-secret-key").strip()
    DEBUG = os.getenv("DEBUG", "False").strip()
    DEV = os.getenv("DEV", "False").strip()
    API_URL = os.getenv("API_URL", "http://localhost:8000").strip()

    # Fail early if any required values are missing
    required = [USER, PASSWORD, DATABASE, PORT]
    if not all(required):
        raise ValueError(
            "Missing one or more required environment variables: POSTGRES_*"
        )

    # # Override host for local development
    # if DEV.lower() == "true":
    #     HOST = "localhost"

    DATABASE_URL = f"postgresql://{USER}:{PASSWORD}@{HOST}:{PORT}/{DATABASE}"

    return [
        USER,  # 0
        PASSWORD,  # 1
        HOST,  # 2
        DATABASE,  # 3
        DATABASE_URL,  # 4
        SECRET_KEY,  # 5
        API_URL,  # 6
        PORT,  # 7
        DEBUG,  # 8
    ]


def get_api_endpoint() -> str:
    API_URL = os.getenv("API_URL", "http://localhost:8000").strip()
    return API_URL
