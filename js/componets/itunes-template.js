export function itunesTemplate(item) {
    const template = `
    <div class="album-name">
        <div>
            <strong>Artist Name</strong>: ${item.artistName}
        </div>
        <div>
            <strong>Album Name</strong>: ${item.collectionName}
        </div>
        <div>
            <strong>Listen Now (Preview)</strong>:
            <div>
                <audio src="${item.previewUrl}" controls class="audio-player"></audio>
            </div>
        </div>
        <div>
            <img src="${item.artworkUrl100}" alt="artwork-img" class="artwork-img">
        </div>
        <br><br>
    </div>
    `
    return template
}
