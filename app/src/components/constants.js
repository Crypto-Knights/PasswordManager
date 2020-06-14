export const CREATE_USER_ERROR_MESSAGES = {
    DEFAULT: '',
    SERVER_ERROR: 'We\'re sorry, the server is not responding right now',

    FIELD_IS_EMPTY: 'Failed to register. All field must be filled out and be at least 3 characters long',
    QUESTION_ONE_IS_EMPTY: 'Failed to register. Please select a question',
    FIELD_TOO_LONG: 'Failed to register. Fields must be no longer than 64 characters',

    PASSWORD_TOO_SHORT: 'Failed to register. Password must be at least 10 characters long',
    PASSWORD_MISSING_CHARS: 'Failed to register. Password must contain at least 1 upper case letter,' +
        ' 1 lower case letter, 1 number, and 1 special character',

    ILLEGAL_CHARACTER_DETECTED: 'Failed to register. All fields excluding password cannot contain special characters'

};