const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const snap2 = document.querySelector('.snap2');


const constraint = {
    audio : true,
    video : true
    // (
    //     width = {min:1024 ,ideal: 1280 ,max: 1920},
    //     height = {min: 576 , ideal: 720 , max: 1080}
    // )
}
async function getVideo(){
    try {
        //await returns us a promise or simpy say make us use the media devices
        const stream = await navigator.mediaDevices.getUserMedia(constraint);
        video.srcObject = stream;
        window.stream = stream;
    }catch(e){
        console.log(e.toString());
    }
}

snap.addEventListener('click' ,() =>{
    ctx.drawImage(video,0,0,400,400);
});

getVideo();