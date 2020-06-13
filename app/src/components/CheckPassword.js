import React from "react"
import {CREATE_USER_ERROR_MESSAGES} from './constants'


/**
 * @return {string}
 */
function CheckPassword(userObj) {

    const password = userObj.password;
    console.log(password)
    const PASSWORD_SPECIAL_WC = /.*[!@#$%^&*()_\-+=?/<>;:'"\\|~`.]+.*/;
    const PASSWORD_CAPITAL_WC = /.*[A-Z]+.*/;
    const PASSWORD_NUMBER_WC = /.*[0-9]+.*/;

    if (password.length < 10 || !password) {
        return CREATE_USER_ERROR_MESSAGES.PASSWORD_TOO_SHORT;
    }


    /* ******* Password extra check ******* */
    if (!password.match(PASSWORD_CAPITAL_WC)) {
        return CREATE_USER_ERROR_MESSAGES.PASSWORD_MISSING_CHARS
    }
    if (!password.match(PASSWORD_NUMBER_WC)) {
        return CREATE_USER_ERROR_MESSAGES.PASSWORD_MISSING_CHARS
    }
    if (!password.match(PASSWORD_SPECIAL_WC)) {
        return CREATE_USER_ERROR_MESSAGES.PASSWORD_MISSING_CHARS
    }

    return null;
}

export default CheckPassword