//shop
function renderBooks() {
    const bookContainer = document.getElementById("bookContainer");

    // Clear existing content
    bookContainer.innerHTML = "";

    // Iterate through the books array and create HTML elements
    books.forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("book");

        bookElement.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Price: ₹${book.price.toFixed(2)}</p>
            <button onclick="addToCart('${book.title}')">Add to Cart</button>
        `;

        bookContainer.appendChild(bookElement);
    });
}