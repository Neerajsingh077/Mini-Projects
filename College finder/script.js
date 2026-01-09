let url = "http://universities.hipolabs.com/search?country=India&name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let state = document.querySelector("input").value;
    console.log("Searching for state:", state);
    
    let collArr = await getColleges(state);
    show(collArr);
});

function show(collArr) {
    let list = document.querySelector("#list");
    list.innerHTML = "";

    for (let col of collArr) {
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(state) {
    try {
        let res = await axios.get(url + state);
        return res.data;
    } catch (e) {
        console.log("Error :", e);
        return [];
    }
}