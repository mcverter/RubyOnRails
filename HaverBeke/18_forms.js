/**
 * Created by mitchell_verter on 8/10/16.
 */
var textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", function(e){
    if (e.keyCode === 113) {
        replaceSelection(textarea, "Khasekhemwy");
        e.preventDefault();
    }
})

function replaceSelection(field, word) {
    var from = field.selectionStart,
        to = field.selectionEnd;
    field.value = field.value.slice(0, from) + word + field.value.slice(to);

    filed.selectionStart = field.selectionEnd = from + word.length;
}

var checkbox = document.querySelector("#purple");
checkbox.addEventListener("change", function(){
    document.body.style.background =
        checkbox.checked ? "mediumpurple" : "";
})

var buttons = documents.getElementsByName("color");
function setColor(e) {
    document.body.style.background = e.target.value;
}

for (var i = 0; i < buttons.length; i++) {
    buttons.addEventListener("change", setColor)
}

var select = document.querySelector("select");
var output = document.querySelector("#output");
select.addEventListener("change", function(){
    var number = 0;
    for (var i =0; i < select.options.length; i++) {
        var option = select.options[i];
        if (option.selected) {}
        number += Number(option.value);
    }
    output.textContent = number;
});

function readFile(file) {
    return new Promise(function(succeed, fail){
        var reader = new FileReader();
        reader.addEventListener("load", function() {
            succeed(reader.result);
        })

        reader.addEventListener("error", function() {
            fail(reader.error);
        });
        reader.readAsText(file);
    })
}

localStorage.setItem('username', 'mitchel')
console.log(localStorage.getItem('username'));

var list = document.querySelector("#list");
function addToList(name) {
    var option = document.createElement("option");
    option.textContent = name;
    list.appendChild(option);
}

var notes = JSON.parse(localStorage.getItem("notes")) || {"shopping list": ""};
for (var name in notes) {
    if (notes.hasOwnProperty(name)) {
        addToList(name);
    }
}

function saveToStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

var current = document.querySelector("#currentnote");
current.value = notes[list.value];

list.addEventListener("change", function(){
    notes[list.value] = current.value;
    saveToStorage();
})

function addNote() {
    var name = prompt ("Note name", "");
    if (!name) return;
    if (!notes.hasOwnProperty(name)) {
        notes[name] = "";
        addToList(name);
        saveToStorage();
    }
    list.value = name;
    current.value = notes[name];
}