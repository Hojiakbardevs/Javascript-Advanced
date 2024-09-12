let currentPage = 1;
const limit = 5; // Har sahifada ko'rsatish kerak bo'lgan mahsulotlar soni

function fetchProducts(page) {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${(page - 1) * limit}`)
        .then(res => res.json())
        .then(data => {
            const productsDiv = document.getElementById('products');
            productsDiv.innerHTML = ''; // Oldingi mahsulotlarni tozalash
            data.products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <h2>${product.title}</h2>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>
                    <p>Rating: ${product.rating}</p>
                    <img src="${product.thumbnail}" alt="${product.title}" style="width: 100px;">
                `;
                productsDiv.appendChild(productDiv);
            });
            document.getElementById('page-info').innerText = `Sahifa: ${page}`;
        })
        .catch(error => console.error('Xatolik:', error));
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchProducts(currentPage);
    }
});

document.getElementById('next').addEventListener('click', () => {
    currentPage++;
    fetchProducts(currentPage);
});

// Dastlabki mahsulotlarni yuklash
fetchProducts(currentPage);