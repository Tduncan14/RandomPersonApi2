const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    getPerson(getData)
});

function getPerson(){
    console.log("I am function");
}


function getData(){
    console.log("I am the data function");
}