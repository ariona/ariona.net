---
title: "Membuat Mega Menu dengan CSS"
date: "2014-08-26"
thumbnail: ./images/thumbnail.jpg
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - css
  - dropdown-menu
  - mega-menu

categories: 
  - html-css
---

Membuat mega menu tidak ada bedanya dengan dropdown menu biasa, hanya saja content dari sub-menu yang bervariasi dan memiliki beberapa kolom.

Dalam artikel ini saya akan berbagi mengenai cara bagaimana membuat mega menu menggunakan CSS. Mega menu yang akan kita buat memiliki dua tipe, yang pertama mega menu dengan lebar sesuai dengan contentnnya dan satu lagi memiliki lebar penuh. Silahkan buka demonstrasinya di link berikut:

[Demontrasi](/demo/megamenu/mega-menu.html)

Markup HTML untuk mega menu tidak jauh berbeda dengan dropdown menu yang pernah saya bahas dalam artikel [Membuat dropdown menu dengan CSS](/membuat-dropdown-menu-dengan-css/ "Membuat Dropdown Menu dengan CSS"). Namun ada beberapa perubahan, seperti penambahan class untuk identifier mega menu dan penambahan beberapa elemen untuk mega menu.

```html
<header>
  <div class="wrapper">
    <nav class="main-navigation">
      <ul class="menu">
        <li><a href="#">Home</a></li>
        <li class="has-mega-menu">
          <a href="#">Mega Menu 1</a>
          <div class="mega-menu">
            <div class="column">
              <div class="col">
                <h3>Web Development</h3>
                <ul>
                  <li>HTML & CSS</li>
                  <li>Javascript</li>
                  <li>PHP</li>
                  <li>Wordpress</li>
                </ul>
              </div>
              <div class="col">
                <h3>Web Design</h3>
                <ul>
                  <li>Photoshop</li>
                  <li>Sketch</li>
                  <li>Macaw</li>
                  <li>Gimp</li>
                </ul>
              </div>
              <div class="col">
                <h3>Browser</h3>
                <ul>
                  <li>Chrome</li>
                  <li>Firefox</li>
                  <li>Internet Explorer</li>
                  <li>Opera</li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li class="has-mega-menu">
          <a href="#">Mega Menu 2</a>
          <div class="mega-menu fullwidth">
            <div class="column">
              <div class="col">
                <h3>Web Development</h3>
                <ul>
                  <li>HTML & CSS</li>
                  <li>Javascript</li>
                  <li>PHP</li>
                  <li>Wordpress</li>
                </ul>
              </div>
              <div class="col">
                <h3>Web Design</h3>
                <ul>
                  <li>Photoshop</li>
                  <li>Sketch</li>
                  <li>Macaw</li>
                  <li>Gimp</li>
                </ul>
              </div>
              <div class="col">
                <h3>Browser</h3>
                <ul>
                  <li>Chrome</li>
                  <li>Firefox</li>
                  <li>Internet Explorer</li>
                  <li>Opera</li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li><a href="#">Dropdown Menu</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  </div>
</header>
```

Dalam markup HTML di atas, sama menambahkan class "`has-mega-menu`" untuk menu yang memiliki submenu dengan tipe mega menu. Untuk mega menunya sendiri salah satunya menu memiliki class "`fullwidth`" untuk mega menu dengan tipe fullwidth.

## CSS

Untuk styling, tidak jauh berbeda dengan pembuatan dropdown menu, namun saya akan mengulanginya kembali dari awal agar anda paham fungsi dari setiap style yang saya diberikan:

```css
// CSS Reset
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
body{
    font-family: Raleway, arial, sans-serif;
}
header{ background: #bad455; }
.wrapper{
    width: 1020px;
    margin: 0 auto;
}
```

