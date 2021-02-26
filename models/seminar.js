
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
let seminardrei = new Seminar("Seminar9", "Herr ElMard", "A.E.02", new Date("June 14, 2019 15:00:00"),new Date("June 13, 2019 20:00:00"), 10, 20,  ["erp5","erp6"]);


var array = new Array();
array[0]=seminareins;
array[1]=seminarzwei;
array[2]=seminardrei;

module.exports.array=array;