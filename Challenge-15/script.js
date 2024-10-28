const btn = document.querySelector("#btn");
const stop = document.querySelector("#stop");
const voiceText = document.querySelector("#voiceText");

let recognition = new webkitSpeechRecognition();

recognition.lang = "en-US";
recognition.interimResults = true;
recognition.maxResults = 10;

btn.addEventListener("click",()=>{
    recognition.start();
})
stop.addEventListener("click",()=>{
    recognition.abort();
})

recognition.addEventListener("result",(e)=>{
    const transcript = e.results[0][0].transcript;
    console.log(transcript)
    voiceText.innerHTML = transcript;
})