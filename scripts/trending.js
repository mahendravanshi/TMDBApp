







 //accept input
    // fetch data
    // append data

    // let id
    // let movies_div = document.getElementById("movies");

    

        let url = `https://api.themoviedb.org/3/trending/movie/day?api_key=de3223a45568c80c3a9ecfb9b6802440`

        let container = document.getElementById("container");
             
        fetch(url).then((res)=>{
            return res.json();
        }).then((res)=>{
            console.log(res.results)
            append(res.results)
        })

let append = (data)=>{
data.map(({title,poster_path,release_date,vote_average})=>{

            let div = document.createElement("div");
            let poster = document.createElement("img");
            poster.src = `https://image.tmdb.org/t/p/original/${poster_path}`
            poster.style.height="410px"
            poster.style.width="410px"

            let name = document.createElement("h4");
            name.innerText = title;

            let date = document.createElement("h4")
            date.innerText = release_date;

            let rating = document.createElement("h4")
            rating.innerText = vote_average;
            
            div.append(poster,name,date,rating);
            container.append(div);

})
}



    
