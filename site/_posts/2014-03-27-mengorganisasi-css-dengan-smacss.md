---
title: "Mengorganisasi CSS dengan SMACSS"
date: "2014-03-27"
thumbnail: /assets/img/thumbnail.jpg
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - css
  - sass
  - smacss

categories: 
  - html-css
---

Semakin sering Anda berurusan dengan CSS Anda akan menyadari betapa tidak terorganisasinya kode CSS yang anda ketikkan selama ini, terkadang ada beberapa rule yang saling timpang tindih dan kurang efektif, disaat itu juga Anda akan berinisiatif untuk mengorganisasi kode CSS dan pendekatan SMACSS bisa digunakan untuk memecahkan masalah tersebut.

SMACSS bukanlah bahasa baru melainkan pendekatan untuk mengorganisasi kode CSS sesuai dengan kategorinya. SMACSS sendiri merupakan kependekan dari Scalable and Modular Architecture for CSS, dikenalkan oleh Jonathan Snook. Anda bisa mendownload ebook mengenai pembahasan di situs officialnya smacss.com.

Saya sendiri sering mengalami hal tersebut, merasa kode CSS yang diketikkan selama ini tidak beraturan dan kadang sering berinisiatif untuk mengorganisasinya namun hasilnya kurang memuaskan, pada akhirnya kode CSSnya berantakan kembali :) .

Pada dasarnya SMACSS menganjurkan untuk memecah kode CSS kedalam beberapa kategori. kategori-kategori tersebut antara lain adalah : Base, Layout, Module, State dan Theme.

## Base

Kategori ini berisi kode CSS yang berurusan dengan bagaimana tag-tag HTML standar ditampilkan, seperti reset.css, normalize.css atau lainnya. kode-kode CSS tersebut bertanggung jawab untuk memberikan style default/awal pada tag-tag/elemen-elemen HTML. Dalam kategori ini tidak ada penggunakan class dan id, hanya tag selector yang digunakan seperti berikut:

```html
p{...}
a{...}
ul,ol{...}
article,section,aside,footer,video,audio, ... {...}
```

