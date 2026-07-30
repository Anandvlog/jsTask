let title = document.querySelector("#title");
let url = document.querySelector("#url");
let saveBtn = document.querySelector("#save");
let form = document.querySelector("form");
let list_data = document.querySelector("#list_data");

let bookMarkData = JSON.parse(localStorage.getItem("bookMarkData")) || [];

let userData = () => {
  list_data.innerHTML = "";
  bookMarkData.forEach((val) => {
    console.log("val", val);
    list_data.innerHTML += `
             <li>
                        <a href="${val.url}" target="_blank">${val.title}</a>
                        <span title="Delete" id="delete" onclick="handledelete(${val.id})">X</span>
                    </li> 
        `;
  });
};

userData();
form.addEventListener("submit", (e) => {
  e.preventDefault();

  
  let title = e.target[0].value;
  let url = e.target[1].value;

  
  let bookMark = {
    id: Date.now(),
    title: title,
    url: url,
  };

  bookMarkData.push(bookMark);
  localStorage.setItem("bookMarkData", JSON.stringify(bookMarkData));
  userData();
  form.reset();
});

const handledelete = (id) => {
  bookMarkData = bookMarkData.filter((val) => val.id !==id);
  localStorage.setItem("bookMarkData", JSON.stringify(bookMarkData));
  userData()
};
