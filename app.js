const searchButton = () => {
    const searchField = document.getElementById("input-field");
    const searchText = searchField.value;
    searchField.value = "";
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
    fetch(url)
        .then(Response => Response.json())
        .then(show => displayShow(show.data));
}

const displayShow = show => {

}