---
title: "Memperbaiki Bug CSS di Internet Explorer 8"
date: "2014-08-20"
thumbnail: /assets/img/thumbnail.jpg
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - ie-hack
  - ie8

categories: 
  - html-css
  - tips-trik
---

Permasalahan yang paling sering mengganggu ketenangan seorang web developer adalah Internet Explorer, _yep_ dari dulu Internet explorer memang sering berbeda sendiri dalam hal menampilkan dokumen HTML, Untungnya pada versi terbaru yakni IE9 ke atas permasalahan layout yang berantakan mulai diperbaiki.

Mengapa artikel ini menargetkan Internet Explorer 8 (IE8)? _Well_, IE8 adalah browser default/bawaan ketika windows 7 pertama kali diinstall, dan tentunya akan ada banyak sekali pengguna IE8 mengingat marketshare windows 7 sudah menggungguli windows XP sebanyak **51.22%**, bahkan Windows 8/8.1 pun masih betah di 5/4%. Dan kenyataan ini akan mengarahkan kita untuk sekali lagi [bertarung dengan Internet Explorer seperti hal nya dulu dengan IE6 :D](https://www.modern.ie/en-us/ie6countdown#escape-from-xp "Fighting XP").

## HTML5 dan IE8

HTML5 masih belum didukung oleh IE8, oleh karena itu beberapa tag HTML5 yang anda gunakan tidak akan ditampilkan dengan semestinya dalam IE8. Untungnya ada beberapa library javascript yang berfungsi untuk mensimulasikan pembuatan tag-tag HTML5 pada IE8. Salah satunya adalah HTML5shiv. Sebagai contoh kasus silahkan buat dokumen HTML seperti berikut:
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>HTML5 Tag on IE8</title>
  <style>
    \* {
      margin: 0
    }

    body {
      font-family: "Segoe UI", "calibri", arial, sans-serif;
    }

    #logo {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      margin: 0 auto;
      border: 5px solid white;
      margin-bottom: 10px;
    }

    header {
      background: #40B3DF;
      text-align: center;
      box-shadow: 0 1px 5px rgba(0, 0, 0, .3);
      padding-top: 50px;
      color: white;
    }

    .site-description {
      margin-bottom: 50px;
      display: block;
    }

    nav {
      background-color: #A8CB17;
    }

    nav a {
      display: inline-block;
      padding: 10px 20px;
      color: white;
      text-decoration: none;
    }

    nav a:hover {
      background-color: #17649A;
    }
  </style>
</head>

<body>
  <header>


    <h1 class="site-title">Website Keren</h1>
    <nav class="menu">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>
</body>

</html>
```

Jika kita menampilkannya dalam browser modern, misalnya Chrome, maka tampilan yang akan kita dapatkan adalah seperti berikut:

![](/assets/img/chrome.png)

Browser Chrome

Lain halnya jika kita menampilkannya di IE8, hasilnya adalah seperti berikut:

![](/assets/img/ie8.png)

Browser IE8

Hal tersebut dikarenakan kita menggunakan tag HTML5 pada dokumen kita yakni header dan nav yang tentunya tidak didukung oleh IE8. Cara cepat untuk memecahkan permasalahan tersebut adalah dengan menambahkan HTML5shiv kedalam dokumen HTML kita, masukkan script ini kedalam Conditional Tag untuk IE8 ke bawah

<!--\[if lte IE 8\]>
    [http://html5shiv.js](http://html5shiv.js)
<!\[endif\] -->

Kode di atas akan memanggil file HTML5.js hanya dibrowser IE8 kebawah. Conditional tag ini hanyalah ada pada Internet Explorer. Dan jika kita buka lagi file HTML yang kita buat seharusnya sama seperti yang kita inginkan.

![](/assets/img/html5js.png)

Preview setelah penambahan HTML5shiv

[Download HTML5Shiv](https://code.google.com/p/html5shiv/)

## CSS3 Goodies

Ada beberapa property CSS3 yang berhubungan dengan efek dekorasi, seperti border-radius, box-shadow, gradient, border-image dan rgba color system. Sayangnya IE8 tidak bisa memprosesnya karena belum mendukung CSS3. Untuk mengakalinya kita bisa menggunakan library CSS3 Pie.

CSS3 Pie adalah sebuah library yang akan memberikan kemampuan bagi IE6-8 untuk menampilkan efek CSS3 yang saya sebutkan diatas. Cara penggunaannya cukup mudah, anda tinggal download file PIE.htc lalu simpan difolder project anda. Selanjutnya tambahkan propery behavior dengan value url pie.htc. Pada contoh berikut saya menambahkannya pada selector #logo dan header yang terdapat pada contoh kasus sebelumnya:

```css
header{
    ...
    behavior:url(pie.htc);
}
#logo{
    ...
    behavior:url(pie.htc);
}
```

Setiap ada property CSS3 yang ingin anda terapkan, sertakan juga property behavior dan isi valuenya dengan url file PIE.htc.

![](/assets/img/pie.png)

CSS3 Efek dengan PIE.htc

[Download CSS3 Pie](http://css3pie.com/)

## Memperbaiki CSS bug

Ada beberapa cara untuk memperbaiki bug CSS pada Internet Explorer, yakni menggunakan fix langsung dalam file CSS utama dengan menambahkan symbol-siymbol tertentu dan memanggil file khusus dalam tag conditional Internet Explorer

### Menargetkan property CSS hanya untuk IE

Ada trik untuk menargetkan property css hanya untuk Browser IE, saya pernah membahasnya dalam posting singkat [Internet Explorer Hack](/internet-explorer-hack/ "Internet Explorer Hack"). Jika kita menambahkan 9 setelah nilai dari suatu property, maka property tersebut hanya akan diterapkan pada IE8 saja (ada yang melaporkan IE9 juga terpengaruhi), contohnya tambahkan property berikut pada bagian header dokumen kita sbeelumnya:

margin-top:09;
    background-color: 09;

### Cara aman menambahkan CSS fix

Penggunakan trik sebelumnya memang sangat membantu, tapi sebagian developer khawatir kalau browser lain juga ikut-ikutan mengadaptasi trik tersebut dan style yang kita peruntukkan untuk IE diterapkan juga. Maka dari itu cara paling aman adalah menyertakan style fix untuk IE ini di dalam conditional tag seperti yang saya contohkan sebelumnya. Contohnya:

```html
<!--[if lte IE 8]>
    <style>
        header{
            margin-top:0;
            background-color: 0;
        }
    </style>
