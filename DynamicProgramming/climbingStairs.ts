// 
/*
PROBLEM STATEMENT
You can climb 1 or 2 stairs with one step. How many different ways can you climb n stairs.
EX. if 3 stairs,
1 stair then 2 stair
or 
1 stair then 1 Stair, then 1 stair
or 
2 stair then 1 stair

So 3 ways if n = 3
But this asks for general case.
NAIVE ANSWER -> f(n) = number of different ways to climb n stairs

HOW CAN WE REACH THE NTH STAIR?
1. Be at the (n-2)th stair, then climb 2 steps
2. Be at the (n-1)th stair, then climb 1 step

For 1. number of ways to reach the (n-2)th Stair is f(n-2)
For 2. number of ways to reach the (n-1)th stair is f(n-1)
f(n) = f(n-1) + f(n-2). Use Recursion! (Base cases are f(1)=1, f(2)=2)

*/

