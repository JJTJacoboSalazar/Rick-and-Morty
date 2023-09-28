const validateEmail = (email) => {
    if(!email) {
        return 'Email cannot be empty';
    }
    if (email.length > 35){
        return 'The email cannot exceed 35 characters';
    }
    // Validamos el email usando una expresion regular (regex) que saque de internet >:)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        return 'Invalid email format';
    }
    return '';
}

const validatePassword = (password) => {
    if(!password){
        return 'Password cannot be empty';
    }
    if(password.length < 6 || password.length > 10){
        return 'The password must be between 6 and 10 characters long';
    }
    // Validacion de contraseña usando regex
    const passwordRegex = /\d/;
    if(!passwordRegex.test(password)) return 'The password must have at least one number'
}




export {validateEmail};
export {validatePassword};