var Sequelize = require("sequelize");

const Db = new Sequelize("trellob", "postgres", "edu_tech", {
  dialect: "postgres",
  protocol: "postgres",
});

Db.authenticate()
  .then(() => {
    console.log("connection success");
  })
  .catch(() => {
    console.log("error indb connection");
  });

const User = Db.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Board = Db.define("board", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  discription: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

const List = Db.define("list", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  discription: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

const Card = Db.define("card", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  discription: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  priority: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// definign relations between tables

// user and board relation 1:m
User.hasMany(Board, {
  foreignKey: "user_id",
});
Board.belongsTo(User, {
  foreignKey: "user_id",
});

// borad and list relation 1:m

Board.hasMany(List, {
  foreignKey: "board_id",
});
List.belongsTo(Board, {
  foreignKey: "board_id",
});

// list and card relation 1:m

List.hasMany(Card, {
  foreignKey: "list_id",
});
Card.belongsTo(List, {
  foreignKey: "list_id",
});

Db.sync()
  .then(() => {
    console.log("table synchornised");
  })
  .catch(() => {
    console.log("error in sync table");
  });

module.exports = { Db: Db, User: User, Board: Board, List: List, Card: Card };
