const apiKey = process.env.NEWS_API_KEY;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`


async function fetchNews() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      displayNews(data.articles);
      console.log(data);
      // TODO: Add a function call to display the news
    } catch (error) {
      console.error('There was an error!', error);
    }
  }
const articles = [];
function displayNews(articles){
    const newsArt = document.getElementById('news');
    for (const article of articles){

        const articleCard = document.createElement('div');
        articleCard.classList.add('card');
        articleCard.style.width = "8rem";
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
        title.innerText = article.title;
        cardBody.appendChild(title);

        const description = document.createElement('p');
        description.classList.add('card-text');
        description.innerText = article.description;
        cardBody.appendChild(description);
    }
}

fetchNews();