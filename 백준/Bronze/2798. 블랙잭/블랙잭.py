from itertools import combinations;

n, m = input().split();
n = int(n);
m = int(m);
arr = input().split();
done = "";
numArr = [];
answerArr = [];
realAnswerArr = [];

for i in arr:
    numArr.append(int(i));
for i in combinations(numArr, 3):
    answerArr.append(i)
for i in range(0,len(answerArr)):
    plus = 0;
    for j in range(0, 3):
        plus = plus + answerArr[i][j];
    realAnswerArr.append(plus);

realAnswerArr.sort();
for i in realAnswerArr:
    if i <= m:
        done = i;

print(done)

