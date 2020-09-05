//1. Get the modal 
//2. Get the content of the modal
//3. Get the close button
//4. When click on close hide the modal
//5. When click on esc hide the modal
// By OZ

var myModal   = document.getElementById("my-modal"),
    imgAppear = document.getElementById("my-img"),
    myImage   = document.getElementById("my-image"),
    caption   = document.getElementById("caption"),
    closeButton = document.getElementsByClassName("close");
console.log(closeButton);
imgAppear.onclick=function(){
    myModal.style.display="block";
    myImage.src = this.src ;
    caption.innerHTML = this.alt;
}

closeButton[0].onclick = function(){
    myModal.style.display = "none";
}

document.onkeydown = function(event){
    if(event.keyCode =="27"){
        myModal.style.display = "none";
    }
}