const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    getPerson(getData)
});

function getPerson(){
    const url ='https://randomuser.me/api/';
    const ajax = new XMLHttpRequest();

    ajax.open('GET',url,true);
    console.log("I am function");


    ajax.onerror = function(){
        console.log('There was an error');

    }

    ajax.send();
}


function getData(){
    console.log("I am the data function");
}