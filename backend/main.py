from fastapi import Depends, FastAPI
from services.news_service import fetch_stock_news
from services.stock_service import fetch_stock_data

app = FastAPI()


@app.get("/stocks")
def get_stock_data():
    return fetch_stock_data()


@app.get("/news/{ticker}")
def get_stock_news(ticker: str):
    return fetch_stock_news(ticker)
