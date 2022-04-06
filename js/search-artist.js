import { searchItunes } from "./search-itunes.js"
import { searchSpotify } from "./search-spotify.js"

function searchArtist() {
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
function disableSelect() {
    document.getElementById('type-select').setAttribute('disabled', true)
}

function enableSelect() {
    document.getElementById('type-select').removeAttribute('disabled')
}

export {
    searchArtist,
    disableSelect,
    enableSelect
}