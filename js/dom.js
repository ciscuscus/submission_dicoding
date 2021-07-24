const INCOMPLETE_BOOK = "incompleteBookshelfList";
const COMPLETE_BOOK = "completeBookshelfList";
function makeIncompleteBook(inputBookId,inputBookTitle, inputBookAuthor, inputBookYear, inputBookIsComplete){

    const incompleteBookTitle = document.createElement("h2");
    incompleteBookTitle.innerText = inputBookTitle;

    const incompleteBookAuthor = document.createElement("p");
    incompleteBookAuthor.innerText = inputBookAuthor;

    const incompleteBookYear = document.createElement("p");
    incompleteBookYear.innerText = inputBookYear;
	
	const incompleteBookIsComplete = document.createElement("p");
    incompleteBookIsComplete.innerText = inputBookIsComplete;

    const textContainer = document.createElement("div");
    textContainer.classList.add("book_list");
    textContainer.append(incompleteBookTitle, incompleteBookAuthor, incompleteBookYear, incompleteBookIsComplete);

    const container = document.createElement("article");
    container.classList.add("book_item");
    container.appendChild(textContainer);
    return container;
	
}

function makeBook(inputBookId, inputBookTitle, inputBookAuthor, inputBookYear, inputBookIsComplete){

    const completeBookTitle = document.createElement("h2");
    completeBookTitle.innerText = inputBookTitle;

    const completeBookAuthor = document.createElement("p");
    completeBookAuthor.innerText = inputBookAuthor;

    const completeBookYear = document.createElement("p");
    completeBookYear.innerText = inputBookYear;
	
	const completeBookIsComplete = document.createElement("p");
    completeBookIsComplete.innerText = inputBookIsComplete;

    const textContainer = document.createElement("div");
    textContainer.classList.add("book_list");
    textContainer.append(completeBookTitle, completeBookAuthor, completeBookYear, completeBookIsComplete);

    const container = document.createElement("article");
    container.classList.add("book_item");
    container.appendChild(textContainer);
    return container;
	
}

function addBook(){
    const inputBookId = +new Date();
    const inputBookTitle = document.getElementById("inputBookTitle").value;
    const inputBookAuthor = document.getElementById("inputBookAuthor").value;
    const inputBookYear = document.getElementById("inputBookYear").value;
    const inputBookIsComplete = document.getElementById("inputBookIsComplete").checked;

    if(inputBookIsComplete === false){
        const incompleteBook = document.getElementById(INCOMPLETE_BOOK);
        const completeFalse = makeBook(inputBookId,inputBookTitle, inputBookAuthor, inputBookYear, inputBookIsComplete);
        incompleteBook.append(completeFalse);
    }
    else{
        const completeBook = document.getElementById(COMPLETE_BOOK);
        const completeTrue = makeBook(inputBookId,inputBookTitle, inputBookAuthor, inputBookYear, inputBookIsComplete);
        completeBook.append(completeTrue);
        }

  
  
    
}

function createButton(buttonTypeClass, eventListener) {
    const button = document.createElement("button");
    button.classList.add(buttonTypeClass);
    button.addEventListener("click", function(event){
        eventListener(event);
    });
    return button();
}