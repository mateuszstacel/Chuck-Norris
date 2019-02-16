document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){

        const number = document.querySelector('#number').value;
   
        const xhr = new XMLHttpRequest();
        xhr.open('Get', `http://api.icndb.com/jokes/random/${number}`, true);
        xhr.onload = function() {
            let output = '';
            if(this.status === 200){
                const respons = JSON.parse(this.responseText);
                
        
                if(respons.type === 'success'){
                    respons.value.forEach(function(joke){

                        output += `
                        <li>${joke.joke}</li>
                        `
                    })
                }else {
                    output += '<li>Something went wrong...</li>'
                }
            }
            document.querySelector('.jokes').innerHTML = output;
        }

        xhr.send();


        e.preventDefault();
}