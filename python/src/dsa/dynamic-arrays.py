class DynamicArray:
    def __init__(self, capacity=0):
        self.__count = 0
        self.__capacity = capacity
        self.array = [None] * self.__capacity

    def push(self, value):
        if self.__capacity <= self.__count:
            self._resize()
        self.array[self.__count] = value
        self.__count += 1

    def pop(self):
        if self.__count == 0:
            raise IndexError("Pop from empty array")
        value = self.array[self.__count - 1]
        self.array[self.__count - 1] = None
        self.__count -= 1
        return value

    def get(self, index):
        if 0 <= index < self.__count:
            return self.array[index]
        raise IndexError("Index out of bounds")
    
    def set(self, index, value):
        if 0 <= index < self.__count:
            self.array[index] = value
        else:
            raise IndexError("Index out of bounds")

    def _resize(self):
        self.__capacity = 2 * self.__capacity if self.__capacity else 1
        new_array = [None] * self.__capacity
        for i in range(self.__count):
            new_array[i] = self.array[i]
        self.array = new_array

    def size(self):
        return self.__count

if __name__ == "__main__":
    print("Dynamic Arrays in Python")

    dynamic_array = DynamicArray()
    dynamic_array.push(2)
    dynamic_array.push(4)

    for i in range(2):
        print(dynamic_array.get(i))

    dynamic_array.set(0, 10)
    print(dynamic_array.get(0))

    print("Popped value:", dynamic_array.pop())
    for i in range(dynamic_array.size()):
        print(dynamic_array.get(i))
