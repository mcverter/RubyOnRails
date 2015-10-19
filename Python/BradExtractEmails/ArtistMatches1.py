import sys

allBands = {}

def checkBandsForPairs():
    '''
    Prints message if allBands[band1][band2]>49
    '''
    for band1 in allBands:
        for band2 in allBands[band1]:
            if allBands[band1][band2] > 49:
                print band1 + "," + band2

def getBandsFromInput():
    '''
    Creates a dict of dicts recording the co-ocurrence of
    two bands on each line
    '''
    with open(sys.argv[1], "rb") as inputFile:
        for line in inputFile:
            bands = line.split(",")
            lenBands = len(bands)
            for i in range(lenBands):
                for j in range(i+1, lenBands):
                    minBand = min(bands[i], bands[j])
                    maxBand = max(bands[i], bands[j])
                    if minBand not in allBands:
                        allBands[minBand] = {}
                    if maxBand not in allBands[minBand]:
                        allBands[minBand][maxBand] = 1
                    else:
                        allBands[minBand][maxBand] += 1

# main
getBandsFromInput()
checkBandsForPairs()
