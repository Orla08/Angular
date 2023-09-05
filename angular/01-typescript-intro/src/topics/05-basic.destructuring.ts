interface Details{
    author: string;
    year: number;
}


interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

const audioPlayer: AudioPlayer ={
    audioVolume: 90,
    songDuration: 36,
    song: "Nosotros",
    details: {
        author : "Anuel AA",
        year : 2015
    }
}
//Esto es la destructuraacion de objetos 


/*const {audioVolume, songDuration, song, details} = audioPlayer;
const {author:cantante , year} = details; //Puede ser asi o audioPlayer.details*/

//console.log(`El cantante de la cancion ${song} es ${cantante}`)

const dbz : string[] = ['goku','vegeta','gohan'];

const [ p1, p2, p3 ] = dbz; //En este caso no se deben llamar igual solo que por defecto tomara la posiciion del objeto

console.log(`Hola ${p1}`)

export {}