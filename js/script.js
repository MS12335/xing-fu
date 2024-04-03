// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
const hamburgerMenu = document.getElementById("hamburger-menu");

// munculkan sidebar menu
hamburgerMenu.addEventListener("click", function (event) {
    event.preventDefault();
    navbarNav.classList.toggle("active");
});

// Klik di luar sidebar untuk menghilangkan nav
document.addEventListener("click", function (e) {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // Animasi navigation bar
    if (wScroll > 0) {
        $(".navbar").addClass("scroll");
    } else if (wScroll == 0) {
        $(".navbar").removeClass("scroll");
    }
});

// send WhatsApp Message
const sendWhatsappForm = document.getElementById("sendWhatsappForm");

sendWhatsappForm.addEventListener("submit", function (event) {
    event.preventDefault();
    sendWhatsAppMessage();
});

function sendWhatsAppMessage() {
    const name = document.getElementById("nama").value;
    const nomor_telepon = document.getElementById("nomor-telepon").value;
    const jumlah = document.getElementById("jumlah").value;
    const alamat = document.getElementById("alamat").value;
    const catatan = document.getElementById("catatan").value;

    console.log(name, nomor_telepon, jumlah, alamat, catatan );

    var templateMessage;
    if(catatan !== "") {
        templateMessage = "Hallo, nama saya " + name + ",\n\nSaya mau membeli "+ jumlah + " porsi nasi hainam dan saya mau makanannya diantarkan ke " + alamat + ".\n\nAnda dapat menghubungi saya di " + nomor_telepon +  ". Terima Kasih." + "\n\nCatatan : \n" + catatan;
    } else {
        templateMessage = "Hallo, nama saya " + name + ",\n\nSaya mau membeli "+ jumlah + " porsi nasi hainam dan saya mau makanannya diantarkan ke " + alamat + ".\n\nAnda dapat menghubungi saya di " + nomor_telepon +  ". Terima Kasih.";
    }

    var encodedMessage = encodeURIComponent(templateMessage);
    var whatsappURL = "https://wa.me/6281908042626?text=" + encodedMessage;

    window.open(whatsappURL);
}
