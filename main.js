
let body = document.querySelector("#body");
let form = document.querySelector("#bmi") ;
let interface = document.querySelector("#interface");
let name = document.querySelector("#name") ;
let weight = document.querySelector("#weight");
let height = document.querySelector("#height") ;
let male = document.querySelector("#male") ;
let female = document.querySelector("#female") ;






male.onchange = function(){
    form.onsubmit = function(){
       
        let heightv = height.value / 100 ;
        bmi = weight.value / (heightv * heightv);
        body.style.backgroundImage = "none" ;
        interface.style.display = "none" ;
        // if (bmi < 15 ){

        // }

        body.innerHTML = "osama";
        return false ;
    }
    
}
