const logo = function () {
  

  function newElement() {
    let li = document.createElement("li");

    let inputValue = document.getElementById("myInput").value;
    let t = document.createTextNode(inputValue);

    li.appendChild(t);
    if (inputValue === "") {
      alert("Вы должны написать что-нибудь!!");
    } else {
      document.getElementById("myUl").appendChild(li);
    }
    document.getElementById('myinput').value = "";

    let span = document.createElement('span');
    let txt =  document.createTextNode('\u00d7');
    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = 'none';
        }
        
    }
  }
};


export default logo;