export function clearPage() {
    document.getElementById('search-btn').removeAttribute('disabled')
    if (document.getElementById('panda') !== null) {
        document.getElementById('panda').remove()
        document.getElementById('listen-to').remove()
    }
}
