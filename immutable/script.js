/**
 * Created by nikola on 4/5/16.
 */
var Immutable = require('immutable');

var list = Immutable.List.of(1,1,34,5);

var map = Immutable.Map({"_id": 1, "student": "Mary", "grade": 45, "assignment": "homework"});

map = map.set("grade", 48);

var list2 = list.withMutations(function (list) {
  list.push(4).push(5).push(6);
});

console.log(list2);

