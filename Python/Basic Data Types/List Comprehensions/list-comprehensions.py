
# # Enter your code here. Read input from STDIN. Print output to STDOUT
#Solve
def ListComprehension(x,y,z,n):

    arr = [[X, Y, Z] for X in range(x+1) for Y in range(y+1) for Z in range(z+1) if X + Y + Z != N]
    #Output
    print(arr)

if __name__ == '__main__':
    #Input
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())
    ListComprehension(x,y,z,n)


