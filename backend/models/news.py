from pydantic import BaseModel


class NewsArticle(BaseModel):
    title: str
    url: str
