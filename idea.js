function abrirPagina(){

    document.getElementById("inicio").style.display="none";
    document.getElementById("contenido").style.display="block";

    document.getElementById("musica").play();

    escribirCarta();
}

/* Carta escribiéndose */

const texto = `💗Amado 16 de Mayo...💗

Estoy tan agradecida de Dios porque te haya 
puesto en mi camino incluso diria que desde mucho
antes pero como dices nos encontramos en el 
tiempo perfecto💗.

Es inevitable escuchar nuestra playlist y recordar 
como empezo nuestra linda historia y asi sucesivamente mientras 
va avanzando la playlist, asi tambien iba avanzando nuestra historia
Y como nuestro amor va creciendo más y más💗.

Gracias por cada momento,
cada conversación,
cada abrazo,
cada risa
y cuando estas lejos o trabajando 
te siento en cada canción de amor 💗 .

Mayo 16 sonaba 444 , 111, ke pa-remix o QLOO cuando salio 
y ya era nuestra tercera cita jiji.

Ojitos Lindos que todavia recuerdo el lee el titulo. Te la dedico
Ojos Color Sol mientras ibamos al mcdonals,
Bemaste, vivo, destello, sparks o tema para jovenes enamorados mientras
poco a poco sale la luna y sus estrellas a veces tomando tecito o estar en el auto simplemente💚.

La Velocidad de la Luz, Cosas Que No Te Dije, Algo Magico, una loca historia de amor
Corazón, Ella,Motor y Motivo, Eres Mi Bien, Cuando Nos Besamos y Amor 
mientras cantamos juntos💚.

Weltita, You Rock My World, Algo Que Me Gusta De Ti, Miamor, What's My Name 
me lleva de inmediato a y si vamos a la playa y venirnos en la noche con la música a mil💚.

Y si pudiera volver al inicio,
volvería a elegirte una y otra vez. 💗

Te Amo Más Que Mi Alma 💚💗

Camila🥹💚💗✨`;

let i = 0;

function escribirCarta(){

    if(i < texto.length){

        document.getElementById("textoFinal").innerHTML += texto.charAt(i);

        i++;

        setTimeout(escribirCarta,40);
    }
}

/* Corazones */

setInterval(()=>{

    const corazon = document.createElement("div");

    corazon.classList.add("corazon");

    corazon.innerHTML="💚💗";

    corazon.style.left=Math.random()*100+"vw";

    corazon.style.fontSize=(Math.random()*20+15)+"px";

    corazon.style.animationDuration=(Math.random()*3+4)+"s";

    document.body.appendChild(corazon);

    setTimeout(()=>{
        corazon.remove();
    },7000);

},300);

/* Contador */

const inicio = new Date("2025-05-16");

function actualizarContador(){

    const hoy = new Date();

    const diferencia = hoy - inicio;

    const dias = Math.floor(diferencia / (1000*60*60*24));

    document.getElementById("contador").innerHTML =
    `💗💚 Han pasado ${dias} días desde nuestro comienzo 💗💚`;
}

actualizarContador();