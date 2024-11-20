const net = require("net");
const { host, port } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host,
    port
  });

  conn.on("connect", () => {
    console.log("Game starts now!");
    conn.write("Name: GUS");
    // conn.write("Move: up");
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;