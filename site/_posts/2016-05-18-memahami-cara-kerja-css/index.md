---
title: "Memahami Cara Kerja CSS"
date: "2016-05-18"
thumbnail: ./images/thumbnail.jpg
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - css
  - css-specificity

categories: 
  - html-css
  - tutorial
---

Mungkin anda sudah tahu apa fungsi dasar dari CSS. Fungsi utama dari css sebagaimana yang telah kita ketahui adalah mengatur tampilan dari dokumen HTML. Tapi sudah tahukah anda cara kerja dari CSS? atau maksud dari istilah Cascade dalam CSS itu sendiri?

Pada artikel ini kita akan mencoba menggali lebih dalam tentang CSS, memahami apa yang dimaksud cascade dan bagaimana cara kerja CSS. Dengan memahami cara kerja CSS diharapkan kita bisa menulis style untuk HTML kita secara lebih efisien.

## Maksud Cascade dalam CSS

Seperti yang telah kita pelajari dari berbagai media, CSS adalah kependekan dari Cascading Stylesheet. Namun kadang, jarang ada yang menjelaskan apa maksud dari Cascading itu sendiri. Biasanya CSS hanya dijelaskan sebagai file untuk mengatur tampilan HTML.

Cascade jika diartikan ke dalam bahasa indonesia bisa berarti air terjun kecil (kata benda), atau dalam bentuk kerja berarti _mengalir ke bawah_. Hanya dengan mengetahui artinya saja tidak cukup untuk mengetahui maksudnya bukan? Percaya deh, saya juga pernah _translate_ arti dari Cascade dan setelah tau artinya masih belum tahu kaitannya dengan CSS :D .

Cascade ini berkaitan dengan Cara kerja dari CSS itu sendiri dalam menerapkan style kedalam HTML. Perhatikan contoh berikut:

Jika saya memiliki sebuah tag html, misalnya tag a.

```html
<a href="http://example.com">Hyperlink</a>
```

Dan dalam CSS kita memiliki rule berikut:

```css
a{
    font-weight: bold;
    font-size: 14px;
}

a{
    font-size: 18px;
}
```

Pertanyaan pertama adalah berapa ukuran font dari link sekarang? Jawabannya adalah 18px. Karena pada rule untuk a yang terakhir kita mengatur font-size menjadi 18px. So, bisa kita simpulkan kalau rule yang dipilih adalah rule yang terakhir.

Kalau rule yang dipilih adalah rule yang dideklarasikan terakhir, lalu kenapa fontnya masih tebal? padahal kita tidak mengatur font-weight pada Rule Terakhir?

Ini disebabkan oleh Sifat dasar dari CSS, yakni Cascade. Artinya setiap rule yang telah dideklarasikan akan terus mengalir kebawah, selama kita tidak merubah nilai dari rule tersebut. So, pada deklarasi rule terakhir, a akan mewarisi rule sebelumnya juga.

Sampai sini mungkin sudah ada bayangan bukan maksud dari Cascade? Setiap rule yang kita deklarasikan, akan terus mengalir/diterapkan kebawah selama tidak ada rule yang merubahnya.

Dari bagian ini mungkin anda juga mulai mengetahui cara kerja CSS. Yakni, setiap rule yang ditulis lebih akhir, adalah rule yang akan dipilih oleh browser untuk diterapkan. Benar gak sih?

## CSS Specificity

Dari bagian sebelumnya, bisa kita tarik kesimpulan bahwa rule yang dideklarasikan lebih akhir adalah rule yang akan diterapkan. Pernyataan tersebut tidak sepenuhnya benar.

Pemilihan style yang akan diterapkan juga berdasarkan _CSS Specificity Score_. Istilah apa lagi tuh?

Tahukan anda setiap tipe selector memiliki nilai yang berbeda? dan gabungan nilai tersebutlah yang akan dijadikan pertimbangan apa rule tersebut akan digunakan atau tidak.

Berikut ini adalah tabel Nilai dari masing-masing tipe selector

Tipe Selector | Poin | Contoh
--- | --- | ---
Style Attribute | 1000 | `<em style="color:red;">...</em>`
ID | 100 | `#test`
Class, Pseudo-Class, attribute selector | 10 | `.test:hover / a[href]`
Tag/Element, Pseudo-class | 1 | a, :after

Perhatikan Contoh berikut, Jika saya punya sebuah link, dengan class button:

```html
<a href="http://example" class="button">Ini link</a>
```

Dan saya punya style seperti berikut:

```css
.button{ background: green; }
.button{ background: yellow; }
```

Apa warna dari button tersebut? Jawabannya adalah kuning, karena pada aturan awal, rule yang ditulis paling akhir yang akan dipilih.

Sekarang saya rubah stylenya menjadi seperti berikut:

```css
a.button{ background: green; }
.button{ background: yellow; }
```

Warna apa yang muncul sekarang? warna yang akan digunakan adalah hijau? kenapa demikian? padahal diakhir kita deklarasinya warnanya jadi kuning?

Ini dikarenakan Jumlah score dari selector pertama lebih besar dari yang terakhir. Nilai dari selector pertama adalah 11:

```
a        =  1
.button  = 10
----------------+
jumlah   = 11
```

Sedangkan selector ke dua hanya .button hanya 10. 11 lebih besar dari 10 dan tentunya 11 akan menang dan akan digunakan oleh browser.

