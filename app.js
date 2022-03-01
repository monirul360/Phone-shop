// click button function
const searchButton = () => {
        const searchField = document.getElementById("input-field");
        const searchText = searchField.value;
        searchField.value = "";
        const detailsClear = document.getElementById("details-info");
        detailsClear.textContent = "";

        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
        fetch(url)
            .then(Response => Response.json())
            .then(show => displayShow(show.data));
    }
    // display show function
const displayShow = show => {
    const searchResult = document.getElementById("search-result");
    searchResult.textContent = "";
    // check result
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

// Details information function
const DetailsFunction = info => {
    const url = `https://openapi.programming-hero.com/api/phone/${info}`
    fetch(url)
        .then(Response => Response.json())
        .then(show => DetailsDisplay(show.data));
}


const DetailsDisplay = show => {
    const detailsInfo = document.getElementById("details-info");
    detailsInfo.textContent = "";
    const create = document.createElement("div");
    create.innerHTML = ` 
        <div class="p-3 m-2">
           <img class="img-fludi" src="${show.image}" alt="">
           <p class="lead my-3">Name : ${show.name}</p>
            <p>releaseDate: ${show.releaseDate?show.releaseDate:'No found releaseDate'}</p>
        </div>

       <div class="p-3">
           <p> <span class="text-danger">storage : </span> ${show.mainFeatures.storage}</p>
           <p> <span class="text-danger">display Size : </span> ${show.mainFeatures.displaySize} </p>
           <p> <span class="text-danger">chipSet : </span>${show.mainFeatures.chipSet} </p>
          <p> <span class="text-danger">memory : </span>${show.mainFeatures.memory}</p>
          <p>sensors information</p>
          <ul>
            <li>${show.mainFeatures.sensors[0]}</li>
            <li>${show.mainFeatures.sensors[1]}</li>
            <li>${show.mainFeatures.sensors[2]}</li>
            <li>${show.mainFeatures.sensors[3]}</li>
            <li>${show.mainFeatures.sensors[4]}</li>
             <li>${show.mainFeatures.sensors[5]}</li>
          </ul>
            <p>others information</p>
           <p> <span class="text-danger"> WLAN : </span>${show.others.WLAN} </p>
            <p> <span class="text-danger"> Bluetooth : </span>${show.others.Bluetooth} </p>
             <p> <span class="text-danger"> GPS : </span>${show.others.GPS} </p>
              <p> <span class="text-danger"> NFC : </span>${show.others.NFC} </p>
               <p> <span class="text-danger"> Radio : </span>${show.others.Radio} </p>
                <p> <span class="text-danger"> USB : </span>${show.others.USB} </p>
        </div>

    `
    detailsInfo.appendChild(create);
}