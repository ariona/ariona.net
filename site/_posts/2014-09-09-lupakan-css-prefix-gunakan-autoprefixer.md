---
title: "Lupakan CSS Prefix, Gunakan Autoprefixer"
date: "2014-09-09"
thumbnail: /assets/img/thumbnail.jpg
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - autoprefixer
  - compass
  - css-prefix
  - sublime-text

categories: 
  - html-css
  - tips-trik
---

Prefix merupakan masalah yang kadang dihadapi oleh web developer, penggunaan prefix dianjurkan untuk mendukung browser yang tidak mendukung secara penuh terhadap property CSS3 terbaru dan hanya menyediakan versi prefix dari property yang bersangkutan. Dan tentunya anda diharuskan menuliskan beberapa baris kode hanya untuk menerapkan property yang sama.

Untuk membantu menyelesaikan masalah tersebut ada beberapa cara, dan salah satunya adalah dengan menggunakan autoprefixer. Autoprefixer adalah module yang berfungsi untuk menambahkan prefix pada file CSS anda secara otomatis. Prefix yang ditambahkan pun hanyalah prefix yang dibutuhkan dan didasarkan pada konfigurasi yang telah kita tentukan.

![](/assets/img/caniuse.png)

caniuse.com untuk mengetahui kompatibilitas browser

Misalkan Anda hanya ingin mendukung versi browser terbaru dan dua versi dibelakangnya, maka autoprefixer akan menggunakan database caniuse.com dan menerapkan prefix yang digunakan pada versi yang ditentukan tersebut. Penggunaan database caniuse juga menjadi salah satu kelebihan dari autoprefixer, karena kita tahu bahwa caniuse telah menjadi acuan untuk mengetahui apakah suatu fitur html5/css3 didukung oleh browser atau tidak.

## Instalasi

Autoprefixer tersedia hampir disemua framework dan atau text editor, autoprefixer juga tersedia dalam module grunt atau gulp, bahkan PHP sekalipun. Namun yang akan saya bahas disini hanya akan difokuskan pada penggunaan Package untuk Sublime Text dan Integrasi ke dalam project Compass.

### Sublime Text Plugin

