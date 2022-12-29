const mongoose = require("mongoose")
const moment = require("moment")


exports.isValidObjectId = (objectId) => {
    return mongoose.Types.ObjectId.isValid(objectId)
}

exports.isValidEmail = function (value) {
    let regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/
    return regex.test(value)
}
exports.isValidPhone = (Mobile) => {
    return /^[6-9]\d{9}$/.test(Mobile)
}

exports.isValidString = (String) => {
    const regexName = /^[a-zA-Z ]+$/;
    return regexName.test(String)
}

exports.isValidDate = function (date) {
    if (typeof date != "string") return false
    return moment(date, 'YYYY-MM-DD', true).isValid()
}
exports.isValidCustomerId = (String) => {
    const regexName = /^[a-zA-Z 0-9]+$/;
    return regexName.test(String)
}

exports.isValidCardNumber = function (value) {
    const regex = /(?:\d[ -]*?){13,16}/
    return regex.test(value)
}