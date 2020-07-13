let btn = document.querySelector("#btn");
btn.addEventListener("click",Speech);


function Speech(){
window.SpeechRecognition = 
window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();
recognition.interimResults =true;

//recognition.interimResults = true;

let p = document.createElement("p");
let words = document.querySelector(".words");
words.appendChild(p);

//events
recognition.addEventListener("result",(e) => {
    let transcript = [...e.results]
    .map((result)=> result[0])
    .map((result)=> result.transcript)
    .join("");
    p.textContent = transcript;
});
//restart recognition
recognition.addEventListener("end",recognition.start);

//nedd to start speech recognition
recognition.start();
}
