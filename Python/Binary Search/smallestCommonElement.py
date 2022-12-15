# Given an m x n matrix mat where every row is sorted in strictly increasing order, return the smallest common element in all rows.

# If there is no common element, return -1.


def binary_search(array: list[int], value: int, bottom: int, top: int):
    if bottom > top:
        return None

    middle = int((bottom + top) / 2)
    if array[middle] == value:
        return middle
    elif array[middle] < value:
        return binary_search(array, value, middle + 1, top)
    else:
        return binary_search(array, value, bottom, middle - 1)


class Solution:
    def smallestCommonElement(self, mat: list[list[int]]) -> int:

        for item in mat[0]:
            inAll = True
            for i in range(1, len(mat)):
                # super fast way
                # if not item in mat[i]:
                # Binary search way ---
                if binary_search(mat[i], item, 0, len(mat[i])) == None:
                    inAll = False
                    break

            if inAll:
                return item

        return -1


mat = [[1, 2, 3, 4, 5], [2, 4, 5, 8, 10], [3, 5, 7, 9, 11], [1, 3, 5, 7, 9]]

solution = Solution()
print(
    f"Expected: 5 Result: {solution.smallestCommonElement(mat)}")
mat = [[1, 2, 3], [2, 3, 4], [2, 3, 5]]

print(
    f"Expected: 2 Result: {solution.smallestCommonElement(mat)}")
