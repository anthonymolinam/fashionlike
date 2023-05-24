"use strict";

var _require = require("express"),
  Router = _require.Router;
var router = Router();
router.get("", function (req, res) {
  res.json({
    "message": "Hola Mundo!"
  });
});
module.exports = router;