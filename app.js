var drawpoin = function (point) {
    //....
};
var distance = function (pointA, pointB) {
    //....
};
// here we have two method separate from point object, we have violated the cohesion pricipal
// we should use class
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + 'Y: ' + this.y);
    };
    Point.prototype.getDistance = function (point) {
        //...
    };
    return Point;
}());
//objetcs
var point = new Point();
point.draw();
point.getDistance(point);
