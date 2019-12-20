def split_and_join(txt):
    txt = txt.split(" ")
    txt = "-".join(txt)
    return txt



if __name__ == '__main__':
    line = input()
    result = split_and_join (line)
    print (result) 
