const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayNews(data.articles)

    } catch (error) {
        console.error('There was an error!', error);
    }
}

function displayNews(articles){
    const newsArt = document.getElementById('news');
    for (const article of articles){

        const articleCard = document.createElement('div');
        articleCard.classList.add('card');
        articleCard.style.width = "18rem";
        newsArt.appendChild(articleCard);

        const image = document.createElement('img');
        image.src = article.urlToImage;
        image.classList.add('card-img-top');
        articleCard.appendChild(image);
        
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        articleCard.appendChild(cardBody);

        const title = document.createElement('h5');
        title.classList.add('card-title');
        articleCard.appendChild(title);

        const description = document.createElement('p');
        description.classList.add('card-text');
        articleCard.appendChild(description);


//         <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
    }
}

fetchNews();