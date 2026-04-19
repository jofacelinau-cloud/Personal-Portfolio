$(document).ready(function(){

    let sldMnu = false;

    $(".menuBt").click(function(){
        if(!sldMnu){
            $(".menuLinks").animate({ right: "0" }, 300, "swing");
            $(".scrnTch").show();
            sldMnu = true;
        }else{
            $(".menuLinks").animate({ right: "-260px" }, 300, "swing");
            $(".scrnTch").hide();
            sldMnu = false;
        }
    });

    $(".scrnTch").click(function(){
        $(".menuLinks").animate({ right: "-260px" }, 300);
        $(".scrnTch").hide();
        sldMnu = false;
    });

    $(".thumb").click(function(){
        let imgSrc = $(this).attr("src");
        $("#mainImage").fadeOut(200, function(){
            $(this).attr("src", imgSrc).fadeIn(200);
        });
    });

    setTimeout(function(){
        $("#ldscrn").fadeOut(500);
    }, 800);

});