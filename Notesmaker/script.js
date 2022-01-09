console.log("This is Aman Chandel");
showNotes(); // to stop disappearance of notes on reloading page.
//if User Adds A notes, Add it to localStorage

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj)); //Converting into string.
  addTxt.value = "";
  console.log(notesObj);
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
         
        <div class="noteCard my-3 mx-2 card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element}</p>
                <button id = "${index}" onClick = "deleteNote(this.id)" class="btn btn-primary">delete Note</button>
            </div>
      </div> `;
  });

  let notesElm = document.getElementById('notes');
  if(notesObj.length != 0){
      notesElm.innerHTML = html;
  }else{
      notesElm.innerHTML = `Nothing to Show ! Use "Add a note" Section to add notes.`
  }
}

//Function to delete a note
function deleteNote(index){
    console.log(' I am Deleting');
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj)); //Converting into string.
    showNotes();
}