<![endif] -->
```

atau lebih baik dibuatkan file mandiri untuk IE. seperti berikut :

```html
<!--[if lte IE 8]>
    <link rel="stylesheet" href="ie8.css">
<![endif] -->
```

Maksud dari tag tersebut adalah, Jika browser yang digunakan lebih rendah dan sama dengan IE 8 maka load style/script berikut. lte disana adalah singkatan dari _lower than equal_. Segala text yang dituliskan didalam tag conditional tersebut hanya akan dirender jika kondisinya memenuhi syarat, dalam contoh diatas yakni IE8 ke bawah.

## CSS3 Media Query dan IE8

Sudah nyobain resize-resize IE8nya untuk menguji Media Query? Anda tidak akan menemukan perubahan sama sekali karena IE8 tidak mendukung media query untuk responsive web. Untuk meperbaiki permasalahan maka kita bisa menggunakan library respond.js. Respond.js akan memberikan IE6-8 kemampuan untuk memproses CSS3 Media Queries. Seperti halnya dalam memanggil file HTML5.js sertakan file ini dalam conditional tag

```html
<!--[if lte IE 8]>
    [http://respond.js](http://respond.js)
<![endif] -->
```

[Download Respond.js](https://github.com/scottjehl/Respond)

## Deteksi fitur HTML5 dan CSS3 dengan Modernizr

Suatu waktu mungkin anda ingin mendeteksi apakah suatu browser mendukung suatu fitur atau tidak. Misalnya apakah IE8 mendukung SVG atau tidak. Maka untuk mendeteksi fitur tersebut kita bisa menggunakan library Modernizr. Berikut ini adalah salah satu contoh penggunaan Modernizr untuk mendeteksi fitur SVG, jika browser yang dipakai tidak memiliki fitur SVG maka source gambar svg akan diganti dengan png:

```js
if (!Modernizr.svg) {
  $(".logo img").attr("src", "images/logo.png");
}
```

## Males dengan semuanya? Suruh Download Browser lain aja

Jika project yang anda kerjakan milik anda sendiri atau kebijakan kantor untuk tidak mendukung browser lama seperti IE8, maka opsi redirect bisa digunakan. Pada contoh berikut kita akan menambahkan script redirect browser ke halaman browser-happy.com

```html
<!--[if lte IE 8]>
  window.location = "http://browsehappy.com/"
<![endif]-->
```

[Download Modernizr](http://modernizr.com/)

## Menguji IE8 di Linux dan OS X

Untuk pengguna OS Linux dan OS X tentunya tidak dapat menguji halaman webnya di Internet Explorer. Untuk menguji penampilan web yang sedang anda kerjakan di IE8 ada beberapa aplikasi yang bisa digunakan:

### 1\. Virtual Machine

Aplikasi virtual machine seperti VMWare, VirtualBox dan Parallels (OSX) bisa digunakan untuk mendapatkan IE8. Anda tinggal menginstall aplikasi virtual machine, Jika anda memiliki image windows xp/7 Anda bisa menggunakannya untuk menginstall di virtual machine, jika Anda tidak memilikinya anda juga bisa mendownload virtualdisk yang telah disediakan oleh microsoft yang bisa didapatkan di [modern.ie](http://modern.ie "Modern.ie"),

[Download VirtualBox (Gratis)

### 2\. Wine & IETester

Aplikasi Wine ini memberi kemampuan kepada Linux dan OS X untuk menjalankan Aplikasi-aplikasi windows. Setelahnya Wine terinstall, anda bisa mendownload IETester. IE Tester adalah aplikasi yang menggabungkan beberapa versi IE, disana anda dapat memilih versi IE yang akan anda uji.

[Download Wine](https://www.winehq.org/) [Download IETester](http://www.my-debugbar.com/wiki/IETester/HomePage)

### 3\. Browserstack

Browserstack adalah layanan online untuk browser testing, tidak hanya IE8 tapi berbagai device yang ada seperti iphone, android, windows, os x dan lain sebagainya. Anda akan diberi masa trial terlebih dahulu karena layanan ini berbayar dan tentunya karena tool online, diperlukan kecepatan internet yang mumpuni biar pengoperasiannya lancar ( **Pak tiff, apa kabar?** :) )

[Browserstack](http://www.browserstack.com/)

## Sumber

[Marketshare Operating System](http://www.netmarketshare.com/operating-system-market-share.aspx?qprid=10&qpcustomd=0) [9 Most common ie bugs and how to fix them](https://code.tutsplus.com/tutorials/9-most-common-ie-bugs-and-how-to-fix-them--net-7764) [HTML5 Boilerplate](http://www.initializr.com/)
