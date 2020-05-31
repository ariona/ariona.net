---
title: "Membuat Desain Web Minimalis : Konversi Desain ke HTML"
date: "2012-08-30"
tags: 
  - html
  - konversi
  - psd-to-html
  - psd2html

categories: 
  - html-css
---

Setelah anda membuat desain web pada tutorial sebelumnya, kali ini kita akan meng-konversi desain web yang telah kita buat menjadi baris-baris kode HTML. Jika anda ingin mengetahui bagaimana proses pembuatan desain web silahkan baca tutorial [Membuat Desain Web Minimalis Dengan Photoshop](/membuat-desain-web-minimalis-dengan-photoshop/ "Membuat Desain Web Minimalis Dengan Photoshop").

## Versi video tutorial

http://www.youtube.com/watch?v=Vr8JPON9RhI

## Persiapan

Yang harus anda persiapkan pertama kali adalah _konsentrasi_, Jika anda kurang mengerti akan apa yang saya jelaskan, harap untuk membacanya berulangkali karena tutorial ini merupakan dasar dan bisa disebut fundamental untuk proses markup/pembuatan kode HTML.

Untuk memudahkan proses konversi desain, saya selalu membuat wireframe untuk desain yang dibuat, hal ini ditujukan untuk memudahkan anda dalam membuat layout web sesuai dengan desain juga untuk memudahkan kita dalam penamaan masing-masing elemen. Berikut ini adalah wireframe/kerangka desain web yang telah kita buat pada tutorial sebelumnya.

![](/assets/img/wireframes.jpg)

## Sekilas HTML

Sedikit mengingatkan kembali, bahwa tugas HTML adalah untuk membuat _markup/formatting_ dari desain web. Bukan untuk membuat penampilan yang sesuai dengan desain. Jadi jangan dulu memikirkan bagaimana agar markup HTML yang kita buat sesuai dengan desain, karena ini adalah tugas CSS untuk membuat markup HTML menjadi sesuai dengan Desain Web.

## Struktur Standar HTML

Yang pertama kali ditulis tidak lain adalah struktur standar dari dokumen HTML itu sendiri. Struktur ini meliputi tag doctype, html, head, title dan body.

```html
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Miniml : Web Dev Team</title>
    </head>
    <body>
        
    </body>
</html>
```

Kode-kode selanjutnya akan kita tulis di dalam tab `<body>`.

## Wrapper

Kita perhatikan bahwa desain web memiliki lebar 960px dan posisinya rata tengah, oleh karena itu kita membutuhkan sebuah div untuk menampung seluruh isi dari web tersebut. Kita beri id "wrapper" atau Anda bisa menamainya sendiri.

```html
<div id="wrapper">

</div>
```

Kode-kode Selanjutnya akan kita tulis di dalam div wrapper ini.

tag div digunakan untuk membuat group dari beberapa elemen, informasi lebih lanjut baca disini.

## Header

Jika kita perhatikan desain webnya atau wireframe di atas, dalam area header ini terdapat sebuah satu buah Logo dan menu. Sudah tahu tag-tag apa saja yang akan kita gunakan?, Pertama-tama kita buat sebuah div dengan id "header".

```html
<div id="header">

</div>
```

Untuk logo, disini saya akan menggunakan heading Level 1 dengan id "logo", sebuah link dan gambar.

```html
<div id="header">
    <h1><a href="#"><img src="images/logo.png" alt="Miniml"></a></h1>
</div>
```

Penggunaan tag h1 untuk logo dimaksudkan agar struktur dokumen HTML kita lebih semantik, kita ibaratkan logo ini sebagai Judul Utama dari situs kita ini. Sedangkan penambahan link/anchor dimaksudkan agar ketika pengunjung mengklik logo kita, maka pengunjung akan dibawa ke halaman utama.

Untuk bagian selanjutnya adalah menu, menu akan kita buat dengan menggunakan unordered list/tag ul lengkap dengan link.

```html
<ul id="menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contact Us</a></li>
</ul>
```

## Content

Untuk konten dair website akan kita tampung dalam sebuah div dengan id content. Jadi pertama-tama kita buat sebuah div dengan id content dan kode HTML selanjutnya akan di tulis di dalamnya.

