import express from "express";
let router = express.Router();

router.get("/:pet?", async (req, res) => {
  try {
    
    let petType = req.query.pet;
     let allProducts=""
    if(petType == undefined || petType == "all"){
    allProducts = await req.models.Products.find();
    }else{
    allProducts = await req.models.Products.find({petsTag: petType});
    }
  
 let resultsArr = [];
    allProducts.forEach((item) => {
      let productObj = {
        name: item.name,
        brand: item.brand,
        petsTag: item.petsTag,
        price: item.price,
        description: item.description,
      };

      //debug:
      //console.log("newproducts: " + newProduct);
      resultsArr.push(productObj);
      //resultsArr.push(newProduct);
    });
    res.json(resultsArr);
  } catch (err) {
    console.log("Error getting products:" + err);
    res.send({ status: "Fail", error: err });
  }
});
router.post("/", async (req, res) => {
  try {
    //debug:
    console.log(
      "req name: " +
        req.body.product_name +
        " req price: " +
        req.body.product_price +
        " req tags: " +
        req.body.product_brand +
        " req description: " +
        req.body.product_description
    );

    let newProduct = new req.models.Products({
      name: req.body.product_name,
      price: req.body.product_price,
      description: req.body.product_description,
      petsTag: req.body.product_tag,
      brand: req.body.product_brand,
    });

    await newProduct.save();
    res.send({ status: "Success"});
  } catch (err) {
    console.log("Error saving your product:" + err);
    res.send({ status: "Fail", error: err });
  }
});

export default router;
