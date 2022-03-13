def matriks(m):
    for i in range(len(m)):
        for j in range(len(m[i])):
            print(m[i][j], end=" ")
        print()

if __name__ == "__main__":
    matrix = [[1,2,3],[4,5,6],[7,8,9]]
    matriks(matrix)
