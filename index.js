function watchForm() {
    $('.form-container').on('submit', '.dog-form', fetchDogs );    
}

function fetchDogs() {
    event.preventDefault();    
    let dogNum = $('.input-dogNum').val();
    if (dogNum > 0 && dogNum < 51) {
        fetch(`https://dog.ceo/api/breeds/image/random/${dogNum}`)
            .then(Response => Response.json())
            // .then(responseJson => console.log(responseJson))  //commented out to expand app for part 2
            .then(responseJson => logDogs(responseJson))     // displayDogs(responseJson))
            .catch(error => alert(`Something wet wrong. ${error}`));
        } else { alert("You must enter a number between 1 and 50")}

}

function logDogs(responseJson) {
    for (let dog in responseJson.message) {
        console.log(`${responseJson.message[dog]}`);
    }  
}


$(watchForm);