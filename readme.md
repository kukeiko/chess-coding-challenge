This is a little repository with some code challenges that focus on the topic of chess.

# How to start

The following instructions are written for Windows users only. If you're not using Windows you'll probably still be able to follow.

## Install Git

First you need Git installed. If you're running linux, you don't need instructions from me to do that.
If you're running windows, visit https://git-scm.com/downloads and follow the installation instructions.

The defaults of the windows installer should be good enough, i.e. you shouldn't have to do anything but click "next".

## Install NodeJS

You also need NodeJS installed on your computer. Without it, you won't be able to run JavaScript code on your computer as if it were a program like any other.
Just visit https://nodejs.org/en/ and download the installer - going with the LTS (Long Term Support) version is the best choice if you are unsure.

## Install Windows Terminal (optional)

Windows is a mess. It now has the following command line applications:

-   cmd.exe
-   powershell.exe
-   Windows Terminal

Windows Terminal is an application that'll provide usage of both cmd.exe and powershell.exe.
While - under the hood - it will still default to powershell.exe - it will allow you to open more tabs and give you a better user experience in general.
One of the things it dows is add a new context menu entry for windows explorer (right click) to open a terminal in the current folder.

## Restart

I'm not sure if you need to restart, but it can't hurt :)

## Make sure Git and NodeJS is installed

Open a cmd window (e.g. press Win + R, then type "cmd", then press enter), then do the following to check if installation was successful:

-   type "git --version", then press enter - you should see something akin to "git version 2.30.2.windows.1"
-   type "node -v", then press enter - you should see something akin to "v14.17.0"

If you don't see anything like the above, something went wrong - please consult google or open a descriptive issue w/ screenshot in this github repo.

## Clone the repo

In Explorer, navigate to the folder on your drive where you want this repository to be cloned into.

If you have Windows Terminal installed, just right click and select "Open in Windows Terminal".
Otherwise you'll have to Shift + right click and select "Open powershell window here".

Execute the following to clone the repository into its own folder into the current folder:

> git clone https://github.com/kukeiko/chess-coding-challenge.git

## Install NPM modules

Either use the explorer to open another terminal in the newly created folder or just use the existing one to change into the folder of the repository, then execute

> npm i

which will install all the required JavaScript packages from npmjs.com.
We need those packages to run our test suite (and maybe later even build an application!).

## Begin the Challenges

Open the cloned repository folder in the IDE of your choice (recommended: VS Code <3).

In the "src" folder you will see the functions you have to implement.
In the "test/unit" folder you will see the unit tests that check that the functions you are implementing are working correctly.

All unit tests are currently deactivated, since they are meant to be activated by you piece by piece

Open a terminal in the folder of the repository and execute

> npm start

to start running the tests. They will automatically refresh everytime you save anything within the src files.
Running the tests requires Chrome installed - and it will also open a Chrome browser window that you should not close (if you want to stop the tests running,
just go to the terminal and press CTRL + C - you might need to press it multiple times).

// todo - finish readme
