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

    print("\nAfter modifying the original object's hobbies:")
    print("Original object:", json.dumps(original_object, indent=4))
    print("Shallow copied object:", json.dumps(shallow_copied_object, indent=4))
    
if __name__ == "__main__":
    print("Running shallow and deep copy examples...")

    original_object = {"name": "Alice", "age": 30, "hobbies": ["reading", "hiking"]}

    shallow_copy_example(original_object)
