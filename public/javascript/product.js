
productPreview();
function productPreview(){
let newProduct = `
    <div class="product-window">
    <img class="product-pic" src="../stylesheets/img/preview.jpeg" alt="product preview"/>
    <p>product name,short tag1, short tag2 </p>
    <p>price: $0.00 </p>
    <p>optional content: discount will be diplay here testingtestskdfaiwuegf;awe</p>
    </div>
           `;
    for(let i=0; i < 10;i++){
 document.getElementById("results").innerHTML += newProduct;
    }
    
   
    
}