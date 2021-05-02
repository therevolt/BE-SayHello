const db = require("../models");
const formatResult = require("../helpers/formatResult");
const {
  getToken,
  decodeToken,
  verifyToken,
  getTokenReset,
  verifyTokenReset,
  decodeTokenReset,
  getTokenVerify,
  decodeTokenVerify,
  verifyTokenVerify,
  getTokenRefresh,
  decodeTokenRefresh,
} = require("../helpers/jwtHelper");
const { Op } = require("sequelize");
const getPagingData = require("../helpers/getPagingData");
const getPagination = require("../helpers/getPagination");
const Msg = db.message;

exports.saveMessage = (req, res) => {
  const verify = verifyToken(req);
  if (verify !== true) return formatResult(res, 400, false, verify, null);
  const decode = decodeToken(req);
  const userId = decode.userId;
  req.body.from = userId;
  if (req.body.messageBody) {
    Msg.create(req.body)
      .then((result) => {
        formatResult(res, 200, true, "Message Success", result);
      })
      .catch((err) => {
        formatResult(res, 500, false, err, null);
      });
  } else {
    formatResult(res, 400, false, "Body Message Cannot Be Null", null);
  }
};

exports.getHistoryMessage = (req, res) => {
  const verify = verifyToken(req);
  if (verify !== true) return formatResult(res, 400, false, verify, null);
  const decode = decodeToken(req);
  const userId = decode.userId;
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);
  req.body.from = userId;
  Msg.findAndCountAll({
    where: {
      [Op.or]: [
        { [Op.and]: { to: userId, from: req.body.to } },
        { [Op.and]: { from: userId, to: req.body.to } },
      ],
    },
    limit: parseInt(limit),
    offset: parseInt(offset),
    order: [["createdAt", "desc"]],
  })
    .then((result) => {
      const dataResult = getPagingData(result, page, limit, req);
      formatResult(res, 200, true, "Success Get Messages", dataResult);
    })
    .catch((err) => {
      console.log(err);
      formatResult(res, 500, false, err, null);
    });
};

exports.readMessages = (req, res) => {
  const verify = verifyToken(req);
  if (verify !== true) return formatResult(res, 400, false, verify, null);
  const decode = decodeToken(req);
  const userId = decode.userId;
  Msg.findAll({ where: { isRead: false, to: userId, from: req.query.user } }).then(
    async (resultFind) => {
      if (resultFind.length > 0) {
        for (let i in resultFind) {
          await Msg.update({ isRead: true }, { where: { id: resultFind[i].id } });
        }
        formatResult(res, 200, true, "All Message Success Read", null);
      } else {
        formatResult(res, 400, false, "You Cannot Access Message Other People", null);
      }
    }
  );
};

exports.deleteMessages = (req, res) => {
  const verify = verifyToken(req);
  if (verify !== true) return formatResult(res, 400, false, verify, null);
  const decode = decodeToken(req);
  const userId = decode.userId;
  Msg.destroy({
    where: {
      [Op.or]: [
        { [Op.and]: { to: userId, from: req.query.user } },
        { [Op.and]: { from: userId, to: req.query.user } },
      ],
    },
  })
    .then(() => {
      formatResult(res, 200, true, "Success Delete Messages", null);
    })
    .catch((err) => {
      console.log(err);
      formatResult(res, 500, false, err, null);
    });
};
