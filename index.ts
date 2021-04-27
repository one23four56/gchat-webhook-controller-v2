(async function setup(){
    console.log(`Webhook Controller V2 Setup
Enter '!exit' as the URL or message body to exit`)
    try {
        let url: string | null = prompt('Please enter a webhook url to use for this session: ')
        if (url==="!exit"||url==='"!exit"'||url==="'!exit'"||url===null) return false
        if (confirm(`You want to use '${url}' as your session url, right?`)===false) {setup();return false}
        alert(`Press 'OK' or hit enter to start testing '${url}'`)
        try {
            let res: Response = await fetch(url)
            if (res.status!==401) {console.error(`Test ping failed (${res.status}: ${res.statusText}) (401 is the wanted status code)`);setup();return false}
            alert(`Test ping ponged (${res.status}: ${res.statusText}) (401 is good in this case)`)
            main(url as string)
            return false;
        } catch(err) {
            alert(`Test ping failed: ${err}`)
            setup()
            return false;
        }
    } catch(err) {
        console.log(err)
    }
})()

async function main(url: string | null) {
    let message: string | null = prompt(`Please enter a message: `)
    if (message==="!exit"||message==="'!exit'"||message==='"!exit"'||message===null) return false;
    let imgurl: string | null = null;
    if (confirm("Would you like to attach an image?")===true) imgurl = prompt("Enter image url: ")
    if (imgurl) {
        try {
            let res = await fetch(url as string, {
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
            })
            if (!res.ok) {
                console.error(`Message failed to send (${res.status}: ${res.statusText})`)
                main(url)
                return false;
            } else {
                console.log(`Message sent (${res.status}: ${res.statusText})`)
                main(url)
                return false;
            }
        } catch(err) {
            console.error(`Something went really, really wrong: ${err}`)
            return false;
        }
    } else {
        try {
            let res = await fetch(url as string, {
                method: 'POST',
                body: JSON.stringify({
                    'text': message
                }),
                headers: {
                    'Content-Type': 'application/json charset=UTF-8'
                }
            })
            if (!res.ok) {
                alert(`Message failed to send (${res.status}: ${res.statusText})`)
                main(url)
                return false;
            } else {
                alert(`Message sent (${res.status}: ${res.statusText})`)
                main(url)
                return false;
            }
        } catch(err) {
            alert(`Something went really, really wrong: ${err}`)
            return false;
        }
    }
}

