const data = [
  {
    id: 1,
    img: "https://dl.airtable.com/.attachmentThumbnails/d86e13eec1b200e2b21282b99a9382be/6d92321b",
    name: "High-Back Bench",
    price: "$9.99",
    Brand: "Ikea",
  },
  {
    id: 2,
    img: "https://dl.airtable.com/.attachmentThumbnails/ee08b908ae61c8241f56130eedefac0a/22e0d8df",
    name: "Utopia Sofa",
    price: "$39.95",
    Brand: "Marcos",
  },
  {
    id: 3,
    img: "https://dl.airtable.com/.attachmentThumbnails/37c101731d977a9ff9c98530185b77e0/078958cd",
    name: "Entertainment Center",
    price: "$29.98",
    Brand: "Careesa",
  },
  {
    id: 4,
    img: "https://dl.airtable.com/.attachmentThumbnails/ecc03714fd1ff14f50d98834615da483/30525671",
    name: "Albany Table",
    price: "$79.99",
    Brand: "liddy",
  },
  {
    id: 5,
    img: "https://dl.airtable.com/.attachmentThumbnails/ececf357189e0a6506cdb45152271a5c/e0407792",
    name: "Accent Chair",
    price: "$25.99",
    Brand: "Ikea",
  },
  {
    id: 6,
    img: "https://dl.airtable.com/.attachmentThumbnails/13b8798ce604dab29656905f94461083/2fcbbbba",
    name: "Wooden Table",
    price: "$45.99",
    Brand: "Marcos",
  },
  {
    id: 7,
    img: "https://dl.airtable.com/.attachmentThumbnails/292e8c59ea4278c67509f457ed713c9e/dbcee29d",
    name: "Dining Table",
    price: "$6.99",
    Brand: "Careesa",
  },
  {
    id: 8,
    img: "https://dl.airtable.com/.attachmentThumbnails/7ebbffdd8e9a1b0a6ecabf8765a01a93/91111f2f",
    name: "Sofa Set",
    price: "$69.99",
    Brand: "Liddy",
  },
  {
    id: 9,
    img: "https://dl.airtable.com/.attachmentThumbnails/bd412f9b69724bf7cb63542c9d72cc19/70f9bf4a",
    name: "Modern Bookshelf",
    price: "$8.99",
    Brand: "Ikea",
  },
];

function fillData() {
  const container = document.getElementsByClassName("col");

  for (var i = 0; i < container.length; i++) {
    var cont = container[i];
    cont.setAttribute("class", "col m-2 All " + data[i].Brand);
    console.log(data[i].Brand);

    let image = document.createElement("img");
    image.setAttribute("src", data[i].img);
    image.setAttribute("style", "width:100%; height:60%; border-radius:10px;");

    let name = document.createElement("p");
    name.innerHTML = data[i].name;

    let price = document.createElement("p");
    price.innerHTML = data[i].price;

    const search = document.createElement("i");
    search.setAttribute("class", "fa fa-search");
    const cart = document.createElement("i");
    cart.setAttribute("class", "fa fa-shopping-cart shop");

    cont.append(image, name, price);
  }

  const container2 = document.getElementsByClassName("col-3");

  for (var i = 0; i < container2.length; i++) {
    var cont = container2[i];

    let image = document.createElement("img");
    image.setAttribute("src", data[i].img);
    image.setAttribute("style", "width:100%; height:60%; border-radius:10px;");

    let name = document.createElement("p");
    name.innerHTML = data[i].name;

    let price = document.createElement("p");
    price.innerHTML = data[i].price;

    const search = document.createElement("i");
    search.setAttribute("class", "fa fa-search");
    const cart = document.createElement("i");
    cart.setAttribute("class", "fa fa-shopping-cart shop");

    cont.append(image, name, price, search, cart);
  }
}

function filter(e) {
  const All = document.getElementsByClassName("All");
  for (i = 0; i < All.length; i++) {
    All[i].setAttribute("style", "display:none");
  }

  const ike = document.getElementsByClassName(e);
  for (i = 0; i < ike.length; i++) {
    ike[i].setAttribute("style", "display:block");
  }
}

function priceFilter(e) {
  const product = document.getElementsByClassName("All");

  for (let i = 0; i < product.length; i++) {
    if (
      parseFloat(product[i].childNodes[2].innerHTML.replace("$", "")) >
      parseFloat(e)
    ) {
      product[i].setAttribute("style", "display:none");
    } else {
      product[i].setAttribute("style", "display:block");
    }
  }
}
