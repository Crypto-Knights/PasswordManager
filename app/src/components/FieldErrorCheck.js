import React from "react"
import {CREATE_USER_ERROR_MESSAGES} from './constants'


/**
 * @return {string}
 */
function FieldErrorCheck(userObj) {
    const firstName = userObj.firstName;
    const lastName = userObj.lastName;
    const email = userObj.email;
    const password = userObj.password;
    const questionOne = userObj.questionOne;
    const answerOne = userObj.answerOne;
    const PASSWORD_SPECIAL_WC = /.*[!@#$%^&*()_\-+=?/<>;:'"\\|~`.]+.*/;
    const PASSWORD_CAPITAL_WC = /.*[A-Z]+.*/;
    const PASSWORD_NUMBER_WC = /.*[0-9]+.*/;

    /* ****** Fields are empty or too short ****** */
    if (firstName.length < 3 || !firstName) {
        return CREATE_USER_ERROR_MESSAGES.FIELD_IS_EMPTY;
    }
    if (lastName.length < 3 || !lastName) {
        return CREATE_USER_ERROR_MESSAGES.FIELD_IS_EMPTY;
    }
    if (email.length < 3 || !email) {
        return CREATE_USER_ERROR_MESSAGES.FIELD_IS_EMPTY;
    }
    if (password.length < 10 || !password) {
        return CREATE_USER_ERROR_MESSAGES.PASSWORD_TOO_SHORT;
    }
    if (questionOne === '' || !questionOne) {
        return CREATE_USER_ERROR_MESSAGES.QUESTION_ONE_IS_EMPTY;
    }
    if (answerOne.length < 3 || !answerOne) {
        return CREATE_USER_ERROR_MESSAGES.FIELD_IS_EMPTY;
    }

    if (firstName.length > 64 || !firstName) {
        return CREATE_USER_ERROR_MESSAGES.FIELD_TOO_LONG;
    }
    if (lastName.length > 64 || !lastName) {
        return CREATE_USER_ERROR_MESSAGES.FIELD_TOO_LONG;
    }
    if (email.length > 64 || !email) {
        return CREATE_USER_ERROR_MESSAGES.FIELD_TOO_LONG;
    }
    if (password.length > 64 || !password) {
        return CREATE_USER_ERROR_MESSAGES.FIELD_TOO_LONG;
    }
    if (answerOne.length > 64 || !answerOne) {
        return CREATE_USER_ERROR_MESSAGES.FIELD_TOO_LONG;
    }

    /* ******* Password extra check ******* */
    if (firstName.match(PASSWORD_SPECIAL_WC)) {
        return CREATE_USER_ERROR_MESSAGES.ILLEGAL_CHARACTER_DETECTED
    }
    if (lastName.match(PASSWORD_SPECIAL_WC)) {
        return CREATE_USER_ERROR_MESSAGES.ILLEGAL_CHARACTER_DETECTED
    }
    if (answerOne.match(PASSWORD_SPECIAL_WC)) {
        return CREATE_USER_ERROR_MESSAGES.ILLEGAL_CHARACTER_DETECTED
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

    // noinspection JSValidateTypes
    return null;
}

export default FieldErrorCheck