import copy
import json

def shallow_copy_example(original_object):
    shallow_copied_object = copy.copy(original_object)

    print("\nShallow Copy Example:")
    print("Original object:", json.dumps(original_object, indent=4))
    print("Shallow copied object:", json.dumps(shallow_copied_object, indent=4))

    # Modifying the objects
    original_object["name"] = "Bob"
    original_object["age"] = 31
    original_object["hobbies"].append("cooking")

    shallow_copied_object["name"] = "Charlie"
    shallow_copied_object["age"] = 42
    shallow_copied_object["hobbies"].append("swimming")

    print("\nAfter modifying the objects:")
    print("Original object:", json.dumps(original_object, indent=4))
    print("Shallow copied object:", json.dumps(shallow_copied_object, indent=4))
    
def deep_copy_example(original_object):
    deep_copied_object = copy.deepcopy(original_object)

    print("\nDeep Copy Example:")
    print("Original object:", json.dumps(original_object, indent=4))
    print("Deep copied object:", json.dumps(deep_copied_object, indent=4))

    # Modifying the objects
    original_object["name"] = "Daron"
    original_object["age"] = 51
    original_object["hobbies"].append("running")

    deep_copied_object["name"] = "Ed"
    deep_copied_object["age"] = 21
    deep_copied_object["hobbies"].append("skiing")

    print("\nAfter modifying the objects:")
    print("Original object:", json.dumps(original_object, indent=4))
    print("Deep copied object:", json.dumps(deep_copied_object, indent=4))

if __name__ == "__main__":
    print("Running shallow and deep copy examples...")

    original_object = {"name": "Alice", "age": 30, "hobbies": ["reading", "hiking"]}

    shallow_copy_example(original_object)
    deep_copy_example(original_object)

"""
Resources:
https://docs.python.org/3/library/copy.html
https://realpython.com/python-copy/
"""
