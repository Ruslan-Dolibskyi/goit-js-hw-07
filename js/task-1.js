const categories = document.querySelector('#categories');

const items = categories.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const header = item.querySelector('h2').textContent;

  const listItems = item.querySelectorAll('ul li');

  console.log(`Category: ${header}`);
  console.log(`Elements: ${listItems.length}`);
});
