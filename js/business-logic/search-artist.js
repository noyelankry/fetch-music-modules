import { searchItunes } from "../api-calls/search-itunes.js"
import { searchSpotify } from "../api-calls/search-spotify.js"
import { getSearchParams } from "../utils/get-search-params.js"
import { itunesTemplate } from "../componets/itunes-template.js"
import { spotifyTemplate } from "../componets/spotify-template.js"
import { searchProvider } from "./search-provider.js"

export function searchArtist() {
    document.getElementById('result-list').innerHTML = ''
    document.getElementById('search-btn').setAttribute('disabled', true)

    const itunesRadioButtonIndex = 0
    const itunesElement = document.getElementsByName('API')[itunesRadioButtonIndex]
    const [searchPromise, searchParams, template] =
        getSearchParams(itunesElement, searchItunes, searchSpotify, itunesTemplate, spotifyTemplate)

    searchProvider(searchPromise, searchParams, template)
}