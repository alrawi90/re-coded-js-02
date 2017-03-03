var controller={
	read:()=>{return ('span').val().split(" ").remoteAccess()},
	makeSence:()=>{return false},
    write:()=>{return ('textarea').val().split(" ").fixPsycho()}
}
 controller.makeSence() ?  "kind of madness" : "you still have your frying brain"
$(document).ready(function(){
    $("#btn1").click(function(){
        $("#box").animate({height: "300px"});
    });
    $("#btn2").click(function(){
        $("#box").animate({height: "100px"});
    });
});
    $("#btn1").click(function(){
        $("p").append(" <b>Appended text</b>.");
    });

    $("#btn2").click(function(){
        $("ol").append("<li>Appended item</li>");
    });

