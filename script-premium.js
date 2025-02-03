document.addEventListener('DOMContentLoaded', () => {
    // Ambil elemen-elemen yang diperlukan
    const sizeButtons = document.querySelectorAll('.size-btn');
    const priceElement = document.getElementById('price');
    const quantityInput = document.getElementById('quantity');
    const totalPriceElement = document.getElementById('total-price');
    const orderButton = document.querySelector('.add-to-cart');

    // Set harga awal dan jumlah
    let selectedPrice = 35000; // Harga default untuk ukuran Sedang
    let quantity = 1; // Jumlah default

    // Fungsi untuk memperbarui harga total
    function updateTotalPrice() {
        const totalPrice = selectedPrice * quantity;
        totalPriceElement.textContent = `Rp ${totalPrice.toLocaleString('id-ID')}`;
    }

    // Perbarui harga dan ukuran saat tombol ukuran diklik
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hapus kelas aktif dari semua tombol ukuran
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            
            // Tambahkan kelas aktif pada tombol yang diklik
            button.classList.add('active');
            
            // Ambil harga baru dari atribut data-price dan perbarui tampilan harga
            selectedPrice = parseInt(button.dataset.price, 10);
            priceElement.textContent = `Rp ${selectedPrice.toLocaleString('id-ID')}`;
            
            // Perbarui harga total
            updateTotalPrice();
        });
    });

    // Perbarui harga total saat jumlah berubah
    quantityInput.addEventListener('input', () => {
        quantity = parseInt(quantityInput.value, 10) || 1; // Validasi input, default ke 1 jika input tidak valid
        updateTotalPrice();
    });

    // Saat tombol Pesan Sekarang ditekan, arahkan ke halaman pembayaran dengan parameter yang sesuai
    orderButton.addEventListener('click', () => {
        const url = new URL('payment.html', window.location.origin);
        url.searchParams.set('size', document.querySelector('.size-btn.active').textContent);
        url.searchParams.set('price', selectedPrice);
        url.searchParams.set('quantity', quantity);
        url.searchParams.set('totalPrice', selectedPrice * quantity);
        window.location.href = url.toString(); // Arahkan ke halaman pembayaran
    });

    // Menampilkan harga total awal
    updateTotalPrice();
});
