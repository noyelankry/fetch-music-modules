export function spotifyDom(item) {
    const template = `
    <div class="album-name">
        <div>
            <strong>Artist Name</strong>: ${item.artists[0].name}
        </div>
        <div>
            <strong>Album Name</strong>: ${item.name}
        </div>
        <div>
            <strong>Listen Now (Preview)</strong>:
            <div>
                <a href="${item.external_urls.spotify}" controls 
                   class="click-here" target = "_blank">Click Here!</a>
            </div>
        </div>
        <div>
            <img src="${item.images[0].url}" alt="artwork-img" class="artwork-img">
        </div>
        <br><br>
    </div>
    `
    return $(template)
}

