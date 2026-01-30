import threading
import multiprocessing

def count_up_to(n):
    count = 0
    for _ in range(n):
        count += 1
    return count


if __name__ == "__main__":
    # Sequential execution
    result = count_up_to(10)
    print(f"Counted up to: {result}")

    # Python's Global Interpreter Lock (GIL), for thread safety, is enabled by default in CPython, so no additional code is needed here.
    # The GIL is a mutex that protects access to Python objects, preventing multiple threads from executing Python bytecode simultaneously. It's a fundamental part of CPython's design.

    # Threading (GIL limits parallel execution for CPU-bound tasks)
    threads = [threading.Thread(target=count_up_to, args=(1000000,)) for _ in range(4)]
    for t in threads:
        t.start()
    for t in threads:
        t.join()
    
    # Multiprocessing (bypasses GIL, true parallelism)
    with multiprocessing.Pool(4) as pool:
        results = pool.map(count_up_to, [1000000] * 4)

    print(f"Multiprocessing results: {results}")
