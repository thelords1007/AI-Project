# Part 2: Real Time Answering of Questions
import wikipedia
from googlesearch import search
from tkinter import *

root = Tk()
root.title("Google Meet")
root.geometry('300x300')
entry1 = Entry(root, width=30)
entry1.place(x=80, y=90)
entry1.pack(pady=10)

#This function would be called when the button in GUI is pressed
def search_on_web():
    val = entry1.get()#taking string input
    val + 'o'
    print(val)
    try:
        info = wikipedia.summary(val, sentences=5)
        print(info)
        print("\n")
        print("For Further Reference follow the below links: \n")
        for j in search(val, tld="co.in", num=10, stop=10, pause=2):
            print(j)

    except:
        for j in search(val, tld="co.in", num=10, stop=10, pause=2):
            print(j)


#The execution of the code startys from here
def main():
    btn = Button(root, text='Search', bd='5', command=search_on_web).pack(pady=10)#calling search_on_web function
    root.mainloop()


main()