Saya sendiri biasa menempatkan file [normalize.css](http://necolas.github.io/normalize.css/ "Normalize CSS") yang dibuat oleh bang Nicolas Gallagher dalam kategori ini :) dan jika saya punya style sendiri untuk tampilan default dari tag selector saya masukkan juga ke dalam kategori ini.

## Layout

Kategori ini berisi style untuk pengaturan tata letak dari elemen web, misalnya tata letak header, content, sidebar, footer. Dalam kategori ini baru diperbolehkan penggunaan id/class selector untuk pemberian style. misalnya seperti berikut :

```html
.wrapper{
   width:960px;
   margin:0 auto;
}
article{
   width:60%;
   float:left;
}
aside{
   width:40%;
   float:right;
}
```

## Module

Anda pasti menyadari terkadang ada beberapa elemen dalam desain web anda yang dapat digunakan beberapa kali. Misalnya kalau dalam wordpress terdapat widget, widget ini bisa digunakan atau ditempatkan diberbagai lokasi yang tersedia. atau misalnya elemen seperti slider, carousel, comment, ads. Kategori ini berisi style dari elemen-elemen web tersebut, dan elemen tersebut disebut dengan module. Anda harus mempertimbangkan kembali bagaimana module tersebut kita beri style, agar module tersebut dapat digunakan dilokasi yang berbeda tanpa harus merubah/menambahkan style yang berbeda.

sebagai contoh, berikut ini adalah style untuk module slider :

```html
.slider{
    position:relative;
    width:100%;
    overflow:hidden;
}
.slider .slider-item{
   width:100%;
   float:left;
}

...
```

Jika diperhatikan, pada style module slider saya menggunakan width:100% ini dimaksudkan agar module slider ini bisa masuk kemana saja, tidak haya pada halaman homepage yang memiliki layout lebar melainkan pada sidebar/footer yang memiliki ruang yang relatif lebih kecil.

Jadi perlu dipikirkan kembali bagaimana agar module tersebut menjadi lebih flexible tanpa terikat dimana lokasi dari module tersebut seperti contoh berikut :

```html
#content .slider{ ... }
#content .slider .slider-item{ ... }
```

Contoh diatas akan mengurangi flexibilitas dari module slider yang hanya bisa digunakan dalam div/elemen dengan id #content :)

## State

Kategori ini diisi dengan berbagaimacam state dari module. Misalnya state ketika overlay aktif atau tidak aktif. Semua yang berhubungan dengan state yang merubah sifat dari module/elemen sesuai dengan keadaan dikelompokkan dalam kategori ini. perhatikan contoh berikut:

```
.overlay.is-active{ display:block }
```

contoh diatas merupakan style yang diberikan pada .overlay ketika .overlay tersebut memiliki class .is-active.

## Theme

Pernah melihat web yang dapat dikustomisasi? seperti warna teks, background atau lainnya? web tersebut menggunakan style yang berbeda untuk melakukan hal tersebut, dan terkadang menggunakan class-class tertentu. Dalam kategori ini diisi dengan style-style yang berhubungan dengan theming dari web. Jika anda memiliki berbagai macam variasi warna yang diterapkan, masukkan style-style tersebut ke dalam kategori ini.

```html
.night{ background:#333 }
.night h1{ 
    color:#efefef;
    text-shadow:0 1px 1px rgba(0,0,0,.6); 
}
```

Contoh diatas merupakan theme untuk mode malam seperti yang digunakan dalam situs ini. jadi ketika container atau body memiliki class .night maka beberapa element yang bersangkutan berubah sesuai dengan style yang telah didefinisikan.

## Bagaimana cara penerapannya?

Lalu bagaimana cara penerapannya dalam kasus sehari-hari? Kini penulisan kode CSS semakin mudah dan flexible dengan adanya CSS Preprocessor seperti LESS atau SASS. Belum pernah dengar CSS Preprocessor? saya telah menulis artikel yang membahas hal tersebut dalam [Mengenal CSS Preprocessors dan SASS](/mengenal-css-preprocessors-dan-sass/ "Mengenal CSS Preprocessors dan SASS").

Dalam SASS misalnya anda dapat memecah kode CSS anda ke dalam beberapa file dan menggabungkannya kembali menggunakan directive @import. Jadi anda dapat membuat beberapa file Sass sesuai dengan fungsinya.

sass/ 
| 
|– base/ 
|   |– \_reset.scss       # Reset/normalize 
|   |– \_typography.scss  # Typography rules 
|   ...                  # Etc… 
| 
|– components/ 
|   |– \_buttons.scss     # Buttons 
|   |– \_carousel.scss    # Carousel 
|   |– \_cover.scss       # Cover 
|   |– \_dropdown.scss    # Dropdown 
|   |– \_navigation.scss  # Navigation 
|   ...                  # Etc… 
| 
|– helpers/ 
|   |– \_variables.scss   # Sass Variables 
|   |– \_functions.scss   # Sass Functions 
|   |– \_mixins.scss      # Sass Mixins 
|   |– \_helpers.scss     # Class & placeholders helpers 
|   ...                  # Etc… 
| 
|– layout/ 
|   |– \_grid.scss        # Grid system 
|   |– \_header.scss      # Header 
|   |– \_footer.scss      # Footer 
|   |– \_sidebar.scss     # Sidebar 
|   |– \_forms.scss       # Forms 
|   ...                  # Etc… 
| 
|– pages/ 
|   |– \_home.scss        # Home specific styles 
|   |– \_contact.scss     # Contact specific styles 
|   ...                  # Etc… 
| 
|– themes/ 
|   |– \_theme.scss       # Default theme 
|   |– \_admin.scss       # Admin theme 
|   ...                  # Etc… 
| 
|– vendors/ 
|   |– \_bootstrap.scss   # Bootstrap 
|   |– \_jquery-ui.scss   # jQuery UI 
|   ...                  # Etc… 
| 
| 
\`– main.scss             # primary Sass file 

Yang anda lihat diatas merupakan contoh penerapan dari SMACSS.

## Haruskah saya menerapkan SMACSS?

SMACSS bukanlah aturan baku yang dikeluarkan oleh W3C, SMACSS hanyalah pendekatan untuk mengorganisasikan kode CSS anda agar lebih mudah diatur, dipahami dan mudah untuk di-maintenace. Jika anda merasa pendekatan ini menguntungkan apa salahnya diterapkan? :) . Menurut saya pendekatan ini sangatlah bermanfaat untuk mengorganisasi kode CSS, terkadang saya sendiri tidak dapat mengorganisasi kode CSS dengan baik yang imbasnya pada penggunakan rule yang saling timpang tindih, saling override dan tentu saja tidak efektif. SMACSS berusaha meminimalisir hal tersebut dengan mengelompokkan style ke dalam beberapa kategori.

Saya sendiri baru menerapkannya akhir-akhir ini dan terkadang masih bingung dengan dimana saya harus menempatkan kode CSS saya? apakah masuk ke dalam kategori base, layout, module atau kategori apa? :), kita perlu memikirkan kembali kode CSS dan terkadang Markup HTML kita, memikirkan kembali penggunaan ID/Class yang tepat. Memang agak ribet tapi pada akhirnya kita akan merasakan manfaatnya nanti.

## Referensi

[http://smacss.com/](http://smacss.com/ "SMACSS official site") [http://www.sitepoint.com/architecture-sass-project/](http://www.sitepoint.com/architecture-sass-project/ "Architecture Sass Project") [Introduction to SMACSS: Categorising CSS Rules](http://www.youtube.com/watch?v=nI6zrpmxqcE "Introducing to SMACSS: Categorising CSS Rules")
