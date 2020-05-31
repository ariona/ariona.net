---
title: "Membuat Desain Web Minimalis Dengan Photoshop"
date: "2012-07-27"
tags: 
  - photoshop
  - psd-to-html
  - web-design

categories: 
  - photoshop
---

Sudah lama saya ingin menulis tutorial tentang proses desain web dari awal hingga proses konversi ke HTML & CSS, dan Kali ini saya akan mengajak anda untuk membuat desain web minimalis dengan menggunakan Photoshop. Tutorial ini akan terus berlanjut sampai proses Slicing dan konversi ke HTML & CSS.

Berikut ini adalah desain web minimalis yang saya buat untuk tutorial ini:

[![Screenshot](/assets/img/screenshot.jpg)](https://lh4.googleusercontent.com/-IQQpKozNkB0/UA-zkNcYViI/AAAAAAAABRE/OCo8eAtuft8/s2000/screenshot.jpg) Klik gambar untuk melihat ukuran yang lebih besar.

> "Tutorial ini masuk ke dalam kategori menengah, Anda diharuskan mengetahui dasar-dasar penggunaan / mampu mengoperasikan Adobe Photoshop"

## Persiapan

Sebelumnya saya sudah mempersiapkan beberapa file pendukung untuk pembuatan desain web yang akan kita kerjakan, diantaranya : Action men-_generate_ grid dari [960.gs](http://960.gs) background pattern dari [subtlepattern.com](http://subtlepattern.com), font-font yang dibutuhkan dan beberapa icon yang saya dapatkan dari [iconfinder.com](http://ariona.net/8-search-engine-icon-terbaik). Untuk itu, Download resource di bawah ini sebelum memulai mendesain web dengan photoshop.

[Download Resource](https://www.dropbox.com/s/yiwgij1giwo9w7l/simpel-web-design-resource.zip?dl=0 "Download Resource")

## Install Action

Pertama-tama kita akan menginstall 2 buah file, satu untuk 960.gs dan pattern dari subtlepattern. Setelah anda download file resource, didalamnya terdapat 2 file yang bersangkutan, buka file tersebut dengan photoshop untuk menginstallnya (atau drag and drop ke jendela Photoshop).

[![](/assets/img/files.png "Downloaded Files")](https://lh3.googleusercontent.com/-mFGkAlt3pCo/UBI3bISw9pI/AAAAAAAABT8/2T3vpbrg9FM/s2048/files.png)

## Mempersiapkan Canvas Grid

Kita akan menggunakan sistem grid dari 960.gs sebagai acuan dalam proses pendesaian web yang akan kita kerjakan. Untuk itu dalam jendela action photoshop, Anda akan menemukan folder 960\_GRIDS, klik pada action 12-Column-Grid lalu klik icon "play" untuk menjalankan action.

![Generate 12 Kolom Grid](/assets/img/12kolom.jpg)

Action ini akan membuat grid sistem 12 kolom lengkap dengan garis guides. Canvas yang dibuat tidak cukup tinggi untuk desain web yang akan kita buat, jadi Klik menu image > image size. Kita akan menambah tinggi dari canvas yang kita buat.

![Generated Grid](/assets/img/generated%2520grid.jpg)

Hilangkan tanda Checklist pada "Constrain Proportion" dan Ubah ukuran tinggi menjadi 1100px klik ok untuk mulai merubah ukuran canvas.

![Resize Image](/assets/img/resize.jpg)

## Menyiapkan background

Klik dua kali pada layer background, sebuah dialog akan muncul mengkonfirmasi untuk mengconvert background ini menjadi layer, beri nama background dan klik ok.

![Layer from background](/assets/img/Convert%2520to%2520background.jpg)

Kita akan menambahkan pattern pada layer background ini, Klik icon "Add Layer Styles", lalu pilih "Pattern Overlay..." Pilih pattern dengan nama "Groove Paper" (akan ada di item pattern paling akhir). Klik Ok untuk menutup dialog Style dan kini anda memiliki background dengan pattern halus.

![Add Pattern](/assets/img/pattern-overlay.jpg) ![Pattern](/assets/img/bg-pattern.jpg)

## Membuat Logo

Selanjutnya kita akan membuat logo "Simpel". Klik Ellipse Tool, lalu buatlah lingkaran kecil seperti berikut (kira-kira satu grid) dengan warna `#69ccca` dan ubah nama layer menjadi "logo" (double click nama layer untuk merubah nama layer):

![Buat lingkaran](/assets/img/buat-logo-1.jpg)

Aktifkan "Horizontal Type Tool (T)" ubah font menjadi "Museo Sans" dengan ukuran sedikit lebih besar dari lingkaran yang dibuat sebelumnya dan posisikan di tengah lingkaran seperti pada gambar.

![Tambahkan huruf S](/assets/img/buat-logo-2.jpg)

Klik kanan layer "S" lalu pilih Convert to shape.

![Convert to shape](/assets/img/buat-logo-3.jpg)

Pindah ke Tab Paths lalu klik layer yang ada (S Vector Mask), dan tekan kombinasi tombol Ctrl+C untuk mengcopy shape.

![Copy Path](/assets/img/buat-logo-4.jpg)

Klik layer pada "Layer Mask Thumbnail" pada layer "Logo", lalu tekan tombol CTRL+V untuk mem-_paste_ shape. lalu Klik icon "Substract from shape area". Sekarang anda dapat menghapus layer "S" karena tidak dibutuhkan lagi

![Substract](/assets/img/buat-logo-6.jpg) ![Result substract](/assets/img/buat-logo-7.jpg)

Klik pada layer logo, klik icon "Add layer style" lalu tambahkan "Gradient Overlay", atur optionnya seperti berikut :

![Gradient Overlays](/assets/img/buat-logo-9.jpg) ![Gradient Colors](/assets/img/buat-logo-8.jpg)

Tambahkan juga sedikit Inner shadow :

![](/assets/img/buat-logo-10.jpg)

Teknik ini membuat icon yang kita buat "resizable" tanpa membuat icon pecah. Tambahkan teks "impel"(font:Museo Slab; color:`#69CCCA`, size:48px) dan "Web Development Team" (Font: Georgia, style: Italic, warna `#69CCCA`, size:12px) atur posisinya seperti berikut.

![Add details](/assets/img/buat-logo-11.jpg)

Copy juga layer style yang ada pada layer logo dan paste pada "impel" dan "Web Development Team"

## Membuat menu

Kita tambahkan menu utama untuk web kita, menu ini sederhana saja, hanyalah sederet teks biasa. buat menu menggunakan "Horizontal Type Tool (Tool)" atur warnanya menjadi `#69CCCA`, size:16px. Ketikkan "Home Blog Contact us" dan atur posisinya seperti berikut.

![adding menu](/assets/img/menu.jpg)

## Membuat area Konten Utama

Tahap selanjutnya kita akan membuat background untuk Konten Utama. Dengan menggunakan "Rectangle Tool (U)" buatlah sebuah persegi panjang dengan lebar 960px (dari garis guide terawal hingga terakhir) untuk tinggi disesuaikan, Ubah nama layer menjadi "Konten Utama".

![area konten utama](/assets/img/konten.jpg)

Tambahkan layer style stroke dengan warna `#e0e0e0`, atur optionsnya seperti berikut

[![](/assets/img/main-stroke.png "Main stroke style")](https://lh3.googleusercontent.com/-oWvN1xzv_Fg/UBIwWeNfbgI/AAAAAAAABTU/quflAfN5NWs/s2048/main-stroke.png)

Tambahkan juga drop shadow dengan setting seperti berikut:

[![](/assets/img/drop-shadow-main.png "Drop shadow style for main content")](https://lh4.googleusercontent.com/-mn-KoQYeGp8/UBIwtu23ArI/AAAAAAAABTo/Nggh3gwW8iI/s2048/drop-shadow-main.png)

[//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js](//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js)

(adsbygoogle = window.adsbygoogle || \[\]).push({});

### Membuat pattern untuk ornamen

Untuk mempercantik area konten utama ini, kita akan memberikan sedikit ornamen sederhana. Buat file baru (Ctrl+N) buat ukuran canvas menjadi 200px\*30px.

![Membuat file baru](/assets/img/new-canvas.jpg)

Aktifkan "Rectangle Tool (U)" buat sebuah persegi panjang dengan ukuran 50px dan tinggi 30px. Buat 3 persegi panjang lagi dan susun secara mendatar sehingga memenuhi seluruh canvas.

![tambahkan 4 kotak](/assets/img/stripe1.jpg)

Ubah warna masing-masing persegi panjang dengan warna-warna berikut : `#88CD50`, `#F4ED47`, `#E7913A` dan `#6BCFCD`.

![Penambahan warna](/assets/img/stripe2.jpg)

Terakhir kita akan membuat canvas ini menjadi pattern siap pakai, pertama-tama seleksi semua persegi panjang yang kita buat (tekan CTRL dan klik pada layer lain untuk multiple selection) tekan kombinasi tombol CTRL+E untuk menggabungkan Layer.

![merge layer](/assets/img/stripe3.jpg)

Terakhir Klik menu "Edit > Define Pattern", beri nama "Colorful Stripe".

![define pattern](/assets/img/stripe4.jpg)

Anda bisa menutup dokumen ini karena sudah tidak diperlukan lagi, atau save jika anda memerlukannya.

### Menambahkan Ornamen/Stripe

Kembali aktifkan window desain web kita sebelumnya, Untuk menambahkan ornamen, buat persegi panjang dengan "Rectangle Tool (U)" seperti gambar berikut :

![Add rectangle for stripe](/assets/img/add-rectangle.jpg)

Pastikan layer persegi ini tepat berada di atas layer "Konten Utama", Klik kanan pada layer tersebut lalu pilih "Create Clipping Mask" atur posisinya seperti berikut :

![Clipping Mask](/assets/img/clipping%2520mask.jpg)

Klik icon "Add Layer Styles" lalu pilih "Pattern Overlay", pilih pattern yang kita buat sebelumnya (Pattern paling akhir-biasanya).

![ornamen sederhana](/assets/img/stripe-result.jpg)

### Menyiapkan background untuk footer

Buat persegi panjang dan atur posisinya seperti berikut, pastikan layer ini berada di atas layer "Konten Utama" lalu buat clipping mask seperti pada langkah sebelumnya :

![Add footer background](/assets/img/add-footer.jpg)

Tambahkan "Pattern Overlay" dengan pattern "Chruch".

![Pattern on footer](/assets/img/add-pattern-footer.jpg)

Kita akan memodifikasi bagian tengah dari persegi panjang. Aktifkan "Add Anchor Point Tool" tambahkan tiga buah point tepat di tengah-tengah seperti berikut :

![Adding Point](/assets/img/add-point.jpg)

Aktifkan "Direct Select Tool" lalu tarik point yang di tengah sedikit ke bawah sehingga membentuk segi tiga. Secara default bentuk shape menjadi lengkung, untuk menghilangkan lengkungan tersebut, aktifkan "Convert Point Tool", lalu klik pada tiga point tersebut.

![Move Point](/assets/img/move-point.jpg) ![Convert Point](/assets/img/convert-point.jpg)

Tambahkan Style Inner Shadow, atur optionsnya seperti berikut :

![Add Inner Shadow](/assets/img/add-footer-inner-shadow.jpg)

## Mengisi Konten

Selanjutnya kita akan mengisi area konten ini dengan beberapa element yakni, Heading, Fitur-fitur, Slider dan Testimoni/Quote.

### Heading

Tambahkan teks heading dengan font:"Museo", warna `#248886`, ukuran font: 26px. Ketikkan "We are a professional web developer & web designer team, and here is what we can do for you" (atau gunakan teks sendiri), buat rata tengah dan atur posisinya seperti berikut:

![Add Heading text](/assets/img/heading.jpg)

### Fitur

Kita tambahkan 3 fitur, lebar dari masing-masing fitur adalah 4 Grid (jadi pastikan konten untuk tiap fitur tidak melebihi 4 grid). Tambahkan 3 icon yang disertakan dalam file resource, atur posisinya seperti berikut:

![Add icons](/assets/img/add-icons.png)

Tambahkan judul fitur "Unique & Elegance Design", "HTML5 & CSS3 Templating", dan "Wordpress Theme Development". Atur font menjadi "Museo", warna `#248886` dan ukuran 16px.

![Add Feature Title](/assets/img/add-title.png)

Tambahkan teks deskripsi singkat, anda dapat menggunakan deskripsi anda sendiri atau deskripsi acak seperti : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies". atur posisinya seperti berikut, dan atur font-nya menjadi: "arial", warna:`#555555`, ukuran:11px :

![Add Feature Description](/assets/img/add-desc.png)

Kita tambahkan state ketika salah satu fitur berada dalam posisi hover, dengan menggunakan Ellipse tools buatlah lingkaran dengan ukurang 4 grid (tekan SHIFT ketika membuat lingkaran untuk membuat lingkaran yang proposional). Ubah warnanya menjadi `#B6FAF9` dan atur posisinya di salah satu fitur sebagai background.

![Hover state for feature](/assets/img/hover-state.png)

### Membuat Bayangan Pemisah

Garis pemisah yang akan kita tambahkan berupa shadow/bayangan halus. Untuk membuatnya pertama-tama buat layer baru, beri nama "shadow-separator". Aktifkan Brush Tool, pastikan warnanya hitam, Klik kanan pada canvas dan ubah ukuran master diameter mejadi 700px, pilih type "Soft Round 27px".

![Set Brush size and type](/assets/img/set-brush.png)

Klik pada canvas, tepat ditengah-tengah. Aktifkan "Marque selection Tool", buat seleksi menutup 3/4 lingkaran lalu tekan tombol delete.

![Add on click bruhs](/assets/img/add-black-hole.png) ![Select 3/4 Area](/assets/img/add-selection.png) ![Delete 3/4 selected area](/assets/img/delete-selected.png)

Dengan menggunakan "Move Tool (V)", resize shadow tersebut menjadi seperti berikut dan ubah nilai opacity menjadi 50%.

![Resize Shadow](/assets/img/resize-shadow.png)

### Slider

Slider ini akan menampilkan Slideshow (bisa diisi dengan screenshot-screenshot project yang telah dikerjakan). Tambahkan Judul "Our latest projects", atur ukuran dan warnanya sesuai dengan heading yang kita buat sebelumnya.

![Add Slider Title](/assets/img/slider-title.png)

Buat sebuah persegi panjang dengan lebar 6 Grid dan tinggi kira-kira 200px dengan Rectangle Tool

![](/assets/img/add-rectangle-slide.jpg)

Tambahkan beberapa style seperti gambar berikut:

![Add Drop Shadow](/assets/img/slider-drop-shadow.jpg) ![Add Stroke](/assets/img/stroke-slide.png)

### Testimoni/Quote

Untuk Testimoni kita akan menampilkan testimoni-testimoni dari client yang telah dilayani. Judul dengan ukuran sama dengan Heading "What they say".

![Quote Title](/assets/img/quote-title.png)

Tambahkan, satu buah quote atau gunakan teks acak "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies". Ubah font menjadi :Georgia, style:italic, color `#555`, size:20px atur posisinya seperti berikut.

![Quote Position](/assets/img/quote-position.png)

## Footer

Untuk bagian footer, kita akan menambahkan logo beserta alamat kantor, dan di sebelah kanan kita tambahkan menu lagi. Copy layer "logo" dan teks "imple", buang Gradient overlay (dengan cara di unchecklist atau di drag ke tong sampah di jendela layer), ubah warnanya menjadi `#A7A7A7` dan perkecil ukurannya sedikit.

![Footer logo](/assets/img/logo-footer.png)

Tambahkan teks alamat dengan font:arial, size:11px, color:`#a7a7a7` dan atur posisinya seperti berikut:

![Add an Address](/assets/img/address.png)

Tambahkan menu footer dan atur posisinya di sebelah kanan :

![Add Footer menu](/assets/img/footer-menu.png)

## Mengorganisasi Layer

Jika anda tidak melakukan organisasi layer, mungkin hal ini tidak masalah bagi anda, namun bagaimana jika anda bekerja dengan team dan bukan anda yang melakukan proses slicing? mereka akan kebingungan dengan layer yang acak-acakan. Untuk itu, selalu organisasi layer anda sesuai dengan bagian-bagian yang ada dengan memasukkannya ke dalam folder/set yang bersangkutan.

Klik icon "Create a New Set" (icon bergambar folder yang terdapat di bawah layer window) untuk membuat folder lalu klik dan drag tiap-tiap layer yang bersangkutan pada folder yang sesuai.

Berikut ini adalah organisasi folder yang saya lakukan:

![Organized Layer](/assets/img/organized.png)

## Finising

Jika anda belum menyimpan pekerjaan anda, segera save. Lakukan penyimpanan secara berkala untuk menghindari hal-hal yang tidak diinginkan mengingat listrik di negara kita sering idup mati :D. Berikut ini link download file PSD dari apa yang anda kerjakan di atas.

[Download PSD](https://www.dropbox.com/s/xa0r8nscnmi8zs3/simpel-web-desain.psd?dl=0)

## Kesimpulan

Pada tutorial ini Anda telah membuat desain halaman Utama (homepage). Anda bisa berlatih dengan mengembangkan desain yang sudah ada untuk halaman portfolio, blog dan contact.  
Jika anda kesulitan atau ada yang ingin ditanyakan, jangan sungkan untuk meninggalkan pertanyaan/komentar anda pada box komentar di bawah.

Dalam kategori berbeda (HTML & CSS), kita akan belajar mengkonversi Desain yang kita buat ini menjadi HTML & CSS, jadi selalu kunjungi blognya atau Like page [ariona.net](http://facebook.com/ariona.net), [Follow twitter](http://twitter.com/ariona_rian "Follow ariona_rian") dan berlangganan artikel (Form ada di sidebar). :)
