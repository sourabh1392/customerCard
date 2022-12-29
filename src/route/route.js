const express = require("express")
const router = express.Router()
const { createCustomer, getCustomer, deleteCustomer } = require("../controller/customerController")
const { createCard, getCardDetails } = require("../controller/cardController")

//=================================== CUSTOMER API's ======================================//

router.post("/customer", createCustomer)
router.get("/customer", getCustomer)
router.delete("/customer/:customerId", deleteCustomer)

//================================== CARD API's ==============================================//

router.post("/card", createCard)
router.get("/card", getCardDetails)


//============================================================================================

router.all("/*",async (req,res)=>{
    res.status(404).send({Status:false,msg:"Invalid request"})
})

module.exports = router