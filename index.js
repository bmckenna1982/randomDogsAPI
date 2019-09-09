function watchForm() {
    $('.form-container').on('submit', '.dog-form', fetchDogs );
    console.log("watchForm ran")
}

function fetchDogs() {
    console.log("fetchDogs called");
    event.preventDefault();
    let dogNum = $('.input-dogNum').val();
    console.log(dogNum);
    fetch(`https://dog.ceo/api/breeds/image/random/${dogNum}`)
        .then(Response => Response.json())
        // .then(responseJson => console.log(responseJson))  //commented out to expand app for part 2
        .then(responseJson => displayDogs(responseJson))
        .catch(error => alert(`Something wet wrong. ${error}`));
}

function displayDogs(responseJson) {
    console.log(responseJson.message);
    let sectionHTML = ""
    for (let dog in responseJson.message) {
        $('.dog-display').append(`<img src="${responseJson.message[dog]}" alt="random dog image">`)
    } 
    
    
    // let sectionHTML = ``
}

$(watchForm);