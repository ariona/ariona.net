---
title: "Menyesuaikan warna element dengan warna Background"
date: "2014-09-19"
thumbnail: /assets/img/thumbnail.jpg
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - background-check
  - css
  - html
  - javascript
  - jquery

categories: 
  - html-css
  - javascript
---

Pemilihan warna text yang berada diatas sebuah element yang memiliki background memang harus diperhatikan, pemakaian warna text yang kurang kontras dengan warna backgroundnya bisa membuat text tersebut sulit dibaca. Misalkan background yang digunakan memiliki dominan warna cerah/putih misalnya dan text yang ada diatasnya kita beri putih juga, tentunya teks tersebut akan sulit dibaca.

Lalu bagaimana cara agar warna teks tersebut dinamis, menyesuaikan dengan warna background dibekalangnya? pada tutorial kali ini saya akan membahas bagaimana cara menyesuaikan warna element dengan warna background dengan bantuan jQuery Plugin Background-check.

BackgroundCheck akan menganalisis posisi element dan menganalisis warna dominan dari background dimana element tersebut berada. Selanjutnya BackgroundCheck akan memberikan class background--light, background--dark atau background-complex. dengan demikian kita bisa menyesuaikan warna element diatasnya dengan memanfaatkan class-class tersebut.

Misalnya ketika dominan warna background dimana element tersebut berada berwarna gelap, maka kita set textnya agar memiliki warna putih, dan sebaliknya.

