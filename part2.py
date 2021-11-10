import wikipedia
from googlesearch import search
from tkinter import * 
root = Tk() 

root.geometry('400x200')
entry1 = Entry(root, width = 30)
entry1.pack()

def search_on_web():
    val = entry1.get()
    #print(val)
    try:
        info = wikipedia.summary(val, sentences = 5)
        print(info)
    except: 
        for j in search(val, tld="co.in", num=10, stop=10, pause=2):
	        print(j)

def main():
    # val = input("Enter your Query: ")
    Button(root, text = 'Search', bd = '5', command = search_on_web).pack()   
    root.mainloop()
    #search_on_web(val)

main()