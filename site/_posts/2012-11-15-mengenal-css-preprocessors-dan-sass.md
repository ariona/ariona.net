---
title: "Mengenal CSS Preprocessors dan SASS"
date: "2012-11-15"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - css
  - css-preprocessors
  - less
  - sass

categories: 
  - html-css
---

CSS adalah bahasa styling untuk HTML, struktur bahasanya yang sederhana, mudah dipahami namun memberikan pengaruh yang sangat besar terhadap tampilan HTML. Namun jika dilihat dari sisi seorang Developer kesederhanaan CSS ini membuat penulisan kodenya tidak efektif.

Bagi seorang developer pasti ingin ada variable untuk menyimpan warna misalnya atau nilai tertentu agar bisa dipergunakan kembali jika diperlukan. Atau mungkin ingin adanya kemampuan untuk membuat sebuah fungsi untuk menghemat waktu dalam penulis beberapa kode yang banyak dalam CSS.

Untuk menyelesaikan permasalahan di atas, muncullah CSS Preprocessor. CSS Preprocessor memberikan kemampuan untuk membuat variabel, Fungsi, dan penulisan CSS yang lebih terstruktur dan pastinya membuat proses Development lebih cepat dan efisien.

![SASS](/assets/img/184834_490231991008517_2021110811_n.jpg) _Syntactically Awesome StyleSheets (SASS)_

Saat ini ada beberapa CSS preprocessor yang paling sering digunakan, diantaranya Less.js dan SASS. Keduanya memeliki struktur kode yang sama jadi jika anda telah memahami salah satunya, pun anda dapat memahami CSS preprocessor yang lainnya. Dalam artikel ini saya akan menjelaskan salah satu CSS Preprocessor saja, yakni SASS. Anda dapat mengunjungi situs SASS di [http://sass-lang.com/](http://sass-lang.com/)

## Instalasi SASS

SASS dibangun dengan menggunakan bahasa pemrograman Ruby, maka dari itu kita membutuhkan Ruby agar kita dapat menjalankan SASS dalam komputer kita. anda bisa mendownload Installer Ruby untuk windows di link berikut :

[Download Ruby Installer for Windows](http://rubyinstaller.org/downloads/)

Setelah anda menginstall Ruby, selanjutnya kita install Modul SASS. Buka Command Prompt di menu Start→All Programs→Accesories→Command Prompt. dan ketikkan kode berikut untuk menginstall SASS:

gem install sass

Pastikan anda masih terkoneksi ke internet, karena perintah ini akan mendownload modul SASS dan menginstallnya.

Jika proses instalasi selesai, anda akan melihat informasi bahwa proses download dan instalasi telah selesai

![Proses Instalasi SASS](/assets/img/cmd-installing-sass.png)

Cara kerja SASS adalah dengan memonitor suatu file/folder yang berisi file .scss/.sass (ekstensi untuk file SASS) dan melakukan _compiling_ menjadi file CSS dari file-file tersebut ketika sebuah perubahan dilakukan.

## Menjalankan SASS

Untuk menjalankan SASS agar memonitor suatu folder _(Misalnya folder untuk projek kita mempunyai nama "project" dan terletak di dalam drive D)_, ketikkan perintah berikut via Command Prompt lalu tekan Enter

sass --watch "D:/project":"D:/project"

Perintah tersebut akan memonitor folder project dari perubahan file scss/sass yang terjadi dan meng-compilenya ke folder yang sama. Perintah dasarnya adalah seperti berikut

sass \[options\] \[Input\] : \[Output\]

![Sass Watching for Changing](/assets/img/sass-watching.png)

Jika sudah, Anda bisa mulai bekerja dengan file .scss dan meminimize command prompt nya. Karena kita tidak akan berurusan lagi dengan Command promptnya. Berikut ini adalah tampilan yang muncul ketika kita melakukan perubahan pada file scss/sass

![Sass Compiling](/assets/img/sass-compiling.png)

Untuk pembuatan file scss sendiri anda tidak perlu menggunakan text editor khusus, cukup gunakan text editor kesayangan anda seperti Sublime Text atau Notepad++ dan melakukan save as dengan extensi .scss.

## Struktur SASS

Bagian ini akan menjelaskan fitur-fitur dari CSS Preprocessor (dalam kasus ini SASS). Kode SASS tidak jauh berbeda dengan CSS namun ada beberapa fitur yang akan membantu anda dan menghemat waktu anda dalam penulisan Kode CSS.

### Variabel

Dalam SASS kita bisa membuat sebuah variabel dengan menggunakan tanda dollar diikuti dengan nama variabel.

$warna\_dasar:#B4D455;
    
body{
    background-color: $warna\_dasar; 
}

Mungkin anda akan bertanya, _Kenapa kita perlu Variable?_ Oke, dengan menggunakan variabel, kita bisa menghemat waktu ketika melakukan perubahan pada CSS. Misalnya seperti ini : "Dalam suatu file CSS kita memiliki 100 lebih property yang memiliki nilai yang sama, dan kita ingin merubah nilai tersebut. Jika dengan CSS biasa anda akan merubahnya satu-satu, atau paling tidak menggunakan fitur Replace (dalam text editor)". Namun dengan variabel, kita tinggal mengganti nilai dari variabel yang bersangkutan. Sederhana bukan?

Andapun dapat melakukan operasi matematika seperti +,-,\*,/ dan % terhadap variabel seperti berikut :

$margin:20px;
    
#box{
    margin:$margin / 2;
}

### Nesting

Misalnya kita biasa menuliskan kode CSS seperti berikut :

ul{
    list-style:none;
    background:#DDDDDD;
}

ul li{
    display:inline;
}

ul li a{
    text-decoration:none;
    color:black;
}

Dengan Aturan Nesting dalam SASS, kita bisa menuliskannya seperti berikut :

ul{
    list-style:none;
    background:#DDDDDD;

    li{
        display:inline;
        
        a{
            text-decoration:none;
            color:black;
        }
    }
}

Lebih hemat, dan lebih terstruktur.

### Mixins

Mixins bisa juga kita sebut dengan Fungsi, sebagaimana fungsi dari sebuah "Fungsi" adalah melakukan beberapa operasi hanya dengan memanggil fungsi yang bersangkutan. Contohnya, ketika kita ingin menerapkan border-radius, maka paling tidak kita akan menulis 5 baris kode untuk border-radius untuk menjaga kompatibilitas dengan browser lama.

#box{
    border-radius:10px;
    -o-border-radius:10px;
    -ms-border-radius:10px;
    -moz-border-radius:10px;
    -webkit-border-radius:10px;
}

