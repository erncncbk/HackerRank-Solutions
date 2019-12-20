#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'diagonalDifference' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.
#

def diagonalDifference(arr,n):
    # Write your code here
    x1 = 0
    x2 = 0
    for i in range (n):
        x1 = x1+arr[i][i] 
        x2 = x2+arr[i][n-i-1]
    x = abs(x1-x2)
    # x1 = arr[0][0]+arr[1][1]+arr[2][2]
    # x2 = arr[0][2]+arr[1][1]+arr[2][0]
    # x = abs(x1-x2)
        
    return x  
if __name__ == '__main__':

    os.environ['OUTPUT_PATH'] = './Diagonal Difference/diagonal_difference.txt'

    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    arr = []

    for _ in range(n):
        arr.append(list(map(int, input().rstrip().split())))

    result = diagonalDifference(arr,n)

    fptr.write(str(result) + '\n')

    fptr.close()
