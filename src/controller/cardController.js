const shortID=require("shortid")
const cardModel = require("../models/cardModel")
const { isValidObjectId, isValidCardNumber, isValidString } = require("../validation/validation")

//=======================================  CREATE CARD  ================================================================//

exports.createCard = async function (req, res) {
    try {
        let data = req.body
        
        let {cardNumber,cardType,customerName,status,customerID}=data

        if (Object.keys(data).length == 0)
            res.status(400).send({ status: false, message: "Please enter the data to create card" })

        if (!isValidCardNumber(cardNumber))
            return res.status(400).send({ status: true, message: "Please provide valid cardNumber" })

        if (!isValidString(cardType))
            return res.status(400).send({ status: false, message: "Please provide valid cardtype" })

        if (!isValidString(customerName))
            return res.status(400).send({ status: false, message: "Please provide valid customerName" })
        status = status.toUpperCase()

        if (status) {
            status=status.toUpperCase()
            if (status !== "ACTIVE" || status !== "INACTIVE") {
                return res.status(400).send({ status: false, message: "Please provide valid status" })
            }
        }
        
        if (!customerID) return res.status(400).send({ status: false, message: "Please provide customerId" })
        if(!shortID.isValid(customerID)){
            return res.status(400).send({status:false, message:"Enter valid CustomerId"})
        }

        const cardCreation = await cardModel.create(data)
        return res.status(201).send({ status: true, data: cardCreation ,message:"Successfully created"})
    }

    catch (error){
        res.status(500).send({ status: false, message: error.message })
    }
}

//============================================  GET CARD  =================================================================//

exports.getCardDetails = async function (req, res) {
    try {
        const fetchData = await cardModel.find({ status: "ACTIVE" })
        if(!fetchData){
            return res.status(404).send({status:false,message:"No Details Found"})
        }
        return res.status(200).send({ status: true, message:"data details",data:fetchData})
    }
    catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}

