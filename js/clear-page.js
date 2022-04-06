function clearPage() {
    document.getElementById('search-btn').removeAttribute('disabled')
    if (document.getElementById('panda') !== null) {
        document.getElementById('panda').remove()
        document.getElementById('listen-to').remove()
    }
}

function noResultCheck() {
    if (document.getElementById('result-list').value === undefined) {
        document.getElementById('result-list').innerHTML = '<strong>NO RESULTS FOUND!</strong> Please Try Again...'
    }
}
export {
    clearPage,
    noResultCheck
}