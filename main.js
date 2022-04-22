
let body = document.querySelector("#body");
let form = document.querySelector("#bmi") ;
let interface = document.querySelector("#interface");
let name = document.querySelector("#name") ;
let weight = document.querySelector("#weight");
let height = document.querySelector("#height") ;
let male = document.querySelector("#male") ;
let female = document.querySelector("#female") ;
let final = document.querySelector("#final");
let greeting = document.querySelector("#greeting");
let info = document.querySelector("#info");
let dietbtn = document.querySelector("#dietbtn");
let bmibodyc = document.querySelector("#bmibody");
let dietinfo = document.querySelector("#dietinfo");
let back = document.querySelector("#back");

// male start
male.onchange = function(){
    form.onsubmit = function(){
       
        let heightv = height.value / 100 ;
        bmi = weight.value / (heightv * heightv);
        body.style.backgroundImage = "none" ;
        interface.style.display = "none" ;
        final.style.display = "block";
        greeting.innerHTML = "~Welcome " + name.value + "~";
        document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#03afdd');
       

        if (bmi < 18.5 ){
            bmistatus = "<span style='color:#88b7d8;'>Under weight</span>";
            
            diet = "you are skinny , you should follow a diet to gain weight , click on  diet to find out what diet you should follow .";
            dietsite = '<a  href="https://mawdoo3.com/%D9%86%D8%B8%D8%A7%D9%85_%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A_%D9%84%D8%B2%D9%8A%D8%A7%D8%AF%D8%A9_%D8%A7%D9%84%D9%88%D8%B2%D9%86_%D8%A8%D8%B3%D8%B1%D8%B9%D8%A9" target="_blank">Diet</a>';
            bmibody = "under anim" ;
            
        }
        else if(bmi < 25){
            bmistatus = "<span style='color: #73c7a2;'>Normal</span>";
            
            diet = "Your body is perfect, you have to keep it that way, click on the diet to see how you keep your body that way .";
            dietsite = '<a   href="https://mawdoo3.com/%D9%83%D9%8A%D9%81_%D8%A3%D8%AD%D8%A7%D9%81%D8%B8_%D8%B9%D9%84%D9%89_%D8%B1%D8%B4%D8%A7%D9%82%D8%AA%D9%8A" target="_blank">Diet</a>';
            bmibody = "anim" ;
        }
        else if(bmi < 30){
            bmistatus = "<span style='color: #fdd10b;'>Over weight</span>";
            
            diet = "You are  fat, you should follow a diet to lose weight , click on diet to find out what diet you should follow .";
            dietsite = '<a   href="https://mawdoo3.com/%D8%A3%D9%81%D8%B6%D9%84_%D9%86%D8%B8%D8%A7%D9%85_%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A_%D9%84%D8%AA%D8%AE%D9%81%D9%8A%D9%81_%D8%A7%D9%84%D9%88%D8%B2%D9%86" target="_blank">Diet</a>';
            bmibody = "over anim" ;
        }
        else if(bmi < 35){
            bmistatus = "<span style='color: #f89f51;'>Obesity 1</span>";
          
            diet = "You are  fat, you should follow a diet to lose weight , click on  diet to find out what diet you should follow .";
            dietsite = '<a   href="https://mawdoo3.com/%D8%A3%D9%81%D8%B6%D9%84_%D9%86%D8%B8%D8%A7%D9%85_%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A_%D9%84%D8%AA%D8%AE%D9%81%D9%8A%D9%81_%D8%A7%D9%84%D9%88%D8%B2%D9%86" target="_blank">Diet</a>';
            bmibody = "obes1 anim" ;
        }
        else if(bmi < 40){
            bmistatus = "<span style='color: #ef464c;'>Obesity 2</span>";
         
            diet = "You are so fat, you should follow a diet to lose weight fast, click on diet to find out what diet you should follow .";
            dietsite = '<a  href="https://mawdoo3.com/%D8%A3%D8%B3%D8%B1%D8%B9_%D9%86%D8%B8%D8%A7%D9%85_%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A_%D9%84%D8%AA%D8%AE%D9%81%D9%8A%D9%81_%D8%A7%D9%84%D9%88%D8%B2%D9%86" target="_blank">Diet</a>';
            bmibody = "obes2 anim" ;

        }
        else if(bmi > 40){
            bmistatus = "<span style='color: #a62941;'>Obesity 3</span>";
           
            diet = "You are so fat, you should follow a diet to lose weight fast, click on  diet to find out what diet you should follow .";
            dietsite = '<a   href="https://mawdoo3.com/%D8%A3%D8%B3%D8%B1%D8%B9_%D9%86%D8%B8%D8%A7%D9%85_%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A_%D9%84%D8%AA%D8%AE%D9%81%D9%8A%D9%81_%D8%A7%D9%84%D9%88%D8%B2%D9%86"target="_blank">Diet</a>';
            bmibody = "obes3 anim" ;


        }
        
        info.innerHTML = " <b>Bmi: </b>" + bmistatus + "<br><br><b>Weight: </b>" + weight.value +"KG" + "<br><br><b>Height: </b>" + height.value + "CM";
        dietbtn.innerHTML = dietsite ;
        bmibodyc.className = bmibody;
        dietinfo.innerHTML = diet ;

        return false ;
    }
    
}
// end male section 
// start female section 
female.onchange = function(){
    form.onsubmit = function(){
       
        let heightv = height.value / 100 ;
        bmi = weight.value / (heightv * heightv);
        body.style.backgroundImage = "none" ;
        interface.style.display = "none" ;
        final.style.display = "block";
        greeting.innerHTML = "~Welcome " + name.value + "~";
        document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#03afdd');

       

        if (bmi < 18.5 ){
            bmistatus = "<span style='color:#53bceb;'>Under weight</span>";
            
            diet = "you are skinny , you should follow a diet to gain weight , click on  diet to find out what diet you should follow .";
            dietsite = '<a  href="https://mawdoo3.com/%D9%86%D8%B8%D8%A7%D9%85_%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A_%D9%84%D8%B2%D9%8A%D8%A7%D8%AF%D8%A9_%D8%A7%D9%84%D9%88%D8%B2%D9%86_%D8%A8%D8%B3%D8%B1%D8%B9%D8%A9" target="_blank">Diet</a>';
            bmibody = "underf animf" ;
            
        }
        else if(bmi < 25){
            bmistatus = "<span style='color: #67c9a0;'>Normal</span>";
            
            diet = "Your body is perfect, you have to keep it that way, click on the diet to see how you keep your body that way ." ;
            dietsite = '<a   href="https://mawdoo3.com/%D9%83%D9%8A%D9%81_%D8%A3%D8%AD%D8%A7%D9%81%D8%B8_%D8%B9%D9%84%D9%89_%D8%B1%D8%B4%D8%A7%D9%82%D8%AA%D9%8A" target="_blank">Diet</a>';
            bmibody = "animf" ;
        }
        else if(bmi < 30){
            bmistatus = "<span style='color: #f5e664;'>Over weight</span>";
            
            diet = "You are fat, you should follow a diet to lose weight, click on  diet to find out what diet you should follow .";
            dietsite = '<a   href="https://mawdoo3.com/%D8%A3%D9%81%D8%B6%D9%84_%D9%86%D8%B8%D8%A7%D9%85_%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A_%D9%84%D8%AA%D8%AE%D9%81%D9%8A%D9%81_%D8%A7%D9%84%D9%88%D8%B2%D9%86" target="_blank">Diet</a>';
            bmibody = "overf animf" ;
        }
        else if(bmi < 35){
            bmistatus = "<span style='color: #f6a52b;'>Obesity 1</span>";
          
            diet = "You are fat, you should follow a diet to lose weight, click on  diet to find out what diet you should follow .";
            dietsite = '<a   href="https://mawdoo3.com/%D8%A3%D9%81%D8%B6%D9%84_%D9%86%D8%B8%D8%A7%D9%85_%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A_%D9%84%D8%AA%D8%AE%D9%81%D9%8A%D9%81_%D8%A7%D9%84%D9%88%D8%B2%D9%86" target="_blank">Diet</a>';
            bmibody = "obes1f animf" ;
        }
        else if(bmi < 40){
            bmistatus = "<span style='color: #fd7553;'>Obesity 2</span>";
         
            diet = "You are so fat, you should follow a diet to lose weight fast, click on  diet to find out what diet you should follow .";
            dietsite = '<a  href="https://mawdoo3.com/%D8%A3%D8%B3%D8%B1%D8%B9_%D9%86%D8%B8%D8%A7%D9%85_%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A_%D9%84%D8%AA%D8%AE%D9%81%D9%8A%D9%81_%D8%A7%D9%84%D9%88%D8%B2%D9%86" target="_blank">Diet</a>';
            bmibody = "obes2f animf" ;

        }
        else if(bmi > 40){
            bmistatus = "<span style='color: #d35b64;'>Obesity 3</span>";
           
            diet = "You are so fat, you should follow a diet to lose weight fast, click on  diet to find out what diet you should follow .";
            dietsite = '<a   href="https://mawdoo3.com/%D8%A3%D8%B3%D8%B1%D8%B9_%D9%86%D8%B8%D8%A7%D9%85_%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A_%D9%84%D8%AA%D8%AE%D9%81%D9%8A%D9%81_%D8%A7%D9%84%D9%88%D8%B2%D9%86" target="_blank">Diet</a>';
            bmibody = "obes3f animf" ;


        }
        
        info.innerHTML = " <b>Bmi: </b>" + bmistatus + "<br><br><b>Weight: </b>" + weight.value +"KG" + "<br><br><b>Height: </b>" + height.value + "CM";
        dietbtn.innerHTML = dietsite ;
        bmibodyc.className = bmibody;
        dietinfo.innerHTML = diet ;

        return false ;
    }
    
}
// end female section 
back.onclick = function(){
    body.style.backgroundImage = 'url("images/Background.jpg")' ;
    interface.style.display = "block" ;
    final.style.display = "none";
    document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#8c64e7');
    weight.value = null;
    height.value = null;
    name.value = null;
    female.checked = false ;
    male.checked = false ;
    

}