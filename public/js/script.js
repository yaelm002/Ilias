
/*
function getViewportWidth() {
    return window.innerWidth || document.documentElement.clientWidth;
 }

let a = getViewportWidth();

console.log(`Die Viewportbreite beträgt: ${a} px`);
*/


class Seminar{

    constructor(titel, nameSeminarleiter, ort, startzeit, endzeit, freieplaetze, insgplaetze, tutoren){
        this.titel=titel;
        this.nameSeminarleiter=nameSeminarleiter;
        this.ort=ort;
        this.startzeit=startzeit;
        this.endzeit=endzeit;
        this.freieplaetze=freieplaetze;
        this.insgplaetze=insgplaetze;
        this.tutoren=tutoren;
    }

    anzahlBelegtePlaetze(){
        return this.insgplaetze-this.freieplaetze;
    }

}


let seminareins = new Seminar("Börsenseminar", "Herr Müller", "A.E.01", new Date("June 15, 2019 13:00:00"),new Date("June 13, 2019 15:00:00"), 10, 30, ["erp1","erp2"]);
let seminarzwei = new Seminar("Seminar2", "Herr Seker", "A.E.03", new Date("June 13, 2019 15:00:00"),new Date("June 13, 2019 20:00:00"), 10, 20,  ["erp3","erp4"]);
let seminardrei = new Seminar("Seminar3", "Herr ElMard", "A.E.02", new Date("June 14, 2019 15:00:00"),new Date("June 13, 2019 20:00:00"), 10, 20,  ["erp5","erp6"]);

let array = new Array();
array[0]=seminareins;
array[1]=seminarzwei;
array[2]=seminardrei;



function date_sort_1 (seminar1, seminar2) {
    //ordnet array aufsteigend
    if (seminar1.startzeit > seminar2.startzeit) return 1;
    if (seminar1.startzeit < seminar2.startzeit) return -1;
    return 0;
 };

  function date_sort_2(seminar1, seminar2) {
     //ordnet array aufsteigend
   return seminar1.startzeit-seminar2.startzeit;
  };

  array.sort(date_sort_2);

/*
    for(let sem of array){
        //let aus = `${sem.titel} (${sem.startzeit.toLocaleDateString}, ${sem.anzahlBelegtePlaetze} von ${sem.insgplaetze} Plätzen belegt) \n`;
        console.log(`${sem.titel}` + ' (' + `${sem.startzeit.toLocaleDateString()}` + ' ' + `${sem.anzahlBelegtePlaetze()}` + ' von '  + `${sem.insgplaetze}` + ' Pätzen belegt) ');
    }


function gebeArrayAus(arr){
    for(let sem of arr){
        //let aus = `${sem.titel} (${sem.startzeit.toLocaleDateString}, ${sem.anzahlBelegtePlaetze} von ${sem.insgplaetze} Plätzen belegt) \n`;
        console.log(`${sem.titel}` + ' (' + `${sem.startzeit.toLocaleDateString()}` + ' ' + `${sem.anzahlBelegtePlaetze()}` + ' von '  + `${sem.insgplaetze}` + ' Pätzen belegt) ');
    }
}
*/



function erzeugeZeile(node,seminar,link){
    let tr1 = document.createElement("tr");
    let td1 = document.createElement("td");
    let href = document.createElement("a");
    href.setAttribute("href",link);
    href.textContent=`${seminar.titel}`;
    td1.append(href);

    let td2 = document.createElement("td");
    td2.textContent=`${seminar.startzeit.toLocaleDateString()}`;

    
    let td3 = document.createElement("td");
    td3.textContent=`${seminar.ort}`;
    
    node.append(tr1,td1,td2,td3);

}

let start = document.querySelector("#seminarliste tbody ");
erzeugeZeile(start,seminareins,"boersenseminar.html");
erzeugeZeile(start,seminarzwei,"-");
erzeugeZeile(start,seminardrei,"");



 


  //console.log(array[0]);
 // console.log(array[1]);