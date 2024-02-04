// contains 8 characters or more
// contain a letter and a number

function validatePassword(password) {
    const validLength = password.length >= 8
    const containsLetter = /[a-zA-Z]/g.test(password)
    const containsNumber = /[0-9]/g.test(password)
    
    return validLength && containsLetter && containsNumber
}

module.exports = validatePassword