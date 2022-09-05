let title=document.querySelector(".title"),
ul=document.querySelector("ul"),
reload=document.querySelector(".reload");
window.onload=(()=>{
    if(window.navigator.onLine){
        onLine() 
    }else{
        offfLine()
    }
})
window.addEventListener("online",(()=>{
    onLine() ;
}))
window.addEventListener("offline",(()=>{
    offfLine();
}))
//relaod all window
reload.onclick=(()=>window.location.reload());


function onLine() {
    title.innerHTML='OnLine';
    title.style.backgroundColor='green';
    title.style.color='white';
    setTimeout(() => {
        title.classList.add('hide')
    },4000);
    reload.classList.add('hide');
    ul.classList.add('hide');
}
function offfLine() {
    title.innerHTML='OFFLine';
    title.style.backgroundColor='red';
    title.style.color='white';
    reload.classList.remove('hide');
    ul.classList.remove('hide');
}