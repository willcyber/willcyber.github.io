from Replit_Code.week_0 import swap
from Replit_Code.week_0 import christmastree
from Replit_Code.week_0 import keypad
from Replit_Code.week_0 import animation1
from Replit_Code.week_0 import animation2
from Replit_Code.week_1 import infodb
from Replit_Code.week_1 import fib


main_menu = [
    ["Swap", swap.run],
    ["Keypad", keypad.run],
]

drawingsub_menu = [
    ["Christmas Tree", christmastree.options]
]

animationsub_menu = [
    ["Animation 1", animation1.run],
    ["Animation 2", animation2.ship]
]

infodbsub_menu = [
    ["InfoDB (For loop)", infodb.forl],
    ["InfoDB (While loop)", infodb.whilel],
    ["InfoDB (Recursive loop)", infodb.recursivel],
]

fibsub_menu = [
    ["Fibonacci Sequence", fib.seq],
    ["Fibonacci Term", fib.term]
]


border = "=" * 25
banner = f"\n{border}\nPlease Select An Option\n{border}"


def buildMenu(banner, options):
    print(banner)
    prompts = {0: ["Exit", None]}
    for op in options:
        index = len(prompts)
        prompts[index] = op
    for key, value in prompts.items():
        print(key, '->', value[0])
    choice = input("Type your choice> ")
    try:
        choice = int(choice)
        if choice == 0:
            return
        try:
            action = prompts.get(choice)[1]
            action()
        except TypeError:
            try:
                exec(open(action).read())
            except FileNotFoundError:
                print(f"File not found!: {action}")
    except ValueError:
        print(f"Not a number: {choice}")
    except UnboundLocalError:
        print(f"Invalid choice: {choice}")
    buildMenu(banner, options)


def drawingsubmenu():
    title = "Drawing" + banner
    buildMenu(title, drawingsub_menu)


def animationsubmenu():
    title = "Animation" + banner
    buildMenu(title, animationsub_menu)


def infodbsubmenu():
    title = "InfoDB" + banner
    buildMenu(title, infodbsub_menu)


def fibsubmenu():
    title = "Fibonacci" + banner
    buildMenu(title, fibsub_menu)


def menu():
    title = "Function Menu" + banner
    menu_list = main_menu.copy()
    menu_list.append(["Drawing", drawingsubmenu])
    menu_list.append(["Animations", animationsubmenu])
    menu_list.append(["InfoDB", infodbsubmenu])
    menu_list.append(["Fibonacci", fibsubmenu])
    buildMenu(title, menu_list)


if __name__ == "__main__":
    menu()
