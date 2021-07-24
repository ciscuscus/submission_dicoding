const INCOMPLETE_BOOK = "incompleteBookshelfList";
const COMPLETE_BOOK = "completeBookshelfList";

function makeBook(inputBookId, inputBookTitle, inputBookAuthor, inputBookYear, inputBookIsComplete){

    const completeBookTitle = document.createElement("h2");
    completeBookTitle.innerText = inputBookTitle;

    const completeBookAuthor = document.createElement("p");
    completeBookAuthor.innerText = inputBookAuthor;

    const completeBookYear = document.createElement("p");
    completeBookYear.innerText = inputBookYear;
	
	const completeBookIsComplete = document.createElement("p");
    completeBookIsComplete.innerText = inputBookIsComplete;

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("action");

    const container = document.createElement("article");
    container.classList.add("book_item");
    container.append(completeBookTitle, completeBookAuthor, completeBookYear, completeBookIsComplete);
    
    if (inputBookIsComplete === false ){
        btnContainer.append(incompletedButton);
    } else{
        btnContainer.append(completedButton);
    }
    
    container.append(btnContainer);
    return container;
	
}

function addBook(){
    const inputBookId = +new Date();
    const inputBookTitle = document.getElementById("inputBookTitle").value;
    const inputBookAuthor = document.getElementById("inputBookAuthor").value;
    const inputBookYear = document.getElementById("inputBookYear").value;
    let inputBookIsComplete = document.getElementById("inputBookIsComplete").checked;

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

function createButton(buttonTypeClass, text, color, eventListener) {
    const button = document.createElement("button");
    button.innerText = text;
    button.classList = buttonTypeClass;
    button.classList = color;
    button.addEventListener("click", function (event) {
        eventListener(event);
    });
    return button;
}

function completedButton(){
    return createButton("btn_completed", "Selesai Dibaca", "green", function(event){
        completedBook(event.target.parentElement.parentElement.parentElement)
    })
}

function incompletedButton(){
    return createButton("btn_uncompleted", "Belum Selesai Dibaca", "green", function(event){
        incompletedBook(event.target.parentElement.parentElement.parentElement)
    })
}

function incompletedBook(bookElement){
    const bookUncompleted = document.getElementById(incompleteBookshelfList);

    const inputBookTitle = bookElement.querySelector(".book_item > h2").innerText;
    const inputBookAuthor = bookElement.querySelector(".author").innerText.replace("Penulis : ","");
    const inputBookYear = bookElement.querySelector(".year").innerText.replace("Tahun : ", "");

    const newBook = makeBook(inputBookTitle, inputBookAuthor, inputBookYear, false);

    bookUncompleted.append(newBook);
    bookElement.remove();
}

function incompletedBook(bookElement){
    const bookUncompleted = document.getElementById(completeBookshelfList);

    const inputBookTitle = bookElement.querySelector(".book_item > h2").innerText;
    const inputBookAuthor = bookElement.querySelector(".author").innerText.replace("Penulis : ","");
    const inputBookYear = bookElement.querySelector(".year").innerText.replace("Tahun : ", "");

    const newBook = makeBook(inputBookTitle, inputBookAuthor, inputBookYear, true);

    bookUncompleted.append(newBook);
    bookElement.remove();
}