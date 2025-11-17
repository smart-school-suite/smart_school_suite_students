export const formatDateAndCalculateAge = (dateString) => {
    const birthday = new Date(dateString);

    if (isNaN(birthday.getTime())) {
        console.error("Invalid date format provided:", dateString);
        return "Error: Invalid date format. Please use YYYY-MM-DD.";
    }

    const dateOptions = {
        weekday: 'short', 
        month: 'short', 
        day: '2-digit',
        year: 'numeric'
    };
    
    const formattedDate = birthday.toLocaleDateString('en-US', dateOptions).replace(/,/g, '');

    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();

    const monthDifference = today.getMonth() - birthday.getMonth();
    const dayDifference = today.getDate() - birthday.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return `${formattedDate}, ${age} years Old`;
};