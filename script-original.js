// Ambil elemen tombol ukuran dan elemen harga
const sizeButtons = document.querySelectorAll('.size-btn');
const priceDisplay = document.getElementById('price');

// Fungsi untuk mengubah harga
sizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Hapus kelas aktif dari semua tombol
        sizeButtons.forEach(btn => btn.classList.remove('active'));
        
        // Tambahkan kelas aktif ke tombol yang diklik
        button.classList.add('active');
        
        // Ambil harga dari atribut data-price dan perbarui tampilan harga
        const newPrice = button.getAttribute('data-price');
        priceDisplay.textContent = `Rp ${parseInt(newPrice).toLocaleString()}`;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const sizeButtons = document.querySelectorAll('.size-btn');
    const priceElement = document.getElementById('price');
    const quantityInput = document.getElementById('quantity');
    const totalPriceElement = document.getElementById('total-price');
    const orderButton = document.querySelector('.add-to-cart');

    let selectedPrice = 25000; // Default price
    let quantity = 1; // Default quantity

    // Update size and price when size button is clicked
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            selectedPrice = parseInt(button.dataset.price, 10);
            priceElement.textContent = `Rp ${selectedPrice.toLocaleString('id-ID')}`;
            updateTotalPrice();
        });
    });

    // Update total price when quantity is changed
    quantityInput.addEventListener('input', () => {
        quantity = parseInt(quantityInput.value, 10) || 1; // Fallback to 1 if input is invalid
        updateTotalPrice();
    });

    // Update total price display
    function updateTotalPrice() {
        const totalPrice = selectedPrice * quantity;
        totalPriceElement.textContent = `Rp ${totalPrice.toLocaleString('id-ID')}`;
    }

    // Navigate to payment page
    orderButton.addEventListener('click', () => {
        const url = new URL('payment.html', window.location.origin);
        url.searchParams.set('size', document.querySelector('.size-btn.active').textContent);
        url.searchParams.set('price', selectedPrice);
        url.searchParams.set('quantity', quantity);
        url.searchParams.set('totalPrice', selectedPrice * quantity);
        window.location.href = url.toString();
    });
});
