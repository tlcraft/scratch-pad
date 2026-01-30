import threading
import multiprocessing
import time

def count_up_to(n):
    count = 0
    for _ in range(n):
        count += 1
    return count


if __name__ == "__main__":
    result = count_up_to(10)
    print(f"Counted up to: {result}")

# Python's Global Interpreter Lock (GIL), for thread safety, is enabled by default in CPython, so no additional code is needed here.
# The GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecode simultaneously. It's a fundamental part of CPython's design.
