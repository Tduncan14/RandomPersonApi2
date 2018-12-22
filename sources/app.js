const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    getPerson(getData)
});

function getPerson(){
    const url ='https://randomuser.me/api/';
    const ajax = new XMLHttpRequest();

    ajax.open('GET',url,true);
    console.log("I am function");

 ajax.onload = function(){
     if(this.status === 200){
        info.textContent = this.responseText;
     }
     else{
       // this.onerror()
       console.log(this.statusText);
     }
 }

    ajax.onerror = function(){
        console.log('There was an error');

    }

    ajax.send();
}


function getData(){
    console.log("I am the data function");
}