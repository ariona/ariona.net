---
title: "Bermain-main dengan CSS3 : Transform"
date: "2012-10-25"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - bermain-main-dengan-css3
  - css
  - css3
  - html
  - rotate
  - scale
  - transform
  - translate

categories: 
  - html-css
---

Kembali melanjutkan seri bermain-main dengan CSS3, kini kita akan bermain-main dengan property CSS3 Transform. Property ini dapat memiliki beberapa value seperti scale, translate, rotate.

## Penggunaan Dasar CSS3 Transform

Untuk menggunakan property ini, kita masih harus menggunakan prefix karena pada beberapa browser property transform masih belum stabil/bahkan tidak ada.

```
-webkit-transform : fungsiTransform(nilai);
-moz-transform : fungsiTransform(nilai);
-ms-transform : fungsiTransform(nilai);
-o-transform : fungsiTransform(nilai);
transform : fungsiTransform(nilai);
```

Secara default, titik transformasi berada tepat di tengah-tengah elemen, anda masih bisa merubahnya dengan property `webkit-transform-origin`, contoh :

```
-webkit-transform-origin : 0 0;
-moz-transform-origin : 0 0;
-ms-transform-origin : 0 0;
-o-transform-origin : 0 0;
transform-origin : 0 0;
```

Nilai pertama adalah nilai untuk x dan kedua adalah nilai untuk y. Pada contoh di atas kita menentukan titik transform pada (0,0) atau di ujung kiri atas suatu elemen.

## Fungsi-fungsi dalam CSS3 Transform

Dalam property `transform` kita bisa menambahkan berbagai macam fungsi transformasi objek, seperti scale, rotate, translate.

### Scale

Fungsi scale akan merubah ukuran suatu elemen berdasarkan skala. Ukuran normal dari elemen adalah 1, untuk mengecilkan elemen anda bisa gunakan nilai dibawahnya dan untuk memperbesar anda bisa menggunakan nilai di atasnya.

```
transform: scale(2);
```

![CSS Transform scale](/assets/img/scale.gif)

CSS3 Transform scale untuk memperbesar/memperkecil element

> Agar tidak terlalu panjang, saya tulis property tanpa prefixnya, pada prakteknya nanti anda juga harus menyertakan property yang menggunakan prefixnya juga.

Pada contoh di atas kita merubah ukuran elemen menjadi dua kali lipat. Contoh lainnya :

```
transform: scale(0.5);
```

### Translate

Fungsi translate berfungsi untuk memindahkan objek ke posisi yang anda inginkan.

```
transform: translate(20px, 50px);
```

![CSS transform translate](/assets/img/translate.gif)

Memosisikan element dengan transform translate

kode di atas akan memindahkan elemen sejauh 20px dari kiri (x), dan 50px dari atas (y). Jika anda hanya ingin memindahkan objek secara horizontal saja atau secara vertikal, anda dapat menggunakan fungsi translateX, translateY dan translateZ (translateZ akan memindahkan objek ke depan --3D).

```
transform: translateY(50px);
```

### Rotate

Sesuai dengan artinya, rotate akan memutar elemen sesuai dengan derajat yang diberikan. Nilai untuk fungsi ini memiliki satuan _deg_, nilai positif akan memutar elemen searah jarum jam, dan nilai negatif akan memutarnya berlawanan arah jarum jam.

```
transform: rotate(20deg);
```

![CSS Transform Rotate](/assets/img/rotate.gif)

Memutar object dengan fungsi rotate

Fungsi pada contoh di atas hanya untuk memutar objek secara 2D, Anda juga bisa memutar elemen secara 3D dengan menggunakan rotateX (memutar elemen pada sumbu X) dan rotateY (memutar elemen pada sumbu Y).

```
transform: rotateX(360deg);
```

dan

```
transform: rotate Y(15deg);
```

![](/assets/img/rotate3d.jpg)

Memutar Object secara 3d

## Latihan

Sebagai latihan, kita akan membuat beberapa elemen dan menerapkan apa yang telah anda baca di atas. Pertama-tama buatlah markup HTML seperti berikut :

```
<div id="scale" class="box">Scale</div>
<div id="translate" class="box">Translate</div>
<div id="rotate" class="box">Rotate</div>
<div id="rotatex" class="box">RotateX</div>
<div id="rotatey" class="box">RotateY</div>
```

Lalu kita akan terapkan satu persatu property transform pada state hover sesuai dengan id elemen :

```
.box{
    width:100px;
    height:100px;
    background:#3399ff;
    margin:20px;
    color:white;
    text-align:center;
    line-height:50px;
    float:left;
    font-family:calibri,sans-serif

    /* penambahan transition baca tutorialnya disini */
    -webkit-transition:-webkit-transform .5s ease; 
    -moz-transition:-moz-transform .5s ease; 
    -ms-transition:-ms-transform .5s ease; 
    -o-transition:-o-transform .5s ease; 
    transition:transform .5s ease; 
}

#scale:hover{
    -webkit-transform:scale(2);
    -moz-transform:scale(2);
    -ms-transform:scale(2);
    -o-transform:scale(2);
    transform:scale(2);
}
#translate:hover{
    -webkit-transform:translate(20px, 30px);
    -moz-transform:translate(20px, 30px);
    -ms-transform:translate(20px, 30px);
    -o-transform:translate(20px, 30px);
    transform:translate(20px, 30px);
}
#rotate:hover{
    -webkit-transform:rotate(360deg);
    -moz-transform:rotate(360deg);
    -ms-transform:rotate(360deg);
    -o-transform:rotate(360deg);
    transform:rotate(360deg);
}
#rotatex:hover{
    -webkit-transform:rotateX(360deg);
    -moz-transform:rotateX(360deg);
    -ms-transform:rotateX(360deg);
    -o-transform:rotateX(360deg);
    transform:rotateX(360deg);
}
#rotateY:hover{
    -webkit-transform:rotateY(360deg);
    -moz-transform:rotateY(360deg);
    -ms-transform:rotateY(360deg);
    -o-transform:rotateY(360deg);
    transform:rotateY(360deg);
}
```

## Menggabungkan seluruh fungsi dari CSS3 Transform

Anda juga dapat menggabungkan seluruh fungsi transformasi seperti contoh berikut :

```
transform:scale(2) rotateY(360deg) translate(20px, 30px);
```

Berikut ini adalah demonstrasi dari seluruh kode di atas.

https://codepen.io/ariona/pen/QXNVag

## Kesimpulan

Dengan adanya property transform, anda dapat memanipulasi elemen HTML dengan lebih leluasa, bahkan anda dapat menambahkan efek-efek transformasi yang keren (tergantung dari kreatifitas anda).

## Referensi

Berikut beberapa referensi untuk informasi lebih lanjut

- [https://developer.mozilla.org/en-US/docs/Web/CSS/CSS\_Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms)
- [https://css-tricks.com/almanac/properties/t/transform/](https://css-tricks.com/almanac/properties/t/transform/)
