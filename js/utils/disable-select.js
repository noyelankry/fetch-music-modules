//select type is only relevant for itunes search, so we might have to disable or enable it
//according to the API radio buttons.
export function disableSelect() {
    document.getElementById('type-select').setAttribute('disabled', true)
}

