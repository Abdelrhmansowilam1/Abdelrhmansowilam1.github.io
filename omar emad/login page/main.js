var user=document.querySelector('#user');
user.addEventListener('keyup',function(){
var u_times =document.querySelector('.right');
var u_check =document.querySelector('.wrong')
if(user.value.length < 6 ){
user.style.border ='3px solid red';
u_times.style.display ='none';
u_check.style.display='block';
return false;
}else{
    user.style.border='3px solid green';
    u_times.style.display ='block';
u_check.style.display='none';
}
})
var pass=document.querySelector('#pass');
pass.addEventListener('keyup',function(){
var p_times =document.querySelector('.righ');
var p_check =document.querySelector('.wron')
if(pass.value.length < 8 ){
pass.style.border ='3px solid red';
p_times.style.display ='none';
p_check.style.display='block';
return false;
}else{
    pass.style.border='3px solid green';
    p_times.style.display ='block';
p_check.style.display='none';
}
})
function  newDoc(){
    if(user.value == 0 || user.value.length < 6){
        window.location.href="https://abdelrhmansowilam1.github.io/omar%20emad/login%20page/loginpage.html";
        alert("please fill the required filled");
        
    }else if(pass.value == 0 || pass.value.length < 6){
        window.location.href="https://abdelrhmansowilam1.github.io/omar%20emad/login%20page/loginpage.html";
        alert("please fill the required filled");
    }else{
        window.location.href="https://abdelrhmansowilam1.github.io/Home/Ammar_homepage.html";
        alert(" logging succesful Hello:"+"  "+user.value);
    }
}      
