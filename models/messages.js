module.exports = (sequelize, Sequelize) => {
  const Messages = sequelize.define("message", {
    to: {
      type: Sequelize.STRING,
    },
    from: {
      type: Sequelize.STRING,
    },
    messageBody: {
      type: Sequelize.STRING,
    },
    messageAttachment: {
      type: Sequelize.JSON,
    },
    isRead: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });

  return Messages;
};
