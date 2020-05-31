---
title: "Zen Coding : Cara cepat menulis kode HTML & CSS"
date: "2012-01-20"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - css
  - html
  - zen-coding
  - emmet

categories: 
  - html-css
  - tips-trik
---

Penulisan Kode HTML dan CSS bisa dibilang itu-itu saja, atau yang kita tulis disetiap pembuatan markup HTML dan Styling tidak jauh berbeda dari markup atau styling kita sebelumnya. artinya kita hanya mengulangi pengetikan beberapa baris kode yang hampir sama, namun paling tidak berbeda antara nama ID dan Class (HTML) dan value pada CSS. untuk mempercepat proses Coding kedua bahasa tersebut, Zen Coding-lah solusinya. Zen Coding adalah plugin bagi beberapa text editor seperti notepad++, sublime text, coda dan lainnya yang fungsinya untuk mempercepat pengetikan kode HTML dan CSS anda. sebagai contoh, berapa lama anda mengetikkan kode berikut ?

    
    

Untuk ukuran orang yang menggunakan teknik 10 jari paling tidak memerlukan waktu 5-10 menit. Namun dengan menggunakan zen coding, kita hanya butuh waktu 1-2 menit dengan mengetikkan 1 baris kode berikut :

#header>img#logo+nav>ul#main-menu>li\*5>a

Penasaran bagaimana cara menginstall dan menggunakan Zen Coding? ayo lanjut bacanya.

## Instalasi

Untuk Instalasi Zen Coding, saya akan membahas bagaimana cara penginstallan Zen Coding pada Notepad++ dan Sublime Text. untuk teks editor lainnya bisa anda lihat di situs resminya.

### Notepad++

Jika anda mempunyai Koneksi Internet, anda dapat menginstall Plugin zen-coding langsung melalui Plugin Manager (Plugin > Plugin Manager). Scroll sampai anda menemukan Plugin Zen Coding, beri checklist dan klik install. setelah proses instalasi selesai, anda harus merestart Notepad++ anda. \[image url="http://ariona.net/wp-content/uploads/2012/01/plugin-manager.jpg" title="Plugin Manager"\] Jika anda tidak punya koneksi internet, download plugin zen coding terlebih dahulu. Lalu ekstrak file di folder Plugin Notepad++ (biasanya disini C:Program FilesNotepad++plugins)

### Sublime Text

Untuk sublime text anda dapat mendownload package Zen Coding [disini](http://ariona.net/wp-content/uploads/2012/01/ZenCoding.sublime-package). Simpan file yang sudah di download di folder Installed Package dalam folder instalasi Sublime Text. Untuk instalasi text editor lainnya silahkan untuk mengunjugi situs official sublime text disini [http://code.google.com/p/zen-coding/](http://code.google.com/p/zen-coding/)

## Cara Penggunaan Dasar

Penulisan Kode HTML dengan Zen Coding sangatlah. sebagai contoh, untuk membuat sebuah div dengan id wrapper kita bisa menulikannya seperti ini :

#wrapper

tanda pagar (#) berasal dari gaya penulisan ID dalam CSS. selanjutnya tekan kombinasi tombol Ctrl+Alt+Enter (Notepad++) atau cukup menekan Tab pada Sublime Text. kode yang dihasilkan adalah :

Kemudian jika anda ingin membuat sebuah ul dengan id menu, maka anda tinggal menuliskan kode seperti ini :

ul#menu

Untuk pemberian Class, sama halnya dengan CSS, gunakan tanda titik sebelum nama class :

ul.category

### Child

untuk membuat child dari suatu elemen, misalnya membuat li dalam ul, yang perlu anda tambahkan adalah tanda lebih besar dari (>)

ul#menu>li

contoh lebih detail :

nav>ul.menu-utama>li>a

yang akan menghasilkan kode berikut :

<nav>
    <ul class="menu-utama">
        <li><a href=""></a></li>
    </ul>
</nav>

### Sibling

Sibling, atau saudara berari element yang berada satu level dengan elemen lainnya. perhatikan contoh berikut :

    

    

</div>

article dan sidebar disebut sibling dan child dari content. untuk membuat sibling anda tinggal menambahkan tanda plus (+) contohnya :

#content>#article+#sidebar

### Pengulangan

Pengulangan sangat cocok untuk membuat suatu elemen yang berulang, contohnya li. anda tinggal menambahkan tanda bintang (\*) diikuti jumlah elemen yang akan dibuat.

ul>li\*5

akan menghasilkan kode berikut :

<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>

### Pengisian Atribut

Pengisian atribut tag juga bisa dilakukan via Zen Coding. misalnya :

ul>li>a\[href="www.ariona.net" title="ariona.net"\]

akan menghasilkan kode :

<ul>
    <li><a href="www.ariona.net" title="ariona.net"></a></li>
</ul>

### Penomoran Otomatis

Misalnya kita akan membuat 5 buah class dengan nama class berurutan mulai dari type1 sampai type5. maka penulisan kodenya menjadi seperti berikut :

.type$\*3

hasil dari kode tersebut adalah

### Filter

Pada versi terbarunya, Zen Coding menambahkan fitur filter. filter digunakan untuk merubah beberapa karakter menjadi entity. misalnya ketika pengetikan kode pada blog, kita diharusnya mengganti tanda < menjadi &lt; . biar tidak repot, kita gunakan fitur dari zen coding dengan menambahkan |e diakhir kode.

#content>#article+#sidebar|e

dan kode yang dihasilkan adalah :

&lt;div id="content"&gt;
    &lt;div id="article"&gt;&lt;/div&gt;
    &lt;div id="sidebar"&gt;&lt;/div&gt;
&lt;/div&gt;

## Cheat Sheet

Untuk melihat daftar lengkap kode Zen Coding / singkatan-singkatan dalam zen coding bisa didownload disini [http://code.google.com/p/zen-coding/downloads/detail?name=ZenCodingCheatSheet.pdf](http://code.google.com/p/zen-coding/downloads/detail?name=ZenCodingCheatSheet.pdf)

## Kesimpulan

Keberadaan Zen Coding akan sangat membantu anda dalam proses markup HTML dan styling. bagaimana tidak, hanya dengan mengetikkan beberapa karakter andapun akan mendapat beberapa baris kode. Zen Coding sangat tepat untuk anda yang ingin menghemat waktu dalam proses Coding.
