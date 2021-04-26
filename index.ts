(function setup(){
    console.log(`Webhook Controller V2 Setup
Enter '!exit' as the URL or message body to exit`)
    try {
        let url: string | null = prompt('Please enter a webhook url to use for this session: ')
        if (url==="!exit"||url==='"!exit"'||url==="'!exit'"||url===null) return false
        if (confirm(`You want to use '${url}' as your session url, right? (y/n) `)===false) {setup();return false}
        console.log(`Testing '${url}'...`)
        fetch(url)
        .then(res=>{
            if (res.status!==401) {console.error(`Test ping failed (${res.status}: ${res.statusText})`);setup()}
            console.log(`Test ping ponged (${res.status}: ${res.statusText}) (401 is good in this case)
Starting main process...`)
            main(url as string)
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

function main(url: string | null) {
    let message: string | null = prompt(`Please enter a message: `)
    if (message==="!exit"||message==="'!exit'"||message==='"!exit"'||message===null) return false;
    let imgurl: string | null = null;
    if (confirm("Would you like to attach an image? (y/n) ")===true) imgurl = prompt("Enter image url: ")
    if (imgurl) {
        fetch(url as string, {
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
        fetch(url as string, {
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

