import copy
import json

def shallow_copy_example(original_object):
    shallow_copied_object = copy.copy(original_object)

    print("\nShallow Copy Example:")
    print("Original object:", json.dumps(original_object, indent=4))
    print("Shallow copied object:", json.dumps(shallow_copied_object, indent=4))

    # Modifying the original object
    original_object["name"] = "Bob"
    original_object["age"] = 31
    original_object["hobbies"].append("cooking")

    print("\nAfter modifying the original object's hobbies:")
    print("Original object:", json.dumps(original_object, indent=4))
    print("Shallow copied object:", json.dumps(shallow_copied_object, indent=4))
    
if __name__ == "__main__":
    print("Running shallow and deep copy examples...")

    original_object = {"name": "Alice", "age": 30, "hobbies": ["reading", "hiking"]}
    print("Original object:", json.dumps(original_object, indent=4))

    shallow_copy_example(original_object)
