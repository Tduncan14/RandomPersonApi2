const btn = document.getElementById('btn');
btn.addEventListener("click", function(){
    getPerson(getData);
});

function getPerson(cb){
    const url ='https://randomuser.me/api/';
    const ajax = new XMLHttpRequest();

    ajax.open("GET", url, true);
    

 ajax.onload = function(){
     if(this.status === 200){
         cb(this.responseText, showData);
       
     }
     else{
       this.onerror();
     
     }
 };

    ajax.onerror = function(){
        console.log('There was an error');

    };

    ajax.send();
}


function getData(response, cb){
    data = JSON.parse(response);

    const{ name:{first},name:{last},picture:{large},location:{street},phone,email }= data.results[0];
    cb(data);
}

function showData(){
  
     console.log(data);
}