---
title: "Bermain-main dengan CSS3 : Transition"
date: "2012-04-23"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - bermain-main-dengan-css3
  - css3
  - transition

categories: 
  - html-css
---

Dalam CSS3 kita bisa menambahkan efek transisi pada property-property css seperti width, color dan lain sebagainya agar perubahan yang terjadi terlihat begitu halus karena adanya efek transisi ini. Meskipun belum semua browser dapat menampilkan transisi dengan benar, anda sudah bisa menggunakan css3 transition ini dalam project anda.

## Property Transition

Lalu bagaimana cara menggunakan property transition ini, mari kita pelajari terlebih dahulu property-property transition ini :

- ### transition-delay
    
    property ini akan memberikan waktu delay sebelum efek transisi dimulai, nilai yang bisa diberikan memiliki satuan s (second), ms (milisecond). contoh :
    
    ```html
    
    transition-delay: 2s;
    transition-delay: 3ms;
    transition-delay: .3s; /* cara penulisan lain dari 3ms */
    ```
    

- ### transition-duration
    
    Sedangkan untuk menentukan durasi dari efek transisi akan ditentukan oleh property transition-duration. efek transisi akan berjalan selama nilai durasi yang diberikan.

- ### transition-property
    
    property ini berfungsi untuk menentukan property apa yang ingin diberi efek transisi. Anda bisa menggunakan value all untuk memberikan transisi pada seluruh property
- ### transition-timing-function
    
    property terakhir adalah timing dari transition , saya lebih suka menyebutnya dengan tipe transisi, nilai yang diberikan bisa berupa ease, ease-in, ease-out, ease-in-out;

Shorthand untuk semua property-property transition tersebut bisa ditulis seperti berikut :

```html

transition: duration delay property timing-function;
transition: 5ms 1s background ease-in;
```

Jika anda ingin memberikan transisi pada lebih dari satu property, anda tinggal menambahkan tanda koma (,) dan tuliskan kembali shorthand untuk property selanjutnya :

transition: 5ms 1s background ease-in, 3ms 0s color ease-in-out;

## Kompatibilitas

Efek transisi CSS3 ini masih belum didukung oleh setiap browser, jadi penambahan prefix untuk setiap browser masih diperlukan agar kita bisa melihat efeknya seperti :

```html

-webkit-transition: 3s background ease; /* untuk Chrome dan Safari */
-moz-transition: 3s background ease; /* untuk firefox */
-ms-transition: 3s background ease; /* untuk ie9 ke atas */
-o-transition: 3s background ease; /* untuk opera */
transition: 3s background ease; /* fallback ketika semua browser sudah mendukungnya */
```

Berikut ini adalah daftar browser yang sudah mendukung efek transisi ini :

- Google Chrome
- Safari 3.1 ke atas
- Firefox 4 ke atas
- Opera 10.5x ke atas

_sumber : w3schools_

[Demonstrasi](http://demo.ariona.net/transition/transition.html "Demonstrasi tutorial")[Download](http://demo.ariona.net/transition/transition.zip "Download Demonstrasi")

## HTML

Agar lebih memahami apa yang sedang kita bicarakan buka demonstrasi di atas, dan itulah yang akan kita buat sekarang. pertama-tama buatlah sebuah div dengan id box dan 4 div dengan class timing (dengan id berbeda).

```html

<h1>Efek Glow</h1>
Hover me, Bro!!
<h1>Perbedaan timing</h1>
ease
ease-in
ease-out
ease-in-out
```

## CSS

Terlebih dahulu, kita buat div box ini benar-benar menjadi sebuah box :)

```html

#box{
    width:200px;
    height:100px;
    background:#ddd;
    line-height:100px;
    margin:20px auto;
}
```

Selanjutnya kita tambahkan property CSS3 transition pada selector #box ini :

```html

#box{
    width:200px;
    height:100px;
    background:#ddd;
    line-height:100px;
    margin:20px auto;
    /* Pemberian transition pada box-shadow akan memberikan efek glow */    
    -webkit-transition: .3s box-shadow ease-in, .3s background ease-in;
    -moz-transition: .3s box-shadow ease-in, .3s background ease-in;
    -ms-transition: .3s box-shadow ease-in, .3s background ease-in;
    -o-transition: .3s box-shadow ease-in, .3s background ease-in;
    transition: .3s box-shadow ease-in, .3s background ease-in;
}
```

dan kita tambahkan pseudo-class pada #box ini, untuk merubah warna background ketika kita meletakkan cursor kita diatas box tersebut:

```html

#box:hover{
    box-shadow: 0 0 30px #52A7FF;
    background:white;   
}
```

Selanjutnya kita beri style untuk div dengan class timing :

```html

.timing{
    width:100px;
    padding:10px;
    background:white;
    margin:10px auto;
}   
```

Tambahkan pseudo class hover untuk merubah width dari seluruh div dengan class timing ini :

```html

.timing:hover{
    width:500px;
}
```

Dan untuk setiap id kita tambahkan property transition dengan timing function yang bersangkutan :

```html

#ease{
    -webkit-transition:.8s width ease;
    -moz-transition:.8s width ease;
    -ms-transition:.8s width ease;
    -o-transition:.8s width ease;
    transition:.8s width ease;
}
#ease-in{
    -webkit-transition:.8s width ease-in;
    -moz-transition:.8s width ease-in;
    -ms-transition:.8s width ease-in;
    -o-transition:.8s width ease-in;
    transition:.8s width ease-in;
}
#ease-out{
    -webkit-transition:.8s width ease-out;
    -moz-transition:.8s width ease-out;
    -ms-transition:.8s width ease-out;
    -o-transition:.8s width ease-out;
    transition:.8s width ease-out;
}
#ease-in-out{
    -webkit-transition:.8s width ease-in-out;
    -moz-transition:.8s width ease-in-out;
    -ms-transition:.8s width ease-in-out;
    -o-transition:.8s width ease-in-out;
    transition:.8s width ease-in-out;
}
```

Untuk mencobanya, silahkan arahkan cursor anda ke atas elemen-element tersebut.

## Kesimpulan

Property transition pada CSS3 ini sangatlah membantu untuk pemberian efek transisi pada elemen-elemen yang kita kehendaki, sehingga perubahan yang terjadi ketika suatu kondisi terpenuhi (seperti hover, active, selected) menjadi lebih halus dan tidak kaku.
