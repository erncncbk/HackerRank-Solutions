import math
import os 
import random
import re
import sys

# Complete the aVeryBigSum function below
def aVeryBigSum(ar):

    return sum(ar)


if __name__ == '__main__':
    
    os.environ['OUTPUT_PATH'] = './A very big sum/a_very_big_sum_result.txt'
    
    fptr = open(os.environ['OUTPUT_PATH'],'w')

    ar_count = int(input())

    ar = list(map(int,input().strip().split()))

    result = aVeryBigSum(ar)

    fptr.write(str(result)+'\n')

    fptr.close()