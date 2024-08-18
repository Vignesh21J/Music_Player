const songList = [
{
    title: 'Pularaadha Kaalai',

    artist: 'Justin Prabhakaran, Sid Sriram',

    src: 'Pularaadha-MassTamilan.org - Copy.mp3',

    image: 'img1.jpg'

},

{
  title: 'Munbe Vaa En Anbae Vaa',

  artist: 'Naresh Iyer, Shreya Ghoshal',

  src: 'Munbe Vaa En Anbae.mp3',

  image: 'img11.webp'

},

{
  title: 'New-York-Nagaram',

  artist: 'A.R. Rahman',

  src: 'New-York-Nagaram.mp3',

  image: 'img14.jpeg'

},

{
  title: 'Nenjukkul Peidhidum',

  artist: 'Hariharan, Harris Jayaraj',

  src: 'Nenjukkul Peidhidum.mp3',

  image: 'img25.jpeg'

},

{
  title: 'Nee-Neeli-Kannullonae',

  artist: 'Gowtham Bharadwaj V',

  src: 'Nee-Neeli-Kannullona.mp3',

  image: 'img2.jpeg'

},

{
  title: 'Nee Paartha Vizhigal',

  artist: 'Vijay Yesudas, Swetha Mohan',

  src: 'Nee-Partha.mp3',

  image: 'img13.jpeg'

},

{
  title: 'Oru Nalaikkul',

  artist: 'Karthik, Rita',

  src: 'Oru Nalaikkul.mp3',

  image: 'img7.jpeg'

},

{
  title: 'Engeyo Paartha Mayakkam',

  artist: 'Yuvan Shankar Raja, Udit Narayan',

  src: 'Engeyo Paartha.mp3',

  image: 'img22.jpg'

},

{
  title: 'Venmegam Pennaga',

  artist: 'Hariharan',

  src: 'Venmegam Pennaga.mp3',

  image: 'img21.jpg'

},

{
  title: 'Pirai Thedum Iravile',

  artist: 'Saindhavi, G.V. Prakash Kumar',

  src: 'Pirai thedum iravile.mp3',

  image: 'img18.jpeg'

},

{
  title: 'Nee Kavithaigala',

  artist: 'Pradeep kumar',

  src: 'Nee Kavithaigala.mp3',

  image: 'img26.jpeg'

},


{
  title: 'Jal Jal Jal oosai',

  artist: 'Aalaap Raju, Surmukhi',

  src: 'Jal Jal Jal Oosai.mp3',

  image: 'img20.jpeg'

},

{
  title: 'Thuli-Thuli-malaiyai',

  artist: 'Haricharan, Yuvan Shankar Raja',

  src: 'Thuli-Thuli-malaiyai.mp3',

  image: 'img15.jpeg'

},


{
  title: 'Venmathiye Venmathiye Nillu',

  artist: 'Roop Kumar Rathod, Tippu',

  src: 'Venmathiyae.mp3',

  image: 'img16.jpg'

},


{
  title: 'Muzumathi Avalathu',

  artist: 'A.R Rahman, Srinivas',

  src: 'Muzhumathi Aavlathu.mp3',

  image: 'img23.jpeg'

},

{
  title: 'Irava Pagala ',

  artist: 'Hariharan, Sujatha',

  src: 'Irava Pagala.mp3',

  image: 'img17.jpeg'

},

{
  title: 'Vennilave Vennilave',

  artist: 'Hariharan, Sadana Sargam',

  src: 'vennilavae-vennilavae.mp3',

  image: 'img24.jpeg'

},

{
  title: 'Pogathey Pogathe',

  artist: 'Yuvan Shankar Raja',

  src: 'Pogathey Pogathey.mp3',

  image: 'img27.jpeg'

},

{
    title: 'Inkem-Inkem-Inkem-Kaavaale',

    artist: 'Sid-Sriram',

    src: 'Inkem-Inkem-Inkem-Kaavaale-MassTamilan.com.mp3',

    image: 'img12.jpeg'

},

{
  title: 'Srivalli',

  artist: 'Sid-Sriram',

  src: 'Srivalli-MassTamilan.fm - Copy.mp3',

  image: 'img6.jpeg'

},
];



const image = document.getElementById('image');
const audio = document.getElementById('audio');

const progressBar = document.getElementById('progress');


const playPause = document.getElementById('play-pause');
const backward = document.getElementById('backward');
const forward = document.getElementById('forward');

var currentSongIndex = 0;


const bar = document.getElementById("bar");
const out = document.getElementById("out");
const fixedBox = document.getElementById("fixed-box");
var close = false;



