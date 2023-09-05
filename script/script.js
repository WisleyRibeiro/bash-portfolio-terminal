const invalid = document.querySelector("#invalid");
const comands_list = document.querySelector("#comands-list");
const github_btn = document.querySelector("#github");
const input = document.querySelector("#input");
const box_terminal = document.querySelector("#box-terminal");
const sup = document.querySelector("#sup");
const aboutme = document.querySelector("#about-me");
let url = ""

input.focus();

function none(){
    sup.style.display = "block";
    invalid.style.display = "none";
    comands_list.style.display = "none";
    aboutme.style.display = "none"
}

function openurl(){
    window.open(url, "blank");
}

document.addEventListener("keypress", function(press){
    if(press.key === "Enter") {
        const input = document.querySelector("#input").value;

        function clearput() {
            const inputv = document.querySelector("#input");
            inputv.value = "";
        }

        if(input === "help") {
            none();
            comands_list.style.display = "block";
            clearput();
        }

        else if(input === "wisley.py" || input == "about") {
            none();
            sup.style.display = "none";
            aboutme.style.display = "grid";
            clearput();
        }

        else if(input === "linkedin.lnk") {
            none();
            url = "https://www.linkedin.com/in/wisley-ribeiro-lopes/"
            openurl();
            clearput();
        }

        else if(input === "instagram.lnk") {
            none();
            url = "https://www.instagram.com/wisley_ribeiro.js/";
            openurl();
            clearput();
        }

        else if(input === "exit") {
            window.close();
        }

        else if(input === "clear") {
            this.location.reload();
        }

        else if(input === "active default mode"){
            url = "https://wisleyribeiro.github.io/Wisley-Ribeiro/"
            openurl();
            clearput();
        }

        else {
            none();
            invalid.style.display = "block";
            clearput();
        }
    }
})

github_btn.addEventListener("click", () => {
    url = "https://github.com/WisleyRibeiro";
    openurl();
    input.focus = true;
})

box_terminal.addEventListener("click", () => {
    input.focus();
})