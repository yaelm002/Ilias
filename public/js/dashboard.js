

var plusKachel = document.createElement("div");
plusKachel.id="plusKachel";
plusKachel.textContent="+";
plusKachel.style.fontSize="1.5em";
plusKachel.style.backgroundColor="rgb(195, 211, 230)";

plusKachel.addEventListener("mouseover",mouseOver);
plusKachel.addEventListener("mouseout",mouseOut);

function mouseOver(){
    plusKachel.style.backgroundColor="rgb(73, 120, 172)";
}

function mouseOut(){
    plusKachel.style.backgroundColor="rgb(195, 211, 230)";
}

var elem = document.querySelector("main");
elem.append(plusKachel);

plusKachel.addEventListener("click",addSeminar);

function addSeminar(){
    var name = prompt("Bitte Titel des neuen Seminars eingeben:");
    var url = prompt("Bitte die URL des neuen Seminars eingeben!");
    let neu = document.createElement("div");
    let a = document.createElement("a");
    a.setAttribute("href",url);
    neu.append(a);
    let h2 = document.createElement("h2");
    h2.textContent=name;
    a.append(h2);
    plusKachel.before(neu);
    alert(`${name}` + " wurde hinzugefügt!");
}





