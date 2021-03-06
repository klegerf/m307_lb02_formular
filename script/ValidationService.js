// Validate form input elements
const validateLib = require('./ValidationLib');

/**
 * Validate User
 * @param userObj
 * @returns {boolean|{msg: string, isNotValid: boolean}|{isNotValid}|*}
 */
function validateUser(userObj) {
    // Check required fields
    result = validateLib.checkRequired("vorname", userObj.vorname);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("nachname", userObj.nachname);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("phone", userObj.phone);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("email", userObj.email);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("thema", userObj.thema);
    if (result.isNotValid) { return result; }

    result = validateLib.checkRequired("antwort", userObj.antwort);
    if (result.isNotValid) { return result; }

    //check length
    result = validateLib.checkLength("vorname",userObj.vorname, 3, 15);
    if (result.isNotValid) { return result; }

    result = validateLib.checkLength("nachname",userObj.nachname, 3, 15);
    if (result.isNotValid) { return result; }

    //check email syntax
    result = validateLib.checkEmail("email", userObj.email);
    if (result.isNotValid) { return result; }

    //check phone syntax
    result = validateLib.checkPhone("phone", userObj.phone);
    if (result.isNotValid) { return result; }

    //check if thema is selected
    result = validateLib.checkThema("thema", userObj.thema);
    if (result.isNotValid) { return result; }

    //check if antwort is selected
    result = validateLib.checkAntwort("antwort", userObj.antwort);
    if (result.isNotValid) { return result; }

    //all inputs are valid and isNotValid=false
    return false;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT brackets!
 */
module.exports = {
    validateUser
}