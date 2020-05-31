---
title: "Menguasai Flexbox Layout (Bagian 1)"
date: "2016-04-20"
thumbnail: /assets/img/thumbnail.jpg
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - css3
  - flexbox

categories: 
  - html-css
---

Flexbox merupakan mode layout terbaru yang menjadi fitur dari CSS3. Sebelumnya kita mengenal mode block, inline, table dan lain sebagainya, kita juga sering melibatkan Floating untuk layouting, padahal float sendiri bukan diperuntukkan untuk membuat layout melainkan untuk memposisikan gambar dalam text.

Flexible Box atau biasa kita sebut Flexbox ini akan mengatur ukuran dari childnya secara otomatis, dan mampu beradaptasi dengan ukuran containernya. Permasalahan-permasalahan yang sebelumnya bisa diselesaikan dengan metode seperti float, absolute, dan transform yang memang terasa lebih “Hacky”, bisa diselesaikan secara mudah dengan Flexbox.

Permasalahan paling sederhana yang mampu diselesaikan oleh Flexbox adalah Vertical Centering (memosisikan element tepat berada di tengah), atau mengatur agar setiap kolom yang berada dalam grid layout memiliki tinggi yang sama.

Dalam seri tutorial ini, saya akan mengajak anda untuk mempelajari Flexbox mulai dari dasar. Tetunya kita mulai dengan memahami konsep dasar dari Flexbox, cara penggunaan property-property yang berhubungan dengan Flexbox sebelum kita mulai mepelajari study kasus Flexbox.

Untuk kode demonstrasi bisa didownload di github saya

