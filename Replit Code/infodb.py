# Hack 1
infodb = [{
            "Name": "William Wu",
            "Favorite Food": "Pizza",
            "Top 3 Hobbies": ["Gaming", "Coding", "Reading"],
          },
          {
            "Name": "Smart Kid",
            "Favorite Food": "Burgers",
            "Top 3 Hobbies": ["Studying", "Reading", "Youtube"],
          },
          {
            "Name": "Cool Kid",
            "Favorite Food": "Pizza",
            "Top 3 Hobbies": ["Exercising", "Gaming", "Running"],
          },
          {
            "Name": "Happy Kid",
            "Favorite Food": "Cake",
            "Top 3 Hobbies": ["Gardening", "Reading", "Singing"],
          }
          ]


def print_data(n):
    print(infodb[n]["Name"])
    print("\t", "Favorite Food:", end="")
    print("".join(infodb[n]["Favorite Food"]))
    print("\t", "Top 3 Hobbies: ", end="")
    print(", ".join(infodb[n]["Top 3 Hobbies"]))
    print()

# Hack 2

def forl():
  for i in range(len(infodb)):
    print_data(i)


def whilel():
  n = 0
  while n < len(infodb):
    print_data(n)
    n += 1
  return


def recursivel():
  n = 0
  recursivel1(n)

def recursivel1(n):
    if n < len(infodb):
        print_data(n)
        recursivel1(n + 1)
    return # exit condition