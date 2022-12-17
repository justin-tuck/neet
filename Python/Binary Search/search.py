# 702. Search in a Sorted Array of Unknown Size
#  """
# This is ArrayReader's API interface.
# You should not implement it, or speculate about its implementation
# """
# class ArrayReader:
#    def get(self, index: int) -> int:

class Solution:
    def search(self, reader: 'ArrayReader', target: int) -> int:

        # defin boundery
        low = 0
        high = 1
        high_val = reader.get(high)
        while (high_val < target):
            low = high
            high = high * 2
            high_val = reader.get(high)

        return self.binary_search(reader, target, low, high)

    def binary_search(self, reader, target, low, high):
        if (low > high):
            return -1
        mid = low + (high - low) // 2
        val = reader.get(mid)
        if (val == target):
            return mid
        elif (val > target):
            return self.binary_search(reader, target, low, mid - 1)
        else:
            return self.binary_search(reader, target, mid + 1, high)

# had to test in leet code
