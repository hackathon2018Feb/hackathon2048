function reqListener() {
  console.log(this.response);
}

// get new XHR object
var newXHR = new XMLHttpRequest();

// bind our event listener to the "load" event.
// "load" is fired when the response to our request is completed and without error.
newXHR.addEventListener('load', reqListener);

// go to http://requestb.in/1k6rql51?inspect to view your request!
newXHR.open('POST', 'http://localhost:3000/game-data');
//             ^-- IMPORTANT: to send data to the server with it appearing in the url use 'POST'


// const userName = document.querySelector('input').value

// the object below can be crafted in any fashion. In the end you want an Object Literal with your data stored on it.
// var jsonData = { 'user-name': userName, score: metadata.score };
var jsonData = { 'user-name': 'aaa', score: 100 };

// HTTP Protocol can only work with strings when transmitting data over the internet.
// JSON is a class and .stringify is a class-method. We use it to format
// the Javascript Data, which lives in memory, to JSON string.
var formattedJsonData = JSON.stringify(jsonData);

// INSPECT WHAT YOU EXPECT, compare the two.
console.log(jsonData);
console.log(JSON.parse(formattedJsonData));
console.log('jsonData: ', jsonData);
console.log('JSON.parse(formattedJsonData): ', JSON.parse(formattedJsonData));

// send it off
newXHR.send(formattedJsonData);

    // axios.post('http://localhost:3000/game-data', metadata)
    //   .then((data) => {
    //     console.log('data: ', data);
    //     console.log('yeah');