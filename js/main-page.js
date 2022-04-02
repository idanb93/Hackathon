
let topics = {

    'React.js': 9,
    'React-Hooks' : 2,
    'Vue.js': 6,
    'Node.js': 5,
    'Python': 11,
    'CSS Specificity': 2,
    'CSS Flex-box': 3,
    'Promise': 2,
    'Docker': 3,
    'Git': 1,
    'Webpack': 2,

}



let topicsContainer = document.querySelector('.topics-container');
let mousedown = false;
let topicsKeys = Object.keys(topics);

// populate topics container

topicsKeys.forEach((key)=>{

    let newDiv = document.createElement('div');
    newDiv.style.padding = '15px 15px 15px 15px';
    newDiv.style.textAlign = 'left';
    newDiv.style.display = 'flex';
    newDiv.style.flexDirection = 'row';
    newDiv.style.justifyContent = 'space-between';
    
    /// TODO make the whole div clickable - once done we can delete the newAnchor part
    // newDiv.addEventListener('click', getArticlesBySubject);
    // <div onclick="location.href='#';" style="cursor: pointer;">
    // </div>

    let counterDiv = document.createElement('div');
    counterDiv.style.height = '23px';
    counterDiv.style.width = '23px';
    counterDiv.style.borderRadius = '20px';
    counterDiv.style.backgroundColor = 'black';
    counterDiv.style.color = 'white';
    counterDiv.style.textAlign = 'center';
    counterDiv.textContent = topics[key];

    let newAnchor = document.createElement('a');
    newAnchor.href = '#';
    newAnchor.style.textDecoration = 'none';
    newAnchor.style.color = 'black';
    newAnchor.style.fontSize = '18px';
    newAnchor.style.textAlign = 'center';
    newAnchor.textContent = key;
    

    newDiv.addEventListener('mouseover', function(){
        newDiv.style.backgroundColor = 'lightgrey';
    })

    newDiv.addEventListener('mouseout', function(){
        newDiv.style.backgroundColor = 'whitesmoke';
    })

    newDiv.appendChild(newAnchor);
    newDiv.appendChild(counterDiv);

    topicsContainer.appendChild(newDiv);
});

// populate articles container

