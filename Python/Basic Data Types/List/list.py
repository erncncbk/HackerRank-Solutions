if __name__ == '__main__':
    N = int(input())
    arr = []
    for n in range(N) :
        x = input().split()
        command = x[0]
        if command =='append':
            arr.append(int(x[1]))
        if command =='print':
            print(arr)
        if command =='insert':
            arr.insert(int(x[1]),int(x[2]))
        if command =='reverse':
            arr = arr[::-1]
        if command == 'pop':
            arr.pop()
        if command == 'sort':
            arr= sorted(arr)
        if command == 'remove':
            arr.remove(int(x[1]))