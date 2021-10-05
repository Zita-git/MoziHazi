class Film{


    constructor(nev,rendezo,kiadasiEv){
        this.nev= nev;
        this.rendezo= rendezo;
        this.kiadasiEv=kiadasiEv;

    }
}

let adatok=[];

function hozzaad(){
    let neve=document.getElementById('nev').value;
    let rendezoje=document.getElementById('rendezo').value;
    let kiadEve=document.getElementById('kiadasiEv').value;

    let egyFilmAdat =new Film(neve, rendezoje, kiadEve);

    adatok.push(egyFilmAdat);

    document.getElementById('nev').value="";
    document.getElementById('rendezo').value="";
    document.getElementById('kiadasiEv').value="";





    let tablazat = "<table class='table table-warning'><tr><th>Név</th><th>Rendező</th><th>Kiadási év</th></tr>";
    
    for (let i = 0; i < adatok.length; i++) {
        
        tablazat += "<tr><td>" + adatok[i].nev + "</td><td>" + adatok[i].rendezo + "</td><td>" + adatok[i].kiadasiEv + "</td></tr>";
    }

    tablazat += "</table>";

    document.getElementById('listazzaKi').innerHTML = tablazat;
}

function listazas(){
}

document.getElementById('hozzaad').addEventListener('click',hozzaad);