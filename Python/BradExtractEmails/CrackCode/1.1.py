__author__ = 'mitchell'

'''
Implement an algorithm to determine if a string has all unique characters  What if
you can not use additional data structures?
'''

def isUniq(str):
    charMap = {}
    for idx in range(str.len()):
        if (charMap(str[idx])):
            return False
        else:
            charMap[str[idx]] = True
    return True

def isUniqNoExtra(str):
    for idx in range(str.len()):
        for idx2 in range(idx, str.len()):
            if str[idx] == str[idx2]:
                return False
    return True

'''
Design an algorithm and write code to remove the duplicate characters in a string
without using any additional buffer  NOTE: One or two additional variables are fine
An extra copy of the array is not
FOLLOW UP
Write the test cases for this method
'''


def noDupStr(str):
    for idx in range(str.len()):
        writeIdx = idx
        for idx2 in range(idx, str.len()):
            if str[idx] != str[idx2]:
                str[writeIdx] = str[idx2]
                writeIdx += 1
