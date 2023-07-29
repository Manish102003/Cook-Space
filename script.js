let accountdetail=document.querySelector("#account-detail");
let accountinfo=document.querySelector(".account-info");
let passwordreset=document.querySelector("#password-reset");
let passwordchange=document.querySelector(".password-change");
accountdetail.addEventListener("click",showaccount);
passwordreset.addEventListener("click",showpassword);
function showaccount(){
    accountdetail.style.backgroundColor="rgba(74, 117, 248,0.7)";
    passwordreset.style.backgroundColor="rgba(255, 255, 255, 0.474)";
    accountinfo.style.display="block";
    passwordchange.style.display="none";
}
function showpassword(){
    accountdetail.style.backgroundColor="rgba(255, 255, 255, 0.474)";
    accountinfo.style.display="none";
    passwordreset.style.backgroundColor="rgba(74, 117, 248,0.7)";
    passwordchange.style.display="block";
    
}
