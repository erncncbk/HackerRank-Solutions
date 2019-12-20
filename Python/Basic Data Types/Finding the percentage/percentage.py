def Percentage(name):
    print("{0:.2f}".format(sum(name)/len(name)))

if __name__ == '__main__' :
    n = int(input())
    students_marks = {}
    for _ in range(n):
        name,*line = input().split()
        scores = list(map(float,line))
        students_marks[name] = scores
    query_name = students_marks[input()]
    Percentage(query_name)

