// Validate email
export function validateEmail(email) {
    if (email === "") {
        return "Please enter your email address.";
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return "Please enter a valid email address.";
    }
    return null; // No errors
}

// Validate level
export function validateLevel(level) {
    if (level === "") {
        return "Please select your level.";
    }
    return null; // No errors
}

// Validate hours
export function validateHours(hours, level) {
    const maxHoursPerLevel = {
        Basic: 5,
        Advanced: 10,
    };
    hours = parseInt(hours);
    if (isNaN(hours) || hours <= 0) {
        return "Please enter a valid number of hours greater than zero.";
    }
    if (hours > maxHoursPerLevel[level]) {
        return `For the ${level} level, please enter up to ${maxHoursPerLevel[level]} hours.`;
    }
    return null; // No errors
} 