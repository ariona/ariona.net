---
title: "Animate.css Cara Mudah Menambahkan Animasi CSS3"
date: "2012-11-08"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - animate
  - animation
  - css
  - css3
  - transform
  - transition

categories: 
  - html-css
---

Animate.css adalah library animasi CSS3 siap pakai, ada beberapa kategori animasi mulai dari animasi untuk meminta perhatian (seeking attention) sampai animasi masuk dan keluar(in/out). Berikut ini adalah contoh penambahan animasi pada likebox

@import "https://dl.dropbox.com/u/26808427/cdn/ariona/demo/animate.min.css"; .fb-sample{ -webkit-animation-duration:3s; -moz-animation-duration:3s; -ms-animation-duration:3s; -o-animation-duration:3s; animation-duration:3s; -webkit-animation-delay:5s; -moz-animation-delay:5s; -ms-animation-delay:5s; -o-animation-delay:5s; animation-delay:5s; -webkit-animation-iteration-count:infinite; -moz-animation-iteration-count:infinite; -ms-animation-iteration-count:infinite; -o-animation-iteration-count:infinite; animation-iteration-count:infinite; }

Penggunaannya sangat mudah, anda tinggal menambahkan class yang telah disediakan oleh animate.css dan element yang anda beri classpun akan bergerak sesuai dengan tipe animasi yang dipilih.

## Sekilas tentang Animate.css

animate.css yang dibuat oleh [Dan Eden](http://twitter.com/_dte) ini menggabungkan beberapa fitur dari CSS3 seperti animation (keyframes), [transformation](/bermain-main-dengan-css3-transform/ "Bermain-main dengan CSS3 : Transform"), dan [transition](/bermain-main-dengan-css3-transition/ "Bermain-main dengan CSS3 : Transition"), semuanya dikemas dalam class-class siap pakai, jadi jika anda ingin menambahkan animasi sederhana, tidak perlu repot lagi membuatnya secara manual, cukup sertakan file animate.css dan tambahkan class animasi yang diinginkan.

animate.css dapat didownload di [daneden.me/animate/](http://daneden.me/animate/). disana anda dapat mendownload seluruh library atau memilih animasi apa saja yang anda butuhkan dengan melakukan "Custom Build". Andapun dapat melihat contoh animasinya dengan mengklik tipe-tipe animasi yang ada dan perhatikan animasi yang akan dihasilkan.

## Kompatibilitas

Saat ini animate.css hanya dapat berjalan dengan baik untuk browser-browser terbaru, seperti Chrome, safari, firefox dan IE10. Mengingat animate.css menggunakan CSS3 untuk menjalankan animasinya.

## Cara Penggunaan

Pertama-tama, [download library animate.css](https://github.com/daneden/animate.css) dari link yang saya sebutkan di atas, lalu sertakan dalam dokumen HTML anda dengan menggunakan tag link.

<link rel="stylesheet" href="animate.css" />

Setelah itu anda tinggal menambahkan class animated dan nama animasi yang disediakan. Misalnya disini saya ingin memberikan animasi bounceInLeft pada sebuah div, maka kodenya seperti berikut :

bla... bla.. bla...

Dengan demikian div tersebut akan beranimasi seolah-olah memantul masuk dari sebelah kiri.

## Merubah durasi, delay dan perulangan

Jika anda ingin merubah durasi dari animasi, atau menambahkan delay sebelum animasi dijalankan atau anda ingin agar animasi dijalankan secara terus-menerus anda dapat menambahkan style berikut :

div{
    -vendor-animation-duration: 3s; /\* animasi akan berjalan selama 2detik \*/
    -vendor-animation-delay:5s; /\* animasi akan dijalankan setelah 5detik \*/
    -vendor-animation-iteration-count: infinite; /\* akan menjalankan animasi secara terus menerus. \*/
}

Ingat, kata -vendor disini diganti dengan `-webkit`, `-moz`, `-ms` dan `-o`. Saya hanya ingin menghemat ruang saja dengan menyingkatnya :).

Contohnya seperti berikut :

div{
    -webkit-animation-duration: 3s; 
    -webkit-animation-delay:5s; 
    -webkit-animation-iteration-count: infinite;
}

## Daftar animasi yang bisa digunakan

Untuk daftar nama animasi yang bisa anda gunakan bisa dilihat dilink yang telah saya sebutkan di atas.

## Kesimpulan

animate.css dalah library Animasi CSS yang sangat keren dan cukup lengkap. Penerapannya pun tidak sulit, Anda hanya perlu menambahkan class tertentu pada elemen HTML yang ingin anda beri Animasi.
