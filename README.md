# Webhook Controller V2

A command-line-centered webhook control panel for Google Chat. 

[Use from the Browser](#use-from-the-browser)  
[Use from the command line (Windows)](#use-from-the-command-line-windows)  
[Usage](#usage)

## Use from the Browser

### Use on a single website

This setup is really really easy. Under releases (to the right) click the latest release, and then under assets click `webhook.html`. When that file is done downloading, drag it onto your bookmarks bar. Click the bookmark to open a page with a button that you can click to open the popup. 

### Use on any website 

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

## Usage 

Before you can use this you have to have a webhook set up in Google Chat. You can do this by going into a group, clicking on the name, and clicking 'Manage Webhooks'.   
![image](https://user-images.githubusercontent.com/72141247/116242575-a8103980-a72b-11eb-926d-c781c8901b41.png)   
When you click that, you should be taken to the make a webhook screen right away, but if not you have to click 'Add Another'.  
![image](https://user-images.githubusercontent.com/72141247/116243118-35538e00-a72c-11eb-88b7-9a2019d21046.png)   
![image](https://user-images.githubusercontent.com/72141247/116242874-f9b8c400-a72b-11eb-9b82-6435d2e16f8f.png)   
The name and avatar image are what people see when your bot says something in chat. You can change them to whatever you want. When you are done making a webhook, click the copy button next to it to get the link.    
![Screenshot 2021-04-27 074537](https://user-images.githubusercontent.com/72141247/116243702-d5a9b280-a72c-11eb-93ea-4ebbe8f1480f.png)   
Now you can paste that link into this webhook controller and make the bot say whatever you want. 
