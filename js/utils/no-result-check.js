import { $result_list } from "./on-body-load.js"

export function noResultCheck() {
    if ($result_list.contents().length === 0) {
        document.getElementById('result-list').innerHTML = '<strong>NO RESULTS FOUND!</strong> Please Try Again...'
    }
}