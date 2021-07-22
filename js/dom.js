const INCOMPLETE_BOOK = "incompleteBookshelfList";

function makeBook(inputBookTitle, inputBookAuthor, inputBookYear, inputBookIsComplete){

    const incompleteBookTitle = document.createElement("h2");
    incompleteBookTitle.innerText = inputBookTitle;

    const incompleteBookAuthor = document.createElement("p");
    incompleteBookAuthor.innerText = inputBookAuthor;

    const incompleteBookYear = document.createElement("p");
    incompleteBookYear.innerText = inputBookYear;
	
	const incompleteBookIsComplete = document.createElement("p");
    incompleteBookIsComplete.innerText = inputBookIsComplete;

    const textContainer = document.createElement("div");
    textContainer.classList.add("inner");
    textContainer.append(incompleteBookTitle, incompleteBookAuthor, incompleteBookYear, incompleteBookIsComplete);

    const container = document.createElement("div");
    container.classList.add("item", "shadow");
    return container.appendChild(textContainer);
	
}

function addBook(){
    const incompleteBook = document.getElementById(INCOMPLETE_BOOK);
    const inputBookTitle = document.getElementById("inputBookTitle").value;
    const inputBookAuthor = document.getElementById("inputBookAuthor").value;
    const inputBookYear = document.getElementById("inputBookYear").value;
    const inputBookIsComplete = document.getElementById("inputBookIsComplete").checked;

        const tes = makeBook(inputBookTitle, inputBookAuthor, inputBookYear, inputBookIsComplete);
        incompleteBook.append(tes);
  
    
}
