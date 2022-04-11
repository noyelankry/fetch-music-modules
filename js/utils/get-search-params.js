import { $search_term_input } from "./on-body-load.js"
import { $type_select_el } from "./on-body-load.js"

export const getSearchParams = (itunesElement, searchItunes, searchSpotify, itunesTemplate, spotifyTemplate) => {
    if (itunesElement.checked) {
        const searchPromise = searchItunes
        const searchTerm = $search_term_input.val()
        const searchType = $type_select_el.val()
        const searchParams = { searchTerm, searchType }
        const template = itunesTemplate
        return [searchPromise, searchParams, template]
    } else {
        const searchPromise = searchSpotify
        const template = spotifyTemplate
        const searchTerm = $search_term_input.val()
        return [searchPromise, { searchTerm }, template]
    }
}