function openClose(){
  if(close){
    fixedBox.style.bottom = '-100%';
    out.style.bottom = '0';
    close = false;
  }
  else{
    fixedBox.style.bottom = '0';
    out.style.bottom = '0';
    close = true;
  }
  }

  
bar.addEventListener('click',openClose);
out.addEventListener('click',openClose);


  
const barHandler = () => {

  songList.map((song,i) => {

  const divTag = document.createElement("div");
  divTag.setAttribute("class",'box1');
  
  divTag.style.cursor = 'pointer';

  const imgTag = document.createElement("img");
  imgTag.setAttribute("class",'fixed-image');
  imgTag.setAttribute("src",song.image);

  const pTag = document.createElement("p");
  pTag.setAttribute("class",'fixed-text');
  pTag.innerText = song.title;

  divTag.appendChild(imgTag)
  divTag.appendChild(pTag);
  fixedBox.appendChild(divTag);


  divTag.addEventListener('click',(e)=>{
    e.preventDefault();
    currentSongIndex = i;
    audio.src = song.src;
    audio.play();
    image.classList.add('song-logo-rotate');
    openClose();
    updatePlayPauseIcon();
    
    setInterval(() => {
      const currentTime = audio.currentTime;
      const duration = audio.duration;
      const progress = (currentTime / duration) * 100;
      progressBar.value = progress;
    }, 1000);

    updatePlayPauseIcon();
    document.querySelector('.song-name').textContent = song.title;
    document.querySelector('.song-desc').textContent = song.artist;
    image.src = song.image;
  })

 })
}
  
document.addEventListener('DOMContentLoaded',barHandler);
  


function updateSongInfo(){
  const currentSong = songList[currentSongIndex]; //songList[0]
  audio.src = currentSong.src;
  document.querySelector('.song-name').textContent = currentSong.title;
  document.querySelector('.song-desc').textContent = currentSong.artist;
  image.src = currentSong.image;
}
updateSongInfo();



function updatePlayPauseIcon(){
  if (audio.paused) {
    playPause.querySelector('#ctrl-icon').classList.remove('fa-pause');
    playPause.querySelector('#ctrl-icon').classList.add('fa-play');
  } else {
    playPause.querySelector('#ctrl-icon').classList.remove('fa-play');
    playPause.querySelector('#ctrl-icon').classList.add('fa-pause');
  }
}



audio.addEventListener('ended', () => {
  currentSongIndex++;

  if (currentSongIndex >= songList.length){
    currentSongIndex = 0;
  }

  updateSongInfo();
  audio.play();
  updatePlayPauseIcon();
  
})



playPause.addEventListener('click',(e)=>{
  e.preventDefault();
  if(audio.paused){
    audio.play();
    updatePlayPauseIcon();
    image.classList.add('song-logo-rotate');
    

    setInterval( () => {
      const totalDuration = audio.duration;
      const currentDuration = audio.currentTime;
      const progress = (currentDuration / totalDuration) * 100;
      progressBar.value = progress;
    }, 1000)

  } else {
    audio.pause();
    updatePlayPauseIcon();
    imageElement.classList.remove('song-logo-rotate');
    
  }
})



// Input Event: This updates the current time of the audio when the progress bar is manually changed.
progressBar.addEventListener('input',() => {
  audio.currentTime = (progressBar.value / 100) * audio.duration; // Calculate the new current time
})



forward.addEventListener('click', (e) => {
  e.preventDefault();
  currentSongIndex++;
  
  if(currentSongIndex >= songList.length) {
    currentSongIndex = 0;
  }

  updateSongInfo();
  audio.play();
  updatePlayPauseIcon();

})



backward.addEventListener('click', (e) => {
  e.preventDefault();
  currentSongIndex--;
  
  if(currentSongIndex < 0) {
    currentSongIndex = songList.length - 1;
  }

  //Should call "updateSongInfo();" to play the song..
  updateSongInfo();
  audio.play();
  updatePlayPauseIcon();

})



//KEYBOARD EVENTS
document.addEventListener('keydown', (e) => {
  if(e.key === ' ' || e.key === "Enter"){
    e.preventDefault();
    if (audio.paused) {
      audio.play();
      image.classList.add('song-logo-rotate');
      updatePlayPauseIcon();

      setInterval(() => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        const progress = (currentTime / duration) * 100;
        progressBar.value = progress;
    }, 1000);

    } else {
      audio.pause();
      image.classList.remove('song-logo-rotate');
      updatePlayPauseIcon();
    }
  }
})

document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowLeft'){
    e.preventDefault();
    backward.click(); // Simulate a click on the backward button
  }
})

document.addEventListener('keydown', (e) => {
  if(e.key === 'ArrowRight'){
    e.preventDefault();
    forward.click();
  }
})






