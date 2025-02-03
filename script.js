// JavaScript for adding visibility class when sections come into view
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.hero, .about, .contact');

    // IntersectionObserver to track when sections come into view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once the section is visible
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the section is visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Form Submission Handling
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Terima kasih, ${name}, telah menghubungi kami!`);
    this.reset();
});


// Sidebar toggle function
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
    } else {
        sidebar.style.left = "0px";
    }
}
 