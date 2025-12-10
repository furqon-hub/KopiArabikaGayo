// Memberi tahu mahasiswa bahwa script berhasil di-load
alert("Selamat datang di Website Profil UMKM Anda!");
// Menampilkan informasi variabel di console
const namaUMKM = "Kopi Nusantara";
console.log("Nama UMKM:", namaUMKM);
// Demonstrasi variabel dan operator
let produk = 3;
console.log("Jumlah produk saat ini:", produk);
produk += 2;
console.log("Setelah penambahan:", produk);
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formKontak");
  const nama = document.getElementById("nama");
  const email = document.getElementById("email");
  const kategori = document.getElementById("kategori");
  const pesan = document.getElementById("pesan");
  const errorNama = document.getElementById("errorNama");
  const errorEmail = document.getElementById("errorEmail");
  const errorKategori = document.getElementById("errorKategori");
  const errorPesan = document.getElementById("errorPesan");

  form.addEventListener("submit", function (e) {
    let valid = true;
    // Nama
    if (nama.value.trim() === "") {
      errorNama.textContent = "Nama wajib diisi.";
      nama.classList.add("invalid");
      valid = false;
    } else {
      errorNama.textContent = "";
      nama.classList.remove("invalid");
    }
    // Email
    const emailPattern = /^[^ ]+@gmail\.com$/i;
    if (!emailPattern.test(email.value.trim())) {
      errorEmail.textContent = "Email harus @gmail.com dan format benar.";
      email.classList.add("invalid");
      valid = false;
    } else {
      errorEmail.textContent = "";
      email.classList.remove("invalid");
    }
    // Kategori
    if (kategori.value === "") {
      errorKategori.textContent = "Pilih salah satu kategori.";
      kategori.classList.add("invalid");
      valid = false;
    } else {
      errorKategori.textContent = "";
      kategori.classList.remove("invalid");
    }
    // Pesan
    if (pesan.value.trim().length < 10) {
      errorPesan.textContent = "Pesan minimal 10 karakter.";
      pesan.classList.add("invalid");
      valid = false;
    } else {
      errorPesan.textContent = "";
      pesan.classList.remove("invalid");
    }
    if (!valid) {
      e.preventDefault(); // Gagalkan submit
    } else {
      // beri komentar pada else disini karena sudah menggunakan form.js
      // alert("Pesan berhasil dikirim!");
      // form.reset();
    }
  });

  // Hilangkan error saat user mulai mengetik
  [
    { field: nama, error: errorNama },
    { field: email, error: errorEmail },
    { field: kategori, error: errorKategori },
    { field: pesan, error: errorPesan },
  ].forEach(function (item) {
    item.field.addEventListener("input", function () {
      item.field.classList.remove("invalid");
      item.error.textContent = "";
    });
  });
});
document.getElementById("nama").addEventListener("blur", function () {
  const errorNama = document.getElementById("errorNama");
  if (this.value.trim() === "") {
    errorNama.textContent = "Nama wajib diisi.";
  } else {
    errorNama.textContent = "";
  }
});
document.getElementById("pesan").addEventListener("input", function () {
  const errorPesan = document.getElementById("errorPesan");
  if (this.value.trim().length < 10) {
    errorPesan.textContent = "Pesan minimal 10 karakter.";
  } else {
    errorPesan.textContent = "";
  }
});
document.getElementById("langganan").addEventListener("change", function () {
  if (this.checked) {
    alert("Terima kasih telah berlangganan newsletter!");
  }
});
