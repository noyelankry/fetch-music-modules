import { searchItunes } from "./itunes/search-itunes.js"
import { searchSpotify } from "./spotify/search-spotify.js"

export function searchArtist() {
    document.getElementById('result-list').innerHTML = ''

    let artistName = document.getElementById('search-box').value
    document.getElementById('search-btn').setAttribute('disabled', true)

    if (document.getElementsByName('API')[0].checked) {
        searchItunes(artistName)
    } else {
        searchSpotify(artistName)
    }
}

//select type is only relevant for itunes search, so we might have to disable or enable it
//according to the API radio buttons.
export function disableSelect() {
    document.getElementById('type-select').setAttribute('disabled', true)
}

export function enableSelect() {
    document.getElementById('type-select').removeAttribute('disabled')
}
