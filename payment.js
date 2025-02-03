document.addEventListener('DOMContentLoaded', () => {
    // Mengambil parameter dari URL
    const params = new URLSearchParams(window.location.search);
    const productName = params.get('productName');  // Nama produk
    const size = params.get('size');
    const price = params.get('price');
    const quantity = params.get('quantity');
    const totalPrice = params.get('totalPrice');

    // Menampilkan detail pesanan
    const orderDetails = document.getElementById('order-details');
    orderDetails.textContent = `Anda memesan Salad Buah ${quantity} ukuran ${size} dengan total harga Rp ${parseInt(totalPrice).toLocaleString('id-ID')}`;

    // Menangani form pembayaran
    const paymentForm = document.getElementById('payment-form');
    const paymentStatus = document.getElementById('payment-status');
    const statusMessage = document.getElementById('status-message');
    const backToHome = document.getElementById('back-to-home');
    const cancelOrderButton = document.getElementById('cancel-order');
    const refundStatus = document.getElementById('refund-status');
    const refundMessage = document.getElementById('refund-message');

    // Simulasi pembayaran
    paymentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulasi pembayaran berhasil atau gagal
        const isSuccess = Math.random() > 0.5; // Random true (berhasil) atau false (gagal)

        paymentForm.style.display = 'none';
        paymentStatus.style.display = 'block';

        if (isSuccess) {
            statusMessage.textContent = 'Pembayaran Berhasil! Terima kasih atas pesanan Anda.';
            statusMessage.style.color = 'green';
        } else {
            statusMessage.textContent = 'Pembayaran Gagal. Silakan coba lagi.';
            statusMessage.style.color = 'red';
        }
    });

    // Fungsi untuk membatalkan pesanan
    cancelOrderButton.addEventListener('click', () => {
        paymentStatus.style.display = 'none';
        refundStatus.style.display = 'block';
        refundMessage.textContent = `Pesanan Anda telah dibatalkan. Pengembalian dana sedang diproses.`;
        refundMessage.style.color = 'blue';

        // Menyembunyikan tombol "Cancel Order" dan "Back to Home"
        cancelOrderButton.style.display = 'none';
        backToHome.style.display = 'none';
    });

    // Kembali ke beranda
    backToHome.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});
