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
    const searchResult = document.getElementById("search-result");
    searchResult.textContent = "";
    console.log(show);
    for (result of show.slice(0, 20)) {
        const create = document.createElement("div");
        create.classList.add("col-lg-4");
        create.innerHTML = `
        <div class="p-3 m-2 bg-white rounded shadow-lg">
                <h3>${result.brand}</h1>
                 <img class="img-fluid d-block mx-auto" src="${result.image}" alt="">
                 <p class="mb-2 mt-2">
                    Model number : ${result.phone_name}
                  </p>
                  <button class="btn btn-danger px-5">Details</button>
             </div>
        `
        searchResult.appendChild(create);
    }
}