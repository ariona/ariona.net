---
title: "5 Aplikasi Web Server Pilihan Untuk Perangkat Android Anda"
date: "2012-10-11"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - android
  - portable
  - web-server

categories: 
  - review
---

Bukan tidak mungkin merubah perangkat Android yang anda miliki menjadi sebuah web server yang mampu menjalankan PHP, MySQL atau sekedar menyediakan service HTTP sebagai media transfer data.

Misalnya anda ingin mengadakan training tentang web dan ingin seluruh peserta terhubung ke dalam server anda dan membuka halaman web yang telah anda siapkan. Aplikasi ini mungkin bisa menjadi solusi anda. karena handphone/tablet Android anda bisa jadi web server yang akan melayani request dari peserta tersebut. Mudah dan Portable bukan?

Sebagian aplikasi juga memiliki fitur beragam, mulai dari pembuatan web-server, DNS-server sampai ftp-server Atau bahkan ada yang bisa sudah bisa menjalankan PHP, MySQL dan PHPMyAdmin.

Berikut ini adalah daftar aplikasi Android yang berfungsi untuk merubah perangkat Android anda menjadi web server.

## [kWS-Android Web Server (Gratis & Berbayar)](https://play.google.com/store/apps/details?id=org.xeustechnologies.android.kws&feature=search_result)

![kWS Web Server](/assets/img/kWS.png)

Server ringan yang hanya bisa melayani web statis saja. tidak dapat menjalankan PHP & MySQL.

## [Servers Ultimate (Gratis & Berbayar)](https://play.google.com/store/apps/details?id=com.icecoldapps.serversultimate&feature=search_result)

![Servers Ultimate](/assets/img/Server%2520Ultimate.jpg)

Servers Ultimate adalah aplikasi dengan modul paling lengkap. aplikasi ini bisa membuat berbagai macam server seperti DLNA,DNS,DDNS,Email,FTP,IRC,Proxy,SMS,SSH,Telnet,Test,Time,Web, dab WebDAV server. Namun sayang, tidak ada modul untuk PHP dan MySQL. Versi free hanya bisa membuat dua server saja.

## [Web Server Ultimate (Gratis & Berbayar)](https://play.google.com/store/apps/details?id=com.icecoldapps.webserverultimate&feature=search_result)

![Web Server Ultimate](/assets/img/Web%2520Server%2520Ultimate.jpg)

Versi lite dari server ultimate yang hanya berfungsi sebagai Web Server. sama halnya dengan kWS.

## [Bit Web Server (PHP,MySQL,PMA) (Berbayar)](https://play.google.com/store/apps/details?id=com.andi.serverweb&feature=search_result)

![Bit Web Server](/assets/img/Bit%2520Web%2520Server.jpg)

Seperti yang tertera dalam nama Aplikasi tersebut, Bit Web Server sudah mampu menjalankan PHP, MySQL dan PHPMyAdmin. Namun saya aplikasi ini berbayar sehingga saya belum sempat mengujinya. :'(.

## [KSWEB - server + PHP + MySQL (Trial)](https://play.google.com/store/apps/details?id=ru.kslabs.ksweb&feature=search_result)

![KSWEB](/assets/img/KS%2520Web%2520Server.png)

Sama halnya dengan Bit Web Server, KSWEB mampu menjalankan PHP & MySQL. Versi ini adalah versi trial, jadi anda hanya bisa menggunakannya selama 5 hari. Untuk bisa menggunakannyapun memerlukan koneksi internet. namun pada versi berbayarnya semua kekurangan tersebut tidak ada.

## Cara Penggunaan

Setelah anda install salah satu aplikasi server tersebut, selanjutnya saya jelaskan secara singkat bagaimana cara penggunaan aplikasi web server ini. Disini saya akan mendemonstrasikan kWS Web Server.

### Aktifkan Portable Hotspot

Agar client dapat terhubung ke Web Server kita, maka disini saya gunakan fitur Portable Hotspot yang terdapat dalam Android. Portable hotspot akan merubah perangkat Android anda menjadi Hotspot, sehingga pengguna lain dapat terhubung ke perangkat android anda. Untuk mengaktifkan portable Hotspot anda bisa mengaktifkannya di menu settings.

### Setting kWS Web Server

Jalankan kWS Web Server yang sudah terinstall, tekan tombol menu dan pilih "Settings", berikut penjelasan untuk masing-masing option yang harus/perlu anda dirubah :

![Setting Page 1](/assets/img/Screenshot_2012-10-10-22-16-34.png)

- #### Home Directory
    
    Opsi ini berfungsi untuk menentukan lokasi default/utama yang akan dikunjungin oleh client ketika membuka alamat IP server. seperti halnya web browser, jika tidak ada file index.html maka server akan menampilkan halaman "directory listing"/halaman yang menampilkan seluruh file yang ada pada folder tersebut.
- #### Port
    
    Port adalah nilai portal yang akan digunakan, jika anda tidak mengerti biarkan saja nilainya tersetting menjadi port 8080.
- #### Concurrent Connection
    
    Opsi ini berfungsi untuk menentukan berapa banyak client yang diperbolehkan untuk terhubung ke server anda
- #### Status Notification
    
    Jika diaktifkan, maka dalam notifikasi akan tampil status server web kWS
- #### Directory Index
    
    Tekan opsi ini, lalu beri ceklist pada "Enable Directory Index", agar ketika tidak ditemukan file index.html dalam suatu folder maka halaman directory indexlah yang akan ditampilkan Jika anda tidak bisa mengakses server dan muncul peringatan seperti "FORBIDDEN: No directory listing." berarti anda tidak mengaktifkan "Enable Directory Index" :)

Langkah selanjutnya adalah menekan tombol "Start Server" untuk mengaktifkan server.

![Server Aktif](/assets/img/Screenshot_2012-10-10-22-17-06.png)

Perhatikan log yang muncul tepatnya pada bagian `Host {10.86.84.56} Port {8080}`

, baris tersebut adalah IP Address Server anda beserta port yang digunakan, jadi untuk mengakses Web Server anda ketikkan alamat berikut dalam web browser:

    http://IPADDRESS:PORT

    misalnya

    http://10.86.84.56:8080

berikan alamat IP beserta port yang tertulis disana kepada client yang terhubung ke Hotspot anda.

![Directory Index](/assets/img/directory%2520listing.png)

## Kesimpulan

Saya sendiri sering menggunakan web server ini untuk berbagai keperluan, seperti untuk pembelajaran, sharing file cepat via Wifi. dan masih banyak lagi. Andapun dapat memanfaatkan aplikasi tersebut jika sewaktu-waktu dibutuhkan.

Aplikasi-aplikasi tersebut menggunakan Lighthttpd, server yang didesain khusus untuk perangkat yang memiliki spesifikasi rendah seperti perangkat Android yang rata-rata memiliki spesifikasi standar. Dengan begitu server yang berjalanpun tidak terlalu memakan memory dan tidak membuat battery boros (tergantung dari seberapa aktif/banyak user).
