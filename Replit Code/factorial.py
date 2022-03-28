import random


class Factorial:
  def __call__(self, n):
    if n <= 1:
      return 1
      # 0! = 1
    return n * self(n - 1)

def test():
  fac = Factorial()
  n = random.randint(0, 100)
  print(f"Factorial of {n}:", fac(n))
  n = random.randint(0, 100)
  print(f"Factorial of {n}:", fac(n))
  n = random.randint(0, 100)
  print(f"Factorial of {n}:", fac(n))
# testing factorials

def run():
  fac = Factorial()
  try:
    n = int(input("What factorial? "))
    # gets input and sets it into n
    if n > 500 or n < 0:
      print("input a number between 0 and 500")
    else:
      print(fac(n))
      # will run if n>0 and less than 500
  except:
    print("integer")