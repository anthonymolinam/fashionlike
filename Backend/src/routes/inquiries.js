const router = require('express').Router();
const userCtrl = require('../controllers/inquiries');
const { checkAuth, checkRoleAuth } = require('../helpers/check');

router.get('/allusers', checkRoleAuth(['admin']), userCtrl.getAllUsers);
router.get('/user/:username', userCtrl.getUser);

router.put('/update-password', checkRoleAuth(['admin', 'user']), userCtrl.changePwd)
router.put('/forgot-password', checkAuth, userCtrl.changePwd);

module.exports = router;