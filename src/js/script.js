$(function(){
    $('.carousel').carousel({
        dist: 0,
        padding: 5,
        fullWidth: true
    });

    $(".next").click(function(){
        $('.carousel').carousel('next');
    });

    $(".prev").click(function(){
        $('.carousel').carousel('prev');
    });
    
    $(".button-collapse").sideNav();

    $(".hora-programacao tr td").on("click", function(){
        var background = $(this).css("background-color");
        var text = $(this).text();
        $("#panel-programacao").removeClass("bg-yellow");

        
        $id = $(this).attr("id");
        
        switch($id){
            case "hp-00h":
            case "hp-03h":
            case "hp-06h":
            case "hp-09h":
            case "hp-15h":
            case "hp-18h":
            case "hp-21h":
                cor = "bg-blue";
                break;
            case "hp-01h":
            case "hp-04h":
            case "hp-07h":
            case "hp-10h":
            case "hp-13h":
            case "hp-16h":
            case "hp-19h":
            case "hp-22h":
                cor = "bg-pink";
                break;
            case "hp-12h":
                cor = "bg-black";
                break;
            case "hp-02h":
            case "hp-05h":
            case "hp-08h":
            case "hp-11h":
            case "hp-14h":
            case "hp-17h":
            case "hp-20h":
            case "hp-23h":
                cor = "bg-yellow";
                break;
        }
        $("#panel-programacao").removeClass("bg-blue");
        $("#panel-programacao").removeClass("bg-yellow");
        $("#panel-programacao").removeClass("bg-pink");
        $("#panel-programacao").removeClass("bg-black");
        
        $("#panel-programacao").addClass(cor);

        if(text !== "navigate_next")
            $("#panel-hora").text(text);

    });

    $('.modal').modal({
        dismissible: true, 
        opacity: 0.5,
        inDuration: 300,
        outDuration: 200,
        startingTop: '4%',
        endingTop: '10%',
      }
    );     
});