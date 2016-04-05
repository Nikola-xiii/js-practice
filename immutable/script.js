/**
 * Created by nikola on 4/5/16.
 */
var Immutable = require('immutable');

var map = Immutable.Map({"_id": 1, "student": "Mary", "grade": 45, "assignment": "homework"});

map = map.set("grade", 48);
console.log(map);
