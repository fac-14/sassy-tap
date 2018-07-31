const colors = require("colors");

let tapeInfo = "";
process.stdin.setEncoding("utf8");
process.stdin.on("readable", () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    tapeInfo += chunk;
  }
});

process.stdin.on("end", () => {
  let newArr = tapeInfo.split("\n");
  let failArr = [];
  for (i = 0; i < newArr.length; i++) {
    if (newArr[i].includes("not ok")) {
      failArr.push(newArr[i].split(" ")[2]);
    } else {
      //nothing
    }
  }
  let testNumber = newArr[newArr.length - 5];
  let passNumber = newArr[newArr.length - 4].split(" ")[3];
  let failOrOk = newArr[newArr.length - 3];
  if (failOrOk.includes("# fail")) {
    let fail = failOrOk.split(" ")[3];
    console.log(
      "(•_•) \n <) )╯ " +
        "U ok hun? out of " +
        testNumber.split(" ")[2] +
        " tests" +
        " \n / \\ \n \\(•_•) \n ( (> " +
        passNumber +
        " passed" +
        " \n / \\ \n (•_•) \n <) )> " +
        "but " +
        fail +
        " failed." +
        " \n / \\"
    );
    console.log(colors.rainbow("AWKWARD"));
    let failedTests = "";
    failArr.forEach(element => {
      failedTests += " " + element;
    });
    console.log(colors.rainbow("Failed tests =\n" + failedTests));
  } else if (failOrOk.includes("# ok")) {
    console.log(
      "(•_•) \n <) )╯ " +
        "HOT DAMN" +
        " \n / \\ \n \\(•_•) \n ( (> " +
        "ALL " +
        testNumber.split(" ")[3] +
        " TESTS PASSED" +
        " \n / \\ \n (•_•) \n <) )> " +
        "YOU SASSY THING" +
        " \n / \\"
    );
    console.log(colors.rainbow("GOOD EGG (⌐■_■)"));
  }
});