Pada style diatas, sama menambahkan CSS Reset sederhana, juga penggunaan property `box-sizing: border-box` agar kita tidak dibingungkan dengan kasus [box-model (padding, border, width, height)](/5-permasalahan-yang-membingungkan-bagi-css-newbie/). Untuk font, saya menggunakan [jenis font](/bermain-main-dengan-css3-font-face/) raleway. Anda bisa mendownload atau menambahkan link langsung dari [Google Font](http://www.google.com/fonts/specimen/Raleway "Google Fonts").

Dan untuk header saya beri warna hijau muda. Sedangkan untuk `.wrapper` saya tentukan widthnya menjadi 1020px dan mengaturnya menjadi rata tengah.

Selanjutnya kita beri style untuk `.main-navigation`, `.menu` dan `li`.

```css
.main-navigation{
    position: relative;
}
.menu{
    list-style: none;
}
.menu:after{
    content:"";
    clear: both;
    display: block;
}

.menu>li{
    position: relative;
    float: left;
}
.menu>li.has-mega-menu{
    position: static;
}

.menu>li>a{
    color: white;
    text-decoration: none;
    padding: 10px 20px;
    display: block;
    font-weight: 100;
}
.menu>li:hover>a{
    background-color: #90AB2A;
}
.menu>li:hover .mega-menu{
    display: block;
}
```

Yang berbeda dari dropdown menu biasa adalah, saya mengatur position dari `.main-navigation` menjadi `relative`, agar mega-menu dengan tipe fullwidth tidak melebihi lebar dari `.main-navigation` ini.

Untuk `li` juga memiliki nilai position yang bebeda, untuk standar saya berikan `position:relative`, dan li yang memiliki class `.has-mega-menu` saya beri `position:static`, hal ini memberikan kemampuan kepada submenu agar melebar tidak terbatas oleh width `li`\-nya melainkan lebar dari `.main-navigation`.

Selanjutnya kita beri styling untuk mega-menunya:

```css
.mega-menu{
    position: absolute;
    background: #fff;
    padding: 50px 30px;
    box-shadow: 0 0 10px rgba(0,0,0,.3);
    display: none;
}
.mega-menu:after{
    content:" ";
    display:block;
    clear: both;
}

.mega-menu.fullwidth{
    left:0;
    right:0;
}
```

Pertama-tama kita atur style untuk dua tipe mega-menu, saya terapkan `position: absolute` pada `.mega-menu`, padding, background dan shadow. Sedangkan untuk `.mega-menu` dengan class `.fullwidth`, saya tentukan nilai `left` dan `right` menjadi 0 dengan begitu lebar mega-menu akan otomatis mengikuti `.main-navigation` karena element inilah yang menjadi pembatas lebarnya (dikarenakan memiliki `position:relative`).

Tidak lupa saya juga menambahkan clearfix pada mega menu tersebut untuk berjaga-jaga jika didalamnya ada floating. Langkah selanjutnya adalah memberi styling pada item yang terdapat dalam mega menu:

```css
.mega-menu ul{
    list-style: none;
    margin: 20px 0 0;
}
```

Untuk membuat kolom dalam mega menu, saya terapkan teknik kolom yang paling banyak digunakan (termasuk dalam framework bootstrap).

```css
.column{
    margin:0 -15px;
}
.column:after{
    content:" ";
    display:block;
    clear: both;
}
.col{
    width: 33.33333%;
    float: left;
    padding: 0 15px;
}
```

Pertama-tama kita atur wrapper untuk kolom yakni `.column`, `margin:0 -15px` memberikan ruang lebih disisi kiri-kanan agar jarak kolom didalamnya seimbang, Nilai -15px didapat dari jarak antar kolom didalamnya. Tidak lupa saya terapkan clearfix pada `.column`, karena .col akan memiliki floating.

Untuk width dari `.col` saya gunakan nilai 33.33333% nilai ini didapat dari membagi 100% menjadi 3 (3 kolom), selanjutnya saya tambahkan padding sebesar 15px untuk memberi jarak antar kolom.

Sejauh ini Mega menu anda sudah bisa digunakan. Namun saya akan sedikit mempercantik mega menu tersebut dengan menambahkan background. Silahkan download background untuk mega menu di link berikut :) :

[Download Background](/demo/megamenu/mega-bg.png)

Selanjutnya, pada .mega-menu tambahkan lagi style berikut:

```css
.mega-menu{
    background-image: url(mega-bg.png);
    background-position: 100% 100%;
    background-repeat: no-repeat;
}
```

`background-position: 100% 100%` akan menempatkan background di pojok kanan bawah mega menu.

## Kesimpulan

Seperti yang telah saya jelaskan sebelumnya, bahwa pembuatan mega menu hampir sama dengan pembuatan dropdown menu biasa, hanya saja ada penambahan class dan element yang diperlukan untuk membangun dropdown menu. Jika anda menggunakan framework css, anda bisa menggunakan grid systemnya, misalnya anda bisa menggunakan grid system dari bootstrap untuk membantu mengatur peletakan dari kolom-kolomnya.

Pada contoh kasus diatas saya hanya menambahkan konten berupa list, konten mega menu tidak terbatas pada list saja anda bisa memasukkan image, atau elemen lainnya yang anda kehendaki.
