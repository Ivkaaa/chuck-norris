document.getElementById('btn').addEventListener('click', fetchJoke);


function fetchJoke(e){
    //console.log('test')
    const xhr = new XMLHttpRequest();


    xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true);

    xhr.onload = function(){

        if(xhr.status === 200) {
            //console.log(JSON.parse(xhr.responseText))
            showJoke(JSON.parse(xhr.responseText))

        }else{
            jokeError()
        }
    };

    xhr.send();


    e.preventDefault()
};

function showJoke(joke){
    //console.log(joke)

    let jokeText = document.querySelector('.joke');
    jokeText.innerHTML = '';

    jokeText.style.backgroundColor  = '#f9f9f9';
    jokeText.style.borderLeft = '10px solid #ccc';
    jokeText.innerText = joke.value;
}

function jokeError(){

    return `Chuck Norris made a mistake!`
}