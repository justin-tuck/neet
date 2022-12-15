# You are climbing a staircase. It takes n steps to reach the top.
# Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
# Binary search recursively
# had to add in memoization to make it work

# Brute force: sum of every step O(2^n) size of tree will be 2^n
# Memoization: save the result of each step in array
#               Time: O(n) Size of recursion can go up to n
#               Space: O(n)  The depth of recursion tree can go up to in

def climbStairs(n: int) -> int:
    memo = {}

    def dfs(count):
        if count == 0:
            return 1
        elif count < 0:
            return 0
        if (count in memo):
            result = memo[count]
        else:
            result2 = dfs(count - 2)
            result1 = dfs(count - 1)
            result = result1 + result2
            memo[count] = result
        return result
    return dfs(n)


print(f"Expected: 2 result: {climbStairs(2)}")
print(f"Expected: 3 result: {climbStairs(3)}")
print(f"Expected: 6 result: {climbStairs(13)}")
