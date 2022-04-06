import { spotifyDom } from "./dom.js"
import { clearPage } from "./clear-page.js"
import { $result_list } from "./on-body-load.js"

function searchSpotify(artistName) {
    artistName = artistName.replace(/\s/g, '%20')
    console.log(artistName)

    const clientId = '1866bcd156c04721bd5d669b75a0d5f7'
    const clientSecret = '3418b612e667483096772b57fb704ddb'

    fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    }).then(response => {
        response.json().then(data => {
            let token = (data.access_token)
            console.log(token)

            fetch(`https://api.spotify.com/v1/search?q=${artistName}&type=album`, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + token }
            }).then(response1 => {
                response1.json().then(data1 => {
                    console.log('data1', data1.albums.items)
                    const items = data1.albums.items

                    for (let item of items) {
                        const element = spotifyDom(item)
                        $result_list.append(element)
                    }
                    clearPage()
                })
            })

        })
    })
    document.getElementsByClassName('search-box')[0].value = ''
}

export { searchSpotify }