
let articlesByTopic = {
    'React.js': [],
    'React-Hooks': [],
    'Vue.js': [],
    'Node.js': [],
    'Python': [],
    'CSS Specificity': [],
    'CSS Flex-box': [],
    'Promise': [],
    'Docker': [],
    'Git': [],
    'Webpack': [],
}

// Populate allArticles object

let AllArticles = populateAllArticles();

function populateAllArticles() {

    let articlesNames = ['Promise Part 2', 'CSS Flex-box', 'React-Hooks', 'Webpack', 'Vue.js', 'Python Subprocesses', "Python Working with Files", 'CSS Specificity', 'Docker vs VM', 'Promise Part 1', 'Git Branches', 'Node.js'];
    let articlesDates = ['03/22/2022', '01/18/2022', '11/13/2021', '11/02/2021', '06/07/2021', '03/11/2021', "03/04/2021", '01/07/2021', '01/05/2021', '12/09/2020', '10/17/2020', '10/03/2020']
    let articlesContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur ab, aliquid facilis omnis praesentium recusandae. Aliquid itaque omnis nam harum sit! Explicabo eum consectetur aut repellendus, nostrum hic iste. Illo repellat quia, minima reiciendis. Laudantium, perferendis! Laudantium consectetur impedit at nobis error aspernatur repellendus quaerat, quas repudiandae maxime. Architecto consequatur, autem natus quaerat illo accusamus! Voluptatem accusantium pariatur perspiciatis! Vitae corrupti, tempora itaque ab est facere eius optio fugiat, ex possimus beatae nulla esse molestias suscipit quisquam nostrum sunt quod mollitia. Mollitia reiciendis, aspernatur. Quas, eligendi temporibus earum debitis?";
    let articlesTopics = ['Promise', 'CSS Flex-box', 'React-Hooks', 'Webpack', 'Vue.js', 'Python', "Python", 'CSS Specificity', 'Docker', 'Promise', 'Git', 'Node.js'];
    let articles = {};

    // Populate articlesByTopic object
    for (let i = 0; i < articlesNames.length; i++) {

        articles[articlesNames[i]] = {
            'name': articlesNames[i],
            'date': articlesDates[i],
            'content': articlesContent,
            'topic': articlesTopics[i],
        };

        switch (articles[articlesNames[i]]['topic']) {
            case 'React.js':
                articlesByTopic['React.js'].push(articles[articlesNames[i]]);
                break;
            case 'React-Hooks':
                articlesByTopic['React-Hooks'].push(articles[articlesNames[i]]);
                break;
            case 'Vue.js':
                articlesByTopic['Vue.js'].push(articles[articlesNames[i]]);
                break;
            case 'Node.js':
                articlesByTopic['Node.js'].push(articles[articlesNames[i]]);
                break;
            case 'Python':
                articlesByTopic['Python'].push(articles[articlesNames[i]]);
                break;
            case 'CSS Specificity':
                articlesByTopic['CSS Specificity'].push(articles[articlesNames[i]]);
                break;
            case 'CSS Flex-box':
                articlesByTopic['CSS Flex-box'].push(articles[articlesNames[i]]);
                break;
            case 'Promise':
                articlesByTopic['Promise'].push(articles[articlesNames[i]]);
                break;
            case 'Docker':
                articlesByTopic['Docker'].push(articles[articlesNames[i]]);
                break;
            case 'Git':
                articlesByTopic['Git'].push(articles[articlesNames[i]]);
                break;
            case 'Webpack':
                articlesByTopic['Webpack'].push(articles[articlesNames[i]]);
                break;
            default:
                alert('no such topic');
        }
    }

    return articles;
}



// Populate articlesDates with the articles dates.

let articlesByTopicArrays = Object.values(articlesByTopic);
let articlesDates = [];

for (let i = 0; i < articlesByTopicArrays.length; i++) {

    for (let j = 0; j < (articlesByTopicArrays[i]).length; j++) {
        let date = articlesByTopicArrays[i][j]['date'];
        articlesDates.push(date);
    }
}

// sort articlesDates by date.

let sortedArticlesDates = articlesDates.sort(function (a, b) {
    // Convert string dates into `Date` objects
    const date1 = new Date(a);
    const date2 = new Date(b);

    return date1 - date2;
});

console.log(sortedArticlesDates);

// Populate recent post array

let recentPosts = [];
let numOfRecentArticles = 0;

while (numOfRecentArticles < 6) {
    for (let i = 0; i < articlesByTopicArrays.length; i++) {
        for (let j = 0; j < (articlesByTopicArrays[i]).length; j++) {
            if (articlesByTopicArrays[i][j]['date'] === sortedArticlesDates[numOfRecentArticles]) {
                recentPosts.push(articlesByTopicArrays[i][j]['name']);
                numOfRecentArticles++;
            }
        }
    }
}




console.log(recentPosts);
let articlesContainer = document.querySelector('.articles-container');
let topicDiv = document.createElement('div');
topicDiv.style.textDecoration = 'none';
topicDiv.style.color = 'black';
topicDiv.style.fontSize = '22px';
topicDiv.style.fontWeight = 'bold';
topicDiv.textContent = 'Recent Posts';
articlesContainer.appendChild(topicDiv);

