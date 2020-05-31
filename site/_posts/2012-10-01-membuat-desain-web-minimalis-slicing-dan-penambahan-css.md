---
title: "Membuat Desain Web Minimalis : Slicing dan Penambahan CSS"
date: "2012-10-01"
tags: 
  - css
  - html
  - psd-to-html
  - slicing

categories: 
  - html-css
---

Setelah Anda membuat markup HTML dari Desain yang dibuat pada tutorial sebelumnya, kini saatnya kita menambahkan CSS agar dokumen HTML yang kita buat sebelumnya sama seperti Desain yang kita buat dalam Photoshop.

## Persiapan

Agar file Photoshop dan HTML sama dengan yang ditulis dalam tutorial ini, maka saya anjurkan untuk mendownload keduanya pada tutorial-tutorial sebelumnya, atau anda dapat mendownloadnya di link-link berikut :

[Download File Photoshop](https://www.dropbox.com/s/xa0r8nscnmi8zs3/simpel-web-desain.psd?dl=0 "Download PSD File") [Download Web Design Resource](https://www.dropbox.com/s/yiwgij1giwo9w7l/simpel-web-design-resource.zip?dl=0 "Simpel Web DEsign Resource") [File HTML](https://www.dropbox.com/s/xnnutj1ga8iv3g2/index.zip?dl=0 "Download index.html")

### Persiapan Folder Proyek

Agar file-file pekerjaan kita tersusun rapih, buat sebuah folder khusus untuk desain web kita, misalnya folder dengan nama "simpel", lalu buat folder lagi dengan nama "Images" di dalamnya.

![Struktur Folder](/assets/img/12-folder-proyek.png)

Seluruh gambar hasil slicing akan disimpan di dalam folder images ini.

## Slicing

Slicing merupakan proses pemotongan gambar-gambar pendukung suatu web, pada contoh kasus ini kita akan memotong bagian-bagian tertentu seperti Logo, Shadow, Garis berwarna dan lainnya.

Saya tidak akan menjelaskan bagaimana cara penggunaan Slicing Tool dalam Photoshop karena saya punya teknik sendiri untuk proses slicing ini, yakni teknik manual :).

### Slicing Logo

Pertama-tama kita potong bagian logo, namun sebelumnya kita ubah logo yang kita buat sebelumnya menjadi smart object (Smart Object adalah salah satu teknik untuk menggabungkan layer-layer menjadi satu objek-dan kita masih bisa mengeditnya).

Pilih layer-layer yang terdapat di dalam folder Logo (Sambil menekan tombol CTRL klik satu-persatu).

![Pilih layer-layer yang akan disatukan](/assets/img/1-select-layer.png)

Klik kanan lalu pilih "Convert to Smart Object", kini anda memiliki satu object logo. Anda masih bisa mengedit logo tersebut dengan men-klik dua kali pada layer Smart Object tersebut.

![Layer-layer menjadi satu Object](/assets/img/2-smart-object.png)

Selanjutnya kita buat seleksi pada logo dengan menekan tombol CTRL lalu klik pada Thumbnail Smart Object Logo sehingga logo terseleksi, selanjutnya tekan tombol CTRL+C untuk mengcopy logo tersebut.

![Ctrl+Click pada layer thumbnail untuk membuat seleksi](/assets/img/3-add-selection.png)

Setelah logo tercopy, buat file baru (CTRL+N). Ukuran layer akan otomatis mengikuti ukuran dari logo (204\*63px). Paste dengan menekan tombol CTRL+V. Hapus Layer background karena kita tidak membutuhkannya pada logo.

![Hapus Layer Background](/assets/img/4-delete-background.png)

Terakhir, pilih menu File>"Save for Web & Devices". Pilih Preset PNG-24 lalu save di folder yang sama dengan file HTML.

![Save dengan preset PNG-24](/assets/img/5-save-png24.png)

### Slicing Shadow & Footer Logo

Lakukan slicing untuk layer "shadow separate" caranya hampir sama dengan slicing logo sebelumnya, Save dengan nama file shadow-separate.png (Gunakan Preset PNG-24).

![Slicing Shadow Pemisah layout](/assets/img/9-shadow.png)

Slicing Logo yang terdapat di footer hampir sama dengan slicing logo sebelumnya, jadi bukan masalah lagi buat anda bukan? Save dengan nama file "logo-footer.png" (gunakan preset PNG-24)

![Slicing Logo Footer](/assets/img/10-logo-footer.png)

### Slicing Garis/Strip berwarna dan Segitiga dalam Footer

