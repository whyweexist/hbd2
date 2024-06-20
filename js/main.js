$(document).ready(function() {
    $('#titleWeb').text(CONFIG.titleWeb)
    $('body').css('background-image', 'url(./images/' + CONFIG.background + ')')

    for (let i = 1; i <= 6; i++)
        $('#min' + i).css('background-image', 'url(./images/' + CONFIG['min' + i] + ')')

    for (let i = 1; i <= 6; i++)
        $('#max' + i).css('background-image', 'url(./images/' + CONFIG['max' + i] + ')')
})



// tryig by video 

const box = document.querySelector(".box")


box.addEventListener("mouseover",()=>{
    console.log("mouse overing");
    document.querySelector("#audio").play()
})

box.addEventListener("mouseleave",()=>{
    console.log("mouse overing");
    document.querySelector("#audio").pause()
})


