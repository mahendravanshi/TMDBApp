


 //accept input
    // fetch data
    // append data

    let id
    let movies_div = document.getElementById("movies");

    let searchMovies = async (q)=>
    {
        // prepare url

        let url = `https://www.omdbapi.com/?s=${q}&apikey=9513ca31&`

        try{
            let res = await fetch(url);

            let data = await res.json();

            // console.log(data); 

            return data.Search;
        }
        catch(err){
            console.log(err);
        }

    }

    async function main(){
        let query = document.querySelector("#query").value;
        // console.log(query);

       let response =  await searchMovies(query);  // who is returning promise

        // searchMovies is returning a promise,async 
                   //    function no matter returns a promise


        let data = await  response;

        

        // console.log(data);
        appendMovies(data)
    }



let appendMovies = (movies) =>{

    
    if(movies===undefined){
        return false;
    }

    movies_div.innerHTML = null;

    movies.forEach((el,i)=>{

        // console.log(movies);

       
        let p = document.createElement("p");
        p.setAttribute("class","title")
        p.innerText = el.Title;


        let img = document.createElement("img");
        img.src = el.Poster

        p.addEventListener("click",()=>{
            addMovie(el,i);
        })

        movies_div.append(img,p);

      

    
    })
}

let addMovie = ({Poster,Title,Type,Year})=>{

    let container = document.querySelector("#container");

    container.innerHTML = null;

    let box = document.createElement("div");
    box.setAttribute("id","box")


    let img = document.createElement("img");
    img.src = Poster;

    box.append(img)

    let h3 = document.createElement("h3");
    h3.innerText =  Title;

    let p1  = document.createElement("p");
    p1.innerText = Type

    let p2 = document.createElement("p");
    p2.innerText = Year

    let div1 = document.createElement("div");
    

    div1.append(h3,p1,p2);

    div2 = document.createElement("div");
    div2.setAttribute("id","div");

    div2.append(box,div1)



    container.append(div2);

}





function debounceFunction(func,delay){

    if(id){
        clearTimeout(id);
    }


   id =  setTimeout(()=>{


        func();

    },delay)

    
}
