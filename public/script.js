var codeList = [];


function renderCode(){
    $("#codeList").empty();
    $("#codeInput").val("");
    
    for (i=0; i<codeList.length; i++){
        var a = $("<a>");
        a.addClass("list-group-item list-group-item-action list-group-item-primary code");
        a.attr("data-name", codeList[i]);
        a.text(codeList[i]);
        $("#codeList").prepend(a);
    } 
}

$("#codeInput").keypress(function(e){
    if(e.which == 13){
        $("#saveBtn").click();
    }
})