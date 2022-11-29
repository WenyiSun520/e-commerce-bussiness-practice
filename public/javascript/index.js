document.getElementById("results").innerHTML = "";
productPreview();
async function productPreview() {
  let response = await fetch("api/products");
  let responseJson = await response.json();
  //debug:
  // console.log("responseJson in productPreview(): "+responseJson)
  for (let i = 0; i < responseJson.length; i++) {
    let newProduct = responseJson[i];

    document.getElementById("results").innerHTML += newProduct;
  }
}
