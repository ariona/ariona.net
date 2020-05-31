---
title: "Membuat buku virtual dengan turn.js"
date: "2012-07-11"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - efek-buku
  - pageflip
  - turn-js

categories: 
  - javascript
---

Anda pernah mendengar tentang FlashPageFlip? itu adalah library flash untuk membuat buku virtual lengkap dengan efek ketika kita membuka tiap halaman buku tersebut. Kini saya akan memperkenalkan Turn.js, sebuah library [Javascript](/category/tutorial/javascript/ "Javascript category") yang fungsinya hampir sama dengan FlashPageFlip, namun tanpa flash.

![Turn.js](/assets/img/turn.js.jpg)  
[Demonstrasi](https://dl.dropbox.com/u/26808427/cdn/ariona/demo/turn.js/index.html "Demonstration")[Download](https://dl.dropbox.com/u/26808427/cdn/ariona/demo/turn.js/turn.js.zip "Download")

Turn.js menggunakan teknologi [HTML5 dan CSS3](/category/tutorial/html-css/ "HTML & CSS Category"), terutama dibagian efek membuka halaman buku. Turn.js bisa dijalankan di browser berikut:

- Safari 5
- Chrome 16
- Firefox 10, dan
- IE 7,8,9

Anda dapat mendownloadnya disitus resminya, di [http://turnjs.com/](http://turnjs.com/ "Turn.js Official Web") atau [disini](https://github.com/blasten/turn.js/zipball/master "turn.js.zip")

Untuk memahami penggunaanya, saya akan memberikan contoh sederhana dengan membuat sebuah buku gallery dengan gambar-gambar yang diambil dari dribbble.com.

## HTML

Untuk, markup html, kita hanya membutuhkan sebuah div dengan id book, untuk halaman didalam akan langsung di generate secara otomatis oleh jquery.

## CSS

Kita tambahkan CSS, untuk buku virtual yang akan kita buat:

```html

*{margin:0;padding:0}
#book{
    margin:30px auto;
}
h2{
    background :rgba(255,255,255,.9);
    color      :#777;
    font-family:calibri,sans-serif;
    font-weight: normal;
    padding    :10px;
    text-shadow:0 1px 0 rgba(255,255,255,.8);
    text-align :center;
}
```

## Javascript

Selanjutnya adalah inti dari artikel ini, pertama-tama kita muat terlebih dahulu library jquery dan turn.js yang telah di download dari websitenya.

```html

http://jquery.min.js
http://turn.min.js
```

Lalu tambahkan script berikut:

```html


$.getJSON("http://api.dribbble.com/shots/popular?callback=?",
  {
    per_page:"16",
    format: "json"
  },
  function(data) {
    shots=data.shots;
    for(var i in shots){
        var shot=shots[i];

        $("#book").append(''+shot.title+'');
    }
    $('#book').turn({
        width: 800,
        height: 300,
        autoCenter:true
    });
});

```

### Penjelasan Code

Untuk gambar yang akan ditampilkan berasal dari situs [dribbble.com](http://dribbble.com/ "Dribbble"), saya menggunakan api dribbble untuk mendapatkan gambar-gambar terpopuler. API dribbble akan mengembalikan nilai berupa daftar posting (shots) dengan [format JSON](/apa-itu-json/ "Apa itu JSON?"), lalu saya lakukan perulangan `(baris 9-13)` dengan menambahkan tag div dengan gambar sebagai background dan tag h2 untuk title `(line 12)`.

Setelah gambar-gambar ditambahkan ke dalam div#book, selanjutnya kita panggil fungsi turn.js untuk membuat gambar-gambar tersebut menjadi buku virtual `(baris 14-18)`;

Jika anda ingin mempelajari fungsi .getJSON silahkan baca [disini](http://api.jquery.com/jQuery.getJSON/ "getJSON"), dan untuk mempelajari API dribbble silahkan baca [disini](http://developer.dribbble.com/ "Dribbble API")

## Jalankan Kode

Save pekerjaan anda dan tampilkan di browser yang compatible (telah disebutkan di atas), hover sudut halaman, click atau click dan drag untuk membuka halaman selanjutnya.

## Kesimpulan

Turn.js memanfaatkan fitur CSS3 diantaranya, gradient, [box-shadow](/bermain-main-dengan-css3-box-shadow/ "Bermain-main dengan CSS3 : Box-shadow"), transform dan lain sebagainya untuk membuat efek membuat sebuah buku. Oleh karena itu jika kita membukanya di browser yang tidak compatible maka, efek-nya kurang berasa. Kelebihan lainnya adalah, anda dapat mengubah halaman web anda menjadi sebuah virtual book, lengkap dengan efek page flip. Pada contoh di atas kita merubah sebuah div menjadi lembaran-lembaran buku gallery. Untuk contoh lainnya, bisa anda temukan di demo yang terdapat di dalam folder hasil download turn.js. Selamat berkreasi :).
