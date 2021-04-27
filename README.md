# Webhook Controller V2

A command-line-centered webhook control panel for Google Chat. 

## Use from the Browser

This webhook controller is written in such a way that you can use it without really downloading anything. It still requires some setup, however, but not much.   

If you look under the releases tab (to the right) and click the latest release, under assets you will find a file entitled `webhook.js`. Click on that file to download it. When the download is done, open the file in your favorite text editor **or** just drag it onto your browser's tab bar. 

Once you got the file open, press `Ctrl+A` to select all, and then `Ctrl+C` to copy.  

Now, open the browser you use and make a bookmark. You can make it on any page. Change the name to something like 'Webhook'. Click the button that allows you to change the URL. When you are editing the URL, delete everything that was already there, and then type `javascript:` and then press `Ctrl+V` to paste what you copied.   

Finish creating the bookmark. Then, click it when you are on any site. A popup should appear that lets you send Webhook messages. 

## Use from the command line (Windows)

Setting this up is actually quite easy. You only have to have [Git](https://git-scm.com/downloads) installed before you can install this.  

Once you have installed Git, open Powershell or Command Prompt by typing 'Powershell' or 'Command Prompt' into the start search bar. It does not matter which one you choose. You could also use a different terminal, like Bash, but these instructions are for Powershell and Command Prompt.  

When you have opened a terminal, you need to navigate to the folder you want to install this in. To enter a folder, you can type  `cd <FOLDER_NAME>` (obviously replace `<FOLDER_NAME>` with the actual folder name). To exit the folder you are currently in, type `cd ..`. You can also type `dir` to list all the folders in your current folder. Once you have entered the folder you want to download this into, run the following command:

        git clone https://github.com/one23four56/gchat-webhook-controller-v2.git
        
When that command finishes, you will have installed the webhook controller. Yay! Now you have to run it. This program uses Deno to run. Deno is pretty new, so chances are you do not have it installed. If that is the case, use the following command to install it:

        iwr https://deno.land/x/install/install.ps1 -useb | iex

Once you have gotten Deno installed, you have to run this program. You can do that with the following commands:

        cd gchat-webhook-controller-v2
        deno run --allow-net index.ts

### Exiting 

Once you've set up and ran this program for the first time, you may want to exit. You can do this by entering `!exit` as a message or webhook URL. 

### Running after Setup

Once you have ran and exited this program for the first time, you may want to run it again. You can do this in basically the same way as you downloaded it; enter into the folder using the cd command, and run the following command: 

        deno run --allow-net index.ts

You do not need to run the `git clone` command if you already downloaded and set up this program. 

### *Advanced* Running after Setup 

If you consider yourself an *advanced* person and you find the above process long and annoying, there is a solution for you. You could write a custom batch script to run this program with a simple click of the mouse. This actually isn't even that hard; a batch script is just a list of commands. Lets say I put a batch script on my desktop and I want it to run this program, which is stored in the downloads folder. A simple batch script that does that would be:

        @echo off 
        cd ..
        cd downloads 
        cd gchat-webhook-controller-v2
        deno run --allow-net index.ts
        
Here is every line explained: 

1. `@echo off` disables output from commands like `cd`
2. `cd ..` switches out of the desktop folder and into my user folder (if you have a new windows computer where desktop is part of OneDrive, you may have to have two of this command)
3. `cd downloads` switches out of my user folder and into my downloads folder
4. `cd gchat-webhook-controller-v2` switches into the folder containing this program 
5. `deno run --allow-net index.ts` starts this program
