parents = {}


def addLineToTree(line):
    arr = line.split(',')
    mom = arr[0]
    daughters = arr[1:]
    for d in daughters:
        parents[d] = mom

def findCommonMatriarch(daughter1, daughter2):
    ancestors1 = []

    mom = daughter1
    while (mom):
        ancestors1.append(mom)
        if mom in parents:
            mom = parents[mom]
        else:
            mom = None

    mom = daughter2
    while (mom):
        if mom in ancestors1:
            return mom
        elif mom in parents:
            mom = parents[mom]
        else:
            return None

# main
qtyLines = raw_input('')

try:
    qtyLines = int(qtyLines)
except:
    print 'You must pass a valid number'
    exit(-2)

if qtyLines < 1:
    print 'You must pass at least one line'

for x in range(int(qtyLines)):
    addLineToTree(raw_input(''))
women = raw_input('').split(',')

matriarch = findCommonMatriarch(women[0],women[1])
if (matriarch):
    print matriarch
else:
    print 'No ancestor was found'