Untuk permasalahan seperti ini, kita dapat membuat mixins khusus untuk border-radius seperti berikut :

@mixin border\_radius($radius :3px){
    border-radius: $radius;
    -o-border-radius: $radius;
    -ms-border-radius: $radius;
    -moz-border-radius: $radius;
    -webkit-border-radius: $radius; 
}

`@mixin` adalah kode untuk membuat sebuah mixins (_baca:fungsi_), border\_radius adalah nama mixinsnya dan kita menambahkan property fungsi $radius dengan nilai _defaultnya_3px. Seluruh variabel $radius dalam mixin ini akan diganti dengan nilai yang diberikan dalam property mixins.

Untuk menggunakan mixin tersebut kita gunakan kode @include diikuti dengan nama fungsi.

#box{
    @include border\_radius(30px);
}

Bagaimana? sangat mudah bukan? jadi setiap anda akan menambahkan border-radius, anda cukup menulis satu baris kode saja.

## Kapan Harus Menggunakan CSS Preprocessor?

CSS Preprocessor seperti SASS adalah alat bantu kita sebagai web developer dalam penulisan kode CSS yang lebih terstruktur dan lebih cepat dengan bantuan variabel, mixins atau nesting. Sedangkan untuk implementasinya kita tetap menggunakan file CSS hasil dari _compiling_ sass bukan file .scss/.sass itu sendiri.

file .scss hanya untuk proses pembangunan/development agar lebih mudah ketika ingin melakukan maintenance/perubahan terhadap style. Seperti yang saya sebutkan sebelumnya, kita hanya perlu merubah nilai variabel atau merubah mixins yang telah kita buat.

## Saya benci Command Prompt, Adakah Aplikasi GUInya?

Jika anda merasa tidak nyaman dengan Command Prompt, Anda dapat menginstall aplikasi berbasis GUI seperti [Scout](http://mhs.github.com/scout-app/). Scout adalah aplikasi yang dibangun dengan Adobe Air, jadi untuk menginstallnya anda harus menginstall Adobe Air terlebih dahulu.

[Download Adobe Air](http://get.adobe.com/air/) [Download Scout](http://mhs.github.com/scout-app/)

Pengaturannya sangat mudah, anda tinggal menambahkan folder yang ingin anda monitor, dan mengatur bagaimana output yang dihasilkan. Selanjutnya tinggal menekan tombol play untuk memulai memonitor folder yang bersangkutan.

![Scout](/assets/img/scout.png)

## Kesimpulan

Keberadaan CSS Preprocessor sangat membantu dalam proses Development file CSS, penulisan Kode CSS lebih optimal dengan adanya variabel dan mixins, semua fungsi tersebut membuatnya menjadi lebih _reusable_ dan tentunya akan menghemat waktu anda + tenaga yang dikeluarkan untuk mengetik baris-baris kode yang sama :).

## Sumber Referensi

- [SASS Official tutorial - sass-lang.com](http://sass-lang.com/tutorial.html)
- [Mastering SASS - net.tutsplus.com](http://net.tutsplus.com/sessions/mastering-sass/?search_index=1)
- [Getting Started with SASS - hongkiat.com](http://www.hongkiat.com/blog/getting-started-saas/)
