console.log("Welcome to spotify");
//initialise the variables
let songIndex=0;
let audioElement=new Audio("songs/1.mp3");
audioElement.play() ;
let Masterplay=document.getElementById('Masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName("songItem"))
let mastersongName=document.getElementById("mastersongName");

let songs=[
    { songName:"Favourite songs" ,filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    { songName:"Heeriye" ,filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    { songName:"Kahani suno" ,filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    { songName:"Jo tu na mila" ,filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    { songName:"Rabba Janda " ,filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    { songName:"Tere Hawle" ,filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    { songName:"Friend Zone" ,filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    { songName:"Khulke Jeene ka" ,filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    { songName:"Kizie.." ,filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    { songName:"Main Tumhara.." ,filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
     
];

songItems.forEach((element,i)=>{
    console.log(element ,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

});
//handle play/pause click
Masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        Masterplay.classList.remove('fa-play-circle');
        Masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        Masterplay.classList.add('fa-play-circle');
        Masterplay.classList.remove('fa-pause-circle');
        gif.style.opacity=0;
    }

});


//listen to events
let Progress;
audioElement.addEventListener('timeupdate',()=>{
    console.log("timeupdate");
    Progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(Progress)
    myprogressbar.value=Progress;
});
myprogressbar.addEventListener("change",()=>{
    audioElement.currentTime=(myprogressbar.value*audioElement.duration)/100;

})

const makeAllPlays=()=>
{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle')
    }
        )
}

Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{

   element.addEventListener("click", (e)=>{
    makeAllPlays();
    songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
   audioElement.src=`songs/${songIndex}.mp3`;
   mastersongName.innerText=songs[songIndex].songName;
   gif.style.opacity=1
   audioElement.currentTime=0;
   audioElement.play();
   Masterplay.classList.add('fa-pause-circle');
   Masterplay.classList.remove('fa-play-circle');
})
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=9){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex}.mp3`;
    mastersongName.innerText=songs[songIndex].songName;
    gif.style.opacity=1
   audioElement.currentTime=0;
   audioElement.play();
   Masterplay.classList.add('fa-pause-circle');
   Masterplay.classList.remove('fa-play-circle');
});

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
   audioElement.src=`songs/${songIndex}.mp3`;
    mastersongName.innerText=songs[songIndex].songName;
    gif.style.opacity=1
   audioElement.currentTime=0;
   audioElement.play();
   Masterplay.classList.add('fa-pause-circle');
   Masterplay.classList.remove('fa-play-circle');
});