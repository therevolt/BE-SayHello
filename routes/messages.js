const middleUpload = require("../middleware/upload");
const msg = require("../controllers/messages");
const { AuthAdmin, Auth, AuthRefresh, AuthVerif } = require("../middleware/auth");

const router = require("express").Router();

router.post("/", Auth, msg.saveMessage);
router.post("/get", Auth, msg.getHistoryMessage);
router.get("/read", Auth, msg.readMessages);
router.delete("/", Auth, msg.deleteMessages);

module.exports = router;
