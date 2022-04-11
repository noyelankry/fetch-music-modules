let $result_list
let $search_term_input
let $type_select_el

export function onBodyLoad() {
    $result_list = $('#result-list')
    $search_term_input = $('#search-box')
    $type_select_el = $('#type-select')
}

export {
    $result_list,
    $search_term_input,
    $type_select_el
}