Pada desain, terdapat baris berwarna yang menghiasi bagian atas dari area konten, Anda dapat menslicenya menggunakan Crop Tool (X). Saya seleksi bagian warna orange sampai kuning (bagian yang tidak berulang). lalu saya "save for web & devices" dengan nama file "stripe.jpg" (Gunakan Preset JPG Medium).

![Slice sebagian saja](/assets/img/8-cropping.png)

Perhatikan bagian footer, disana terdapat segitiga yang menjadi pembagi tiap bagian footer, slice dengan menggunakan crop tool.

![Slicing segitiga di bagian footer](/assets/img/11-arrow.png)

## Membuat Image Sprite

Selanjutnya kita akan membuat image-sprite. Image-sprite adalah sekumpulan gambar-gambar/icon-icon dan digabungkan dalam satu file. Penggunaan image-sprite dimaksudkan untuk menghemat jumlah file gambar dan mempercepat loading web.

Pada kasus ini, kita akan membuat image-sprite untuk icon-icon yang ada, yakni icon Design, HTML&CSS dan Wordpress.

Pertama-tama, buat file baru dengan ukuran 150\*312px.

![File baru dengan ukuran 150px*312px](/assets/img/6-new-file.png)

Masukkan logo-logo tersebut dengan mendrag-nya ke dokumen baru yang anda buat barusan, susun seperti pada gambar berikut.

![Susun icon seperti gambar berikut](/assets/img/7-image-sprite.png)

Buang layer background, lalu "save for web & Devices" seperti pada langkah sebelumnya. Save dengan nama file "features.png"

## Background

Untuk background, kita tidak perlu menslicenya karena kita akan menggunakan file PNG dari pattern yang digunakan dari subtle pixel.

## Gambar untuk Slider

Untuk gambar slider, anda dapat menggunakan gambar pilihan anda yang terdapat dalam komputer anda. Buka dengan photoshop, lalu crop sehingga memiliki ukuran 450px\*200px seperti gambar berikut :

![Contoh gambar slide](/assets/img/slide1.jpg)

Jika anda malas untuk melakukan slicing, silahkan download gambar-gambar hasil slicing di link berikut

[Download Gambar Hasil Slicing](https://dl.dropbox.com/u/26808427/cdn/ariona/simpel-web-design-resource/images.zip "Hasil Slicing")

## Penambahan CSS

Buka file "index.html" dengan teks editor pilihan anda. Kita akan menambahkan tag link yang berfungsi untuk memanggil file CSS yang akan kita gunakan.

<head>
    <title>simpel web &amp; dev team</title>
    <link rel="stylesheet" href="style.css">
</head>

File CSS yang akan kita gunakan adalah "style.css", jadi untuk atribut href, diisi dengan nama file css.

Selanjutnya, buat file baru dengan nama file "style.css" dan simpan di folder simpel/folder yang sama dengan lokasi file HTML Anda.

Jika sudah, kita mulai proses penambahan CSS

### CSS Reset

Pertama-tama kita perlu mereset CSS kita agar tidak menggunakan CSS bawaan dari browser, Anda daat menggunakan file CSS Reset seperti normalize.css, namun disini saya hanya akan mereset margin dan padding saja. Jadi tambahkan kode CSS berikut [(Klik untuk membaca mengenai CSS Reset)](/5-permasalahan-yang-membingungkan-bagi-css-newbie/ "5 Permasalahan yang membingungkan bagi CSS Newbie")

\*{
    margin:0;
    padding:0;
}

Selector bintang (\*) akan memilih seluruh elemen HTML, maka seluruh elemen HTML akan memiliki nilai margin dan padding 0- selama kita tidak memberikan margin/padding pada elemen tertentu.

### body

Selanjutnya kita beri style untuk body. Kita akan merubah background body (seluruh halaman web), dan menentukan jenis font yang akan digunakan.

body{
    background-image:url("images/groovepaper.png");
    background-color:#EEEEEE;
    font-family:calibri,"segoe ui",arial,sans-serif;
}

Untuk background kita gunakan file groovepaper.png, dan kita juga tentukan warna background menjadi abu-abu muda (#EEEEEE adalah nilai heksadesimal untuk abu-abu muda). Langkah tersebut adalah sebagai fallback ketika gambar tidak berhasil dimuat, jadi background web tetap memiliki warna.

Kita juga tentukan jenis font utama : calibri, jika tidak ada font calibri, maka nama font selanjutnya yang akan digunakan.

## wrapper

Ketika proses konversi Desain ke HTML, kita membuat sebuah div untuk menampung seluruh isi web kita dan akan meratatengahkan div wrapper tersebut.

#wrapper{
    width:960px;
    margin:0 auto;
}

`margin:0 auto` berfungsi untuk meratatengahkan elemen HTML. Sesuai dengan desain, lebar dari web adalah 960px, jadi kita tentukan dengan menggunakan property width pada wrapper ini.

## header

Lanjut ke bagian Header, pertama-tama kita tambahkan fix untuk floating, karena kita akan menambahkan floating pada Logo dan menu [(Klik untuk membaca mengenai permasalahan floating)](/5-permasalahan-yang-membingungkan-bagi-css-newbie/ "5 Permasalahan yang membingungkan bagi CSS Newbie")

#header{
    overflow:hidden;
    padding-top:50px;
    padding-bottom:35px;
    padding-right:10px;
    padding-left:10px;
}

