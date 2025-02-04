console.log("Welcome to spotify");
let index = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let play = document.getElementsByClassName('fa-regular fa-circle-play');
let timer = document.getElementsByClassName('timestamp');

let songs =[
    {songname: "Hips Don't Lie" , filepath: "Songs/1.mp3",coverpath: "covers/1.jpg"},
     {songname: "Dil ko tujhpe pyaar" , filepath: "Songs/2.mp3",coverpath: "covers/2.jpg"},
         {songname: "Hilarious" , filepath: "Songs/3.mp3",coverpath: "covers/3.jpg"},
             {songname: "Left and Right" , filepath: "Songs/4.mp3",coverpath: "covers/4.jpg"},
                 {songname: "I'll wait for you" , filepath: "Songs/5.mp3",coverpath: "covers/5.jpg"},

] 

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }

   else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
            makeAllPlays();
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            index = parseInt(e.target.id);
            audioElement.src = `Songs/${index+1}.mp3`;
            masterSongName.innerText = songs[index].songname;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
        })
    })


audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);

    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value* audioElement.duration/100;
})

document.getElementById('next').addEventListener('click',()=>{
    if(index>=4){
        index=0;

    }
    else{
        index += 1;
    }
    audioElement.src = `Songs/${index+1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            masterSongName.innerText = songs[index].songname;
            gif.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click',()=>{
    if(index<=0){
        index=0;

    }
    else{
        index -= 1;
    }
    audioElement.src = `Songs/${index+1}.mp3`;
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            masterSongName.innerText = songs[index].songname;
            gif.style.opacity = 1;
})



