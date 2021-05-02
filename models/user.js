module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    userId: {
      type: Sequelize.STRING,
    },
    socketId: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING(64),
      defaultValue: "Anon",
    },
    username: {
      type: Sequelize.STRING(12),
    },
    bio: {
      type: Sequelize.STRING(50),
    },
    email: {
      type: Sequelize.STRING(64),
    },
    password: {
      type: Sequelize.STRING(64),
    },
    role: {
      type: Sequelize.ENUM,
      values: ["admin", "user"],
      defaultValue: "user",
    },
    phone: {
      type: Sequelize.STRING(14),
    },
    avatar: {
      type: Sequelize.STRING,
      defaultValue:
        "https://icons-for-free.com/iconfiles/png/512/logo+react+react+js+icon-1320184811840217251.png",
    },
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });

  return User;
};
