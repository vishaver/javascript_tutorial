console.log("This is my new app.")

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    console.log("value of notes is: ", notes)
    console.log("type is:", typeof (notes))
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    console.log("value in notesobj:", notesObj);
    console.log("Type of log:", typeof (notesObj));
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = '';
    console.log(notes);
    showNotes();

});

function showNotes() {

    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        console.log(element, index)
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNote(this.id)"  class="btn btn-primary">Delete Note</button>
        </div>
    </div>`
    });
    let notesElm = document.getElementById("notes");
    console.log(notesElm.length)
    if (notesObj.length != 0) {

        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to show. Please add a note using "Add note section"`
    }
}

function deleteNote(index) {
    console.log("I am deleting", index);
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();


}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {

    let val = search.value.toLowerCase();

    console.log('Input event fired', val);

    let noteCards = document.getElementsByClassName("noteCard");

    Array.from(noteCards).forEach(function (element) {

        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(val)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })


})