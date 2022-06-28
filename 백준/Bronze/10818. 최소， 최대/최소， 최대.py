N = int(input());
M = input().split();
arr = [];
for i in range(0, N):
    arr.append(int(M[i]));
arr.sort(reverse=True);
print(arr[N-1], arr[0]);
