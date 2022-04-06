import { iTunesDom } from "./dom.js"
import { clearPage, noResultCheck } from "./clear-page.js"
import {
    $result_list,
    $search_term_input,
    $type_select_el
} from "./on-body-load.js"

function searchItunes() {
    $result_list.innerHTML = ''
    let
        search_term = $search_term_input.val(),
        searchType = $type_select_el.val()

    search_term = search_term.replace(/\s/g, '-')
    console.log(search_term)

    fetch(`https://itunes.apple.com/search?term=${search_term}${searchType === 'all' ? '' : '&entity=' + searchType}`)
        .then(response => {
            response.json().then(data => {
                console.log('data', data)
                const items = data.results.filter(item => !!item.kind)

                for (let item of items) {
                    const element = iTunesDom(item)
                    $result_list.append(element)
                }
                clearPage()
                noResultCheck()
            }).catch((error) => {
                console.log(error)
                clearPage()
                noResultCheck()
            })
        })
    document.getElementById('search-box').value = ''
}

export { searchItunes }
