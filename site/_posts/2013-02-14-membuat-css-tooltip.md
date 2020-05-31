---
title: "Membuat CSS Tooltip"
date: "2013-02-14"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - css
  - css3
  - pseudo-element
  - tooltip

categories: 
  - html-css
---

Jika sebelumnya saya telah membahas secara [mendalam tentang Pseudo-Element](/mengenal-lebih-dalam-css-pseudo-element/), kali ini saya akan mengajak anda untuk mengimplementasikan apa yang telah anda pahami ke dalam kasus nyata, salah satunya yang akan saya bahas disini yaitu pembuatan CSS Tooltip.

Tooltip yang akan kita buat disini murni menggunakan CSS tanpa melibatkan javascript sedikitpun, dan sebagai ilustrasi Anda bisa mencobanya dengan meletakkan cursor anda ke tombol di bawah ini :

Hover Gue Bro!

```
    [data-tip]{
        position:relative;
        cursor: pointer;
    }
    [data-tip]::before, [data-tip]:after { position:absolute; display:none; }
    [data-tip]::before{
        content:"";
        width:0; height:0;
        border-style:solid;
        border-width:5px;
        border-color:black transparent transparent;
        left:20px;
        bottom:100%;
        margin-bottom:-10px;
    }
    [data-tip]::after{
        content:attr(data-tip);
        background:black;
        color:white;
        padding:3px 5px;
        border-radius:3px;
        bottom:100%;
        box-shadow:3px 3px 1px rgba(0,0,0,.2);
        left:0;
        white-space:nowrap;
    }
    [data-tip]:hover::before, [data-tip]:hover::after{ display:block }
```

Menarik bukan? oke, kita mulai dengan mempersiapkan markup HTMLnya terlebih dahulu :

## HTML

Untuk markup kita akan memanfaatkan data atribut dari HTML5, markupnya cukup seperti ini :

<a href="" data-tip="Halo, Saya adalah Tooltip">Hover Gue Bro</a>

Jadi ketika Anda ingin menambahkan tip, anda tinggal menambahkan atribut data-tip dan value diisi dengan teks tooltip yang ingin anda tampilkan. data atribut ini tidak hanya untuk link saja, tapi untuk elemen-elemen HTML lainnya.

## CSS

Masuk ke bagian utama dari tutorial ini, pemberian style. pertama-tama kita beri style terlebih dahulu untuk element yang memiliki atribut data-tip.

\[data-tip\]{
    position:relative;
    cursor: pointer;
}

Selector `[data-tip]` akan memilih seluruh elemen yang mempunyai atribut data-tip dan selanjutnya saya berikan relative position karena kita akan menerapkan _absolute positioning_ pada tooltip kita. Penambahan `cursor:ponter` akan mengubah cursor menjadi pointer ketika kita menghovernya.

Tooltip yang akan kita buat, menggunakan bantuan dari Pseudo-Element `::before` dan `::after.` Begini rencananya, untuk `::before` kita akan menggunakannya untuk membuat bentuk segitiga dan `::after` sebagai penampung untuk tooltip kita. Kita mulai dengan mengatur positioning kedua pseudo element tersebut :

\[data-tip\]::before, \[data-tip\]::after { position:absolute }

Selanjutnya kita buat bentuk segitiga dengan menggunakan teknik border pada Pseudo element `::before` (Pembuatan bentuk segitiga pernah diposting dalam [Posting Harian](/snippet) dengan judul ["Membuat bentuk segitiga dengan CSS"](/snippet/membuat-bentuk-segitiga-dengan-css/))

\[data-tip\]::before{
    content:"";
    width:0; height:0;
    border-style:solid;
    border-width:5px;
    border-color:black transparent transparent;
    left:20px;
    bottom:100%;
    margin-bottom:-10px;
}

Dan untuk isi dari tootip, kita akan masukkan ke dalam pseudo element `::afte`r dengan bantuan fungsi attr untuk mengambil nilai dari atribut dan kita masukkan ke dalam property content.

\[data-tip\]::after{
    content:attr(data-tip);
    background:black;
    color:white;
    padding:3px;
    border-radius:3px;
    bottom:100%;
    box-shadow:3px 3px 1px rgba(0,0,0,.2);
    left:0;
    white-space:nowrap;
}

Penggunaan `bottom:100%` membuat posisi tooltip berada di atas. Sedangkan `white-space:nowrap` membuat teks tooltip ditampilkan satu baris tidak berdasarkan lebar dari element yang memiliki tooltip.

![Tooltip](/assets/img/tooltip-unfinished.png)

Tampilan Tooltip

Sejauh ini tooltip kita sesuai dengan yang kita inginkan, tapi masih belum selesai. Tooltip biasanya muncul hanya ketika kita menghover elemen yang memiliki tooltip. Untuk itu kita sembunyikan terlebih dahulu tooltipnya.

\[data-tip\]::before, \[data-tip\]:after { 
    position:absolute 
    display:none;
}

Dan berikut adalah ketika tooltip di-hover, kita munculkan kembali tooltipnya

\[data-tip\]:hover::before, \[data-tip\]:hover::after{ display:block }

## Kenapa Membuat CSS Tooltip?

Tooltip juga akan muncul ketika ada atribut title pada elemen, dan tooltip yang muncul adalah tooltip native dari operating system. Anda tidak akan bisa memodifikasi tooltip tersebut. Untuk itu kita membuat tooltip kita sendiri dengan CSS. Hasilnya bisa disesuaikan dengan keinginan kita/sesuai dengan desain web kita.

![Perbandingan Native dan CSS Tooltip](/assets/img/compare.gif)

Perbandingan antara Native dan CSS Tooltip

## Kesimpulan

Tanpa perlu menambahkan extra markup kita dapat membuat sebuah tooltip dengan bantuan dari Pseudo-element `::before` dan `::after`. Ini hanyalah sebagian kecil dari pemanfaatan pseudo element. Jauh sebelumnya saya juga pernah membahas mengenai [Box-shadow tingkat lanjut](/bermain-main-dengan-css3-box-shadow/) dengan bantuan Pseudo-element pula.

## Sumber & Inspirasi lainnya

- [http://html5doctor.com/html5-custom-data-attributes/](http://html5doctor.com/html5-custom-data-attributes/)
- [http://css-tricks.com/attribute-selectors/](http://css-tricks.com/attribute-selectors/)
- [http://kushagragour.in/lab/hint/](http://kushagragour.in/lab/hint/)
