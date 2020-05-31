---
title: "Apa itu JSON?"
date: "2012-06-29"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - javascript
  - json
  - xml

categories: 
  - javascript
---

JSON adalah salah satu format yang digunakan untuk pertukaran data antar aplikasi. Format ini relatif ringan, mudah dibaca dan dibuat karena pada dasarnya JSON berbasis javascript. Kepanjangan JSON sendiri adalah Javascript Object Notation.

Sebelum kita membahas JSON lebih dalam mari kita sedikit bercerita tentang teknologi pertukaran data antar web.

## Pertukaran data antar Web

Dulu masih jarang ada Web yang dapat saling bertukar data dengan web lainnya seperti halnya facebook yang dapat saling bertukar data dengan web pihak ketiga atau bahkan aplikasi pihak ketiga. Namun setelah kehadiran XML sebagai format pertukaran data antar aplikasi (web/desktop) semuanya bukan tidak mungkin lagi untuk dilakukan.

Ya, sebelum adanya JSON, XML lah yang biasa digunakan untuk saling bertukar data dan hingga saat ini XML masih digunakan seperti pada RSS Feed yang mungkin menjadi santapan anda sehari-hari. XML sendiri adalah kependekan dari eXtensible Markup Language, jika anda senang "bercengkrama" dengan HTML anda akan familiar dengan XML, hanya saja tag-tag yang ada adalah buatan anda sendiri. Kira-kira beginilah format penulisan XML :

```
<phonebook>
    <contact>
        <name>Rian Ariona</name>
        <phone>+628572182XXXX</phone>
        <address>Bandung</address>
    </contact>

    <contact>
        <name>John Doe</name>
        <phone>+169572582XXXX</phone>
        <address>Los Angeles</address>
    </contact>

    <contact>
        <name>George</name>
        <phone>+196252145XXXX</phone>
        <address>Kanada</address>
    </contact>
</phonebook>
```

Sangat mudah untuk dimengerti bukan, dan inilah format yang sering digunakan dalam pertukaran data suatu web.

Oh ya, kalau Anda masih asing dengan HTML & CSS dan ingin mempelajari keduanya, saya telah menulis ebook tutorial HTML & CSS yang bisa anda download secara gratis di sini [/ebook-belajar-html-dan-css/](/ebook-belajar-html-dan-css/)

## XML Bukanlah Satu-satunya

Namun kini, telah hadir JSON sebagai format baru untuk pertukaran data web. JSON adalah kependekan dari JavaScript Object Notation. Penulisan format data menggunakan JSON sangatlah singkat karena menggunakan notasi-notasi javascript seperti kurung siku \[\] dan kurung kurawal {}. Jika kita konversi data XML di atas ke dalam format JSON, kira-kira menjadi seperti berikut :

```
{
    "phonebook" : {
        "contact":[
        {
            "name":"Rian Ariona",
            "phone":"+628572182XXXX",
            "address":"bandung"
        },{
            "name":"John Doe",
            "phone":"+169572582XXXX",
            "address":"Los Angeles"
        },{
            "name":"George",
            "phone":"+196252145XXXX",
            "address":"Kanada"
        }
        ]
    }
}
```

Dan berikut ini adalah contoh penggunaan JSON dalam HTML menggunakan javascript:

```html
<!DOCTYPE HTML>
<html>
<head>
    <title>JSON</title>
    <script>
        var person={
            "phonebook" : {
                "contact":[
	                {
	                    "fname":"Rian Ariona",
	                    "phone":"+628572182XXXX",
	                    "address":"bandung"
	                },{
	                    "fname":"John Doe",
	                    "phone":"+169572582XXXX",
	                    "address":"Los Angeles"
	                },{
	                    "fname":"George",
	                    "phone":"+196252145XXXX",
	                    "address":"Kanada"
	                }
                ]
            }
        }

        for(i=0;i");
            document.writeln(person.phonebook.contact[i].phone +" ");
            document.writeln(person.phonebook.contact[i].address +" ");
        }
    </script>
</head>
<body>
    
</body>
</html>
```

Dari kode diatas kita melakukan perulangan untuk pengambilan data-data yang terdapat di dalam objek berformat json lalu menampilkan semua data tersebut secara berurutan.

## Simple & Fast

Karena kesederhanaan penulisan JSON, ukuran file yang dihasilkanpun menjadi lebih ramping dibandingkan XML (karena terus mengulangi kata yang sama dalam tag-tag yang digunakan). Hal ini berimbas pada kecepatan loading transfer data, pertukaran data JSON lebih cepat jika dibandingkan dengan XML.  
Oleh karena itu banyak situs-situs besar yang menggunakan JSON sebagai format pertukaran data. Sebagai contoh, twitter menyediakan API untuk digunakan pada situs pihak ketiga atau aplikasi pihak ketiga misalnya twitter client (tweetdeck dll). Data yang dikirimkan dari hasil request berupa data berformat JSON. Contoh data yang akan di dapat bisa anda lihat disini [https://dev.twitter.com/docs/api/1/get/statuses/home\_timeline](https://dev.twitter.com/docs/api/1/get/statuses/home_timeline "Contoh Twitter API")

![JSON adalah format data yang digunakan oleh Tweetdeck untuk mengambil data dari twitter](/assets/img/tweetdeck.jpg)

Tweetdeck menggunakan Twitter API dan Facebook API untuk mengambil data

## JSON vs XML

Mengingat kedua format tersebut biasa digunakan dalam pertukaran data, mari kita bandingkan kedua format tersebut dilihat dari beberapa aspek.

### Format Penulisan

Format penulisan XML sangatlah mudah untuk dipahami, apalagi bagi anda penggemar Markup Language seperti HTML, lalu bagaimana dengan JSON? terkadang saya pribadi sering mengalami kesulitan memahami format json ini jika tidak ditulis dengan benar (tanpa indentasi). Namun pada akhirnya tergantung pada penggunanya sendiri, jika penggunanya lebih familiar dengan javascript mungkin pembacaan format JSON dirasa sangat mudah.

### Ukuran File

Banyaknya karakter yang digunakan dalam sebuah file akan mempengaruhi besarnya file yang dihasilkan. Karena XML adalah Markup language, pastinya terdapat kata-kata yang sama pada setiap tag yang digunakan. Berbeda dengan JSON yang hanya menggunakan tanda kurung kurawal sebagai pembeda data-datanya sehingga ukuran file JSON lebih kecil dibandingkan XML. Namun jika keduanya telah dicompress sebelum dikirimkan ukurannya tidak jauh berbeda.

### Kecepatan Parsing

Parsing adalah proses pengenalan bagian-bagian terkecil dari suatu dokumen XML/JSON dan Proses parsing ini berlangsung didalam browser. Proses parsing dokumen JSON lebih sederhana, yakni dengan menggunakan fungsi javascript eva() sementara XML menggunakan XMLHttpRequest. Berdasarkan survey JSON lebih unggul dalam proses parsing ini.

## Kesimpulan

Keberadaan JSON sebagai format pertukaran data baru tidak serta merta menghapus keberadaan XML yang sudah menjadi pendahulunya. Keduanya memiliki kelebihan dan kekurangan. Namun kini JSON telah didukung oleh berbagai bahasa pemrograman (proses parsing) sehingga memungkinkan penggunaan JSON lebih ramai dibandingkan dengan XML kedepannya. Pada akhirnya programmer sendirilah yang menentukan, apakah pakai JSON atau XML?
