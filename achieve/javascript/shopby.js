



fetchPet();
document.getElementById("results").innerHTML = "";
async function fetchPet() {
  let params = new URL(document.location).searchParams;
  let pet = params.get("pet");
  //debug:
  // document.getElementById("shopby").innerHTML = pet;
  let response = await fetch("api/products?pet=" + pet);
  let responseJson = await response.json();
  for (let i = 0; i < responseJson.length; i++) {
    let newProduct = responseJson[i];
    document.getElementById("results").innerHTML += newProduct;
  }
  //debug:
  // console.log("pet query: "+pet)
  // console.log(new URL(document.location));
}
