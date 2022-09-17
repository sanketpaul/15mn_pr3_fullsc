let elm=document.getElementById('image-sr')
let change=()=>{
    if(elm.webkitRequestFullscreen){
        elm.webkitRequestFullscreen()
    }
}