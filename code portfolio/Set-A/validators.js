function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        return {valid: false, error: "Invalid email address." };
    }
    else {
        return {valid: true, error: null };
    }
}


function validatePassword(password) { 
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
        return {valid: false, error: "Password must be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and special characters." };
    }
    else {
        return {valid: true, error: null };
    }
}

function validatePhoneNumber(phone) {
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        return {valid: false, error: "Invalid phone number. Please enter a 10-digit number." };
    }
    else {
        return {valid: true, error: null };
    }
}

function validateUrl(url) {
    const urlPattern = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*\/?$/;
    if (!urlPattern.test(url)) {
        return {valid: false, error: "Invalid URL. Please enter a valid URL." };
    }
    else {
        return {valid: true, error: null };
    }
}

function validateDate(date) {
    const datePattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if (!datePattern.test(date)) {
        return {valid: false, error: "Invalid date. Please enter a date in the format DD/MM/YYYY." };
    }
    else {
        return {valid: true, error: null };
    }
}
