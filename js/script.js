//emails verification
const emails = ["savinipietro@gmail.com", "pietrosavini@gmail.com", "savini.pietro@gmail.com" ];

let verification = "";
const userEmail = prompt("inserisci la tua mail");
for(let i = 0; i < emails.length; i++){
    const emailList = emails[i];
    if (emailList === userEmail){
        verification = true;
        break;
    }else{
        verification = false;
    }    
}

if(verification){
    alert("puoi accedere");
}else{
    alert("non puoi accedere");
}

// goco dei dadi
let userNumber = Math.floor(Math.random()*10000);
console.log(userNumber);

let computerNumber = Math.floor(Math.random()*10000);
console.log(computerNumber);

let output = "";
if(userNumber > computerNumber){
    output="hai vinto"
}else if (userNumber === computerNumber){
    output="pareggio";
}else{
    output ="hai perso";
}

console.log(output);