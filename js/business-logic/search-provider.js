import { clearPage } from "../utils/clear-page.js"
import { noResultCheck } from "../utils/no-result-check.js"
import { $result_list } from "../utils/on-body-load.js"

export function searchProvider(searchPromise, searchParams, template) {
    searchPromise(searchParams).then((items) => {
        items.forEach(item => {
            const element = $(template(item))
            $result_list.append(element)
        })
        clearPage()
        noResultCheck()
    }).catch((error) => {
        console.log(error)
        clearPage()
        noResultCheck()
    })
    document.getElementById('search-box').value = ''
}