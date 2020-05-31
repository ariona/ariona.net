---
title: "Efek fade-in pada CSS sprite"
date: "2011-09-06"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - css
  - html
  - sprite
  - transition

categories: 
  - html-css
---

Sprite atau Image sprite merupakan sekumpulan gambar dalam satu file. jadi dalam satu file terdapat beberapa gambar yang berbeda dan kita tinggal menentukan dimana posisi gambar yang dibutuhkan dalam CSS. teknik ini disebut dengan CSS sprite. penggunaan CSS sprite akan mempercepat proses loading file, lebih efektif dari pada melakukan beberapa request gambar ke server selain itu teknik ini juga akan mengurangi jumlah server request dan tentunya menghemat bandwidth.

Namun adakalanya kita merasa kurang _'ngeh'_ dengan CSS sprite, karena kita tidak bisa menerapkan efek transisi, kalaupun kita menambahkan properti transition, maka perpindahan sprite akan terlihat.

Tutorial kali ini, saya akan memberikan trik untuk menambahkan efek transisi fade-In pada CSS Sprite. kasusnya adalah pada button berikut

![button](/assets/img/button.jpg)

Gambar pertama(atas) adalah keadaan awal button dan kedua(bawah) ketika button:hover. Perhatikan Demonstrasi berikut: [Demonstrasi](http://demo.ariona.net/fade-in-sprite/index.html)

### HTML

Buatlah Markup seperti berikut ini :

Tekniknya adalah kita akan menyimpan gambar ketika .button dalam keadaan :hover pada span, jadi kita tinggal memainkan transisi opacity dari span ini

### CSS

.button{
    background:url(button.jpg) 0 0; /\* posisi gambar pertama (atas) \*/
    width:240px;
    height:83px;
    border-radius:10px;
}
.button span{
    width:100%;
    height:100%;
    display:block; 
    background:url(button.jpg) 0 -83px;  /\* menggeser sprite ke bawah (gambar 2)\*/
    opacity:0;
    -webkit-transition:opacity .5s ease-in;
    -moz-transition:opacity .5s ease-in;
    -ms-transition:opacity .5s ease-in;
    -o-transition:opacity .5s ease-in;
    transition:opacity .5s ease-in;
    border-radius:10px;
}

`display:block` pada span diperlukan agar kita bisa menentukan ukuran dari span (sesuai dengan .button) meskipun kita tidak menambahkan konten pada span ini. dan `transition` ini adalah kunci dari efek Fade-In yang akan kita buat.

ketika .Button di hover kita tambahkan style berikut :

.button:hover span{
    opacity:1;
}

### Kesimpulan

Penggunaan CSS sprite dapat mempercepat proses loading situs, dengan sedikit trik, maka kita dapat menambahkan efek fade-in pada CSS sprite ini, lebih baik dibandingkan memberikan transisi langsung pada .button. tapi ada kalanya transisi yang diberikan langsung pada .button memberikan kesan tersendiri.

### Sumber Referensi

- [w3schools.com about CSS sprite](http://www.w3schools.com/css/css_image_sprites.asp)
- CSS-Tricks : [Fade Image into Another](http://css-tricks.com/8511-fade-image-within-sprite/)
