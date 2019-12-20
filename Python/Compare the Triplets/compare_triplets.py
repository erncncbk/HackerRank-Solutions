#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the compareTriplets function below

def compareTriplets(a,b):
    _a = 0
    _b = 0
    for i in range (len(a)):
        print (i)
        if a[i]>b[i]:
            _a+=1
        elif a[i]<b[i]:
            _b+=1
        elif a[i]==b[i]:
            pass
    return [_a,_b]


if __name__ == '__main__':
    
    os.environ['OUTPUT_PATH'] = './Compare the triplets/compare_tripkets_result.txt'
    fptr = open(os.environ['OUTPUT_PATH'],'w')

    a = list(map(int, input().rstrip().split()))
    b = list(map(int, input().rstrip().split()))

    result = compareTriplets(a,b)

    fptr.write(' '.join(map(str,result)))
    fptr.write('\n')

    fptr.close()
