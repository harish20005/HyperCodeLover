let hideBut = document.getElementById("hide-button");
let mobileNavbar = document.getElementById("mobile-navbar");
let close_navbar = document.getElementById("close-navbar");
let home_change_text = document.getElementById("home-change-text");
let isClicked = false;

let name;
let subject;
let description;

const names = ['Game-Developer', 'Web-Developer','DSA', 'CSE-Student', 'Photo-Editing', 'Youtuber', 'Projects', 'C', 'CPP (C++)', 'C#', 'Python', 'HarishCoder'];
let currentIndex = 0;

const colors = ['orange','white','green', 'blue', 'black', 'red', 'beige', 'wheat', 'yellow'];
let colorIndex = 0;

function changeText(){
    home_change_text.innerText = names[currentIndex];
    currentIndex = (currentIndex + 1) % names.length;
    colorIndex = (colorIndex + 1) % colors.length;
    home_change_text.style.color = colors[colorIndex];
}

setInterval(() => {
    changeText();
}, 1000);

hideBut.addEventListener('click', function () {
    mobileNavbar.style.right = "0";
});

close_navbar.addEventListener('click', function () {
    mobileNavbar.style.right = "-100%";
});

function SubmitForm() {
    name = document.getElementById("name").value;
    subject = document.getElementById("subject").value = "HyperCodeLover, Help/Questions";
    description = document.getElementById("description").value;

    Opengmail();
}

function Openinstagram() {
    window.open('https://www.instagram.com/harish_coder__/', '_blank');
}
function Openyoutube() {
    window.open('https://www.youtube.com/@hypercodelover05', '_blank');
}
function Openwhatsapp() {
    window.open('https://wa.me/+918904744174?text=Jay%20Shree%20Ram%20HyperCodeLover%20Add%20Your%20Text%20Here', '_blank');
}
function Opentelegram() {
    window.open("https://t.me/HyperCodeLover", "_blank");
}
function Opengmail() {
    window.location.href = `mailto:armylovers2025@gmail.com?subject=${subject}&body=my name is ${name} and ${description}`;
}
function Opengithub() {
    window.open('https://github.com/harish20005/HyperCodeLover/tree/main', '_blank');
}



