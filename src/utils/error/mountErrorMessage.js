const mountErrorMessage = (array) => {

    const errors = [];
    
    array.map((key) => {
        errors.push(`${key} is required`);
        
        return errors;
    });
    
    return errors;
};

module.exports = mountErrorMessage;
