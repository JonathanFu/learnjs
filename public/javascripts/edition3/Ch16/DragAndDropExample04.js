//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch16/DragAndDropExample04.htm
//Custom Drop Target Example
var droptarget = document.getElementById("droptarget");

function handleEvent(event){
    document.getElementById("output").innerHTML += event.type + "<br>";
    if (event.type == "dropenter" || event.type == "dragover" || event.type=="drop"){
        EventUtil.preventDefault(event);
    }
}

EventUtil.addHandler(droptarget, "dragenter", handleEvent);
EventUtil.addHandler(droptarget, "dragover", handleEvent);
EventUtil.addHandler(droptarget, "dragleave", handleEvent);
EventUtil.addHandler(droptarget, "drop", handleEvent);

    