Sebelum menggunakan plugin Autoprefixer untuk Sublime Text, anda diharuskan menginstall node.js yang bisa anda dapatkan di situs resminya [http://nodejs.org](http://nodejs.org). Proses instalasi node.js sangatlah mudah, saya tidak akan menjelaskannya disini. Untuk memastikan proses instalasi node.js terinstall dengan benar, buka **terminal/command prompt (cmd)** lalu ketikkan perintah `node -v`. Jika proses instalasi berhasil anda akan melihat versi node yang telah diinstall.

#### Instalasi Package Control

Selanjutnya adalah instalasi package autoprefixer. Agar lebih mudah Anda bisa menginstallnya melalui package control. Jika anda belum menginstall Package Control untuk Sublime Text anda dapat mengunjungi [https://sublime.wbond.net/installation](https://sublime.wbond.net/installation) , pilih versi Sublime text yang anda gunakan lalu copy code instalasi yang disediakan.

![](/assets/img/package-control.png)

Buka command console Sublime Text dengan menekan tombol Control+\`, lalu paste code yang telah anda copy tadi dan tekan enter. Ingat bahwa proses instalasi package control dan package yang ingin anda instal melalui package control harus menggunakan koneksi internet.

![](/assets/img/console.png)

Jika proses instalasi Package control berhasil, Anda dapat melihat menu Package Control dalam menu tools (Mac: Sublime Text > Preferences>Package Control).

![](/assets/img/package-control-menu.png)

#### Instalasi Autoprefixer for Sublime Text

Untuk menginstall Autoprefixer, buka Package Control, pilih menu install package, dan cari package Autoprefixer, Pilih package dan tekan enter untuk memulai proses instalasi.

![](/assets/img/installing-autoprefixer.png)

Jika instalasi berhasil Anda akan menemukan menu autoprefixer pada menu Tools->Package Settings->Autoprefixer (Mac: Sublime Text->Preferences->Package Settings->Autoprefixer)

#### Menggunakan Autoprefixer

Untuk menggunakan autoprefixer sangatlah mudah, Karena teknik autoprefixer ini adalah postprocessing, jadi ketikkan kode css anda seperti biasa namun tanpa menggunakan prefix, hanya menggunakan property yang telah dispesifikasikan oleh [w3c](http://www.w3.org/).

Setelah file CSS anda selesai diketik, maka langkah terakhir sebelum publikasi adalah menjalankan perintah autoprefixer. Untuk menjalankannya Silahkan anda buka Sublime Text Command Pallete (Tools->Command Pallete) dengan menekan tombol Ctrl+Shift+P (Mac Command+Shift+P) lalu ketikkan autoprefixer, setelah perintah **Autprefix CSS** ditemukan, tekan enter untuk menjalankan Autoprefixer.

![](/assets/img/executing-autoprefixer-css.png)

### Integrasi Autoprefixer ke dalam Compass

```
Sebenarnya dalam compass  sendiri sudah disediakan beberapa mixin CSS3 jadi anda tidak perlu lagi mengetikkan prefix untuk beberapa property tertentu, namun tentunya prefix yang digunakan bisa saja sudah tidak diperlukan dan anda juga tidak memiliki kontrol terhadap browser apa aja yang ingin anda support. Untuk mengetahui lebih banyak tentang compass silahkan baca <a href="/kolaborasi-manis-antara-sass-dan-compass/">artikel tentang sass dan compass</a>
```

Untuk mengintegrasikan autoprefixer pada project compass, Pertama-tama anda harus menginstall terlebih dahulu gem `autoprefixer-rails`, Dengan mengetikkan perintah `gem install autoprefixer-rails` (Gunakan Sudo untuk linux/mac) jika sudah terinstall silahkan buka `config.rb` lalu tambahkan code berikut diakhir file:
```rb
require 'autoprefixer-rails'

on_stylesheet_saved do |file|
  css = File.read(file)
  File.open(file, 'w') do |io|
    io < 1%"] )
  end
end
```

Dengan demikian setiap kali proses kompilasi file sass selesai, maka Autoprefix akan otomatis berjalan menambahkan prefix pada file css hasil komplasi.

## Pengaturan Browser Support

Untuk mengatur browser mana aja yang ingin anda dukung, autoprefixer menyedikan beberapa paramater, secara default autoprefixer akan mendukung browser dengan versi terbaru dan 2 versi dibelakangnya. Misalnya versi browser terbaru adalah versi 20 dan dua versi dibelakangnya berari versi 19 dan 18.

Berikut ini adalah beberapa parameter yang diambil dari github autoprefixer:

- `last 2 versions` Akan menargetkan 2 versi terakhir dari setiap browser
- `last 2 Chrome versions` Akan menargetkan 2 versi terakhir untuk browser Chrome
- `> 5%` Akan memilih versi browser berdasarkan statistik pengguna Global
- `Firefox > 20` Akan menargetkan versi browser yang lebih baru dari versi 20
- `Firefox >= 20` Akan menargetkan versi browser mulai dari versi 20 ke atas
- `Firefox < 20` Menargetkan browser firefox lebih rendah dari versi 20
- `Firefox <= 20` Menargetkan browser firefox dari versi 20 ke bawah.
- `Firefox ESR` Akan menargetkan firefox versi ESR terbaru.
- `ios 7` Akan menargetkan browser untuk IOS 7.

Dan berikut ini adalah nama-nama browser yang dikenal oleh autoprefixer (Berdasarkan caniuse.com):

`Android, BlackBerry (bb), Chrome, Firefox(ff), Explorer(ie), iOS (ios_saf), Opera, Safari, OperaMobile (op_mob), OperaMini (op_mini), ChromeAndroid (and_chr), FirefoxAndroid (and_ff), ExplorerMobile (ie_mob).`

### Penentuan Versi Browser pada Sublime Text

Untuk mengatur browser yang ingin anda support, anda bisa mengaturnya di menu tools->Package Settings->autoprefixer->Settings (default). Disana anda dapat menemukan kode berikut:

```
{
    "browsers": ["last 2 versions"],
    "cascade": true
}
```

Untuk menambahkan kondisi browser pilihan anda, tambahkan pada key browsers. Misalnya saya ingin menargetkan Browser Firefox versi 14 keatas, maka pengaturannya menjadi seperti berikut:
```
{
    "browsers": ["last 2 versions", "Firefox >= 14"],
    "cascade": true
}
```

Anda tinggal menambahkan koma dilanjutkan dengan parameter pilihan anda dan ditulis dalam tanda kutip.

### Penentuan Versi Browser pada Compass

Untuk pengaturan browser pada compass tidak jauh berbeda dengan pengaturan sebelumnya, jika anda perhatikan baris kode di atas:

```rb
require 'autoprefixer-rails'

on_stylesheet_saved do |file|
  css = File.read(file)
  File.open(file, 'w') do |io|
    io < 1%"] )
  end
end
```

Pada bagian process, parameter kedua, terdapat array browser. Tambahkan kondisi pilihan anda didalamnya, Jika mengacu pada contoh diatas maka kodenya menjadi seperti berikut:
```
io < 1%","Firefox >= 14"] )
```

## Kesimpulan

Keberadaan Autoprefixer memang sangat membantu untuk proses development web dan pemberian dukungan terhadap browser lama sesuai dengan data yang up to date berdasarkan situs caniuse.com. Ketersediaannya untuk diintegrasikan dalam berbagai framework dan atau text editor juga menjadikan Autoprefixer lebih digemari dibanding module untuk penambahan prefix lainnya.

Penggunaan autoprefixer tidak membutuhkan koneksi internet (Hanya proses instalasi saja yang membutuhkan koneksi internet). Dengan Adanya autoprefixr kita tidak perlu lagi menuliskan rangkaian property CSS lengkap dengan prefix, kita hanya perlu menuliskan property CSS sesuai dengan spesifikasi yang telah dipublikasikan oleh w3c sedangkan dukungan terhadap browser biarkan autoprefixer menambahkannya untuk anda.

## Sumber

- [https://github.com/postcss/autoprefixer](https://github.com/postcss/autoprefixer)
- [http://caniuse.com/](http://caniuse.com/)
