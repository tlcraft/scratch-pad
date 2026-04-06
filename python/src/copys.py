"""
Examples demonstrating shallow and deep copy techniques in Python.

References:
    Python copy module - Shallow and deep copy operations: https://docs.python.org/3/library/copy.html
    Real Python - How to Copy Objects in Python: https://realpython.com/python-copy/
"""

import copy
import json
from dataclasses import dataclass


@dataclass
class Person:
    name: str
    age: int
    hobbies: list[str]


def shallow_copy_example(original_object: dict) -> None:
    """
    Demonstrates shallow copy using copy.copy().

    Creates a new top-level object, but nested objects (like lists)
    are still shared between the original and the copy.
    """
    shallow_copied_object = copy.copy(original_object)

    print("\nShallow Copy Example:")
    print("Original object:", json.dumps(original_object, indent=4))
    print("Shallow copied object:", json.dumps(shallow_copied_object, indent=4))

    original_object["name"] = "Bob"
    original_object["age"] = 31
    original_object["hobbies"].append("cooking")

    shallow_copied_object["name"] = "Charlie"
    shallow_copied_object["age"] = 42
    shallow_copied_object["hobbies"].append("swimming")

    print("\nAfter modifying the objects:")
    print("Original object:", json.dumps(original_object, indent=4))
    print("Shallow copied object:", json.dumps(shallow_copied_object, indent=4))


def shallow_copy_method_example(original_object: dict) -> None:
    """
    This pattern creates a new dictionary but does not create new nested objects (like lists).
    This uses the dict.copy() method to create a new dictionary.
    """
    shallow_copied_object = original_object.copy()

    print("\nShallow Copy Method Example:")
    print("Original object:", json.dumps(original_object, indent=4))
    print("Shallow copied object:", json.dumps(shallow_copied_object, indent=4))

    original_object["name"] = "Dave"
    original_object["age"] = 25
    original_object["hobbies"].append("painting")

    shallow_copied_object["name"] = "Eve"
    shallow_copied_object["age"] = 28
    shallow_copied_object["hobbies"].append("yoga")

    print("\nAfter modifying the objects:")
    print("Original object:", json.dumps(original_object, indent=4))
    print("Shallow copied object:", json.dumps(shallow_copied_object, indent=4))


def deep_copy_example(original_object: dict) -> None:
    """
    Demonstrates deep copy using copy.deepcopy().

    Creates a fully independent copy — nested objects are not shared.
    """
    deep_copied_object = copy.deepcopy(original_object)

    print("\nDeep Copy Example:")
    print("Original object:", json.dumps(original_object, indent=4))
    print("Deep copied object:", json.dumps(deep_copied_object, indent=4))

    original_object["name"] = "Daron"
    original_object["age"] = 51
    original_object["hobbies"].append("running")

    deep_copied_object["name"] = "Ed"
    deep_copied_object["age"] = 21
    deep_copied_object["hobbies"].append("skiing")

    print("\nAfter modifying the objects:")
    print("Original object:", json.dumps(original_object, indent=4))
    print("Deep copied object:", json.dumps(deep_copied_object, indent=4))


def unpacked_copy_example(original_object: dict) -> None:
    """
    This pattern creates a new dictionary but does not create new nested objects (like lists).
    This uses the "dictionary unpacking" syntax to create a new dictionary.
    """
    unpacked_object = {**original_object}

    print("\nUnpacked Copy Example:")
    print("Original object:", json.dumps(original_object, indent=4))
    print("Unpacked object:", json.dumps(unpacked_object, indent=4))

    original_object["name"] = "Frank"
    original_object["age"] = 35
    original_object["hobbies"].append("biking")

    unpacked_object["name"] = "Garth"
    unpacked_object["age"] = 45
    unpacked_object["hobbies"].append("art")

    print("\nAfter modifying the objects:")
    print("Original object:", json.dumps(original_object, indent=4))
    print("Unpacked object:", json.dumps(unpacked_object, indent=4))


def unpacked_nested_copy_example(original_object: dict) -> None:
    """
    This pattern creates a new dictionary and also creates new nested objects (like lists).
    This uses the "dictionary unpacking" syntax to create a new dictionary,
    and also creates new nested objects by using list.
    """
    unpacked_nested_object = {
        **original_object, 
        "hobbies": list(original_object["hobbies"])
    }

    print("\nUnpacked Nested Copy Example:")
    print("Original object:", json.dumps(original_object, indent=4))
    print("Unpacked Nested object:", json.dumps(unpacked_nested_object, indent=4))

    original_object["name"] = "Hank"
    original_object["age"] = 40
    original_object["hobbies"].append("gaming")

    unpacked_nested_object["name"] = "Ivy"
    unpacked_nested_object["age"] = 50
    unpacked_nested_object["hobbies"].append("dancing")

    print("\nAfter modifying the objects:")
    print("Original object:", json.dumps(original_object, indent=4))
    print("Unpacked Nested object:", json.dumps(unpacked_nested_object, indent=4))


def replace_copy_example(original_object: Person) -> None:
    """
    Function copy.replace() is more limited than copy() and deepcopy()
    It only supports named tuples created by namedtuple(), dataclasses, 
    and other classes which define method __replace__().
    """
    replaced_object = copy.replace(
        original_object,
        name="Ivy",
        age=50,
        hobbies=list(original_object.hobbies)
    )

    print("\nReplace Copy Example:")
    print("Original object:", original_object)
    print("Replaced object:", replaced_object)

    original_object.name = "Hank"
    original_object.age = 40
    original_object.hobbies.append("gaming")

    replaced_object.name = "Jim"
    replaced_object.age = 60
    replaced_object.hobbies.append("rafting")

    print("\nAfter modifying the objects:")
    print("Original object:", original_object)
    print("Replaced object:", replaced_object)


if __name__ == "__main__":
    print("Running shallow and deep copy examples...")

    ORIGINAL_OBJECT = {"name": "Alice", "age": 30, "hobbies": ["reading", "hiking"]}

    shallow_copy_example(copy.deepcopy(ORIGINAL_OBJECT))
    shallow_copy_method_example(copy.deepcopy(ORIGINAL_OBJECT))
    deep_copy_example(copy.deepcopy(ORIGINAL_OBJECT))
    unpacked_copy_example(copy.deepcopy(ORIGINAL_OBJECT))
    unpacked_nested_copy_example(copy.deepcopy(ORIGINAL_OBJECT))

    person: Person = Person(name="Alice", age=30, hobbies=["reading", "hiking"])
    replace_copy_example(person)
