import { onBodyLoad } from "./on-body-load.js"
import { searchArtist, enableSelect, disableSelect } from "./search-artist.js"

window.onBodyLoad = onBodyLoad
window.searchArtist = searchArtist
window.disableSelect = disableSelect
window.enableSelect = enableSelect

let input = document.getElementById('search-box')
input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        searchArtist()
    }
})