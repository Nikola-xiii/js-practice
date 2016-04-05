/**
 * Created by nikola on 3/30/16.
 */
var promiseCount = 0;

function testPromise() {
  var thisPromiseCount = ++promiseCount;

  var log = document.getElementById('log');
  log.insertAdjacentHTML('beforeEnd', thisPromiseCount + ') Start (Sync code)');
  
  var p1 = new Promise (
    function (resolve, reject) {
      log.insertAdjacentHTML('beforeEnd', thisPromiseCount + ') Start alert (запуск Async code)');
      window.setTimeout(
        function () {
          resolve(thisPromiseCount);
        }, Math.random() * 5000 + 1000
      );
    }
  );

  p1.then(
    function (val) {
      log.insertAdjacentHTML('beforeEnd', val + ') Done alert (запуск Async code)');
    }
  );

  log.insertAdjacentHTML('beforeEnd', thisPromiseCount + ') Create alert (Sync code)');
}