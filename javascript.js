const nouns = ['Spaghetti', 'grilled chicken', 'chicken nuggets', 'smoked sausage', 'hamburgers', 'meatloaf', 'tacos', 'fish filets', 'grilled cheese', 'stir fry', 'chicken strips', 'hot dogs', 'chili', 'macaroni and cheese', 'country fried steak', 'lasagna', 'pizza', 'sandwiches', 'ziti', 'drumsticks', 'salads', 'hamburger helper', 'tuna helper'];
const adjectives = ['mac and cheese', 'white rice', 'pasta side', 'salads', 'green beans', 'corn', 'mashed potatoes', 'rice side', 'butter noodles', 'fresh fruit', 'fries', 'tator tots', 'crispy crowns', 'carrots',];

function createLists() {
  let nlist = document.getElementById("noun");
  let alist = document.getElementById("adjective");
  nouns.forEach(function(noun, idx) {
    let listItem = document.createElement('li');
    listItem.id = 'noun' + idx;
    listItem.innerHTML = noun;
    nlist.appendChild(listItem);
  });
  adjectives.forEach(function(adjective, idx) {
    let listItem = document.createElement('li');
    listItem.id = 'adjective' + idx;
    listItem.innerHTML = adjective;
    alist.appendChild(listItem);
  });
}

createLists();

function createLists() {
  let nlist = document.getElementById("noun");
  let alist = document.getElementById("adjective");
  nouns.forEach(function(noun, idx) {
    let listItem = document.createElement('li');
    listItem.id = 'noun' + idx;
    listItem.innerHTML = noun;
    nlist.appendChild(listItem);
  });
  adjectives.forEach(function(adjective, idx) {
    let listItem = document.createElement('li');
    listItem.id = 'adjective' + idx;
    listItem.innerHTML = adjective;
    alist.appendChild(listItem);
  });
}

function getWord(list, num) {
  let alist = document.getElementById(list),
    listItem = document.getElementById(list + num),
    preactiveItem = document.getElementById(list + (num - 1)),
    postactiveItem = document.getElementById(list + (num + 1)),
    scrollpos = (num * 60);
  listItem.classList.add('active');
  if (preactiveItem)
    preactiveItem.classList.add('preactive');
  if (postactiveItem)
    postactiveItem.classList.add('postactive');
  alist.scrollTo({
    top: scrollpos,
    behavior: "smooth"
  });
}

function generate() {
  clearActives();
  let anum = Math.floor(Math.random() * adjectives.length),
    nnum = Math.floor(Math.random() * nouns.length);
  getWord('adjective', anum);
  getWord('noun', nnum);
}