Kita juga tambahkan padding agar kontent (logo dan menu) tidak terlalu mentok ke pinggir/atas. Pada kode diatas, kita mengetikkan nilai padding secara terperinci, namun Anda bisa menyingkatnya menjadi seperti berikut : `padding:50px 10px 35px;`

## Logo & Menu

Untuk logo, kita tambahkan float:left, agar logo menjadi rata kiri, dan untuk menu kita ber float:right (rata kanan)

#logo{ float:left }
#menu{ float:right }

Untuk menu tambahkan juga property list-style:none, agar menu tidak memiliki titik di depannya. Sehingga kodenya menjadi seperti berikut :

#menu{
    float:right;
    list-style:none;
    font-family:"Museo 300";
    margin-top:20px;
} 

Kita juga menentukan jenis font-yang digunakan, yakni "Museo 300", font ini bisa didapatkan dalam file `simpel-webdesign-resource.zip`.

#menu li{
    display:inline;
    padding:10px;
}

Untuk list-item, kita ubah layoutnya menjadi sejajar ke pinggir dengan bantuan property display:inline. dan kita tambahkan jarak atar list-itemnya.

Selanjutnya kita ubah warna link dan menghilangkan garis bawahnya.

#menu li a{
    color:#41ACAA;
    text-decoration:none;
    font-size:17px;
}

## content

Lanjut ke bagian content, pertama-tama kita beri warna background putih dan beri background strip warna-warni.

#content{
    background-color:white;
    background-image:url("images/stripe.png");
    background-repeat:repeat-x;
    box-shadow:0 0 10px rgba(0,0,0,.3);
    overflow:hidden;
    padding:30px 0;
}

`background-repeat:repeat-x` berfungsi untuk mengulang gambar background secara horizontal, dengan begitu strip warna-warni tersebut berulang secara horizontal. Kita juga tambahkan box-shadow untuk memberikan shadow/bayangan halus pada content ([baca artikel tentang box-shadow](/bermain-main-dengan-css3-box-shadow)).

Seperti halnya header, dalam content juga terdapat beberapa elemen yang memiliki floating, jadi kita beri fix `overflow:hidden`.

## heading

Setiap Judul bagian memiliki jenis font yang sama yakni "museo 300", jadi kita bisa memberi stylenya sekaligus seperti berikut :

h2,h3{
    font-family:"museo 300";
    font-weight:normal;
    color:#248886;
    text-align:center;
}

font-weight disini berfungsi untuk mengatur ketebalan dari font, kita set menjadi normal. Selanjutnya kita tentukan ukuran font untuk h2 dan h3 (disesuaikan dengan desain)

h2{
    font-size:25px
    padding:10px;
    margin-bottom:10px;
}
h3{ 
    font-size:17px; 
    margin:10px 0;
}

## Features

Kita beri style untuk bagian features yang merupakan sederet service yang ditawarkan. Pertama-tama kita hilangkan titik untuk list servicenya/feature.

#features ul{
    list-style:none;
    overflow:hidden;
}

Penambahan overflow:hidden adalah sebagai perbaikan untuk floating, karena kita akan menambahkan floating pada list-itemnya.

Daftar feature yang berupa list-item telah kita beri class .feature, jadi kita akan menentukan beberapa property untuk feature ini.

.feature{
    float:left;
    margin:10px;
    padding:10px;
    width:280px;
    height:280px;
    text-align:center;
}

Untuk icon, kita akan menggunakan CSS sprite pada div dengan class icon. jadi pertama-tama kita tentukan tinggi dan lebar dari .icon, lalu tentukan gambar yang akan digunakan.

