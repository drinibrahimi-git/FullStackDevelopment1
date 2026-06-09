let names = [];

function addName() {
    let input = document.getElementById("nameInput");
    let name = input.value;

    // prevent empty input
    if (name === "") return;

    // add to array
    names.push(name);

    // clear input
    input.value = "";

    // update list
    showNames();
}

function showNames() {
    let list = document.getElementById("nameList");

    // clear old list
    list.innerHTML = "";

    // display all names
    for (let i = 0; i < names.length; i++) {
        list.innerHTML += "<li>" + names[i] + "</li>";
    }
}