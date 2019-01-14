var KEY = '357fb4407f1f41a4b0f7f725';
var BASE_URL = 'http://xivapi.com'

const  getItems = (event) => {
  event.preventDefault();
  const item = document.getElementById("item");
  const url = `${BASE_URL}/search?string=${item.value}&key=${KEY}`;
  console.log(url);
  fetch(url, { mode: 'cors' })
  .then(response => response.json())
  .then(data => console.info(data))

  // .then((data) => {
  //   console.log('response:', data);
  //   console.log('response.results:', data.results);
  //   for(let i = 0; i < data.results.length; i++) {
  //     console.log(data.results[i])
  //     if (data.results[i].UrlType == "Item") {
  //       return data.results[i].ID;
  //     }
  //   }
  // }).then(function(id) {
  //   const server = document.getElementById('server').value;
  //   fetch(`${BASE_URL}/market/${server}/items/${id}?key=${KEY}`, { mode: 'cors' })
  //     .then(console.log)
  // })
}

// fetch(`${BASE_URL}/character/18647867?key=${KEY}`)

fetch ("https://xivapi.com/Action/127?key=357fb4407f1f41a4b0f7f725", { mode: 'cors' })
	.then(response => response.json())
	.then(data => console.info(data))
