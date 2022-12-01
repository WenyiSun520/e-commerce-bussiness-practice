document.querySelector(".showfeedback").textContent = "";
let form = document.getElementById("product-form");
form.addEventListener("submit", postProducts);

function getTags(classname) {
  let petsTag = document.querySelectorAll(classname);
  let selectTags = [];
  petsTag.forEach((tag) => {
      if (tag.checked == true) {
        selectTags.push(tag.value);
      }
  });
  console.log("selecttags: " + selectTags);
  return selectTags;
}
async function postProducts(e) {
  e.preventDefault();
  let name = document.getElementById("product_name").value;
  let price = document.getElementById("price").value;
  let description = document.getElementById("description").value;
  let petsTag = getTags(".pets-type");
  let brand = getTags(".brand-type")
  //debug:
  // console.log("name: "+name+" price: "+price+" description: "+description);
  console.log("pets tag :" + petsTag);
  console.log("brand :" + brand[0]);
  let responseJson = await fetchJSON("api/products", {
    method: "POST",
    body: {
      product_name: name,
      product_tag: petsTag,
      product_brand: brand[0],
      product_price: price,
      product_description: description,
    },
  });

  let inputFeedback = document.querySelector(".showfeedback");
  if (responseJson.status == "Success") {
    inputFeedback.textContent = "Success!";
  } else {
    inputFeedback.textContent = "Fail!";
  }
}
