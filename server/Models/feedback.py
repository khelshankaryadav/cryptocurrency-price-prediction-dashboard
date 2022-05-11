from email import message
from locale import currency
from numpy import meshgrid
from pydantic import BaseModel


class FeedBack(BaseModel):
    name: str
    email: str
    contact: str
    currency: str
    message: str

