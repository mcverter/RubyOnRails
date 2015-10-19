__author__ = 'mitchell'

prices = []
def biggestTrade():
    smallest = 0
    biggestDiff = -9999999999
    for price in prices:
        if price < smallest:
            smallest = price
        elif price - smallest > biggestDiff:
            biggestDiff = price - smallest
    return biggestDiff

def arrayProducts():
    for element in prices:

