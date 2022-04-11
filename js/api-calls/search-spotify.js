export function searchSpotify(searchParams) {
    const { searchTerm } = searchParams
    const clientId = '1866bcd156c04721bd5d669b75a0d5f7'
    const clientSecret = '3418b612e667483096772b57fb704ddb'

    return fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    }).then(response => {
        return response.json().then(({ access_token }) => {
            const token = access_token

            return fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=album`, {
                method: 'GET',
                headers: { 'Authorization': 'Bearer ' + token }
            }).then(response => response.json().then(({ albums }) => albums.items))
        })
    })
}