```html
<div id="content">

</div>
```

### Heading

Elemen pertama yang anda temukan adalah sebuah teks heading, untuk membuatnya karena kita menggunakan heading level 1 untuk logo, maka untuk heading ini kita gunakan level 2.

```html
<h2>We are a professional web developer & designer team, and here is what we can do for you</h2>
```

### Features

Elemen selanjutnya adalah 3 buah item berisi fitur, lengkap dengan gambar, judul fitur dan deskripsi singkat. Karena ketiga elemen ini memiliki struktur yang sama, maka kita akan menggunakan atribut class untuk menamai elemen elemen tersebut.

```html
<div id="features">
    <ul>
        <li class="feature">
            <div class="icon design"></div>
            <h3>Unique & Elegant Design</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </li>

        <li class="feature">
            <div class="icon html"></div>
            <h3>HTML5 & CSS3 Templating </h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </li>

        <li class="feature">
            <div class="icon wordpress"></div>
            <h3>WordPress Theme Development</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </li>
    </ul>
</div>
```

Perhatikan bahwa disana saya tidak menggunakan tag img untuk memuat gambar, disini saya menggunakan sebuah div dengan class icon dan nama class yang berbeda untuk masing-masing fitur. Saya akan menerapkan CSS Sprite pada bagian ini nantinya.

## Separator

Separator/garis pemisah yang terdapat dalam desain berupa shadow/bayangan halus, kita akan menggunakan tag hr, dan memodifikasinya nanti menggunakan CSS.

```html
<hr class="shadow">
```

## Layout Kolom

Layout Kolom akan menampng "Our Latest Project" dan kolom testimoni, kita gunakan div dengan id yang bersangkutan.

### Latest Projects

Untuk bagian "Our Latest Project" kita akan isi dengan slider.

```html
<div id="latest-project" class="kolom">
    <h2>Our Latest Projects</h2>
    <ul class="slider">
        <li><a href="#"><img src="images/slide1.jpg" alt=""></a></li>
        <li><a href="#"><img src="images/slide2.jpg" alt=""></a></li>
        <li><a href="#"><img src="images/slide3.jpg" alt=""></a></li>
    </ul>
</div>
```

Pada bagian slider ini, kita akan menampilkan 3 buah slide dan kita gunakan unordered list untuk membuat daftar slide yang akan kita tampilkan.  
Perhatikan juga pada penamaan div, disini saya beri dan class sekaligus, ID sebagai pembeda antara bagian latest project dan testimoni sedangkan class kolom karena keduanya memiliki struktur kolom.

### Testimoni

Bagian testimoni hanya berisi sebuah quote. Untuk membuat quote sendiri kita tinggal menggunakan tag blockquote.

```html
<div id="testimoni" class="kolom">
    <h2>What They Say</h2>
    <blockquote>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. 

        - Jhone Doe 
        executive producer
    </blockquote>
</div>
```

## Footer

Perhatikan bahwa bagian footer ini masih berada di dalam content, jadi kodenya masih ditulis di dalam #content. Bagian footer ini juga memiliki dua kolom, jadi kita masih bisa menggunakan class kolom sebelumnya.

```html
<div id="footer"><code class="language-html">
    <span class="arrow"></span>
    <div id="left" class="kolom"></div>
    <div id="right" class="kolom"></div>
</div>
```

Saya beri id yang berbeda pula untuk kedua kolom tersebut. Selanjutnya perhatikan juga desain, disana terdapat tanda panah, untuk itu saya telah menambahkan sebuah span dengan nama class arrow.

### Kolom Footer Kiri

Di bagian kiri Footer, terdapat sebuah Logo (lagi) dan informasi alamat. Untuk logo seperti biasa kita gunakan tag img dilengkapi dengan link. Sedangkan untuk informasi alamat, kita gunakan unordered list saja.

```html
<div id="left" class="kolom">
    <a href="#"><img src="logo-footer.png" alt=""></a>
    <ul id="address">
        <li>Street Lorem 34, Ipsum, Dolor Sit Amet</li>
        <li>(+62)85-855-855/(+62)865-555-683</li>
        <li>yans_fied[at]yahoo.com</li>
    </ul>
</div>
```

