---
title: "Bermain-main dengan CSS3 : Gradient"
date: "2012-11-26"
author: Ariona Rian
email: helloariona@gmail.com
---

Dalam CSS3 anda memiliki kemampuan untuk membuat background dengan gradasi warna (color gradient) sehingga anda tidak perlu lagi berurusan dengan gambar untuk masalah gradient ini.

CSS3 gradient ini belum didukung oleh setiap browser secara penuh, jadi kita harus menambahkan prefix untuk masing-masing browser.

Ada 4 tipe gradient yang bisa digunakan, yakni
- Linear Gradient
- Radial Gradient
- Repeating Linear Gradient, dan
- Repeating Radial Gradient.

> Setiap contoh gradient dapat diresize dengan mendrag ujung kanan bawah kotak

## Linear Gradient

Tipe gradasi warna ini terdiri dari dua atau lebih susunan warna dan disusun secara lurus (Linear). Syntax dasarnya seperti berikut :

```css
background-image:linear-gradient(titik-awal/derajat, warna1, warna2, warna-n);
```

Contoh :
```css
background-image:linear-gradient(to bottom, #FF0000, blue)
```

<textarea class="boxdemo" id="sampel1" style=""></textarea>

```css
background-image:linear-gradient(45deg, red, blue);
```

Jika anda perhatikan dalam syntax dasarnya andapun dapat memberikan 3 warna lebih sekaligus.
```css
background-image:linear-gradient(left, red,orange,yellow,lime,green,blue);
```

<textarea id="sampel3" class="boxdemo"></textarea>

## Radial Gradient

Tipe radial gradient akan membentuk gradasi warna dengan tipe lingkaran (radial), syntax nya hamipir sama dengan linear gradient, anda cukup menggantik kata linear menjadi radial. dan ada juga nilai tambahan untuk radial gradient ini.

```css
background-image:radial-gradient(posisi,bentuk-radial ukuran,warna1,warna2,warna-n);
```

contoh sederhana (posisi, warna,warna) :

```css
background-image:radial-gradient(center,red,blue)
```

<textarea id="sampel4" class="boxdemo"></textarea>

Contoh radial gradient dengan bentuk radial dan ukuran (posisi, bentuk ukuran,warna,warna)

```css
radial-gradient(top left,circle farthest side,red,blue)
```

<textarea id="sampel5" class="boxdemo"></textarea>

Untuk nilai bentuk anda bisa menggunakan nilai circle dan ellipse. sedangkan untuk ukuran (size) anda dapat menggunakan nilai-nilai berikut : (`closest-side, closest-corner, farthest-side, farthest-corner, contain, cover`. Silahkan untuk bereksperimen dengan nilai-nilai tersebut dan perhatikan perbedaannya.

## Color Stop
Ketika anda ingin menggunakan 3 warna lebih dan ingin menentukan sampai mana warna tersebut digunakan, anda bisa menambahkan color stop dengan menambahkan nilainya setelah warna.

```css
linear-gradient(left,red 20%,green 50%,yellow 95%, blue 100%);
```

<textarea id="sampel8" class="boxdemo"></textarea>

Selain menentukan color-stop dengan nilai persen, anda pun dapat menggunakan satua pixel jika ingin lebih detail.

## Repeating Linear dan Repeating Radial Gradient

Jika gradient biasa hanya membuat satu kali gradasi warna, maka repeating-linear-gradient dan repeating-radial-gradient akan membuat gradasi berulang. Syntaxnya tidak jauh berbeda dengan dua tipe gradient sebelumnya, namun hanya berbeda dalam penamaannya (ditambahkan repeating-). Penggunaan repeating gradient harus menyertakan color-stop.

Contoh repeating-linear-gradient :

```css
repeating-linear-gradient(left,green 10%,yellow 10%)
```

<textarea id="sampel6" class="boxdemo"></textarea>

contoh repeating-radial-gradient :

```css
repeating-radial-gradient(center,green 10%,yellow 10%)
```

<textarea id="sampel7" class="boxdemo"></textarea>

## Bereksperimen dengan CSS3 Gradient

Sudah sangat banyak eksperimen yang melibatkan fitur CSS3 Gradient ini, seperti dalam pembuatan user interface, pattern dan lain sebagainya. dan kali ini kita akan bereksperimen untuk membuat taskbar-nya windows XP. masih ingat bagaimana rupanya?

<h3>Markup HTML</h3>
Pertama-tama kita siapkan dulu markup HTMLnya, markupnya sederhana saja :

```html
<div id="taskbar">
    <div id="start">
        <img src="flag.png" alt="start" width="16" height="16"><span>start</span>
    </div>
    <div id="notification">9:23 AM</div>
</div>
```

Kita hanya akan bereksperimen dengan membuat ulang taskbar windows XP dengan bantuan CSS3 Gradient. Jadi kita lebih fokus pada taskbarnya saja :).

