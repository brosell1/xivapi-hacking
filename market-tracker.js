const KEY = '357fb4407f1f41a4b0f7f725';
const BASE_URL = 'http://xivapi.com'
let character = "";


const  getItems = (event) => {
  event.preventDefault();
  const item = document.getElementById("item").value;
  // const url = `${BASE_URL}/search?string=${item.value}&key=${KEY}`;
  // console.log(url);
  // fetch(url, { mode: 'cors' })
  // .then(response => response.json())
  // .then(data => console.info(data))

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

    const server = document.getElementById('server').value;
    fetch(`${BASE_URL}/market/${server}/items/${item}?key=${KEY}`, { mode: 'no-cors' })
      .then(response => response.json())
      .then((data) => {
        const ownListings = data.filter(item => item.name == character)
        if (ownListings.length == 0) {
          return "No listings could be found"
        }

        const ownPrices = ownListings.map(item => item.price).sort((a, b) => a - b);
        const allPrices = data.map(item => item.price).sort((a, b) => a - b);

        if (allPrices.indexOf(ownPrices[0]) == 0) {
          return "s'all good"
        } else {
          return "you've been undercut"
        }
      })
}

const setCharacter = () => {
  character = document.getElementById('character').value;
  document.getElementById('character-title').innerHTML = character;
}

// fetch(`${BASE_URL}/character/18647867?key=${KEY}`)

fetch ("https://xivapi.com/Action/127?key=357fb4407f1f41a4b0f7f725", { mode: 'cors' })
	.then(response => response.json())
	.then(data => console.info(data))
