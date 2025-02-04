from pydantic import BaseModel


class Stock(BaseModel):
    ticker: str
    price: float
    change: float
