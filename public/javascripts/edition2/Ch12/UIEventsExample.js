//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/UIEventsExample.htm
//UI Events Example
    (function(){
var link = document.getElementById("myLink");

EventUtil.addHandler(link, "DOMFocusIn", function(event){
    document.getElementById("myOutput").innerHTML += "Focus in<br />";
});

EventUtil.addHandler(link, "DOMFocusOut", function(event){
    document.getElementById("myOutput").innerHTML += "Focus out<br />";
});

EventUtil.addHandler(link, "DOMActivate", function(event){
    document.getElementById("myOutput").innerHTML += "Activate<br />";
});

    })();
    