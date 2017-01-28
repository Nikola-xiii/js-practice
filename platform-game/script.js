function Level(plan) {
  this.width = plan[0].length;
  this.height = plan.length;
  this.grid = [];
  this.actor = [];

  for (var y; y < this.height; y++) {
    var line = plan[y], gridLine = [];
    for(var x; x < this.width; x++) {
      var ch = line[x], fieldType = null;
      var Actor = actorChars[ch];
      if(Actor) {
        this.actor.push(new Actor(new Vector(x, y), ch))
      } else if (ch == "x") {
        fieldType = "wall";
      } else if (ch == "!") {
        fieldType = "lava";
      }
      this.gridLine.push(fieldType);
    }
    this.grid.push(gridLine);
  }

  this.player = this.action.filter(function (actor) {
    return actor.type == "player";
  })[0];

  this.status = this.finishDelay = null;
}