### Kolom Footer Kanan

Untuk kolom bagian kanan ini kita akan isi dengan menu (lagi)

```html
<div id="kanan" class="kolom">
    <ul id="footer-menu">
        <li><a href="#">About</a></li>
        <li><a href="#">Porfolio</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">To Top</a></li>
    </ul>
</div>
```

## Kode Keseluruhan

Tahap penerjemahan Desain ke HTML telah selesai, berikut ini adalah kode lengkap dari apa yang kita kerjakan di atas. Saya juga menambahkan Komentar (Komentar ini tidak akan ditampilkan dalam browser).

```html
<!DOCTYPE HTML>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Miniml : Web Dev Team</title>
    </head>
    <body>
        <div id="wrapper"><code class="language-html">
            <!-- HEADER -->
            <div id="header">
                <h1><a href="#"><img src="images/logo.png" alt="Miniml"></a></h1>
                <ul id="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <!-- HEADER TUTUP -->

            <!-- CONTENT -->
            <div id="content"><code class="language-html">
                <h2>We are a professional web developer & designer team, and here is what we can do for you</h2>
                <!-- FITUR -->
                <div id="features">
                    <ul><code class="language-html">
                        <li class="feature"><code class="language-html">
                            <div class="icon design"></div>
                            <h3>Unique & Elegant Design</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </li>

                        <li class="feature">
                            <div class="icon html"></div>
                            <h3>HTML5 & CSS3 Templating </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </li>

                        <li class="feature">
                            <div class="icon wordpress"></div>
                            <h3>WordPress Theme Development</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </li>
                    </ul>
                </div>
                <!-- FITUR TUTUP -->

                <hr class="shadow">

                <!-- LATEST PROJECT -->
                <div id="latest-project" class="kolom">
                    <h2>Our Latest Projects</h2>
                    <ul class="slider">
                        <li><a href="#"><img src="images/slide1.jpg" alt=""></a></li>
                        <li><a href="#"><img src="images/slide2.jpg" alt=""></a></li>
                        <li><a href="#"><img src="images/slide3.jpg" alt=""></a></li>
                    </ul>
                </div>
                <!-- LATEST PROJECT -->

                <!-- TESTIMONI -->
                <div id="testimoni" class="kolom">
                    <h2>What They Say</h2>
                    <blockquote>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. 

                        - Jhone Doe 
                        executive producer
                    </blockquote>
                </div>
                <!-- TESTIMONI TUTUP -->

                <!-- FOOTER -->
                <div id="footer"><code class="language-html">
                    <span class="arrow"></span>

                    <!-- KOLOM KIRI -->
                    <div id="left" class="kolom">
                        <a href="#"><img src="logo-footer.png" alt=""></a>
                        <ul id="address">
                            <li>Street Lorem 34, Ipsum, Dolor Sit Amet</li>
                            <li>(+62)85-855-855/(+62)865-555-683</li>
                            <li>yans_fied[at]yahoo.com</li>
                        </ul>
                    </div>
                    <!-- KOLOM KIRI TUTUP -->
                    
                    <!-- KOLOM KANAN -->
                    <div id="kanan" class="kolom">
                        <ul id="footer-menu">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Porfolio</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">To Top</a></li>
                        </ul>
                    </div>
                    <!-- KOLOM KANAN TUTUP -->
                </div>    
                <!-- FOOTER TUTUP -->
            </div>
            <!-- CONTENT TUTUP -->
        </div>
        <!-- WRAPPER TUTUP -->
    </body>
</html>
```

[Download](https://www.dropbox.com/s/xnnutj1ga8iv3g2/index.zip?dl=0)

## Kesimpulan

Proses penerjemahan desain menjadi baris-baris kode HTML memang tahap yang paling mudah, anda tinggal membagi-bagi desain dan memberinya id/class. Penamaan ID dan Class sendiri disesuaikan dengan bagian-bagian tersebut. Yang perlu saya tekankan kembali bahwa HTML hanyalah berfungsi sebagai markup, atau formatting jadi ketika anda membuka pekerjaan anda di dalam browser, yang ditampilkan hanyalah teks standar tanpa ada kesamaan sama sekali dengan desain yang ada.
