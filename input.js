let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf-8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === "\u0003") {
    process.exit();
  }
  if (key === "w") {
    connection.write("Move: up");
  }
  if (key === "a") {
    connection.write("Move: left");
  }
  if (key === "s") {
    connection.write("Move: down");
  }
  if (key === "d") {
    connection.write("Move: right");
  }
  if (key === "1") {
    connection.write("Say: chomp!");
  }
  if (key === "2") {
    connection.write("Say: behind!");
  }
  if (key === "3") {
    connection.write("Say: howdy!");
  }
  if (key === "4") {
    connection.write("Say: burrrp!");
  }

};

module.exports = setupInput;