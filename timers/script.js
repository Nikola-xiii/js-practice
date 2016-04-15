var TimerObject = function () {
  var StartDate, EndDate, Time = 0;

  var Start = function () {
    StartDate = Date.now();
  }

  var Stop = function () {
    StartDate = Date.now();
  }

  var Watch = function () {
    document.getElementById("time").innerHTML(EndDate - StartDate);
    //return EndDate - StartDate;
  }
};
