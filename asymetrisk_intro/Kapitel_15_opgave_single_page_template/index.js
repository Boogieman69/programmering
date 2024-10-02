function setup(){
    hentTopPosts("cats");
    // Kalder funktionen 'hentTopPosts' med argumentet "cats" ved programmets start.
}


//async betyder at funktionen kan vente på at ting er færdige - fx at hente data
    async function hentTopPosts(subreddit) {

    //først sætter vi et response objekt lig metoden fetch som henter data
    //det tager noget tid, derfor keywordet "await"
   const response = await fetch(`https://www.reddit.com/r/${subreddit}/top.json?limit=8`)
    //når vi så får objekt tilbage, og HVIS response.ok = true
    //så kan vi bruge metoden .json() til at læse en readable stream
    //den operation tager OGSÅ noget tid - derfor keywordet "await" IGEN    
    const data = await response.json()
    //og så kan vi bruge ata fra serveren i json format 
        console.log(data)
        //posts er et array med poster fra json objektet
        let posts = json.data.children
        //vi løber arrayet med poster igennem
        for( p of posts){
            //og nu kan vi logge forskellige egenskaber ved hver post til 
            console.log(p.data.title)
            console.log(p.data.url)
            console.log(p.data.selftext)
            createPost(p.data)
        }

} 

function createPost(post){
    //vi laver først en reference til det HTML element vi vil sætte poster ind i
    let rightDiv = select('#page1 .right')
    //lad os give posten en container
    let container = createDiv().addClass('post')
    //lad os give en titel
    let title = createElement('h1, post.title')
    //hver gang jeg har lavet et element 


rightDiv.child(container)
}