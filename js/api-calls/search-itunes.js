export const searchItunes = (searchParams) => {
    const { searchTerm, searchType } = searchParams
    return fetch(
        `https://itunes.apple.com/search?term=${searchTerm}${searchType === "all" ? "" : `&entity=${searchType}`}`)
        .then(response => response.json().then(({ results }) => results.filter(({ kind }) => kind)))
}

