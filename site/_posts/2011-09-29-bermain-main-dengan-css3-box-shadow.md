---
title: "Bermain-main dengan CSS3 : Box-shadow"
date: "2011-09-29"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - bermain-main-dengan-css3
  - css

categories: 
  - html-css
---

Tutorial ini merupakan bagian dari seri bermain-main dengan CSS3. Membahas berbagai property-property dari CSS3, cara penggunaannya dan contoh kasus.

- [Bermain-main dengan CSS3 Text-shadow](/bermain-main-dengan-css3-text-shadow/)
- Bermain-main dengan CSS3 Box-shadow

Property `box-shadow` hampir sama dengan [text-shadow](/bermain-main-dengan-css3-text-shadow/), hanya saja property ini digunakan untuk memberikan Shadow pada suatu element. Yup, pada dasarnya setiap element pada HTML direpresentasikan sebagai box, jadi kita bisa memberikan shadow pada elemen-elemen tersebut.

Contoh penggunaan normal box-shadow adalah seperti syntax berikut :

```css
box-shadow:offset-X offset-Y Blur-Radius Color;
```

Penjelasan masing-masing property sama dengan [text-shadow](/bermain-main-dengan-css3-text-shadow/) :), sebagai contoh penggunaan box-shadow :

```css
box-shadow: 10px 10px 5px black;
```

Anda juga dapat menggunakan beberapa shadow sekaligus (Multiple Shadow). caranya adalah dengan menambahkan koma untuk memisahkan shadow 1 dengan lainnya.

```css
box-shadow:10px 10px 5px black, -10px -10px 5px black;
```

Itulah penggunaan normal box-shadow. Dengan bantuan selector :before/:after kita bisa memanipulasi Shadow untuk membuat efek-efek tertentu. :)

[Demonstrasi](http://jsfiddle.net/yans_fied/7SVSd/5/embedded/result/ "Demontrasi")[Demo dengan Source](http://jsfiddle.net/yans_fied/7SVSd/5/ "Source")

## Persiapan

Pertama-tama kita buat terlebih dahulu empat objek(element) yang akan kita tambahkan efek shadow, beri nama class "box" dan "type1" s/d "type4.
```html
<div class="box type1">Blur</div>
<div class="box type2">Lengkung Kiri</div>
<div class="box type3">Lengkung Kanan-Kiri</div>
<div class="box type4">Lengkung Tengah</div>
```

selanjutnya kita beri style untuk box tersebut

```css
.box{
    width: 456px;
    background:-webkit-gradient(linear,0 0,0 100%,from(#2e9aef),to(#1186e3));
    color:#0b5a97;
    font-size:20px;
    font-family:Calibri,'Segoe UI',Tahoma,Arial,Sans-serif;
    height:80px;
    line-height:70px;
    margin:0 auto 30px;
    position:relative;
    text-align:center;
    text-shadow:0 1px 1px rgba(255,255,255,.3);
}
```

## Efek Blur

![Blur](/assets/img/bblur.jpg)

Efek pertama yang akan kita buat adalah efek blur. property box-shadow bisa digunakan beberapa kali (multiple shadow), jadi kalo kita menyusunnya mulai dari blur yang rendah ke yang tinggi, akan terciptalah efek blur.

```css
.type1{
-webkit-box-shadow:0 0 2px #2e9aef,
                   0 0 4px #2e9aef,
                   0 0 6px #2e9aef,
                   0 0 8px #2e9aef;
-moz-box-shadow   :0 0 2px #2e9aef,
                   0 0 4px #2e9aef,
                   0 0 6px #2e9aef,
                   0 0 8px #2e9aef;
box-shadow        :0 0 2px #2e9aef,
                   0 0 4px #2e9aef,
                   0 0 6px #2e9aef,
                   0 0 8px #2e9aef;
}
```

Penulisan tidak harus seperti di atas (garis baru) . contoh di atas agar memperjelas bahwa kita punya 4 shadow dengan tingkat blur yang berurutan.

## Efek Lengkung Kiri

![Lengkung Pinggir](/assets/img/lengkungpinggir.jpg)

Efek yang akan kita buat, tidak langsung pada elementnya melainkan pada selector Before/After (kurang paham? baca tutorial berikut Menambahkan Paper-Clip pada Elemen). triknya adalah dengan memutar selector before/after beberapa derajat .

```
.type2:before{
    bottom:5px;
    content:' ';
    height:50px;
    left:10px;
    width:40%;
    position:absolute;
    z-index:-1;
    -webkit-box-shadow:0 5px 10px rgba(0,0,0,.5);
    -moz-box-shadow:0 5px 10px rgba(0,0,0,.5);
    box-shadow:0 5px 10px rgba(0,0,0,.5);
    -webkit-transform:rotate(-2deg);
    -moz-transform:rotate(-2deg);
    transform:rotate(-2deg);
}
```

## Efek Lengkung Kiri-Kanan

![Lengkung Kiri dan Kanan](/assets/img/lengkungpinggir2.jpg)

Sudah mengerti cara buat Efek sebelumnya? yang satu ini pasti mudah, tinggal buat lagi satu shadow , sekarang pake selector :before dan :after . pertama-tama, tinggal Copy style sebelumnya pada selector :before dan :after.

```
.type3:before, .type3:after{
    bottom:5px;
    content:' ';
    height:50px;
    left:10px;
    width:40%;
    position:absolute;
    z-index:-1;
    -webkit-box-shadow:0 5px 10px rgba(0,0,0,.5);
    -moz-box-shadow:0 5px 10px rgba(0,0,0,.5);
    box-shadow:0 5px 10px rgba(0,0,0,.5);
    -webkit-transform:rotate(-2deg);
    -moz-transform:rotate(-2deg);
    transform:rotate(-2deg);
}
```

nah, untuk yang lengkungan sebelah kanan, tambahkan style berikut :

```
.type3:after{
    right:10px;
    -webkit-transform:rotate(2deg);
    -moz-transform:rotate(2deg);
    transform:rotate(2deg);
}
```

## Efek Lengkung Tengah

![Lengkeung Tengah](/assets/img/lengkungtengah.jpg)

Shadow yang terakhir adalah efek ilusi kertas yang melengkung ke atas. triknya simple, tinggal menggunakan properti border-radius:

```
.type4:after{
    width:80%;
    height:20px;
    -webkit-border-bottom-left-radius:50% 10px; /* Memberikan efek lengkung panjang */
    -webkit-border-bottom-right-radius:50% 10px;
    -moz-border-radius-bottomleft:50% 10px; /* Memberikan efek lengkung panjang */
    -moz-border-radius-bottomright:50% 10px;
    border-bottom-left-radius:50% 10px; /* Memberikan efek lengkung panjang */
    border-bottom-right-radius:50% 10px;
    left:5%;
    bottom:0;
    z-index:-1;
    -webkit-box-shadow:0 5px 10px rgba(0,0,0,.5);
    -moz-box-shadow:0 5px 10px rgba(0,0,0,.5);
    box-shadow:0 5px 10px rgba(0,0,0,.5);
}
```

## Kesimpulan

Property Box-shadow dapat memiliki lebih dari satu value (shadow), kita dapat menggunakannya untuk membuat efek-efek ilusi yang bagus seperti di atas. Untuk property CSS3 seperti, border-radius, Transform dan Text-shadow bisa anda pelajari posting yang saya sebutkan sebelumnya.
