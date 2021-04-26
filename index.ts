import fetch from 'node-fetch';
const input = require('prompt-sync')();
//THIS BUILD WILL FAIL !!!! THIS IS ON PURPOSE TO TEST THE TYPESCRIPT_BUILD SCRIPT!!!!!
const fail: boolean = "string"

(function setup(){
    console.log(`Webhook Controller V2 Setup
Enter '!exit' as the URL or message body to exit`)
    try {
        let url: string = input('Please enter a webhook url to use for this session: ')
        if (url==="!exit"||url==='"!exit"'||url==="'!exit'"||url===null) return false
        if (input(`You want to use '${url}' as your session url, right? (y/n) `)==="n") {setup();return false}
        console.log(`Testing '${url}'...`)
        fetch(url)
        .then(res=>{
            if (res.status!==401) {console.error(`Test ping failed (${res.status}: ${res.statusText})`);setup()}
            console.log(`Test ping ponged (${res.status}: ${res.statusText}) (401 is good in this case)
Starting main process...`)
            main(url)
            return false;
        })
        .catch(err=>{
            console.error(`Test ping failed: ${err}`)
            setup()
            return false; 
        })
    } catch(err) {
        console.log(err)
    }
})()

function main(url: string) {
    let message: string = input(`Please enter a message: `)
    if (message==="!exit"||message==="'!exit'"||message==='"!exit"'||message===null) return false;
    let imgurl: string = undefined;
    if (input("Would you like to attach an image? (y/n) ")==="y") imgurl = input("Enter image url: ")
    if (imgurl) {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                'text': message, 
                'cards': [{
                    'sections': [{
                        'widgets': [{
                            'image': {'imageUrl': imgurl}
                        }]
                    }]
                }] 
            }),
            headers: {
                'Content-Type': 'application/json charset=UTF-8'
            }
        }).then(res=>{
            if (!res.ok) {
                console.error(`Message failed to send (${res.status}: ${res.statusText})`)
                main(url)
                return false;
            } else {
                console.log(`Message sent (${res.status}: ${res.statusText})`)
                main(url)
                return false;
            }
        })
        .catch(err=>{
            console.error(`Something went really, really wrong: ${err}`)
            return false;
        })
    } else {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                'text': message
            }),
            headers: {
                'Content-Type': 'application/json charset=UTF-8'
            }
        }).then(res=>{
            if (!res.ok) {
                console.error(`Message failed to send (${res.status}: ${res.statusText})`)
                main(url)
                return false;
            } else {
                console.log(`Message sent (${res.status}: ${res.statusText})`)
                main(url)
                return false;
            }
        })
        .catch(err=>{
            console.error(`Something went really, really wrong: ${err}`)
            return false;
        })
    }
}
