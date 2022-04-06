import { $result_list } from "./on-body-load.js"

function clearPage() {
    document.getElementById('search-btn').removeAttribute('disabled')
    if (document.getElementById('panda') !== null) {
        document.getElementById('panda').remove()
        document.getElementById('listen-to').remove()
    }
}

function noResultCheck() {
    if ($result_list.contents().length === 0) {
        document.getElementById('result-list').innerHTML = '<strong>NO RESULTS FOUND!</strong> Please Try Again...'
    }
}

export {
    clearPage,
    noResultCheck
}