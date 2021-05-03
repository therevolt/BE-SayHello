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
      defaultValue: "https://www.jewishinteractive.org/wp-content/uploads/2016/03/person.png",
    },
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
  });

  return User;
};
