const music = new Audio('vande.mp3');

// create array

const songs = [
    {
    id:'1',
    songName:`On My May <br>
    <div class="subtitle">Alan Walker</div>`,
    poster:"imagenes/1_img.jpg"
},
{
    id:'2',
    songName:`Alan Walker-Fade <br>
    <div class="subtitle">Alan Walker</div>`,
    poster:"imagenes/2.jpg"
},
//all Object type
{
    id:'3',
    songName:`Chorrito pa las animas <br>
    <div class="subtitle">Feid</div>`,
    poster:"imagenes/3_img.jpg"
},
{
    id:'4',
    songName:`La Santa <br>
    <div class="subtitle">Bad Bunny, Daddy Yankee</div>`,
    poster:"imagenes/4_img.jpg"
},
{
    id:'5',
    songName:`Infeliz <br>
    <div class="subtitle">Arcángel, Bad Bunny</div>`,
    poster:"imagenes/5_img.jpg"
},
{
    id:'6',
    songName:`No Me conoce - Remix  <br>
    <div class="subtitle">Jhayco, J Balvin, Bad Bunny</div>`,
    poster:"imagenes/6_img.jpg"
},
{
    id:'7',
    songName:`Classy 101 - Remix  <br>
    <div class="subtitle">Feid, Young Miko</div>`,
    poster:"imagenes/101.png"
}

]

const song=[
{
    id:'7',
    songName:` Wine Slow <br>
    <div class="subtitle">Gyptian</div>`,
    poster:"imagenes/7_img.jpg"
},
{
    id:'8',
    songName:` Lisa <br>
    <div class="subtitle">Young Miko</div>`,
    poster:"imagenes/8_img.jpg"
},
{
    id:'9',
    songName:`Yuh Gud <br>
    <div class="subtitle">Dj Kendo, Ward 21</div>`,
    poster:"imagenes/9_img.jpg"
},
{
    id:'10',
    songName:`LA INOCENTE <br>
    <div class="subtitle">Alan Walker</div>`,
    poster:"imagenes/10_img.jpg"
},
{
    id:'11',
    songName:`La Bachata <br>
    <div class="subtitle">Manuel Turizo</div>`,
    poster:"imagenes/11_img.jpg"
},
{
    id:'12',
    songName:`Tití Me Preguntó <br>
    <div class="subtitle">Bad Bunny</div>`,
    poster:"imagenes/12_img.jpg"
},
{
    id:'13',
    songName:`Ella Baila Sola <br>
    <div class="subtitle">Eslabon Armado, Peso Pluma</div>`,
    poster:"imagenes/13_img.jpg"
},
{
    id:'14',
    songName:`Que Onda Perdida <br>
    <div class="subtitle">Grupo Firme, Gerardo Coronado</div>`,
    poster:"imagenes/14_img.png"
},
{
    id:'15',
    songName:`En Tu Perra Vida <br>
    <div class="subtitle">Grupo Firme, Lenin Ramírez</div>`,
    poster:"imagenes/15_img.jpg"
}


]

Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

Array.from(document.getElementsByClassName('songItems')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = song[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = song[i].songName;
})

/*
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];


masterPlay.addEventListener('canplaythrough',()=>{
if(music.paused || music.currentTime <=0){
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
} else {
    music.pause();
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
}
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach((element)=>{
            element.target.classList.add('bi-play-circle-fill');
            element.target.classList.remove('bi-pause-circle-fill');
        })
}

const makeAllBackground = ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
        element.style.background = "rgb(105, 105, 170, 0)";
        })
}


let index=0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementsById('title');

Array.from(document.getElementsByClassName('playlistplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index=e.target.id;
        makeAllPlays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        music.src=`audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele=>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
        
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    music.addEventListener('ended',()=>{
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    })
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, 1)";
    })
})

let inicio = document.getElementById('inicio');
let final = document.getElementById('inicio');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = math.floor(music_dur/60);
    let sec = math.floor(music_dur/60);     
    
    if(sec<10){
        sec =  `0${sec}`
    }
    final.innerText = `${min}:${sec}`;

    let min1 = math.floor(music_curr/60);
    let sec1 = math.floor(music_curr/60);     
    
    if(sec1<10){
        sec1 =  `0${sec1}`
    }
    inicio.innerText = `${min1}:${sec1}`;

    let pogressbar =  parseInt((music.currentTime/music.duration)*100);
    seek.value = pogressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
   dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})

let vol_icon = documen.getElementById('vol_icon');
let vol = documen.getElementById('vol');
let vol_dot = documen.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if(vol.value == 0){
       vol_icon.classList.remove('bi-volume-down-fill');
       vol_icon.classList.add('bi-volume-mute-fill');
       vol_icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
     }
     if(vol.value > 50){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
     }
     let vol_a = vol.value;
     vol_bar.style.width = `${vol_a}%`;
     vol_bar.style.left = `${vol_a}%`;
     music.volume = vol_a/100;

})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src=`audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele=>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
   makeAllPlays()     
   document .getElementById(`${index}`).classList.remove('bi-play-fill');
   document .getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, 1)";
})



next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src=`audio/${index}.mp3`;
        poster_master_play.src = `img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele)=>{
            return ele.id == index;
        })

        song_title.forEach(ele=>{
            let {songName} = ele;
            title.innerHTML = songName;
        })
   makeAllPlays()     
   document .getElementById(`${index}`).classList.remove('bi-play-fill');
   document .getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105, 105, 170, 1)";
})*/


let left_scrolls = document.getElementById('left_scroll');
let rigth_scrolls = document.getElementById('rigth_scroll');
let pop_song = documen.getElementsByClassName('pop_song')[0];


left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
})
rigth_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 338;
})