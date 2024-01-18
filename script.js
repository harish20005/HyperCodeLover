let hideBut = document.getElementById("hide-button");
let mobileNavbar = document.getElementById("mobile-navbar");
let isClicked = false;

let name;
let subject;
let description;

function OpacityHide(){
    isClicked = !isClicked;
    
    if(isClicked == true){
        mobileNavbar.style.display = "flex", mobileNavbar.style.opacity = "1";

        hideBut.style.transform = "rotate(-90deg)";
    }
    else{
        mobileNavbar.style.opacity = "0", mobileNavbar.style.display = "none";

        hideBut.style.transform = "rotate(0)";
    }

}

function SubmitForm(){
    name  = document.getElementById("name").value;
    subject  = document.getElementById("subject").value = "HyperCodeLover, Help/Questions";
    description  = document.getElementById("description").value;

    Opengmail();
}

function Openinstagram(){
    window.open('https://www.instagram.com/harish_coder__/', '_blank');
}
function Openyoutube(){
    window.open('https://www.youtube.com/@hypercodelover05', '_blank');
}
function Openwhatsapp(){
    window.open('https://wa.me/+918904744174?text=Jay%20Shree%20Ram%20HyperCodeLover%20Add%20Your%20Text%20Here', '_blank');
}
function Opentelegram(){
    window.location.href = "";
}
function Opengmail(){
    window.location.href = `mailto:armylovers2025@gmail.com?subject=${subject}&body=my name is ${name} and ${description}`;
}
function Opengithub(){
    window.open('https://github.com/harish20005/HyperCodeLover/tree/main', '_blank');
}

