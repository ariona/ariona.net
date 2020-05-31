---
title: "Bermain-main dengan CSS3 : Border Radius"
date: "2012-05-12"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - bermain-main-dengan-css3
  - border
  - css3
  - radius

categories: 
  - html-css
---

Border radius (border-radius) adalah property baru yang berhubungan dengan border di CSS3. Berfungsi untuk menambahkan lengkungan disetiap sudut elemen, sehingga kita tidak perlu lagi menggunakan gambar lengkungan untuk membuat box dengan lengkungan disudutnya.

## border-radius

Jika sebelumnya untuk membuat lengkungan disetiap sudut elemen digunakan gambar-gambar yang berbeda, terutama untuk setiap sudut lengkungan. Namun pada CSS3, kita bisa membuat efek lengkungan pada setiap sudut border, Yakni dengan menggunakan property border radius (border-radius). Berikut property-property untuk setiap sudut :

```html

border-top-left-radius: 10px;
border-top-right-radius: 10px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
```

Shorthand untuk border-radius ini adalah :

border-radius: topleft topright bottomright bottomleft;

Cara penulisan value sesuai dengan arah jarum jam, dan jika semua nilai border radius sama, anda cukup mengetikkan satu value saja.

```html

/* nilai radius spesifik untuk tiap sudut */
border-radius: 10px 5px 30px 50px;

/* nilai radius sama untuk tiap sudut */
border-radius:10px;
```

### Efek lengkungan kertas

Anda juga bisa menambahkan border radius secara spesifik, seperti radius-x dan radius y untuk mendapatkan efek-efek tertentu. Anda tinggal tambahkan value ke dua pada property border-radius:

```
border-top-left-radius: 10px 100px;
```

atau ketika anda menggunakan shorthand, anda tinggal menambahkan tanda slash dan memberikan nilai kedua seperti berikut :

```html

border-radius: 5px 50px 20px 100px / 100px 30px 50px 20px ;
```

Dan yang kita dapatkan adalah efek lengkungan yang lebih menyerupai kertas :)

![Border radius : efek kertas](/assets/img/paper.jpg "Border radius : efek kertas")

### Ellips dan lingkaran

Selain memberikan value/nilai dengan satuan pixel, kita juga bisa menambahkan value dengan satuan %. Perhatikan contoh style berikut yang diterapkan pada div.

```html

#box{
    background: #fff;
    width: 200px;
    height:100px;
    border-radius: 50%;
}
```

![Border radius : efek ellips](/assets/img/elips.jpg "Border radius : efek ellips")

Ketika sebuah div memiliki bentuk persegi panjang, maka yang kita dapatkan adalah bentuk ellips. Dan yang terjadi ketika bentuk div kotak pasti anda sudah bisa menebak bentuk apa yang dihasilkan :).

```html

#box{
    background: #fff;
    width: 200px;
    padding: 200px;
    border-radius: 50%;
}
```

![Border radius : efek lingkaran](/assets/img/circle.jpg "Border radius : efek lingkaran")

## Kesimpulan

Dengan adanya property border radius, kita bisa berkreasi dengan menambahkan lengkungan-lengkungan halus di setiap sudut border dan memungkinkan anda membuat sebuah lingkaran dengan property ini. Sebelumnya untuk membuat lengkungan di setiap sudut diperlukan 4 gambar lengungan untuk setiap sudutnya, namun dengan adanya property border radius, hal ini tidaklah diperlukan lagi.

_sumber : [www.w3schools.com](http://www.w3schools.com/cssref/css3_pr_border-radius.asp)_