[Demonstrasi](https://demo.ariona.net/backgroundcheck/index.html)[Download](https://demo.ariona.net/backgroundcheck/backgroundcheck.zip)

Ada tiga macam demonstrasi dalam tutorial ini, yang pertama adalah pengecekan warna background pada tag img, pengecekan background pada CSS background image, dan terakhir adalah contoh implementasi background-check pada slider, namun saya hanya akan membahas demonstrasi pertama dan sedikit demonstrasi ketiga.

## Markup HTML

Untuk Markup HTML Demonstrasi pertama, yakni pengecekan background pada tag image adalah sebagai berikut:

```html
<div class="wrapper">
    <figure>
        <img src="images/bg1.jpg" alt="" class="imgsrc">
        <figcaption class="imgcap">
            <h2>Caption Title</h2>
            <small>All images used on this demo can be founded on unsplash.com</small>
        </figcaption>
    </figure>

    <figure>
        <img src="images/bg5.jpg" alt="" class="imgsrc">
        <figcaption class="imgcap">
            <h2>Your Caption Title</h2>
            <small>All images used on this demo can be founded on unsplash.com</small>
        </figcaption>
    </figure>

    <figure>
        <img src="images/bg3.jpg" alt="" class="imgsrc">
        <figcaption class="imgcap">
        <h2>Your Caption Title</h2>
            <small>All images used on this demo can be founded on unsplash.com</small>
        </figcaption>
    </figure>

    <figure>
        <img src="images/bg2.jpg" alt="" class="imgsrc">
        <figcaption class="imgcap">
            <h2>Caption Title</h2>
            <small>All images used on this demo can be founded on unsplash.com</small>
        </figcaption>
    </figure>
</div>
```

Markup diatas, hanyalah sebuah blog tag figure, yang menambpung satu image, dan figcaption untuk menampung image caption.

## CSS

Untuk stylng demo pertama, adalah sebagai berikut:

```css
.wrapper{
    width: 960px;
    margin: 100px auto;
}
figure{
    position: relative;
    text-align: left;
    margin: 0;
    width: 50%;
    float: left;
}
figure img{
    display: block;
    width: 100%;
    max-width: 100%;
}
figcaption{
    position: absolute;
    width: 100%;
    bottom:0;
    padding: 50px;
}
figcaption h2{
    margin:0 0 10px;
    font-family: Raleway;
    font-size: 36px;
}
figcaption small{
    font-style:italic;
    font-family: Merriweather;
    font-size: 16px;
}
```

Hasil sementara untuk kode HTML dan CSS diatas adalah sebagai berikut:

![](/assets/img/normal.png)

Bisa anda perhatikan bahwa sebagian text yang berperan sebagai caption dari masing-masing image tidak menyesuaikan warna secara otomatis, sehingga ada sebagian text yang sulid dibaca karena kurang kontras dengan background.

## Javascript

Untuk javascript, yang anda perlukan adalah library jquery yang bisa anda download di [jquery.com](http://jquery.com "jQuery Library") dan backgroundCheck yang bisa anda download di [https://github.com/kennethcachia/Background-Check](https://github.com/kennethcachia/Background-Check "Background Check"). Untuk menggunakan backgroundCheck, pertama-tama sertakan terlebih dahulu library jquery, lalu backgroundCheck.

Saya akan menempatkannya dibawah dokumen HTML, tepatnya sebelum penutup body.

```html
<script src="js/jquery.min.js"></script>
<script src="js/backround-check.min.js"></script>
```

Setelah semua library disertakan dalam file HTML, selanjutnya adalah inisiasi dari backgroundCheck:

```js
$(document).ready(function(){
    BackgroundCheck.init({
        targets: '.imgcap',
        images: '.imgsrc'
    });
});
```

Proses inisiasi diatas akan memeriksa tag HTML dengan class .imgcap, dan background dibelakanya yakni .imgsrc. Sebelumnya, dalam Kode HTML saya telah memberikan class .imgcap pada tag figcaption, dan .imgsrc pada tag img yang akan dijadikan sebagai background.

Jika semua berjalan dengan benar, maka anda akan menemukan class baru pada figcaption/imgcap, class tambahan tersebut adalah background--light atau background--dark.

Untuk menangani class-class tersebut tambahkan CSS berikut:

```css
figcaption.background--dark{
    color: white;
}
figcaption.background--ligt{
    color: #555;
}
```

Sekarang jika anda preview dalam browser, warna caption dari image akan menyesuaikan dengan warna backgroudnnya. Jika warna background gelap, maka teks caption akan memiliki warna putih dan sebaliknya.

![](/assets/img/with-bgcheck.png)

Sebagai Catatan, karena alasan keamanan browser, maka backgroundCheck tidak akan berjalan pada file yang diload dari komputer, pastikan untuk menjalankan demo tutorial ini file disimpan di server, Anda bisa menggunakan local server seperti XAMPP.

## BackgroundCheck pada Slider

Untuk inisiasi backgroundCheck pada slider tidak jauh berbeda, kita hanya perlu menginisiasi backgroundCheck pada event start slider, dan merefreshnya pada event after. Slider yang akan digunakan dalam tutorial ini adalah flexslider dari woothemes. Berikut adalah inisiasi slider serta backgroundCheck untuk woo.

```js
$(".flexslider").flexslider({
    animation : "fade",
    directionNav : true,
    controlNav : false,
    start: function () {
        BackgroundCheck.init({
          targets: '.flex-direction-nav a, .imgcap',
          images: '.flexslider img'
        });
    },
    after: function () {
        BackgroundCheck.refresh();
    },
});
```

Untuk markup dan style bisa anda pelajari dari file demonstrasi.

Jika anda coba jalankan slider, maka element-element yang terdapat diatas slider akan menyesuaikan. Jika element tersebut berada pada posisi background warna gelap, maka element yang bersangkutan akan memiliki warna putih dan sebaliknya.

![](/assets/img/bgcheck-flexslider.png)

## Kesimpulan

Penggunaan backgroundCheck sangat bergunakan untuk meningkatkan readability dari suatu situs. Terutama jika situs yang bersangkutan menggunakan background disetiap block/elemennya, Maka library backgroundCheck mungkin akan membantu untuk pengecekan warna background.

Yang menjadi kelemahan dari library ini adalah kita hanya bisa menggunakannya satu kali dalam page. Jadi jika anda memiliki element yang berbeda-beda dan ingin menerapkan backgourndCheck maka anda tidak dapat menuliskan backgroundCheck.init beberapa kali.

Solusinya adalah memberi nama class yang sama untuk target, dan image. Jadi anda hanya memanggil backgroundCheck.ini satu kali dengan class yang sama. Atau anda bisa menggunakan multiple class seperti pada demonstrasi slider.
