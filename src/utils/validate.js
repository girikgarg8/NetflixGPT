export const validateData = (email,password) => {
    const isEmailValid =  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);

    if (!isEmailValid) return new Error('Email ID is not valid');

    if (!isPasswordValid) return new Error('Password is not valid');

    return null;
}