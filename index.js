let library=[];
const dialog = document.querySelector("#dialog");
const openModal = document.querySelector("#add-open-modal");
const closeButton = document.querySelector("#close-button");


readId=0;
let newBook=0;

function book (title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages
    this.read=read
    library.push(this);

}



function getDetails(e){
    e.preventDefault();
    let title=document.getElementById("title").value;
    let author=document.getElementById("author").value
    let pages=document.getElementById("pages").value
    let addBook="book"+newBook;
    // console.log(addBook);
  
  if(title && author && pages && document.getElementById('read').checked || document.getElementById('notRead').checked ){

    if(document.getElementById('read').checked) {
        addBook= new book(title,author,pages,"Read")
      }else if(document.getElementById('notRead').checked) {
        addBook= new book(title,author,pages,"Not read")
        
        
      }
      addToLibrary(addBook);
      newBook++
      dialog.close();
      document.getElementById("title").value='';
      document.getElementById("author").value='';
      document.getElementById("pages").value='';
      document.getElementById("read").checked = false;
      document.getElementById("notRead").checked = false;
      

  }
    
}


// Add to library
function addToLibrary(userBook){


let screen = document.querySelector(".container");


  let div = document.createElement('div');
  let buttonDiv=document.createElement("div")

  let headingLabel=document.createElement("p")
  let heading=document.createElement('h1');

  let nameLabel=document.createElement("p");
  let name=document.createElement("h3");

  let numberLabel=document.createElement("p");
  let number=document.createElement("h4");
  let userRead=document.createElement("h5");
  let changeButton=document.createElement("button");
  let deleteButton=document.createElement("button");


  numberLabel.textContent=`Page(s):`
  number.textContent = userBook.pages
  nameLabel.textContent=`Author:`
  name.textContent = userBook.author
  headingLabel.textContent=`Title:`
  heading.textContent = userBook.title

  userRead.textContent = userBook.read
  changeButton.textContent=`Status`
  deleteButton.textContent=`Delete`


  userRead.setAttribute("id",readId);
  changeButton.setAttribute("value",userBook.read);
  changeButton.setAttribute("id",readId);
  deleteButton.setAttribute("id",userBook.title);
  heading.setAttribute("id",userBook.title);
  deleteButton.setAttribute("class","deleteButton")
  changeButton.setAttribute("class","changeButton")
  buttonDiv.setAttribute("class", "bookSettingButton")

  deleteButton.setAttribute("value",userBook.author)
  div.setAttribute("id",userBook.author)


  
  readId++
  changeButton.setAttribute("onclick","changeStatus(event)");
  deleteButton.setAttribute("onclick","deleteBook(event)");




  div.appendChild(headingLabel)
  div.appendChild(heading);
  div.appendChild(nameLabel)
  div.appendChild(name);
  div.appendChild(numberLabel)
  div.appendChild(number);
  div.appendChild(userRead);
  buttonDiv.appendChild(changeButton);
  buttonDiv.appendChild(deleteButton);
  div.appendChild(buttonDiv)
  // div.appendChild(changeButton);
  // div.appendChild(deleteButton);
  screen.appendChild(div);
  

}



let readChecked = false;
// let notReadChecked=false;

function readUncheck(){
    if(readChecked) {
         document.getElementById("read").checked = false;
         checked = false;
         return;
    }
    readChecked = true;
}


function changeStatus(e){
  // console.log(`I was triggered`)
  let titleId=e.target.id;
  let readValue=document.getElementById(titleId);

  
  if(readValue.innerHTML==="Read"){
    document.getElementById(titleId).innerHTML="Not read"
    
  }else if(readValue.innerHTML==="Not read"){
    document.getElementById(titleId).innerHTML="Read"
    
  }
  
}

function deleteBook(e){
  let bookTitle=document.getElementById(e.target.id).innerHTML;

  let deleteDiv=document.getElementById(e.target.value);
  

  library.forEach(item=>{
    if(bookTitle===item.title){
      console.log(true);
      let indx=library.indexOf(item);
      library.splice(indx,1);
      
      deleteDiv.remove();
      

    }else{
      console.log(false);
    }
  })

}

openModal.addEventListener("click", () => dialog.showModal());
closeButton.addEventListener("click", () => dialog.close());

// v.title === bookTitle