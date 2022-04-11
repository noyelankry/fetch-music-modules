import { onBodyLoad } from "./utils/on-body-load.js"
import { searchArtist } from "./business-logic/search-artist.js"
import { enableSelect } from "./utils/enable-select.js"
import { disableSelect } from "./utils/disable-select.js"

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