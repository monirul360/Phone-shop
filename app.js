// click button function
const searchButton = () => {
        const searchField = document.getElementById("input-field");
        const searchText = searchField.value;
        searchField.value = "";
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
            .then(Response => Response.json())
            .then(show => displayShow(show.data));
    }
    // display show function
const displayShow = show => {
    const searchResult = document.getElementById("search-result");
    searchResult.textContent = "";
    // console.log(show);
    if (show.length == 0) {
        const found = document.getElementById("not-found");
        found.innerText = "Not found result";
    } else {
        const found = document.getElementById("not-found");
        found.textContent = "";
        for (result of show.slice(0, 20)) {
            const create = document.createElement("div");
            create.classList.add("col-lg-4");
            create.innerHTML = `
        <div class="p-3 m-2 bg-white rounded shadow-lg">
                 <img class="img-fluid d-block mx-auto" src="${result.image}" alt="">
                 <p class="mt-3 lead">Brand : ${result.brand}</p>
                 <p  class="my-3">
                    Name : ${result.phone_name}
                  </p>
                  <button onclick="DetailsFunction('${result.slug}');" class="btn btn-danger px-5">Details</button>
             </div>
        `
            searchResult.appendChild(create);
        }
    }
}

const DetailsFunction = info => {
    const url = `https://openapi.programming-hero.com/api/phone/${info}`
    fetch(url)
        .then(Response => Response.json())
        .then(show => console.log(show.data.mainFeatures));
}