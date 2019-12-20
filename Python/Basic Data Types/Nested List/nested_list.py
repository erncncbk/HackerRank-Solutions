arr = list()
n = int(input())
for i in range(n):
    name = input()
    score =float(input())
    arr.append([name,score])
    
nums = []
for i in range (len(arr)):
    nums.append(arr[i][1])


smallNum = min(nums)
secondSmall = []
for i in range (len(nums)):
    if smallNum != nums[i]:
        secondSmall.append(nums[i])

small = min(secondSmall)

name = []
for i in range (len(arr)):
    if small == arr[i][1]:
        name.append(arr[i][0])           
name.sort()
for i in range (len(name)):
    print(name[i]) 
