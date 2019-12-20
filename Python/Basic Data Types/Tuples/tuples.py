import builtins
if __name__ =='__main__':
    n = int(input())
    t = tuple(map(int,input().split()))
    # print (t)
    print (hash(t))
