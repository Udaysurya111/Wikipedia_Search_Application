let seain = document.getElementById("searchInput");
let seares = document.getElementById("searchResults");
let spi = document.getElementById("spinner")
let p = "https://apis.ccbp.in/wiki-search?search=";

function append(hi) {
    spi.classList.add("d-none")
    let {
        title,
        link,
        description
    } = hi
    //container div
    let cdi = document.createElement("div")
    cdi.classList.add("result-item")

    //div for link and heading
    let di = document.createElement("div")
    cdi.appendChild(di)
    //heading
    let hea = document.createElement("h1")
    hea.textContent = title
    hea.classList.add("result-title")
    di.appendChild(hea)
    let an = document.createElement("a")
    an.href = link
    an.textContent = link
    an.target = "_blank"
    an.classList.add("result-url")
    di.appendChild(an)
    let pa = document.createElement("p")
    pa.textContent = description
    pa.classList.add("link-description")
    cdi.appendChild(pa)
    seares.appendChild(cdi)
}

function display(result) {
    for (let i of result) {
        append(i)
    }
}

function a(event) {

    if (event.type === "keydown") {
        https: //freepngimg.com/png/58656-wikipedia-logo
            seares.textContent = ""
        spi.classList.remove("d-none")
        let a = {
            method: "GET"
        }
        fetch(url, a)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {
            let {
                search_results
            } = data
            display(search_results)
        });
    }
}
seain.addEventListener("keydown", a);