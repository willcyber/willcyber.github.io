def sort(a, b):
    if b < a:
        a, b = b, a
    return a, b


def run():
  a = input("first number")
  b = input("second numer")
  print(', '.join(sort(a, b)))