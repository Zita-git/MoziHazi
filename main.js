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

    
}

function listazas(){
    let tablazat = "<table><tr><th>Sorszám</th><th>Név</th><th>Rendező</th><th>Kiadási év</th></tr>";
    
    for (let i = 0; i < adatok.length; i++) {
        let j =i+1;
        tablazat += "<tr><td>"+j+". </td><td>" + adatok[i].nev + "</td><td>" + adatok[i].rendezo + "</td><td>" + adatok[i].kiadasiEv + "</td></tr>";
    }

    tablazat += "</table>";

    document.getElementById('listazzaKi').innerHTML = tablazat;
}




document.getElementById('hozzaad').addEventListener('click',hozzaad);
document.getElementById('listazas').addEventListener('click',listazas);