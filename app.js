document.getElementById('btn').addEventListener('click', fetchJoke);


function fetchJoke(e){
    //console.log('test')
    const request = new XMLHttpRequest();


    request.open('GET', 'https://api.chucknorris.io/jokes/random');

    request.onload = function(){

        if(request.status >= 200 && request.status < 400){
            //console.log(JSON.parse(request.responseText))
            showJoke(JSON.parse(request.responseText))

        }else{
            jokeError()
        }
    }

    request.send()


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