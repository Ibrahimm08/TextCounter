
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