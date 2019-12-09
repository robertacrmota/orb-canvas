var Point = function(x=0, y=0) {
    this.x = x;
    this.y = y;
    this.isZero = (this.x === 0) && (this.y === 0);

    this.distance = function(otherPt) {
        return Math.sqrt(Math.pow((this.x - otherPt.x), 2) + Math.pow((this.y - otherPt.y), 2));
    };
};

var Line = function(ow) {
    this.segments = [];

    this.getLastPoint = function () { var idx = this.segments.length - 1; return this.segments[idx]; };
    this.addPoint = function(pt) { this.segments.push(pt); };
};
