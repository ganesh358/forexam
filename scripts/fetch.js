let searchNews = async (value) => {
    try {
        let res = await fetch(
            `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`
        );

        let data = await res.json();
      
        return data;
    } catch (err) {
        console.log(err);
    }
};


let append = (dara, container) => {
    data.forEach(({urlToImage:{small},content}) => {
        let div = document.createElement("div");
        div.setAttribute("class","image");

        let img = document.createElement("img");
        
        let p = document.createElement("p");
   
        img.src = small;
        p.innerText = content;

        div.append(img, p)
        container.append(div)
        
    })
}
    
  export { searchNews, append } ;