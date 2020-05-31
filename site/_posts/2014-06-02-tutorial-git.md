---
title: "Apa itu Git? pelajari dasar-dasar Git disini"
date: "2014-06-02"
thumbnail: /assets/img/thumbnail.jpg
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - git
  - github

categories: 
  - tips-trik
---

Pernah dengar Git? atau mungkin Github? Jika anda belum pernah mendengarnya dan ingin mempelajari apa itu git maka tutorial Git ini sangat cocok untuk anda. Saya akan sedikit mengenalkan tentang git, apa itu git bagaimana cara penggunannya dalam pekerjaan kita sehari-hari.

## Apa itu Git?

[![Logo Git](/assets/img/git-logo.png)](https://picasaweb.google.com/lh/photo/6pQv08gt5DgK7-RKJBhw7BU8Zk-mUyRgJWkVqUs0yrw?feat=embedwebsite)

Logo Git

Jika anda browsing tentang apa itu git maka anda akan mendapatkan definisi yang sama, yakni Source Control Manager (SCM). _Well,_ definisi tersebut tidak cukup untuk membuat Anda mengerti bukan?

Git itu bukanlah sebuah bahasa seperti halnya HTML,CSS atau Js bukan pula sebuah konsep atau aturan baku dalam pemrograman, melainkan sebuah software yang berfungsi untuk mengatur source code dari aplikasi yang sedang anda buat.

Fungsi utamanya adalah untuk mengatur versi dari source code anda, menambahkan tanda/checkpoint ketika terjadi perubahan pada kode Anda dan tentunya akan mempermudah Anda untuk tetap mengetahui apa saja yang berubah dari source code Anda.

Sebagai contoh, misalkan Anda sedang membangun sebuah website, dan anda akan menambahkan beberapa fitur dalam website anda. Agar tidak membingungkan nantinya anda membuat sebuah catatan terhadap apa yang telah anda lakukan seperti :

01-04-2014 Memulai Project Website, File HTML & CSS Dasar
02-04-2014 Penambahan Menu Utama
03-04-2014 Penambahan Layout Standar
04-04-2014 Penambahan Fitur Pengubah Layout

Oh ya, btw jika kamu ingin mempelajari HTML dan CSS kamu bisa belajar lewat ebook yang saya tulis, gratis. Download disini [/ebook-belajar-html-dan-css/](/ebook-belajar-html-dan-css/)

Pada contoh diatas kita menggunakan tanggal sebagai tanda akan apa yang telah kita lakukan, dengan demikian kita bisa tahu kapan perubahan terjadi dan apa perubahan yang dilakukan. Dan dalam Git semua itu bisa dilakukan dengan mudah dan asyiknya jika Anda merusak kode sehingga membuat aplikasi error, maka anda dapat mengembalikan kode tersebut berdasarkan pada tanda/tanggal dimana kode masih normal, lebih mirip seperti restore point.

Git juga tidak hanya digunakan untuk perorangan, beberapa orang pun dapat bekerja secara bersamaan mengerjakan kode Anda dan Anda masih memiliki kontrol penuh terhadap kode Anda, Anda bisa menambahkan kode yang ditambahan oleh orang lain atau mengabaikannya sama sekali. oleh karena itu Git sering digunakan sebagai pengatur dalam projek kolaborasi dimana tidak hanya satu orang yang mengerjakan sebuah kode tapi beberapa orang sekaligus yang mengerjakan kode tersebut.

## Pembuat

Dibangun oleh Linus Torvald, orang yang sama dibalik Linux, Awalnya git ini dibuat untuk mengatur kode kernel Linux. Sebelumnya beliau mencari aplikasi SCM yang telah ada namun menurutnya tidak ada SCM yang dapat bekerja dengan cepat dan efisien.

## Instalasi

Git dapat berjalan dikomputer anda dengan menginstallnya terlebih dahulu. Anda dapat mendownload installer Git di situs [http://git-scm.com/](http://git-scm.com/)

Saya tidak akan menjelaskan cara menginstallnya karena proses instalasi ini tidak berbeda jauh dengan proses instalasi aplikasi lainnya.

## Memulai Aplikasi

Aplikasi git dapat diakses melalui terminal/Command Prompt jadi silahkan buka Terminal/Command Prompt dan ketik `git --version` untuk melihat versi dari git yang terinstall dan untuk mengkonfirmasi jika proses instalasi berjalan mulus :)

Untuk mempelajari git ada baiknya kita buat sebuah studi kasus, pertama-tama kita buat folder baru untuk projek kita dan kita beri nama latihan-git. Anda bisa melakukannya melalui aplikasi Windows Explorer/File Manager/Finder namun kali ini untuk mengasah kemampuan Terminal/Command Promp Anda silahkan ketikkan perintah berikut:

mkdir latihan-git

setelah folder latihan-git dibuat, kita navigasikan terminal ke dalam folder tersebut dengan mengetikkan peritah:

cd latihan-git

### Git Init

Agar projek kita dapat diatur oleh git, maka kita perlu melakukan inisiasi git terlebih dahulu, caranya dengan mengetikkan perintah :

git init

Perintah tersebut akan membuat folder .git dan didalamnya berisi file-file yang akan digunakan oleh Git untuk mengatur dan mengontrol project kita.

### Git Status

Untuk mengetahui status dari git, ketikkan perintah :

git status

Anda akan mendapatkan keterangan seperti berikut:

On branch master
    
Initial commit

nothing to commit (create/copy files and use "git add" to track)

Dari sana kita bisa mengetahui bahwa kita berada dalam branch master, dan kita telah melakukan initial commit, mengenai branch dan commit semuanya akan saya bahas nanti.

Sekarang mari kita buat file baru, misalkan buat file index.html lalu tambahkan kode berikut ke dalamnya

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Belajar Git</title>
</head>
<body>
    <p>Hello Git</p>
</body>
</html>

### Git Add

Jika anda mengetikkan kembali perintah git status maka yang anda dapatkan kurang lebih seperti berikut :

On branch master
    
Initial commit

Untracked files:
  (use "git add .." to include in what will be committed)

    index.html

nothing added to commit but untracked files present (use "git add" to track)

Dari informasi diatas kita mendapatkan informasi bahwa Anda file baru yang belum terlacak. Kita perlu menambahkan file tersebut ke dalam git agar dapat dilacak perubahan-perubahan yang terjadi. Untuk itu anda dapat mengetikkan perintah:

git add index.html

Dengan demikian anda telah menambahkan file index.html kedalam git agar bisa dimonitor/diawasi nantinya. Dan jika anda kembali mengetikkan git status yang akan anda dapatkan adalah:

Changes to be committed:
    (use "git rm --cached .." to unstage)

    new file:   index.html

### Git Commit

Anda telah menambahkan file baru, namun anda belum melakukan commit. Oke, kembali ke contoh kasus dalam pembuka artikel ini, commit merupakan istilah untuk menandai terhadap perubahan yang telah anda lakukan, dalam contoh sebelumnya kita menandainya dengan tanggal dan keterangan singkat. Nah untuk menandai setiap perubahan yang telah anda lakukan dan anda ingin agar git mengingatnya Anda harus melakukan commit terlebih dahulu. Untuk melakukan commit ketikkan perintah berikut:

git commit -m "Added index.html"

Dalam perintah diatas harus disertakan juga pesan commit, tanda -m digunakan untuk menambahkan pesan commit dan teks selanjutnya adalah pesan commit kita yakni "Added index.html". Jika semau anda lakukan dengan benar maka anda akan mendapatkan keterangan seperti berikut:

\[master (root-commit) 0181f7b\] Added index.html
 1 file changed, 10 insertions(+)
 create mode 100644 index.html

## Branch

Misalkan anda ingin menambahkan suatu fitur, namun anda tidak mau kode yang ada sekarang rusak karena fitur yang akan anda tambahkan masih belum stabil, Dalam Git anda dapat membuat branch terlebih dahulu. Branch ini bisa diartikan sebagai cabang dari branch master. segala perubahan yang anda lakukan pada branch yang anda buat tidak akan berpengaruh pada branch lainnya.

Sebagai contoh, kita buat branch dengan nama branch "fix-css" dengan mengetikkan perintah:

git branch fix-css

Jika perintah dijalankan dengan benar maka ketika anda mengetikkan perintah git branch akan muncul branch-branch yang telah dibuat.

   fix-css
\*   master

tanda Bintang menandakan bahwa anda sedang bekerja pada branch master, untuk berpindah ke branch yang baru saja dibuat (fix-css) ketikkan perintah berikut:

git checkout fix-css

Jika peritah di atas benar, maka akan ada pemberitahuan seperti berikut:

Switched to branch 'fix-css'

Sekarang kita coba buat file baru, misalnya tambahkan file style.css lalu lakukan perintah git add dan git commit dengan pesan commit "Added style.css fix". Selanjutnya coba berpindah kembali ke branch master, dan perhatikan bahwa file style.css tidak akan anda temukan karena kita membuatnya di branch fix-css. Cobalah untuk berpindah ke branch fix-css dan bisa anda lihat file style.css akan muncul kembali.

Jika Anda merasa file style.css ini sudah siap dimasukkan ke branch master, Anda bisa melakukan merge. Merge berarti menggabungkan beberapa perubahan yang terdapat antar branch. Untuk kasus ini kita akan melakukan merging branch fix-css pada branch master dengan mengetikkan perintah

git merge master fix-css

Semua yang telah dijelaskan diatas adalah perintah-perintah dasar dalam penggunaan Git. Agar source kode yang anda buat dapt dilihat dan dikerjakan pula oleh orang lain Anda memerlukan server untuk menyimpan source kode Anda dan menginstall git diserver tersebut. Dengan demikian orang lain dapat melakukan cloning source kode dan melakukan perubahan masing-masing.

## Github

Github merupakan situs sharing code dan menggunakan git sebagai SCM-nya. Mungkin Anda pernah mendownload beberapa library/source code dari situs ini. Kini anda tahu mengapa kebanyakan source code dapat anda temui di github.

[![GitHub adalah situs hosting untuk project GIT](/assets/img/github.png)](https://picasaweb.google.com/lh/photo/tqvrk-4DSomMK25bQWReoRU8Zk-mUyRgJWkVqUs0yrw?feat=embedwebsite)

GitHub adalah situs hosting untuk project GIT

Adanya github ini memungkinkan orang lain dapat ikut serta menjadi kontributor dari projek anda, mereka dapat melakukan cloning, merubah, menambahkan kode dan jika perlu melakukan pull request agar pemilik source code dapat mempertimbangkan dan menambahkan kode hasil kontribusi orang lain.

## Aplikasi Berbasis GUI

Untuk anda yang tidak terbiasa dengan terminal, ada banyak sekali aplikasi GIT client yang tersedia, fitur yang ditawarkanpun beragam. Namun yang paling membantu adalah adanya fitur compare, artinya anda dapat membandingkan kode yang baru dengan kode terakhir kali anda commit. Berikut ini salah satu contoh aplikasi GIT client berbasis GUI yang paling sering digunakan

### SourceTree

SourceTree tersedia untuk sistem operasi Windows dan Mac, anda bisa mendownloadnya di situr resminya [http://www.sourcetreeapp.com/](http://www.sourcetreeapp.com/)

![Tampilan SourceTree aplikasi untuk GIT](/assets/img/sourcetree.png)

Tampilan SourceTree aplikasi untuk GIT

### SmartGIT

SmartGIT tersedia untuk sistem operasi Windows, Linux dan Mac anda bisa menggunakannya secara gratis atau jika anda ingin menggunakannya untuk perusahaan anda silahkan upgrade ke versi premiumnya. Download SmartGIT di [http://www.syntevo.com/smartgithg/](http://www.syntevo.com/smartgithg/)

![Tampilan aplikasi SmartGIT, aplikasi untuk GIT](/assets/img/smartgit.png)

Tampilan aplikasi SmartGIT, aplikasi untuk GIT

### GitHub Desktop

Jika anda menggunakan GitHub sebagai tempat penyipanan project anda, GitHub juga merilis aplikasi untuk desktop yang tersedia untuk Windows, Linux dan Mac. Semua fitur GitHub sudah terintegrasi dalam aplikasi ini. Pun jika anda tidak menggunakan GitHub, anda masih bisa menggunakannya untuk project non GitHub anda. Download aplikasinya disini [https://desktop.github.com/](https://desktop.github.com/)

![Tampilan Aplikasi GitHub Desktop](/assets/img/github-mac.png)

Tampilan Aplikasi GitHub Desktop, aplikasi untuk GIT

Gak ada yang menarik? coba cari rekomendasi aplikasi berbasis GUI lainnya di [http://git-scm.com/downloads/guis](http://git-scm.com/downloads/guis)

## Tutorial Interaktif

Agar lebih mudah memahami git, coba tutorial interaktif dari codeschool yang dihosting di github [https://try.github.io/](https://try.github.io/). Disana anda bisa belajar sekaligus mempraktekkannya langsung.

## Sumber

- [\[Buku\] Getting Good with Git by Andrew Burgess](http://rockablepress.com/books/getting-good-with-git)
- [https://try.github.io/](https://try.github.io/)
- [Github.com](http://github.com)
