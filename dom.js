console.dir(document);
const items = document.querySelectorAll(".list-group-item");

if (items.length >= 3) {
  items[2].style.backgroundColor = "green";
}

items.forEach((item) => {
  item.style.fontWeight = "bold";
});