Dari kasus ini bisa kita tarik kesimpulan:  
1. Jika Poin dari selector sama, makan deklarasi yang terakhir yang akan dipilih.  
2. Poin selector yang lebih besar akan dipilih.

Kita coba contoh kasus lain:

```css
input{
  background-color: transparent;
}
#contact-form .control input{
  background-color: white;
}
```

Pada contoh diatas sudah bisa kita tebak kalau rule terakhir yang akan dipakai. Selain poin selectornya lebih besar, selector yang digunakan juga lebih **Spesifik**. Spesifik disini berarti kita memiliki element secara lebih specifik ( pilih input yang ada dalam .control yang ada di dalam #contact-form ).

_So_, ketika anda mendengar istilah CSS Specificity maka istilah tersebut mengacu pada seberapa spesifik selector yang digunakan dalam rule CSS.

## Contoh Perhitungan CSS Pecificity

Berikut ini adalah table contoh perhitungan selector poin untuk menguji pengetahuan anda.

Selector | Poin | Uraian
-- | -- | --
* { } | 0 |
li { } | 1 | one element
li:first-line { } | 2 | one element, one pseudo-element
ul li { } | 2 | two elements
ul ol+li { } | 3 | three elements
h1 + *[rel=up] { } | 11 | one attribute, one element
ul ol li.red { } | 13 | one class, three elements
li.red.level { } | 21 | two classes, one element
style="" | 1000 | one inline styling
p { } | 1 | one HTML selector
div p { } | 2 | two HTML selectors
.sith | 10 | one class selector
div p.sith { } | 12 | two HTML selectors and a class selector
\#sith | 100 | one id selector
body #darkside .sith p { } | 112 | HTML selector, id selector, class selector, HTML selector; 1+100+10+1

_Table dikutip dari smashing magazine_

## Pentingnya Pengetahuan CSS Specificity

Memahami akan cara kerja dari CSS dan konsep dari CSS Specificity akan sangat membantu anda dalam menyelesaikan masalah tertentu dalam CSS.

Pernahkan anda mengerjakan sebuah projek, menerapkan style tapi style tersebut tak kunjung jalan sesuai keinginan kita. Pada akhirnya anda menggunakan deklarasi `!important`.

Tapi tahukan anda, bahwa **cara tersebut tidak direkomendasikan?** Penggunakan `!important` memang dapat mengoverride (menimpah) style sebelumnya, tapi pada akhirnya jika Anda atau Developer lain ingin merubahnya maka harus main `!important` lagi, dan ujung-ujungnya perang `!important` :D.

Cara untuk meyelesaikan permasalahan tersebut adalah, pertama, cari sumber style yang ingin kita rubah/override. Perhatikan selectornya.

Jika anda memahami CSS Specificity dan Scoring maka anda tinggal membuat selector yang lebih specifik dari style sebelumnya.

Contoh style bawaan:

```css
#contact-form .control input{ background-color: transparent; }
```

Tanpa bermain dengan !important, Anda tinggal menggunakan selector yang lebih spesifik, seperti menambahkan selector tag, menambahkan selector containernya, menambahkan selector body atau apalah. Intinya kita berusaha agar Poin dari selector kita lebih besar :)

```css
form#contact-form .control input{ background-color: #fefefe; }
```

Poin deklarasi asalnya adalah `100+10+1 = 111`, sedangkan punya kita, setelah ditambahkan tag form didepat #contact-form maka poinnya menjadi `112 = 1+100+10+1`.

* * *

Pemahaman akan CSS Selector ini juga bisa dijadikan acuan untuk penulisan Style yang lebih efisien. Contohnya, tulislah style-style global dibagian atas, sebelum menulis style yang lebih spesifik lagi. Dengan demikian setiap style akan menggunakan style global terlebih dahulu sebelum menggunakan style yang lebih spesifik.

```css
a{
    color: blue;
}

a.button{
    border: 1px solid #e3e3e3;
    color: #e3e3e3;
}

a.button.button-primary{
    border-color: blue;
    color: white;
}
```

## Kesimpulan

Cascading dalam CSS berarti setiap rule yang dideklarasikan akan terus diterapkan pada rule-rule dibawahnya selama tidak ada rule yang merubahnya. Merubah setiap rule CSS bisa dilakukan dengan urutan penulisan CSS, atau penulisan selector yang lebih spesifik.

Karena sifat dasar dari CSS ini sering dilupakan oleh para developer web, maka tidak sedikit style-style yang ditulisnya tidak efisien. Maka dari itu sekarang banyak metodologi-metodologi dalam penulisan CSS agar style yang kita tulis lebih efisien. Metodologi tersebut juga tidak lepas dari penerapan konsep CSS Spesificity.

Pada artikel selanjutnya, saya coba jelaskan beberapa metodology CSS yang sering digunakan untuk mengatur penulisan file CSS.

## Referensi Lainnya

1. [https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/](https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/)
2. [https://www.smashingmagazine.com/2010/11/the-important-css-declaration-how-and-when-to-use-it/](https://www.smashingmagazine.com/2010/11/the-important-css-declaration-how-and-when-to-use-it/)
3. [http://www.snook.ca/archives/html\_and\_css/understanding\_c/](http://www.snook.ca/archives/html_and_css/understanding_c/)
4. [https://css-tricks.com/when-using-important-is-the-right-choice/](https://css-tricks.com/when-using-important-is-the-right-choice/)
