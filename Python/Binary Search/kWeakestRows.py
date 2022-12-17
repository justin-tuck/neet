import heapq
# 1337. The K Weakest Rows in a Matrix
# You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians).
# The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.
# A row i is weaker than a row j if one of the following is true:
#   - The number of soldiers in row i is less than the number of soldiers in row j.
#   - Both rows have the same number of soldiers and i < j.
# Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

# Time Complexity O( m log (m) + k)


class Solution:
    def kWeakestRows(self, mat: list[list[int]], k: int) -> list[int]:
        weakest = []
        index = 0
        for row in mat:
            # binary search is O(log(n)) each row while count is O(n), row.count is faster for smaller values
            num_of_ones = self.binary_search(row)  # row.count(1)
            heapq.heappush(weakest, (num_of_ones, index))
            index += 1

        result = []
        for i in range(0, k):
            count, index = heapq.heappop(weakest)
            result.append(index)

        return result

    def binary_search(self, row):
        low = 0
        high = len(row)
        while low < high:
            mid = low + (high - low) // 2
            if row[mid] == 1:
                low = mid + 1
            else:
                high = mid
        return low


mat = [[1, 1, 0, 0, 0],
       [1, 1, 1, 1, 0],
       [1, 0, 0, 0, 0],
       [1, 1, 0, 0, 0],
       [1, 1, 1, 1, 1]]
k = 3

solution = Solution()
print(
    f"Expected: [2,0,3] Result: {solution.kWeakestRows(mat, k)}")
