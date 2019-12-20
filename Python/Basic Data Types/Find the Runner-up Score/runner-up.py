def secondLargestValue(n,arr):
    # make map to list
    bigNum = max(arr)
    secondBig = 0
    for i in range(n):
        if arr[i] != bigNum:
            if arr[i]> secondBig:
                secondBig=arr[i]
            elif i ==n+1:
                if arr[i]>secondBig:
                    
                    secondBig = arr[i]

    # print (secondBig)

## Alternatives
# def runnerUp(n,arr):
#     bigNum = max(arr)
#     for i in range(0,n):
#         if max(arr) == bigNum:   
#             arr.remove(max(arr))
#     arr.sort(reverse=True)
#     print(arr[0])



if __name__ == '__main__':
    n = int(input())
    arr = list(set(map(int,input().strip().split(" "))))
    secondLargestValue(n,arr)
