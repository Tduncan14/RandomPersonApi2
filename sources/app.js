const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    getPerson(getData)
});

function getPerson(cb){
    const url ='https://randomuser.me/api/';
    const ajax = new XMLHttpRequest();

    ajax.open('GET',url,true);
    console.log("I am function");

 ajax.onload = function(){
     if(this.status === 200){
         cb(this.responseText,showData);
       
     }
     else{
       this.onerror()
     
     }
 }

    ajax.onerror = function(){
        console.log('There was an error');

    }

    ajax.send();
}


function getData(response,cb){
    const data = JSON.parse(response);
    console.log("I am the data function");
    cb(data)
}

function showData(){
     console.log("show data");
}