numOfRecentArticles--;
while (numOfRecentArticles > 0) {
    
    // creating a new div for each article
    let articleDiv = document.createElement('div');
    articleDiv.className = 'post';

    // create the header of the article
    let newHeader = document.createElement('header');
    let newH4 = document.createElement('h4');
    newH4.textContent = AllArticles[recentPosts[numOfRecentArticles]]['name'] + ' ';
    newHeader.appendChild(newH4);

    // create the span of the date for the header
    let newSpan = document.createElement('span');
    newSpan.className = 'date';
    newSpan.textContent = AllArticles[recentPosts[numOfRecentArticles]]['date'];
    newH4.appendChild(newSpan);

    // // create the img of the for the header
    let newImage = document.createElement('img');
    newImage.setAttribute('src', "..\\img\\calendar-solid.svg");
    newImage.setAttribute('height', '20');
    newImage.setAttribute('width', '25');
    newH4.appendChild(newImage);

    // create the paragraph of the article
    let newP = document.createElement('p');
    newP.textContent = AllArticles[recentPosts[numOfRecentArticles]]['content'];

    // create a button for read more
    let newButton = document.createElement('button');
    newButton.className = 'readmore-button';
    newButton.textContent = 'Read More....';

    // Appending to the article
    articleDiv.appendChild(newHeader);
    articleDiv.appendChild(newP);
    articleDiv.appendChild(newP);
    articleDiv.appendChild(newP);
    articleDiv.appendChild(newButton);

    // appending the article to the articles container
    console.log(articleDiv);
    articlesContainer.appendChild(articleDiv);
    numOfRecentArticles--;
}

let newButton = document.createElement('button');
newButton.className = 'previous-button';
newButton.textContent = 'Previous Posts';
articlesContainer.appendChild(newButton);



let topicsContainer = document.querySelector('.topics-container');
let articlesByTopicKeys = Object.keys(articlesByTopic);

// populate topics container
articlesByTopicKeys.forEach((key) => {

    let newDiv = document.createElement('div');
    newDiv.style.padding = '15px 15px 15px 15px';
    newDiv.style.cursor = 'pointer';
    newDiv.style.textAlign = 'left';
    newDiv.style.display = 'flex';
    newDiv.style.flexDirection = 'row';
    newDiv.style.justifyContent = 'space-between';

    let counterDiv = document.createElement('div');
    counterDiv.style.height = '23px';
    counterDiv.style.width = '23px';
    counterDiv.style.borderRadius = '20px';
    counterDiv.style.backgroundColor = 'black';
    counterDiv.style.color = 'white';
    counterDiv.style.textAlign = 'center';
    counterDiv.textContent = articlesByTopic[key].length;

    let topicDiv = document.createElement('div');
    topicDiv.style.textDecoration = 'none';
    topicDiv.style.color = 'black';
    topicDiv.style.fontSize = '18px';
    topicDiv.style.textAlign = 'center';
    topicDiv.textContent = key;
    newDiv.addEventListener('click', function () {

        let articlesContainer = document.querySelector('.articles-container');
        let topicName = document.querySelector('.topic-name');
        topicName.textContent = key;

        function emptiesArticleContainer() {
            if (articlesContainer.hasChildNodes()) {
                while (articlesContainer.childNodes.length > 2) {
                    articlesContainer.removeChild(articlesContainer.lastChild);
                }
            }
        }

        emptiesArticleContainer();

        for (let article of articlesByTopic[key]) {

            // creating a new div for each article
            let articleDiv = document.createElement('div');
            articleDiv.className = 'post';

            // create the header of the article
            let newHeader = document.createElement('header');
            let newH4 = document.createElement('h4');
            newH4.textContent = article['name'] + ' ';
            newHeader.appendChild(newH4);

            // create the span of the date for the header
            let newSpan = document.createElement('span');
            newSpan.className = 'date';
            newSpan.textContent = article['date'];
            newH4.appendChild(newSpan);

            // // create the img of the for the header
            let newImage = document.createElement('img');
            newImage.setAttribute('src', "..\\img\\calendar-solid.svg");
            newImage.setAttribute('height', '20');
            newImage.setAttribute('width', '25');
            newH4.appendChild(newImage);

            // create the paragraph of the article
            let newP = document.createElement('p');
            newP.textContent = article['content'];

            // create a button for read more
            let newButton = document.createElement('button');
            newButton.className = 'readmore-button';
            newButton.textContent = 'Read More....';

            // Appending to the article
            articleDiv.appendChild(newHeader);
            articleDiv.appendChild(newP);
            articleDiv.appendChild(newP);
            articleDiv.appendChild(newP);
            articleDiv.appendChild(newButton);

            // appending the article to the articles container
            articlesContainer.appendChild(articleDiv);
        }
    });


    newDiv.addEventListener('mouseover', function () {
        newDiv.style.backgroundColor = 'lightgrey';
    })

    newDiv.addEventListener('mouseout', function () {
        newDiv.style.backgroundColor = 'whitesmoke';
    })

    newDiv.appendChild(topicDiv);
    newDiv.appendChild(counterDiv);

    topicsContainer.appendChild(newDiv);
});