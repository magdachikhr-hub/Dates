async function getQuote() {
  const response = await fetch("https://api.adviceslip.com/advice");
  console.log(response);
  const data = await response.json();
  console.log(data.slip);


  
}

getQuote();

// async and await - always used together
