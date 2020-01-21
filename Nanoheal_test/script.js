$(document).ready(() => {
    $('#formalign').on('submit', (e) => {
        let searchResult = $('#Search').val();
        moviesGet(searchResult);
        e.preventDefault();
    })
})

function moviesGet(searchResult) {
    console.log(searchResult);
    axios.get('http://www.omdbapi.com/?s='+searchResult)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
}