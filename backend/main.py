from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from services.news_service import fetch_stock_news
from services.stock_service import fetch_stock_data

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Allow React frontend
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)


@app.get("/stocks")
def get_stock_data():
    return fetch_stock_data()


@app.get("/news/{ticker}")
def get_stock_news(ticker: str):
    return fetch_stock_news(ticker)
