def compose_functions(*funcs):
    """Compose multiple functions into a single function.

    The composed function applies the input functions in sequence,
    passing the output of each function as the input to the next.

    Args:
        *funcs: A variable number of functions to compose.
    Returns:
        A single function that represents the composition of the input functions.
        The first function can accept multiple arguments, while subsequent functions
        should accept a single argument.
    Example:
        >>> def add(x, y): return x + y
        >>> def square(z): return z * z
        >>> composed = compose_functions(add, square)
        >>> composed(2, 3)  # Equivalent to square(add(2, 3))
        25
    """
    def composed_function(*arg, **kwargs):
        result = funcs[0](*arg, **kwargs)
        for func in funcs[1:]:
            result = func(result)
        return result
    return composed_function

if __name__ == "__main__":
    def add(x, y):
        return x + y

    def square(z):
        return z * z

    composed = compose_functions(add, square)
    print(composed(2, 3))