<h3>CSS</h3>
Pertama-tama kita akan memberi style untuk taskbar utamanya, tidak lupa saya tambahkan juga CSS Reset untuk margin dan padding dan menentukan font-family.

```css
*{margin:0;padding:0;}
html{height:100%;)
body{
    font-family:arial,sans-serif;
    background-image:url(bliss.bmp);
    background-size:100% 100%;
    height:100%;
}
#taskbar{
    position:absolute;
    bottom:0;
    width:100%;
    height:30px;
    background:-webkit-linear-gradient(
        #3168D5 0%,
        #4993E6 10%,
        #245DD7 15%,
        #2663E0 80%,
        #235BD9 95%,
        #1941A5 100%
    );
    color:white;
}

```

Untuk body saya beri background default windows XP yakni bliss.bmp. kemudian saya atur ukuran backgroundnnya menjadi 100% untuk width dan heightnya sehingga background menjadi _Stretch_/mengikuti ukuran body.

Perhatikan bahwa saya hanya menuliskan CSS3 Gradient untuk browser webkit dengan teknik color stop. Anda dapat menambahkan prefix lainnya seperti -moz-,-ms- dan -o-. Warna-warna tersebut saya dapatkan dari sampling warna windows XP aslinya menggunakan photoshop :).

Selanjutnya kita beri style untuk tombol startnya.

```css
#start{
    cursor:pointer;
    float:left;
    height:20px;
    padding:5px 10px;
    width:75px;
        
    
    background:-webkit-linear-gradient(
        #388438 0%,
        #8FBF8F 10%,
        #74B375 15%,
        #47AB47 80%,
        #45A545 95%,
        #307443 100%
    );
            
    border-top-right-radius:8% 35% ;
    border-bottom-right-radius:8% 35%;
    box-shadow: inset -3px -2px 10px rgba(31,97,31,.9),0 3px 3px rgba(255,255,255,.3);
    color:white;
    font-style:italic;
    font-weight:bold;
    font-size:18px;
    text-shadow:0 1px 3px rgba(0,0,0,.8);
    
}

#start img{margin-right:10px;}
```

Untuk lengkungan yang terdapat dalam tombol start, saya gunakan CSS3 Border-radius (artikelnya bisa dibaca disini [/bermain-main-dengan-css3-border-radius/](/bermain-main-dengan-css3-border-radius/). Untuk nilainya saya <em>try and error</em> dan mendapatkan nilai yang pas untuk membuat lengkungan yang terlihat seperti tombol start windows XP.

Bagian selanjutnya yang akan kita beri style adalah area notification yang terdapat di sebelah kanan layar. Berikut ini adalah style yang diberikan.

```css
#notification{
    float:right;
    height:10px;
    padding:10px;
    border-left:1px solid #0C2B50;
    font-size:11px;
    background:-webkit-linear-gradient(
        #16AEF0 0%,
        #19B9F3 10%,
        #1187E4 15%,
        #0D9AEF 80%,
        #1393E5 95%,
        #095BC9 100%
    );
    box-shadow:inset 2px 0 3px rgb(25,185,243);
}

```

Selesai, silahkan coba buka dan replika taskbar windows XP pun berhasil dibuat tanpa bantuan gambar satupun ( kecuali icon :) ).

![](/assets/img/xpincss.png)

## Kesimpulan

Eksperimen di atas (membuat taskbar windows xp) hanyalah sebagian kecil dari implementasi CSS3 Gradient dalam pembuatan user interface, selebihnya anda dapat menggunakan CSS3 Gradient pada project anda dan mengurangi penggunaan gambar untuk penanganan masalah gradient. Pada dasarnya CSS3 gradient ini memerintahkan browser untuk membuat gambar gradient dan menerapkannya, meskipun demikian penggunaan CSS3 Gradient lebih dianjurkan dibandingkan menggunakan file gambar (terkecuali jika gradasinya sangat kompleks dan tidak bisa ditangani oleh css3 gradient).

Sumber : [https://www.webkit.org/blog/1424/css3-gradients/](https://www.webkit.org/blog/1424/css3-gradients/)