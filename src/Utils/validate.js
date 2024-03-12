export const checkValidData = (email,password) => {

    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,3}$/.test(email); //.test() is regexp method to check valid or not
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return 'Email Id is not valid';

    if(!isPasswordValid) return 'password is not valid';

    return null;

};