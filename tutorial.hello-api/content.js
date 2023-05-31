// alert('Hello, world!');

async function startRequest() {

    const response = await fetch('https://api.quotable.io/random'); // pulls json from an API
    const newData = await response.json(); // 
    const data = `${newData.content} —${newData.author}` // what will be printed to notification
    console.log(data); // prints to log

    alert(data)
}
  
//alert(startRequest())
startRequest()