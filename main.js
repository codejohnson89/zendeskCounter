 Date.prototype.addDays = function(days) {
     var maxDays = new Date(this.valueOf());
     maxDays.setDate(maxDays.getDate() + days);
     return maxDays;
 }


 var maxDays = new Date();
 var j = $("#build");
 var i = $("#complete");

 switch (maxDays.getDay()) {
     case 0:
         i.append(maxDays.addDays(4).toDateString());
         break;
     case 1:
         i.append(maxDays.addDays(4).toDateString());
         break;
     case 2:
         i.append(maxDays.addDays(6).toDateString());;
         break;
     case 3:
         i.append(maxDays.addDays(6).toDateString());
         break;
     case 4:
         i.append(maxDays.addDays(6).toDateString());
         break;
     case 5:
         i.append(maxDays.addDays(6).toDateString());
         break;
     case 6:
         i.append(maxDays.addDays(5).toDateString());
 }

 switch (maxDays.getDay()) {
     case 0:
         j.append(maxDays.addDays(9).toDateString());
         break;
     case 1:
         j.append(maxDays.addDays(9).toDateString());
         break;
     case 2:
         j.append(maxDays.addDays(9).toDateString());;
         break;
     case 3:
         j.append(maxDays.addDays(9).toDateString());
         break;
     case 4:
         j.append(maxDays.addDays(11).toDateString());
         break;
     case 5:
         j.append(maxDays.addDays(11).toDateString());
         break;
     case 6:
         j.append(maxDays.addDays(10).toDateString());
 }

 $("#moneyBack").append(maxDays.addDays(100).toDateString());