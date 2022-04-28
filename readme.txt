1. High level description fo your solution
Reverse Polish Notation is a sort of method of syntactic analysis for arithmetic expressions, which is generally realized using a stack(LIPO) data structure.
- if expression is number then push it.
- Pop top two operands to correspond the operator from the stack.
- Push the operated result to stack top.
- Repeat until the end symbol of the sentence is entered.

Cons
It did not considered the priority of operator.

2. How to run
It will be run based on node environment.
If node is not installed, please install it
node index.js

3. Reasoning behind your technical choices, including architectural
It is implemented using push() and pop() of JS Array.
- If input is an expression
It is splitted by space and every splitted tokens will be parsed with above algorithm.
- If input is a token
It will be parsed with above algorithm.