.icon{
    width:150px;
    height:106px;
    margin:10px auto;
    background-image:url("images/features.png");
}

Terakhir, kita tentukan posisi dari masing-masing icon yang akan digunakan :

.icon.design{ background-position:0 0 }
.icon.html{ background-position:0 -106px }
.icon.wordpress{ background-position:0 -215px }

Pemberian nilai -106px dan -215px akan menurunkan background ke posisi yang telah ditentukan.

## Shadow Pemisah

Untuk shadow pemisah yang akan kita terapkan pada tag hr dengan class shadow, ketik kode CSS berikut :

hr.shadow{
    border:none;
    height:15px;
    background:url("images/shadow.png");
    background-position:center;
    margin:10px;
}

## Kolom Latest Project dan Testimoni.

Untuk kedua kolom ini, kita telah memberikan class .kolom untuk itu kita berika style untuk .kolom terlebih dahulu.

.kolom{
    width:460px;
    padding:10px;
    float:left;
}

Kita beri style untuk slider latest-project :

.slider{
    list-style:none;
    position:relative;
    width:460px;
    height:210px;
}
.slider li {position:absolute}
.slider li a{
    display:block;
    box-shadow:0 0 5px rgba(0,0,0,.2)
}
.slider li a img {
    border:5px solid white;
}

Dalam class slider, kita tambahkan `position:relative` untuk membatasi pergerakan dari list-item yang memiliki `position:absolute`. [(Klik untuk membaca mengenai permasalahan Relative & Absolute)](/5-permasalahan-yang-membingungkan-bagi-css-newbie/ "5 Permasalahan yang membingungkan bagi CSS Newbie")

Selanjutnya, untuk komlom testimoni, kita tambahkan style untuk blockquote saja.

#testimoni blockquote{
    font-family:georgia,serif;
    font-size:20px;
    font-style:italic;
    text-align:center;
}

## footer

Footer, bagian akhir dari rangkaian penambahan CSS. Ketika sebuah markup HTML memiliki kesalahan peletakan sehingga menyulitkan pemberian style, Anda dapat merubah markup tersebut, seperti yang terjadi pada bagian footer ini.

Kita akan melakukan perubahan markup pada div dengan id footer. Block div tersebut lalu pindahkan ke baris setelah div penutup konten. Dan selanjutnya kita mulai beri style untuk footer.

#footer{
    background:url("images/chruch.png") #CCCCCC;
    overflow:hidden;
    position:relative;
    margin-bottom:50px;
    box-shadow:0 0 1px rgba(0,0,0,.3);
}

Kita beri style juga untuk bagian segitiga kecil:

span.arrow{
    display:block;
    position:absolute;
    left:465px;
    width:23px;
    height:15px;
    background:url("images/arrow.jpg");
}

Berikut style untuk class logo-footer :

.logo-footer{ 
    float:left;
    margin-right:20px;
}

Style untuk address :

#address{
    list-style:none;
    color:#8A8A8A;
}

Dan untuk menu footer :

#footer-menu{ 
    float:right;
    margin-top:20px; 
}
#footer-menu li{
    display:inline;
    padding:10px;
}
#footer-menu li a{
    text-decoration:none;
    color:#8A8A8A;
}

[Buka Demonstrasi](https://dl.dropbox.com/u/26808427/cdn/ariona/simpel-web-design-resource/index2.html "Demonstrasi") [Download Hasil Akhir](https://dl.dropbox.com/u/26808427/cdn/ariona/simpel-web-design-resource/final-simpel-webdesign.zip "Download Hasil Akhir")

## Kesimpulan

Setelah apa yang anda kerjakan, saya harap anda "sedikit" mengerti tentang proses pembuatan desain web mulai dari Photohop, proses konversi desain ke dalam HTML, Slicing, dan penambahan file CSS agar dokumen HTML yang telah dibuat memiliki kemiripan/sesuai dengan desain yang dibuat.

Jika anda masih bingung atau ada bagian kode yang tidak dimengerti silahkan tanyakan melalui komentar. atau anda juga bisa mendownload hasil akhir pada link yang disertakan di atas dan menyamakan dengan kode yang telah anda ketik

Hasil dari apa yang anda kerjakan dalam tutorial ini belum sepenuhnya sempurna, masih ada perbaikan di sana-sini agar hasil yang di dapat optimal, Kita juga belum memfungsikan slider untuk berjalan sebagaimana mestinya. Bagian ini akan dibahas dalam tutorial selanjutnya.
