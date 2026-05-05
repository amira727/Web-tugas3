// dark dan light
const tombol = document.getElementById('toggleMode');
const body = document.getElementById('mainBody');
 
tombol.addEventListener('click', () => {
  body.classList.toggle('dark');
    
  const isDark = body.classList.contains('dark');
  tombol.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// hobi
const tombolHobi = document.getElementById("btnHobi");
const dataHobi = document.getElementById("dataHobi");

tombolHobi.addEventListener("click", function () {
    if (dataHobi.style.display === "none" || dataHobi.style.display === "") {
        dataHobi.style.display = "block";
        tombolHobi.textContent = "Sembunyikan Hobi";
    } else {
        dataHobi.style.display = "none";
        tombolHobi.textContent = "Lihat Hobi Saya";
    }
});

// validasi
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    if (nama === "" || email === "" || pesan === "") {
        document.getElementById("hasil").textContent = "Semua field harus diisi!";
        document.getElementById("hasil").style.color = "red";
        return;
    }

    if (!email.includes("@")) {
        document.getElementById("hasil").textContent = "Email tidak valid!";
        document.getElementById("hasil").style.color = "red";
        return;
    }

    document.getElementById("hasil").textContent = "Pesan berhasil dikirim!";
    document.getElementById("hasil").style.color = "green";

    form.reset();
});