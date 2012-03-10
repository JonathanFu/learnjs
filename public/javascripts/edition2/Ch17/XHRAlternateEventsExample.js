//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch17/XHRAlternateEventsExample.htm
//XHR Alternate Events Example
    
function createXHR(){
    if (typeof XMLHttpRequest != "undefined"){
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined"){
        if (typeof arguments.callee.activeXString != "string"){
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                            "MSXML2.XMLHttp"];
    
            for (var i=0,len=versions.length; i < len; i++){
                try {
                    var xhr = new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    return xhr;
                } catch (ex){
                    //skip
                }
            }
        }
    
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error("No XHR object available.");
    }
}
        
var xhr = createXHR();        
xhr.onload = function(event){
    print(xhr.responseText);
    print(xhr.status);
};
xhr.onerror = function(event){
    print("Error: " + xhr.status);
};
xhr.onprogress = function(event){
    var statusDiv = document.getElementById("status");
    statusDiv.innerHTML = "Received " + event.position + " of " + event.totalSize;
};
xhr.open("get", "altevents.php", true);

xhr.send(null);

    