function clearPage() {
    document.getElementById('search-btn').removeAttribute('disabled')
    if (document.getElementsByClassName('album-name').length != 0) {
        if (document.getElementById('panda') !== null) {
            document.getElementById('panda').remove()
            document.getElementById('listen-to').remove()
        }
    }
}

export { clearPage }