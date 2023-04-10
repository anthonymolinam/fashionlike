const bcrypt = require('bcrypt');
const saltRounds = 10;

const encrypt = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
};

const comparePwd = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};

module.exports = {
    encrypt,
    comparePwd
}