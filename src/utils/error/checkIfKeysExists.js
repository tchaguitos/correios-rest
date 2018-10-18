const checkIfKeysExists = (obj, array) => {

    const errors = [];

    array.map((key) => {
        const result = obj.hasOwnProperty(key);
        
        if (!result) errors.push(key);
        
        return errors;
    });
    
    if (errors.length === 0) return false;
    
    return errors;
};

module.exports = checkIfKeysExists;
