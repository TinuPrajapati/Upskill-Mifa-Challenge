const form = document.querySelector("form");
const name = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const msg = document.querySelector("#msg");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let parms ={
        from_name:name.value,
        email:email.value,
        message:msg.value,
        Subject:subject.value
    }
    emailjs.send("service_rs4hjbp","template_l8b9rbi",parms)
    .then((res)=>{
        alert("Success"+res.status)
    })
})