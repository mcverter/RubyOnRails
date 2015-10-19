import sys

bandSets = []

def intersectBandSets():
    '''
    Prints message if the number of intersecting lines is > 50
    from each pair (band_name, lines_containing_band)
    '''
    numSets = len(bandSets)
    for idx1 in range(numSets):
        for idx2 in range(idx1 +1, numSets):
            if len(bandSets[idx1][1]
                    .intersection(bandSets[idx2][1])) > 49:
                print bandSets[idx1][0] + "," + bandSets[idx2][0]

def buildBandSets():
    '''
    Parses the input file and produces a list of
    (band_name, lines_containing_band) when lines > 50
    '''
    global bandSets
    allBands = {}
    with open(sys.argv[1], "rb") as inputFile:
        for idx, line in enumerate(inputFile):
            bands = line.split(",")
            for band in bands:
                if band in allBands:
                    allBands[band].append(idx)
                else:
                    allBands[band] = [idx]

        bandSets = tuple((key, set(value)) for (key, value)
                    in allBands.items() if len(value) > 49)

# main
buildBandSets()
intersectBandSets()
