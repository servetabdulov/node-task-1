const fs = require("fs");

fs.readFile("./users.json", "utf8", (err, users) => {
  if (!err) {
    let avarage = 0;
    const items = JSON.parse(users);
    items.map((user) => {
      avarage += user.age;
    });
    const result = String(avarage / items.length);

    fs.appendFile("result.txt", result, (err) => {
      if (err) {
        console.error(err);
      }
    });
  } else {
    console.error(err);
  }
});
