let currentPage = 3
let pages //array med alle elementer med class = page

function setup(){
    //shiftPage er funktionen der tagger et tal og skifter til en side 
    shiftpage(currentPage)

    console.log('P5.js er loaded' )
    select('#page' + currentPage).addClass('visible')
    pages = selectAll('.page')
    menuItems = selectAll('menuitems')
    //nu kan man se at alle pages er blevet til en liste med alle class = page ting 
    //console.log(pages.length)
for(m of menuItems)

    //lav en masse div'er vi kommer ind i page 3
    for(c of colors){
        //console.log(c)
        let div = createDiv()
        div.style('background-color', c)
        select('#page3').child(div)
    }
}



function shiftPage(num){
    if(num == "ArrowLeft"){
        num = currentPage - 1
    }
    if(num == "ArrowRight"){
        num = currentPage + 1
    }
    
    if(isNaN(num) || num > pages.length || num == 0){
        return
    }
    select("#page" + currentPage).removeClass('visible')
    currentPage = num
    select("menu" + currentPage).addClass('visible')

    select("#menu" + currentPage).removeClass('active')
    select("#menu" + currentPage).addClass('active')
}

function keyPressed(){
    console.log(key)
    shiftPage(key)
}

