---
title: "Teknik dasar membuat Overlay"
date: "2012-12-14"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - css
  - html
  - overlay

categories: 
  - html-css
---

Overlay adalah teknik yang efektif untuk memfokuskan pengunjung pada suatu elemen tertentu dengan cara menutupi konten utama dan menampilkan konten yang menjadi fokus utama.

Jika anda belum tahu apa yang dimaksud dengan overlay disini, klik tombol berikut untuk menampilkan overlay.

[Tampilkan Overlay!](#)

[x](#)

## Teknik Dasar Membuat Overlay

Teknik Overlay sederhana, jangan berharap lebih :-). Klik tombol close di kanan atas

::: demo [vanilla]
```html
<html>
<div class="post-image">
  <a href="#" class="button green demo-overlay">Tampilkan Overlay!</a>
  <div class="overlay">
    <div class="box-overlay">
      <a href="#" class="close-button">x</a>
      <h2>Teknik Dasar Membuat Overlay</h2>
      <p>Teknik Overlay sederhana, jangan berharap lebih :-). Klik tombol close di kanan atas</p>
    </div>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
</html>
<script>
jQuery(document).ready(function(){jQuery(".close-button").click(function(e){e.preventDefault();jQuery(".overlay").fadeOut();});jQuery(".demo-overlay").click(function(e){e.preventDefault();jQuery(".overlay").fadeIn();})});
</script>
<style>
.overlay{width:100%;height:100%;position:fixed;background:rgba(0,0,0,.7);z-index:9999;top:0;left:0;display:none;}.box-overlay{width:400px;height:150px;background:white;border-radius:10px;margin:20% auto;position:relative;padding:10px;box-shadow:0 0 0 5px rgba(0,0,0,.4);text-align: center;}.close-button{width: 20px;height: 20px;background: black;border-radius: 50%;border: 3px solid white;box-shadow: 0 0 5px rgba(0, 0, 0, .7);display: block;color: white;text-align: center;text-decoration:none;position:absolute;top:-10px;right:-10px;}
</style>
` ` `
:::

Teknik pembuatannya sangat sederhana, kita hanya membuat sebuah div, lalu mengatur lebar dan tinggi menjadi 100% dan membuatnya menjadi elemen teratas. Masih belum mengerti? mari kita telaah bersama

## Markup HTML

Buatlah sebuah div untuk overlay, dan tempatkan pula konten yang ingin anda tampilkan dalam overlay seperti berikut:

```html
<div class="overlay">
  <div class="box-overlay">
    <a href="#" class="close-button">x</a>
    <h1>Teknik Dasar Membuat Overlay</h1>
    <p>Teknik Overlay sederhana, jangan berharap lebih :-). Klik tombol close di kanan atas</p>
  </div>
</div>
```

Satu div dengan class overlay, div ini berfungsi sebagai penutup seluruh konten dan sebuah div dengan class box-overlay yang akan menjadi konten yang ditampilkan ketika overlay aktif.

## CSS

Pertama, seperti yang telah saya sebutkan di atas, kita akan merubah div overlay agar menutupi seluruh konten utama situs.

```css
.overlay{
    width:100%;
    height:100%;
    position:fixed;
    background:rgba(0,0,0,.7);
    z-index:9999;
    top:0;
    left:0;
}
```

`width:100%;height:100%` pasti sudah tahu kan fungsinya. `position:fixed` membuat overlay tetap berada pada posisinya meskipun kita melakukan scrolling. `background:rgba(0,0,0,.7);` kita tambahkan background dengan teknik rgba agar kita memiliki nilai transparansi (alpha) sebesar 70%. dan terakhir adalah `z-index:9999` yang berfungsi menempatkan overlay ini di atas seluruh elemen yang ada, saya gunakan nilai 9999 karena sebagian plugin javascript (jquery) terkadang memiliki nilai sebesar itu.

Tugas Selanjutnya adalah memosisikan overlay-box supaya berada di tengah.

```css
.box-overlay{
    width:400px;
    height:150px;
    background:white;
    border-radius:10px;
    margin:20% auto;
    position:relative;
    padding:10px;
    box-shadow:0 0 0 5px rgba(0,0,0,.4);
    text-align: center;
}
```

Tak ada yang aneh bukan dengan style di atas? hanyalah style-style dasar yang digunakan. `position:relative;` saya tambahkan karena tombol close akan memiliki `position:absolute`.

Terakhir kita beri style untuk tombol closenya.

```
.close-button{
    width: 20px;
    height: 20px;
    background: black;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 0 5px rgba(0, 0, 0, .7);
    display: block;
    color: white;
    text-align: center;
    text-decoration:none;
    position:absolute;
    top:-10px;
    right:-10px;
}
```

Dari style di atas, anda juga dapat memahami penggunaan position relative dan absolute, dalam kasus ini saya terapkan untuk menempatkan posisi tombol close berada di kanan atas dan sedikit keluar dari box overlay. Pemberian `border-radius:50%` membuat link menjadi bulat. Agar kita dapat mengatur width dan height dari link maka saya tambahkan pula `display:block`.

## Javascript

Langkah terakhir adalah penambahan javascript, kita telah menambahkan tombol close namun tombol tersebut tidak dapat berfungsi sebagaimana mestinya karena HTML dan CSS tidak mempunyai kemampuan untuk hal tersebut. Dengan bantuan javascriptlah kita dapat memecahkan masalah tersebut.

Saya akan menggunakan library jQuery, jadi pastikan anda telah mendownload dan menyertakan scriptnya seperti berikut :

[http://jquery.js](http://jquery.js)

Selanjutnya sederhana saja, ketika tombol close diklik, kita akan menyembunyikan overlaynya.

```js
$(document).ready(function(){
  $(".close-button").click(function(e){
    e.preventDefault();
    $(".overlay").fadeOut();
  });
});
```

Masih bingung dengan maksud dari kode di atas, mari saya jelaskan sedikit :

`$(document).ready(function(){ ...});` memastikan bahwa script di dalamnya akan dijalankan hanya jika halaman web telah siap (berhasil diload seluruhnya). Selanjutnya saya berikan event listener click pada .close-button dengan `$(".close-button").click(function(e){ ... });`, Jadi script yang ada di dalamnya akan dijalankan hanya jika .close-button diklik, simpel bukan?.

Karena perilaku dasar dari link ketika diklik adalah membuka halaman web yang terdapat dalam atribut href, maka pertama-tama saya nonaktifkan perilaku tersebut dengan `e.preventDefault();`. Sebenarnya script ini tidak diperlukan jika tombol yang kita buat menggunakan div. namun karena kita menggunakan link (anchor), maka script ini diperlukan :).

Terakhir adalah aksi yang akan dilakukan ketika tombol close di klik. Ketika diklik maka saya sembunyikan div overlay dengan efek fadeout : `$("overlay").fadeOut();`

Lalu bagaimana jika kita ingin menampilkan overlay, ketika suatu link atau div diklik seperti yang saya lakukan pada tombol di atas (awal artikel)? Sederhana saja, tekniknya sama dengan close-button, namun anda perlu mengganti `fadeOut` menjadi `fadeIn`.

## Kesimpulan

Sesuai dengan judul, saya hanya menjelaskan teknik dasar untuk membuat overlay. Anda dapat mengembangkan fungsionalitas dari overlay tersebut sesuai dengan kebutuhan dan kemampuan anda dalam javascript. Karena kita tahu untuk menambahkan fungsionalitas dari overlay hanya bisa dilakukan dengan javascript :).
