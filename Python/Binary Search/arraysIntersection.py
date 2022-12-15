# arraysIntersection
# Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order,
#  return a sorted array of only the integers that appeared in all three arrays.


class Solution:
    def arraysIntersection(self, arr1: list[int], arr2: list[int], arr3: list[int]) -> list[int]:
        result = []

        def binary_search(array: list[int], value: int, low: int, high: int):
            if (low > high):
                return None

            middle = int((low + high) / 2)
            if (array[middle] == value):
                return middle

            if (array[middle] > value):
                return binary_search(array, value, low, middle - 1)
            else:
                return binary_search(array, value, middle + 1, high)
        # walk through one array, searching other two
        for item in arr1:
            inArray2 = binary_search(arr2, item, 0, len(arr2) - 1)
            inArray3 = binary_search(arr3, item, 0, len(arr3) - 1)
            if (not inArray2 == None and not inArray3 == None):
                result.append(item)
            # easy python solution
            # if (item in arr2 and item in arr3):
            #     result.append(item)
        return result


arr1 = [1, 2, 3, 4, 5]
arr2 = [1, 2, 5, 7, 9]
arr3 = [1, 3, 4, 5, 8]

solution = Solution()
print(
    f"Expected: [1,5]  Result: {solution.arraysIntersection(arr1, arr2, arr3)}")
