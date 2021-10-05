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

    let egyFilmAdat= [neve, rendezoje, kiadEve];

    adatok.push(egyFilmAdat);

    document.getElementById('nev').innerHTML="";
    document.getElementById('rendezo').innerHTML="";
    document.getElementById('kiadasiEv').innerHTML="";

}

document.getElementById('hozzaad').addEventListener('click',hozzaad);