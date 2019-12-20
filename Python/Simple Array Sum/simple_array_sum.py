#!/bin/python3

import os 
import sys

def simpleArraySum(ar):

    sums = sum(ar)
    return  sums
        
if __name__ == '__main__':

    os.environ['OUTPUT_PATH'] ='simple_array_result.txt'
    fptr = open(os.environ['OUTPUT_PATH'],'w')

    ar_count = int(input())

    ar = list(map(int, input().rstrip().split()))



    result = simpleArraySum(ar)

    fptr.write(str(result)+'\n')

    fptr.close()