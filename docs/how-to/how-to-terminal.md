---
sidebar_position: 1
---

# How to Terminal

Sometimes it is usefull to leave the world of a mouse and type commands at a command prompt in a termial. The commands are a bit different on Mac and Windows, but we will try to show both.

## How to get a command prompt

You need to use a progam that you can type these commands in. On Mac, that would be Terminal, and on Windows, that is CMD.exe. (new windows have powershell, but we will just use CMD)

## Where am I?

When you first open a terminal, or command prompt, you will be in your "home" directory. That is your users base directory. You can see where this is by typing `pwd` Hit enter. On Chris Wards Mac, that would be `/Users/cward`

## Lets move!

Folders are also called directories, so the command to move into, or change the directory is `cd` On a Mac there is a folder called Documents. On Windows there is a folder called 'My Documents' Lets go there.

`cd Documents` or `cd "My Documents"`

If you want to back up, type `cd ..`

## What is in there?

Go back to the documents folder you were in. Type `ls`. This shows a list of the files in the folder you are in. Now lets add a switch. Type `ls -la` You should now see a lot more files that start with a `.`. We call this dot files, or hidden files.

## Do I have to be in the folder to see what is in there?

Nope. There are are absolute, and relative paths. A path is like the URL or directory structure to get to another folder or file.

So, type `cd ~`. That will take you to your user directory.
Now type `ls Documents/Pictures` on a Mac, or `ls "My Documents"\Pictures` on Windows. Those commands will show the listing of files inside the RELATIVE path you specified. Now lets do ABSOLUTE paths. `ls /Users/cward/Documents/Pictures` on Chris Wards Mac. You would have to put your own user name in place of cward. On windows it would be `ls C:\Users\cward\"My Documents"\Pictures` Again you would need your user instead of cward. You can do that with most of the commands we look at.

## Can I see what is in a file?

Some of them. You can dump out the contents of a text file with `cat` and the name of the file. On a Mac, or Linux you can use `nano` and the name of the file. Look at the control command help at the bottom of the screen. On windows you can launch notepad by typing `notepad.exe` and the name of the file. (There are lots of text editors on Windows and Mac, but we aren't going to get into them here)

## How to create a directory?

Type `mkdir` and the name of the directory. You can then `cd` into it.

Remove it with `rmdir` and the name of the directory. You can only do this if all the files inside the directory are deleted. 

## How to delete files then?

Delete a single file with `rm` and the name of the file. You will need the extension, not just the name. You can also delete all the txt files with `rm *.txt` or every file with `rm *.*` Careful with that one.

## Can I copy a file into a directory I made?

Sure. If we are in a folder with a test.txt file. We would copy it to the test folder with `cp test.txt test` We would move it with `mv test.txt test`

## Is there a common code folder on the programming laptops?

Yes. On the programming laptops there is a directory where code is stored. Hopefaully it is in the same place on all machines. We can swith to there with `cd ~/source/repos`

## Is that it?

No, there are tones of commands, but those are some basics to get you going. This intro will be enough to get you started. Might you try out [Git](./how-to-git) next?
