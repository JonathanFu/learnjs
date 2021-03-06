//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/NodeRemovalEventsExample01.htm
//Node Removal Events Example
EventUtil.addHandler(window, "load", function(event){
    var list = document.getElementById("myList");
    
    EventUtil.addHandler(document, "DOMSubtreeModified", function(event){
        print(event.type);
        print(event.target);
    });
    EventUtil.addHandler(document, "DOMNodeRemoved", function(event){
        print(event.type);
        print(event.target);
        print(event.relatedNode);
    });
    EventUtil.addHandler(list.firstChild, "DOMNodeRemovedFromDocument", function(event){
        print(event.type);
        print(event.target);
    });            
    
    list.parentNode.removeChild(list);
});

    