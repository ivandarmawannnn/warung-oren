document.addEventListener("DOMContentLoaded", function() {
  var images = ["latar1.png", "latar2.jpg", "latar3.jpg"]; // Daftar gambar
  var angka = 0;
  var menu1 = document.getElementById("menu1");
  
  function ubahfoto() {
    menu1.style.backgroundImage = "url(img/" + images[angka] + ")";
    angka = (angka + 1) % images.length;
  }
  
  setInterval(ubahfoto, 3000); // Ganti gambar setiap 3 detik
});
