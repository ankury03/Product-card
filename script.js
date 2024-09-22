const product = document.querySelector("#product-img");
const btn = document.querySelectorAll(".btn");

btn[0].onclick = function(){
    product.src = "images/image1.png";

    for(el of btn){
        el.classList.remove("active");
    }
    this.classList.add("active");
}
btn[1].onclick = function(){
    product.src = "images/image2.png";

    for(el of btn){
        el.classList.remove("active");
    }
    this.classList.add("active");
}
btn[2].onclick = function(){
    product.src = "images/image3.png";

    for(el of btn){
        el.classList.remove("active");
    }
    this.classList.add("active");
}