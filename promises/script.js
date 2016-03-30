/**
 * Created by nikola on 3/30/16.
 */
var promiseCount = 0;

function testPromise() {
  var thisPromiseCount = ++promiseCount;

  var log = document.getElementById('log');
  log.insertAdjacentHTML('beforeeed', thisPromiseCount + ') Start (Sync code)');
  
  var p1 = new Promise (
    function (resolve, reject) {
      log.insertAdjacentHTML('beforeend', thisPromiseCount + ') Start alert (запуск Async code)');
      window.setTimeout(
        function () {
          resolve(thisPromiseCount);
        }, Math.random() * 2000 + 1000
      );
    }
  );

  p1.then(
    function (val) {
      log.insertAdjacentHTML('beforeend', val + ') Done alert (запуск Async code)');
    }
  )

  log.insertAdjacentHTML('beforeeed', thisPromiseCount + ') Create (Sync code)');
}