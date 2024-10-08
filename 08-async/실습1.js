function call(name, cd) {
  setTimeout(function () {
    console.log(name);
    cd(name);
  }, 1000);
}

function back(cd) {
  setTimeout(function () {
    console.log("back");
    cd("back");
  }, 1000);
}

function hell(cd) {
  setTimeout(function () {
    cd("callback hell");
  }, 1000);
}

call("kim", function (name) {
  console.log(name + "반가워");

  back(function (txt) {
    console.log(txt + "을 실행했구나");

    hell(function (message) {
      console.log("여기는" + message);
    });
  });
});
