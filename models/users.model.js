const { v4: uuidv4 } = require("uuid");
const users = [
  {
    id: uuidv4(),
    username: "shatul",
    email: "shatul@yahoo.com",
  },
  {
    id: uuidv4(),
    username: "sinha",
    email: "sinha@yahoo.com",
  },
];
module.exports = users;
