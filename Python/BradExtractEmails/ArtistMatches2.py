import sys

bandPairs = []
usersFavs = []
bandsOver50 = []

def printBandPairs():
    '''
    Prints out band pair if count > 49
    '''
    for pair in bandPairs:
        if pair[2] > 49:
            print pair[0] + "," + pair[1]

def checkFavsAgainstBandPairs():
    '''
    Inspects each line of favorites for the co-occurence
    of both bands in bandPair
    '''
    for favs in usersFavs:
        for pair in bandPairs:
            if pair[0] in favs and \
                    pair[1] in favs:
                pair[2] += 1

def createBandPairs():
    '''
    Pairs together all bands who have appeared separately over 50 times
    '''
    numBands = len(bandsOver50)
    for idx1 in range(numBands):
        for idx2 in range(idx1 +1, numBands):
            bandPairs.append([bandsOver50[idx1], bandsOver50[idx2], 0])

def findBandsOver50():
    '''
    Parses the input file and produces a list of
    bands who appear more than 50 times
    '''
    with open(sys.argv[1], "rb") as inputFile:
        global bandsOver50
        allBands = {}
        for line in inputFile:
            bands = line.split(",")
            for band in bands:
                if band in allBands:
                    allBands[band] += 1
                else:
                    allBands[band] = 1
            usersFavs.append(bands)
    
        bandsOver50 = [key for key, value
                    in allBands.items() if value > 49]

# main
findBandsOver50()
createBandPairs()
checkFavsAgainstBandPairs()
printBandPairs()
