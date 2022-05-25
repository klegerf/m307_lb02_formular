// Show input error message

/**
 * Beschreibung
 * @param id: Identifikation des eingegebenen Datenelement
 * @param message: Fehlermeldung
 * @returns {string}
 */
function showError(id, message) {
    return `${id}: ${message}`;
}

// Show success outline
function showSuccess(id) {
    return `${id} erfolgreich verifiziert!`;
}

// Check email is valid
function checkEmail(id,input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Email-Adresse ist nicht gültig')
        }
    }
    return result;
}

// Check email is valid
function checkPhone(id,input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    const swiss = /^(?:(?:|0{1,2}|\+{0,2})41(?:|\(0\))|0)([1-9]\d)(\d{3})(\d{2})(\d{2})$/;
    if (!swiss.test(input.trim())) {
        result = {
            isNotValid: true,
            msg: showError(id, 'Telefonnummer ist nicht gültig')
        }
    }
    return result;
}

//TODO: Check article for throwing errors in node js
// https://stackoverflow.com/questions/33086247/throwing-an-error-in-node-js

// Check required fields
function checkRequired(id, input) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    //if input is empty ...
    if (input.trim() === '') {
        //.. then it's not valid
        result = {
            isNotValid: true,
            msg: showError(id, `${input.toString()} is required`)
        }
    }
    //return validation result
    return result;
}

// Check input length
function checkLength(id, input, min, max) {
    //Default: is valid
    let result = {
        isNotValid: false,
        msg: showSuccess(id)
    }
    if (input.length < min) {
        result = {
            isNotValid: true,
            msg: showError(id,
            `${id} muss mindestens ${min} Zeichen haben`)
        }
    } else if (input.length > max) {
        result = {
            isNotValid: true,
            msg: showError(id,
                `${id} darf nicht mehr als ${max} Zeichen haben`)

        }
    }
    return result;
}

/**
 *  Export validation functions for further usage.
 *  function to export WITHOUT brackets!
 */
module.exports = {
    checkEmail,
    checkLength,
    checkRequired,
    checkPhone
}
