---
title: "Membuat garis putus-putus di Photoshop"
date: "2012-05-06"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - border
  - dashed
  - photoshop

categories: 
  - photoshop
---

Dalam sebuah desain terkadang kita menemukan garis putus-putus, garis ini memberikan kesan tersendiri seperti efek jahitan dan lain sebagainya. Lalu bagaimana kita membuatnya di dalam photoshop? karena Anda tidak akan menemukan tipe border untuk garis putus-putus ini. Untuk itulah tutorial ini dibuat sebagai obat penasaran anda.

![Sample use](/assets/img/sample.jpg)

## Membuat Brush

Sebenarnya untuk membuat garis putus-putus ini sangatlah beragam, seperti membuat garis lalu menghapus bagian-bagian tertentu. Namun saya tidak akan menjelaskan cara tersebut melainkan dengan teknik brush. Pertama-tama buatlah dokumen baru dengan ukuran 4px x 2px.

![Membuat dokumen baru](/assets/img/new.jpg)

Berilah warna background hitam.

![Memberi background hitam](/assets/img/color.jpg)

Langkah selanjutnya adalah mendefinisikannya sebagai brush, pilih menu edit, lalu pilih "Define brush preset". beri nama sesuai kehendak anda, misalnya "dashed".

![Membuat brush baru](/assets/img/define.jpg)

## Bermain-main dengan brush presets

Inti dari teknik ini adalah pada pengaturan brush. Pilihlah brush pada toolbox lalu perhatikan window brushes (jika pengaturan brush belum tampil, tampilkan melalui menu window | Brushes), klik brush presets dan pilih brush yang tadi anda buat (biasanya paling akhir).

![Memilih brush](/assets/img/pick.jpg)

Selanjutnya pilih Brush Tip Shape, geser slider Spacing ke kanan, sehingga brush menjadi putus-putus.

![Mengatur jarak brush](/assets/img/spacing.jpg)

Masih belum selesai, kita lanjut ke Shape Dynamics, pada bagian "Angle Jitter", beri nilai 0% dan pilih Direction untuk control.

![Mengatur shape dynamics](/assets/img/shape.jpg)

Sekarang anda sudah bisa menggunakan brush putus-putus anda, sapukan ke canvas dan anda akan mendapatkan garis putus-putus sesuai dengan lekukan yang anda buat.

![Contoh penggunaan](/assets/img/use.jpg)

[//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js](//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js)

(adsbygoogle = window.adsbygoogle || \[\]).push({});

## Cara penggunaan

Untuk penggunaan brush ini cukup sederhana, anda cukup menggunakannya seperti brush biasa seperti sebelumnya. lalu bagaimana jika anda ingin membuat garis lurus? anda cukup menekan tombol Shift dan sapukan brush anda.

![Membut garis lurus](/assets/img/straight.jpg)

Selanjutnya, bagaimana jika kita ingin menerapkannya pada shape, "Ellipse Tool" misalnya?. Untuk menerapkannya pada shape tool, pastikan anda memilih "Path" sebelum membuat shape.

![Memilih tipe path](/assets/img/path.jpg)

Selanjutnya klik kanan pada shape yang anda buat, dan pilih "Stroke path" dan pilih brush. Pastikan brush putus-putus kita belum berubah, klik Ok dan Boom! kini lingkaran anda memiliki garis putus-putus.

![Stroke path](/assets/img/stroke.jpg)  
![Lingkarang dengan garis putus-putus](/assets/img/result.jpg)

## Cara pembuatan di CSS

Jika sebelumnya saya jelaskan cara pembuatan garis-putus-putus di photoshop, kita kita beralih ke pembuatan garis putus-putus di CSS. Untuk membuat garis putus-putus anda cukup menentukan border-style dengan nilai dashed.

border-style:dashed; /\* atau \*/
border: 2px dashed black;

## Kesimpulan

![photoshop cs6 stroke](/assets/img/cs6.jpg)

Kabar baiknya, pada versi terbaru photoshop, yakni CS6 anda bisa menentukan tipe stroke dan salah satunya adalah garis putus-putus ini. Namun bagi anda yang masih menggunakan photoshop CS5 ke bawah, anda bisa menggunakan teknik yang telah anda pelajari di atas. Semoga bermanfaat.
