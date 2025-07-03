
function ToggleDarkmode(){
    const self = document.getElementById("DarkmodeToggle");
    const page = document.body.classList;

    page.toggle("LightMode");

    if(self.innerText=="Sun"){
        self.innerText="Moon";
    }else{
        self.innerText="Sun";
    }
}


function Track(){
    const TextIn = document.getElementById("TextInput").value;
    
    const CharTotal = document.getElementById("CharTotal");
    const WordTotal = document.getElementById("WordTotal");
    const SentenceTotal = document.getElementById("SentenceTotal");

    var regex = /[a-zA-Z0-9]/g;
    console.log(TextIn);

    if(TextIn == ""){
        CharTotal.innerText = 0;
    }else{
        CharTotal.innerText = TextIn.match(regex).length;
    }

}