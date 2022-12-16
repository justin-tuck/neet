# 2089. Find Target Indices After Sorting Array
# You are given a 0-indexed integer array nums and a target element target.
# A target index is an index i such that nums[i] == target.
# Return a list of the target indices of nums after sorting nums in non-decreasing order.
# If there are no target indices, return an empty list. The returned list must be sorted in increasing order.


class Solution:
    def targetIndices(self, nums: list[int], target: int) -> list[int]:
        result = []
        size = len(nums)

        # First sort
        nums.sort()
        index = self.binary_search(nums, target, 0, size)

        if not index is None:
            result.append(index)
            # find neighbors by branching out on array
            foundUp, foundDown = False, False
            for val in range(1, size):
                up, down = index + val, index - val
                if (up < size and up >= 0 and nums[up] == target):
                    result.append(up)
                else:
                    foundUp = True
                if (down < size and down >= 0 and nums[down] == target):
                    result.append(down)
                else:
                    foundDown = True

                if (foundUp and foundDown):
                    break
            result.sort()

        return result

    def binary_search(self, array, key, low, high):
        if (low > high):
            return None

        # middle = low + ((high - low) // 2)
        # need this check if not doing funky math
        middle = (high + low) // 2
        if middle >= len(array) or middle < 0:
            return None

        if (array[middle] == key):
            return middle
        elif array[middle] < key:
            return self.binary_search(array, key, middle + 1, high)
        else:
            return self.binary_search(array, key, low, middle - 1)


nums = [1, 2, 5, 2, 3]
target = 2

solution = Solution()
print(
    f"Expected: [1,2] Result: {solution.targetIndices(nums, target)}")

target = 3
print(
    f"Expected: [3] Result: {solution.targetIndices(nums, target)}")


target = 5
print(
    f"Expected: [4] Result: {solution.targetIndices(nums, target)}")

nums = [100, 1, 100]
target = 100
print(
    f"Expected: [1,2] Result: {solution.targetIndices(nums, target)}")

nums = [1]
target = 2
print(
    f"Expected: [] Result: {solution.targetIndices(nums, target)}")
