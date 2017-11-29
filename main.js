Date.prototype.addDays = function(days) {
    var maxDays = new Date(this.valueOf());
    maxDays.setDate(maxDays.getDate() + days);
    return maxDays;
}

var maxDays = new Date();


var i = $("#build");
if (maxDays.getDay() !== 0) {
    i.append(maxDays.addDays(8).toDateString());
} else if (maxDays.getDay() == 6) {
    i.append(maxDays.addDays(9).toDateString());
} else {
    i.append(maxDays.addDays(7).toDateString());
}

$("#complete").append(maxDays.addDays(4).toDateString());
$("#moneyBack").append(maxDays.addDays(100).toDateString());


console.log("hello");