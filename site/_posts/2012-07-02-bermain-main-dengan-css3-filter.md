---
title: "Bermain-main dengan CSS3 : Filter"
date: "2012-07-02"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - bermain-main-dengan-css3
  - css3
  - filter

categories: 
  - html-css
---

Yang terbaru dari CSS3 adalah property Filter. Kini anda dapat menerapkan berbagai efek seperti sepia, grayscale, blur, brightness, contast dan lain-lain pada setiap Element HTML! sekali lagi, pada setiap Element.

[Demonstrasi](http://demo.ariona.net/filter/index.html "Demonstrasi")[Download](http://demo.ariona.net/filter/Bermain-main%20dengan%20CSS3%20filter-www%2Cariona.net.zip "Download")

Jika sebelumnya kita hanya bisa menerapkan efek-efek di atas dalam photoshop lalu meng-exportnya menjadi sebuah gambar, namun kini Anda bisa melakukannya langsung lewat CSS3. Property ini diajukan oleh tim Webkit. Jadi, sampai saat artikel ini dibuat property ini hanya dapat digunakan di browser berbasis webkit terbaru.

Sebelum saya membahas setiap filter, mari kita buat objek percobaan kita berupa deretan gambar-gambar yang masing-masing akan diberi filter nantinya.

## HTML

```html


    
        
        Filter: Blur
    
    
        
        Filter: Grayscale
    
    
        
        Filter: Contrast
    
    
        
        Filter: Brightness
    
    
        
        Filter: Invert
    
    
        
        Filter: Saturate
    
    
        
        Filter: Hue-rotate
    
    
        
        Filter: Sepia
    

```

Pada markup di atas saya menggunakan beberapa tag HTML5 seperti figure, dan figcaption untuk penjelasan tag-tag tersebut silahkan kunjungi w3schools.com. Untuk gambar, anda dapat menggunakan gambar yang terdapat di PC anda atau download Demonstrasi artikel ini.

## CSS

Kita berikan style-style dasar untuk layouting :

```html

body{
    font-family:"segoe ui",calibri,arial,sans-serif;
    background:whitesmoke;
    text-align:center;
}
#wrapper{
    width:960px;
    margin:0 auto;
    overflow:hidden; /*  Solusi floating, klik untuk baca tutorialnya */
}
figure{
    float:left;
    border-radius:2px; /* Klik untuk membaca tutorialnya */
    padding:10px;
    box-shadow:0 2px 5px rgba(0,0,0,.1); /* Klik untuk baca tutorial */
    margin:10px;
    background:white;
}
figcaption{
    text-align:center;
}
figure img{
    -webkit-transition:-webkit-filter .5s ease-in-out; /* baca tutorialnya disini */
}
```

Jika kita coba tampilkan dalam browser, kira-kira tampilannya seperti berikut :

![Bermain-main dengan CSS3 : Filter](/assets/img/preview.jpg)

Selanjutnya kita masuk pada property-property yang menjadi topik utama artikel ini, **CSS3 Filter**.

### Blur

Filter blur, seperti yang sudah anda ketahui, berfungsi untuk membuat gambar atau element menjadi blur, perhatikan cara penggunaan property filter blur berikut :

```html

.blur:hover img{ 
    -webkit-filter:blur(2px);
}
```

(tambahkan kode di atas ke dalam file CSS anda) Yang perlu diperhatikan dari contoh di atas adalah property `-webkit-filter`, kemudia valuenya adalah `blur(2px)`. -webkit-filter adalah property untuk menambahkan filter pada element, kemudian blur adalah fungsi filter blur dan besar nilai radiusnya berada di dalam kurung yakni 2px. Sekarang cobalah untuk meng-hover/meletakkan cursor diatas gambar pertama dan perhatikan apa yang terjadi.

![CSS3 Filter blur](/assets/img/blur.jpg)

### Grayscale

Filter kedua ini berfungsi untuk mengubah element menjadi hitam putih.

```html

.grayscale:hover img{
    -webkit-filter:grayscale(100%); 
}
```

Untuk nilai grayscale anda dapat bermain-main dengan nilai 0% hingga 100%(full grayscale).

![CSS3 filter grayscale](/assets/img/grayscale.jpg)

### Contrast

Filter ketiga adalah Contrast perhatikan kode berikut :

```html

.contrast:hover img{ 
    -webkit-filter:contrast(20%); 
}
```

Seperti grayscale anda dapat bermain-main dengan nilai 0% sampai 100% untuk mengatur ke-contrast-an suatu gambar/element. _"Sebagian besar nilai dari filter menggunakan satua % kecuali untuk hue-rotate"_

![CSS3 filter Contrast](/assets/img/contrast.jpg)

### Brightness

Perhatikan dan tambahkan kode CSS berikut untuk mengatur brightness/Kecerahan pada element.

```html

.brightness:hover img{ 
    -webkit-filter:brightness(20%); 
}
```

![CSS3 Filter Brightness](/assets/img/brightness.jpg)

### Invert

Filter selanjutnya adalah Invert, filter ini akan merubah seluruh warna element menjadi kebalikannya, bayangkan saja film negatif.

```html

.invert:hover img{ 
    -webkit-filter:invert(100%); 
}
```

![CSS3 Filter Invert](/assets/img/invert.jpg)

### Saturate

Filter Saturate berfungsi untuk mengatur kekuatan warna dari gambar/element.

```html

.saturate:hover img{ 
    -webkit-filter:saturate(40%);
}
```

![CSS3 Filter Saturate](/assets/img/saturate.jpg)

### Hue-rotate

Filter HUE ini berfungsi untuk mengatur nilai HUE dari suatu element, seperti disebeutkan sebelumnya, satuan yang digunakan adalah deg.

```html

.hue-rotate:hover img { 
    -webkit-filter:hue-rotate(40deg) ;
}
```

![CSS3 Filter hue-rotate](/assets/img/hue-rotate.jpg)

### Sepia

dan yang terakhir adalah filter sepia yang akan membuat gambar/element menjadi kekuningan seperti foto jaman dulu.

```html

.sepia:hover img { 
    -webkit-filter:sepia(90%); 
}
```

![CSS3 filter Sepia](/assets/img/sepia.jpg)

## Kesimpulan

That's All, save pekerjaan anda dan silahkan buka di browser chrome terbaru (19), hover salah satu gambar dan perhatikan apa yang akan terjadi. Yang perlu anda ingat adalah Property ini masih sangat baru dan hanya didukung oleh browser berbasis webkit seperti chrome (19+) dan Safari terbaru.
