$("input").keypress(function(e){
    if(e.which === 13){
        const Todo= $("input").val() ;
        if(Todo !== ""){
            $("ul").append(`<li>${Todo}<img src="cancel.png" alt=""></li>`)
        }
        $("input").val("") ;
        prevdata()
    }
})


$("button").click(function(){
    const toadd= $("input").val() ;
    if(toadd !== ""){
        $("ul").append(`<li>${toadd}<img src="cancel.png" alt=""></li>`)
    }
    $("input").val("") ;
    prevdata()
})


$("ul").on("click", "li", function(){
    $(this).toggleClass("done")
    prevdata()
})


$("ul").on("click", "img", function(e){
    $(this).parent().fadeToggle(900, function(){
        $(this).remove() ;
        prevdata()
    })
    e.stopPropogation() ;
    
})


$("#minus").click(function(){
    $("div").slideToggle(700)
    prevdata()
})

const list= document.getElementById('todolist')
function prevdata(){
    localStorage.setItem('hell', list.innerHTML)
}
function reload(){
    list.innerHTML= localStorage.getItem('hell')
}
reload()