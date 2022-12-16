# 1351. Count Negative Numbers in a Sorted Matrix
# Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise,
#  return the number of negative numbers in grid.

class Solution:
    def countNegatives(self, grid: list[list[int]]) -> int:
        num_of_negatives = 0

        negativeFound = None
        for row in grid:
            negativeFound = self.binary_search(row, 0, len(row) - 1)
            if not negativeFound is None:
                num_of_negatives += self.countNegativesInRow(
                    row, negativeFound)
                negativeFound = None

        return num_of_negatives

    def binary_search(self, row, low, high):
        if (low > high):
            return None

        middle = low + ((high - low) // 2)
        if (row[middle] < 0):
            return middle
        else:
            return self.binary_search(row, middle + 1, high)

    def countNegativesInRow(self, row, index):
        negatives = len(row) - index
        for i in range(1, index + 1):

            if (row[index - i] < 0):
                negatives += 1
            else:
                break

        return negatives


grid = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]

solution = Solution()
print(
    f"Expected: 8 Result: {solution.countNegatives(grid)}")
grid = [[3, 2], [1, 0]]

print(
    f"Expected: 0 Result: {solution.countNegatives(grid)}")