[Tutoral Flexbox Layout](https://github.com/ariona/tutorial-flexbox-layout)

* * *

### Persiapan

Sebelum kita mulai mempelajari flexbox, saya sudah membuat sebuah tampilan sederhana yang akan membatu kita dalam mempelajari Flexbox.

Markup HTML yang akan kita gunakan adalam container biasa yang diisi dengan 10 element div dengan class box dan box1-10 sebagai penandanya

```html
<div class="container">
    <div class="box box1">1</div>
    <div class="box box2">2</div>
    <div class="box box3">3</div>
    <div class="box box4">4</div>
    <div class="box box5">5</div>
    <div class="box box6">6</div>
    <div class="box box7">7</div>
    <div class="box box8">8</div>
    <div class="box box9">9</div>
    <div class="box box10">10</div>
</div>
```

Agar tampilannya lebih menarik, saya juga tambahkan style standar untuk memberikan warna pada masing-masing box.

```css
*{
    margin: 0;
}
.container{
    background: #ecf0f1;
}
.box{
    padding:30px;
    color: white;
    font-family: Poppins, "Helvetica Neue", arial, sans-serif;
    font-size: 1.5em;
    text-shadow: 0 1px 1px rgba(0,0,0,.2);
    text-align: center;
    width: 200px;
}
.box1{ background-color:#1dd0ad; }
.box2{ background-color:#2fcc72; }
.box3{ background-color:#3498db; }
.box4{ background-color:#9b59b6; }
.box5{ background-color:#34495e; }
.box6{ background-color:#f1c40f; }
.box7{ background-color:#e67e22; }
.box8{ background-color:#e74c3c; }
.box9{ background-color:#95a5a6; }
.box10{ background-color:#7f8c8d; }
```

Jika kita buka file persiapan kita sebelumnya, maka tampilan yang akan kita lihat seperti berikut.

![1-initial-preview](/assets/img/1-initial-preview.png)

Preview File Persiapan

Setiap box akan ditampilkan secara block, karena memang sifat natural dari div itu adalah Block, artinya setiap div akan ditampilkan di baris baru.

### Flex Container

Ok, kita mulai belajar Flexbox. Yang paling pertama kita lakukan, adalah mengatur property `display` menjadi `flex` pada `.container` kita.

```css
.container{
    display: flex;
}
```

Property diatas, akan merubah layout model container menjadi flexbox dan merubah element yang ada didalamnya menjadi flex-item. Jika anda buka previewnya maka sekarang tampilan box berubah menjadi seperti berikut:

![Penerapan display: flex](/assets/img/2-flex-container.png)

Penerapan display: flex

Seperti yang telah saya jelaskan di intro artikel, bahwa flexbox memiliki kemampuan untuk mengatur width flex-item secara otomatis. Dalam kasus ini meskipun kita telah menentukan width dari box menjadi 200px, tapi width tersebut akan dioverride oleh flexbox agar ukurannya sama rata.

* * *

### Flex Direction

Secara _default_, setiap kali kita menerapkan layout mode flex pada container, maka element-element didalamnya akan bertingkah seperti Kolom. Ini disebabkan arah dari flexbox secara default adalah row (horizontal).

Sebagaimana kita ketahui, bahwa dalam sebuah row/baris, pastinya memiliki kolom.

![Ilustrasi Row](/assets/img/3-row-illustration.png)

Ilustrasi Row

Dan bisa anda tebak, lawan arah dari _row_ adalah _column_. Setiap Column, pasti didalamnya terdapat baris-baris data.

![Ilustrasi Column](/assets/img/4-column-illustration.png)

Ilustrasi Column

Untuk mengatur arah dari flexbox, anda dapat menggunakan property `flex-direction` dengan pilihan value `row` dan `column` pada `.flex-container` nya.

```css
.container{
    display: flex;
    flex-direction: column;
}
```

Berikut adalah preview ketika kita mengatur `flex-direction` menjadi `column`

![Penerapan Flex-direction Column](/assets/img/5-flex-direction-column.png)

Penerapan Flex-direction Column

* * *

### Mengenal Axis dalam Flexbox

Ketika kita menggunakan layout mode Flexbox, maka kita memiliki dua sumbu/axis, Main Axis dan Cross axis. Kenapa istilahnya bukan Horizontal dan vertical? Karena Arah sumbu tersebut akan berubah berdasarkan flex-direction.

Ketika `flex-direction` bernilai `row` maka Main Axis nya adalah dari kiri ke kanan dan Cross Axisnya dari atas ke bawah.

![Ilustrasi Row Axis](/assets/img/6-row-axis.png)

Ilustrasi Row Axis

Dan, ketika `flex-direction` bernilai column, maka main axisnya dari atas, ke bawah, dan Cross Axisnya dari kiri ke kanan.

![Ilustrasi Column Axis](/assets/img/7-column-axis.png)

Ilustrasi Column Axis

Yang menjadi alasan kenapa saya menyebutkan main-axis dari kiri ke kanan bukan horizontal karena arah main-axis juga dapat dirubah, dari kanan ke kiri atau dari bawah ke atas.

Pada contoh berikut saya menerapkan `flex-direction: row-reverse`, sehingga item diurutkan dari akhir ke awal.

![Contoh penerapan row-reverse](/assets/img/8-flex-direction-row-reverse.png)

Contoh penerapan row-reverse

Ini juga yang menjadi keunggulan dari flexbox. Kita tidak perlu merubah markup HTML hanya untuk mengatur urutan dari element.

Coba juga value `column-reverse` dan perhatikan hasilnya

### Flex Wrap

Sebelumnya kita telah mengatur width dari box menjadi 200px, namun karena kita menerapkan flexbox pada containernya, otomatis width tadi akan berubah. Lalu bagaimana jika kita ingin agar widthnya tetap 200px?

Kita bisa menerapkan property `flex-wrap` pada container dengan value `wrap`.

```css
.container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
```

Sekarang setiap box akan memiliki width 200px, dan box sisanya akan otomatis turun kebawah.

![Flex wrap](/assets/img/9-flex-wrap.png)

Flex wrap

nilai-nilai yang bisa digunakan pada property flex-wrap ini adalah: nowrap (default), wrap dan wrap-reverse. Silahkan coba masing-masing nilai dan perhatikan perubahan yang terjadi.

### Mengurutkan Flex Item

Sebelumnya kita bisa dengan mudah mengatur urutan dari flex item tanpa harus mengedit Markup HTML dengan mengatur flex-direction menjadi row-reverse/column-reverse. Namu bagaimana jika kita ingin mengatur urutan item tertentu?

Kita dapat mengurutkan setiap item dalam flexbox dengan property `order`. Sebagai contoh saya akan menerapkan property order pada .box5.

```css
.box5{
   order: 1
}
```

Hasilnya adalah sebagai berikut:

![Mengurutkan item dengan property order](/assets/img/10-order-1.png)

Mengurutkan item dengan property order

Mungkin anda akan bertanya: "Kenapa jadi paling akhir? kan ordernya 1"?  
Yang perlu diperhatikan adalah, secara default, order setiap item adalah 0. Ketika Anda memberikan nilai 1, maka secara otomatis `0 > 1` dan akan ditempatkan paling akhir.

Anda juga bisa bermain dengan nilai negatif, misalnya -1,-2 dan seterusnya. Berikut saya tambahkan order:-1 pada .box7:

![Contoh lain pengurutan dengan order](/assets/img/11-order-2.png)

Contoh lain pengurutan dengan order

Silahkan coba rubah order box-box lain untuk lebih memahami tentang order ini.

### Meratakan Flex Item

Untuk mempelajari bagian ini, saya telah mengurangi item box menjadi 3 item dan merubah widthnya menjadi 100px. Jika anda telah merubah `flex-direction` menjadi column, rubah kembali menjadi `row` atau hapus saja property tersebut. Sehingga tampilannya menjadi seperti berikut:

![Preview File Persiapan](/assets/img/12-reset-preview.png)

Preview File Persiapan

Untuk meratakan flex-item, kita bisa menggunakan property justify-content pada container. Yang perlu diperhatikan adalah, property `justify-content` ini berfungsi meratakan flex-item pada **Main Axis** (Masih ingat tentang konsep main axis dan cross axis diatas kan?). Karena pada contoh ini kita menggunakan `flex-direction:row` maka kita akan meratakan item dari kiri ke kanan/horizontal.

Berikut ini adalah contoh Nilai-nilai yang bisa digunakan pada property `justify-content`:

#### 1\. flex-start

`flex-start` akan meratakan element diawal main axis. dalam contoh ini awal main axis adalah kiri, jadi item-item akan rata kiri. Berbeda hasilnya jika `flex-direction` anda rubah menjadi `row-reverse`, makan flex-start akan dimulai dari kanan.

![flex-start dimulai dari kiri jika directionnya row](/assets/img/13-flex-start.png)

flex-start dimulai dari kiri jika directionnya row

#### 2\. flex-end

Sama halnya dengan `flex-start`, Item akan diurutkan diakhir main-axis. Pada contoh ini tentunya item-item akan dibuat rata kanan.

![Flex End meratakan item ke ujung main axis](/assets/img/14-flex-end.png)

Flex End meratakan item ke ujung main axis

#### 3\. center

Bisa ditebakkan efek dari nilai ini? yap, item-item akan diratatengahkan.

![Rata tengah pada main axis](/assets/img/15-center.png)

Rata tengah pada main axis

#### 4\. space-between

`space-between` akan meratakan item secara merata. item paling kiri rata kiri, paling kanan menjadi rata-kanan, dan item ditengah akan diposisinkan secara seimbang pula.

![Efek space between, menambahkan area kosong didalamnya.](/assets/img/16-space-between.png)

Efek space between, menambahkan area kosong didalamnya.

#### 5\. space-around

Sama halnya dengan `space-between`, namun bedanya `space-around` akan membagikan sisa kekosongan dari container secara merata pada item-itemnya.

![Space around akan membagikan sisa ruang kepada masing-masing item](/assets/img/17-space-around.png)

Space around akan membagikan sisa ruang kepada masing-masing item

* * *

Oke, sekarang bagaimana caranya untuk meratakan item berdasarkan cross-axis. Kalo dalam contoh ini secara vertical dari atas ke bawah.

Untuk meratakan element pada cross axis, kita akan menggunakan property `align-items`. Namun sebelumnya kita harus mengatur terlebih dahulu tinggi dari `.container` karena kita tidak akan melihat perbedaan ketika tinggi `.container`nya `auto`.

```css
.container{
   display: flex;
   height: 100vh;
}
```

Saya memberikan nilai 100vh agar tinggi container sama dengan tinggi viewport browser ([Pelajari lebih lanjut tentang vh dan viewport unit](/mengenal-css3-viewport-unit/))

![Mengatur height container](/assets/img/18-set-container-height.png)

Mengatur height container

Nilai-nilai yang bisa digunakan pada property `align-items` adalah sebagai berikut:

#### 1\. stretch, nilai default

Jika anda perhatikan screenshot diatas, setiap item memiliki tinggi yang sama dengan container alias memenuhi container bukan? Ini adalah efek dari nilai `stretch`. `stretch` akan memaksa setiap item untuk memenuhi ruang yang tersedia pada container.

#### 2\. flex-start

Seperti halnya property `justify-content`, `align-items` juga memiliki value `flex-start` dan saya kira anda juga bisa menebak apa efeknya bukan? Ya `flex-start` akan meratakan item diawal sumbu cross/cross axis.

![Meratakan elemen pada awal cross axis](/assets/img/19-align-start.png)

Meratakan elemen pada awal cross axis

#### 3\. flex-end

Sama seperti `flex-end` pada property `justify-content`, akan meratakan item di akhir cross-axis.

![Meratakan item pada akhir cross axis](/assets/img/20-align-end.png)

Meratakan item pada akhir cross axis

#### 4\. center

Ini juga bisa anda tebak apa efeknya. Membuat semua item berada di tengah.

![Rata tengah pada cross axis](/assets/img/21-align-center.png)

Rata tengah pada cross axis

#### 5\. baseline

Untuk mendemonstrasikan baseline, mari kira rubah ukuran font dari .box2 dan .box3 terlebih dahulu:

```css
.box2{font-size:48px;}
.box3{font-size:10px;}
```

Lalu kita atur `align-items:baseline` pada `.container`:

```css
.container{
    display: flex;
    height: 100vh;
    align-items: baseline;
}
```

nilai dari `baseline` ini akan meratakan item berdasarkan baseline dari text.

![Meratakan item berdasarkan baseline text](/assets/img/22-align-baseline.png)

Meratakan item berdasarkan baseline text

### Align Content

Perperty terakhir yang akan saya jelaskan di bagian pertama ini adalah `align-content`. Align-content ini hampir sama dengan `align-items`, hanya saja `align-content` berlaku jika flex-item lebih dari satu baris (_multiline_).

Bisa dikatakan `align-content` ini adalah kebalikan dari `justify-content`, Jika `justify-content` berlaku pada main-axis. Maka `align-content` berlaku pada cross axis.

Untuk mendemonstrasikan property `align-content`, maka saya menambahkan item .box menjadi 6 item. Lalu saya atur agar widthnya menjadi 200px. Sehingga tampilannya mernjadi seperti berikut:

Nilai-nilai yang dapat digunakan pada property `align-content` adalah:

#### 1\. stretch\` nilai default/bawaa

Secara default nilai dari `align-content` adalah `stretch`, Nilai ini akan memaksa item menghabiskan sisa space yang tersedia pada container.

![Align-content strech akan memaksa item agar memnuhi ruang tersisa](/assets/img/23-align-content-stretch.png)

Align-content strech akan memaksa item agar memnuhi ruang tersisa

#### 2\. flex-start

Sama halnya dengan `flex-start` pada `align-items` yakni memposisikan item-item diawal cross axis

![Meratakan item-item diawal cross axis](/assets/img/24-align-content-start.png)

Meratakan item-item diawal cross axis

#### 3\. flex-end

Sama halnya dengan `flex-end` pada `align-items` yakni memposisikan item-item diakhir cross axis

![Meratakan item-item diakhir cross axis](/assets/img/25-align-content-end.png)

Meratakan item-item diakhir cross axis

#### 4\. center

Seperti halnya `center` pada property `align-items`, akan memposisikan item-item ditengah cross axis

![Meratakan item-item ditengah cross axis](/assets/img/26-align-content-center.png)

Meratakan item-item ditengah cross axis

#### 5\. space-between

Dengan value `space-between` maka sisa space dari container akan dibagi ratakan atar item.

![Meratakan item-item diawal sampai akhir cross axis](/assets/img/27-align-content-space-between.png)

Meratakan item-item diawal sampai akhir cross axis

#### 6\. space-around

`space-around` akan membagikan space yang kosong dari container pada setiap itemnya.

![Membagikan sisa ruang container pada setiap baris item-item](/assets/img/28-align-content-space-around.png)

Membagikan sisa ruang container pada setiap baris item-item

### Rangkuman

Berikut ini adalah rangkuman property-property yang telah saya jelaskan dibagian pertama ini:

#### Property-property untuk flex container

Property | Value
--- | ---
display | flex, inline-flex
flex-direction | row(default), row-reverse, column, column-reverse
flex-wrap | nowrap, wrap, stretch
justify-content | flex-start, flex-end, center, space-between, space-around
align-items | stretch, flex-start, flex-end, center, baseline
align-content | stretch, flex-start, flex-end, center, space-between, space-around

#### Property-property untuk flex item

Property | Value
--- | ---
order | number

### Penutup bagian pertama

Pada bagian pertama ini saya harap anda bisa sedikit mengerti tentang konsep dasar dari flexbox. Mulai dari flex-direction, main-axis dan cross-axis, mengatur urutan item dan cara meratakan item-item pada main-axis dan cross-axis.  
Di bagian selanjutnya kita akan mempelajari tentang flex-grow, flex-shrink, flex-basis untuk mengatur ukuran dari flex-item serta penggunaan sederhana autoprefixer.
