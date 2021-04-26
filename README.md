# Webhook Controller V2
A command-line-centered webhook control panel for Google Chat. 

## Setup for Windows

Setting this up is actually quite easy. You have to have [Node.js](https://nodejs.org/en/download/), npm (npm comes with Node.js), and [Git](https://git-scm.com/downloads) installed before you can install this.  

Once you have installed Node.js and Git, open Powershell or Command Prompt by typing 'Powershell' or 'Command Prompt' into the start search bar. It does not matter which one you choose. You could also use a different terminal, like Bash, but these instructions are for Powershell and Command Prompt.  

When you have opened a terminal, you need to navigate to the folder you want to install this in. You can do this by typing 'cd <FOLDER_NAME>' (obviously replace <FOLDER_NAME> with the actual folder name) to enter a folder and 'cd ..' to exit the folder you are currently in. You can also type 'dir' to list all the folders in your current folder. once you have entered the folder you want to download this into, run the following command:

        git clone https://github.com/one23four56/gchat-webhook-controller-v2.git
        
When that command finishes, you will have installed the webhook controller. Yay! Now you have to run it. First, enter into the folder you just downloaded by typing 'cd gchat-webhook-controller-v2'. Since this is the first time you will be running this program, you have to run the following command to set it up:

        npm run setup
        
Once that is finished, you will see a message saying 'Setup Complete, you may now run "npm start"'. Now all you have to do now is follow those instructions and run the following command: 

        npm start
        
### Exiting 

Once you've set up and ran this program for the first time, you may want to exit. You can do this by entering '!exit' as a message or webhook URL. 

### Running after Setup

Once you have ran and exited this program for the first time, you may want to run it again. You can do this in basically the same way as you downloaded it; enter into the folder using the cd command, and run the following command: 

        npm start

You do not need to run the 'git clone' or 'npm run setup' commands if you already downloaded and set up this program. 

### *Advanced* Running after Setup 

If you consider yourself an *advanced* person and you find the above process long and annoying, there is a solution for you. You could write a custom batch script to run this program with a simple click of the mouse. This actually isn't even that hard; a batch script is just a list of commands. Lets say I put a batch script on my desktop and I want it to run this program, which is stored in the downloads folder. A simple batch script that does that would be:

        @echo off 
        cd ..
        cd downloads 
        cd gchat-webhook-controller-v2
        npm start
        
Here is every line explained: 

1. @echo off disables output from commands like 'cd'
2. cd .. switches out of the desktop folder and into my user folder (if you have a new windows computer where desktop is part of OneDrive, you may have to have two of this command)
3. cd downloads switches out of my user folder and into my downloads folder
4. cd gchat-webhook-controller-v2 switches into the folder containing this program 
5. npm start starts this program
