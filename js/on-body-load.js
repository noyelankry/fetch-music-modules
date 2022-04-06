let
    $result_list,
    $search_term_input,
    $type_select_el

function onBodyLoad() {
    $result_list = $('#result-list')
    $search_term_input = $('#search-box')
    $type_select_el = $('#type-select')
}

export {
    onBodyLoad,
    $result_list,
    $search_term_input,
    $type_select_el
}