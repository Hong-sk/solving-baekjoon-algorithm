arr = input().split();

curX = 0;
curY = 0;

if int(arr[0]) <= int(arr[2]) - int(arr[0]):
    curX = int(arr[0]);
else:
    curX = int(arr[2]) - int(arr[0]);
if int(arr[1]) <= int(arr[3]) - int(arr[1]):
    curY = int(arr[1]);
else:
    curY = int(arr[3]) - int(arr[1]);

if curX >= curY:
    print(curY);
else:
    print(curX);