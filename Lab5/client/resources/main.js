"use strict";
window.onload = function() {
     getProducts();
    document.getElementById('nav-home').onclick = function(event) {
        event.preventDefault();
        getProducts();
    }

    // add/update product
    document.getElementById('product-btn').onclick = function(event) {
        event.preventDefault();
        if (!document.getElementById('product-btn').dataset.id) {
            addProduct();
        } else {
            editProduct();
        }
    }
}

async function getProducts() {
    let products = await fetch('http://localhost:3000/books/').then(response => response.json());
    products.forEach(prod => renderBook(prod));
}

function renderBook(prod) {
    const div = document.createElement('div');
    div.classList = 'col-lg-4';
    div.id = prod.id;
    div.innerHTML = `<svg height="130" width="500">
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"
        style="stop-color:rgb(255,255,0);stop-opacity:1" />
        <stop offset="100%"
        style="stop-color:rgb(255,0,0);stop-opacity:1" />
      </linearGradient>
    </defs>
    <ellipse cx="100" cy="70" rx="85" ry="55" fill="url(#grad1)" />
    <text fill="#ffffff" font-size="45" font-family="Verdana"
    x="50" y="86">Books</text>
  Sorry, your browser does not support inline SVG.
  </svg>`;

    const h2 = document.createElement('h2');
    h2.textContent = prod.title;

    const isbn = document.createElement('p');
    isbn.textContent = prod.isbn;

    const publishedDate = document.createElement('p');
    publishedDate.textContent = prod.publishedDate;

    const author = document.createElement('p');
    author.textContent = prod.author;

    div.appendChild(h2);
    div.appendChild(isbn);
    div.appendChild(publishedDate);
    div.appendChild(author);

    const actions = document.createElement('p');
    const updateBtn = document.createElement('a');
    updateBtn.classList = 'btn btn-secondary';
    updateBtn.textContent = 'UPDATE';
    updateBtn.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('product-heading').textContent = 'Edit Product';
        document.getElementById('title').value = prod.title;
        document.getElementById('isbn').value = prod.isbn;
        document.getElementById('publishedDate').value = prod.publishedDate;
        document.getElementById('author').value = prod.author;
        document.getElementById('product-btn').dataset.id = prod.id;
    });

    const deleteBtn = document.createElement('a');
    deleteBtn.classList = 'btn btn-secondary';
    deleteBtn.textContent = 'DELETE';
    deleteBtn.addEventListener('click', function(event) {
        event.preventDefault();

        fetch('http://localhost:3000/books/' + prod.id, {
            method: 'DELETE',
        }).then(response => {
            alert('Delete Successfully!');
            div.remove();
        });
    });

    actions.appendChild(updateBtn);
    actions.appendChild(deleteBtn);

    div.appendChild(actions);

    document.getElementById('products').appendChild(div);
}


async function addProduct() {
    let result = await fetch('http://localhost:3000/books/', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            title: document.getElementById('title').value,
            isbn: document.getElementById('isbn').value,
            publishedDate: document.getElementById('publishedDate').value,
            author: document.getElementById('author').value
        })
    }).then(res => res.json());
    document.getElementById('product-form').reset();
    renderBook(result);
}

function editProduct() {
    const prodId = document.getElementById('product-btn').dataset.id;
    const title = document.getElementById('title').value;
    const isbn = document.getElementById('isbn').value;
    const publishedDate = document.getElementById('publishedDate').value;
    const author = document.getElementById('author').value;
    fetch('http://localhost:3000/books/' + prodId, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                isbn: isbn,
                publishedDate: publishedDate,
                author: author
            })
        }).then(response => response.json())
        .then(jsonObj => {
            const productDiv = document.getElementById(prodId);
            productDiv.querySelector('h2').textContent = title;
            const paragraphArr = productDiv.querySelectorAll('p');
            paragraphArr[0].textContent = isbn;
            paragraphArr[1].textContent = publishedDate;
            paragraphArr[2].textContent = author;

            document.getElementById('product-heading').textContent = 'Add a new Book';
            document.getElementById('product-btn').dataset.id = '';
            document.getElementById('product-form').reset();
        });
}