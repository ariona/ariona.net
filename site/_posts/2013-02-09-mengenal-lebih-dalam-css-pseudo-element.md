---
title: "Mengenal lebih dalam CSS Pseudo Element"
date: "2013-02-09"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - after
  - before
  - element
  - first-letter
  - first-line
  - pseudo

categories: 
  - html-css
---

CSS Pseudo Element bisa diartikan sebagai Elemen/Tag "boongan". Karena dengan menambahkan pseudo elemen seolah olah kita menambahkan elemen atau suatu tag baru di dalam tag yang kita beri style.

Ada 4 pseudo Element yang dikelompokkan menjadi dua bagian, yang pertama pseudo element :before dan :after dan kedua pseudo elemen :first-letter dan :first-line.

## CSS Pseudo Element :before dan :after

Pseudo element ini akan menambahkan content sebelum (:before) atau sesudah element (:after). Misalnya saya mempunyai sebuah tag h1 lengkap dengan isinya :

```html
<h1>Saya berada dalam Heading Level 1</h1>
```

Lalu dalam CSS saya tambahkan Pseudo element `:before` dan mengisi kontennya dengan kata "sebelum" :

```html
h1:before {
    content : "Konten Sebelum ";
    background : #ddd;
    text-shadow :white;
}
```

Jika anda lihat hasilnya dalam browser anda akan melihat kata "sebelum " ditambahkan sebelum isi dari h1. Namun jika anda coba klik kanan lalu menginspeksinya, anda tidak akan menemukan teks "sebelum" dalam kode html. Itulah mengapa disebut dengan pseudo element karena memang seperti ada element padahal tidak ada.

![CSS Pseudo Element: Inspeksi](/assets/img/inspect.png)

Begitu juga dengan `:after`, namun berbeda posisi penempatannya. Saya tambahkan juga pseudo element `:after` pada contoh di atas.

```html
h1:after{
    content : "Konten sesudah";
    background : #444;
    color : white;
}
```

Jika saya ilustrasikan `:before` dan `:after` ini dalam code HTML kira-kira seperti berikut :

![CSS Pseudo Element: Ilustrasi Pseudo Element](/assets/img/illustration.gif)

Saya posisikan pseudo elemen ini di dalam tag yang bersangkutan karena kita bisa amati bahwa pseudo elemen ini mewarisi style dari elemen yang diberi pseudo elemen. Anda dapat memperlakukan (baca:memberi style) pseudo element ini layaknya elemen/tag HTML nyata.

## APA SAJA YANG BISA DITULIS DI DALAM CONTENT?

Selain teks biasa seperti saya contohkan di atas, sebenarnya anda dapat mengisi property content dengan menggunakan beberapa fungsi seperti `url()` untuk memasukkan gambar, `attr(nama atribut)` untuk mengambil nilai dari atribut tertentu dan `counter()` serta `counters()` untuk penomoran (layaknya ordered list).

Saya contohkan pengisian content dengan nilai dari suatu atribut, dimisalkan saya mempunyai sebuah tag `pre` dengan class html seperti berikut :

```
<pre class="html">bla..bla..bla</pre>
```

Lalu saya beri pseudo element :before dengan content diambil dari atribut class :

```html
pre:before{
    content : "Kode "  attr(class) " :";
}
```

Perhatikan juga bahwa saya menambahkan teks "kode " dan " :", artinya anda bisa menggabungkan nilai dari content tersebut. Hasilnya adalah seperti berikut :

![Content dari Atribut](/assets/img/attr.png)

## :first-letter dan :first-line

Berbeda dengan :before dan :after yang fungsinya untuk menyisipkan content. `:first-letter` dan `:first-line` seolah-olah memberikan tag extra pada huruf pertama (first-letter) atau pada baris pertama (first-line).

Penggunaan `:first-letter` biasanya untuk membuat efek dropcap (itu loh huruf pertama yang lebih besar yang sering ditemui di koran-koran).

Berikut ini contoh penggunaan first-letter pada sebuah paragraf :

```html
p:first-letter{
    font-size : 300%;
    font-family: "Monotype Corsiva";
        float : left;
        margin-right : 20px;

}
```

![CSS Pseudo Element: Dropcap](/assets/img/first-letter.png)

Berbeda dengan pseudo element sebelumnya, property yang bisa diterapkan pada `:first-letter` dibatasi pada :

- font properties
- ‘text-decoration’
- ‘text-transform’
- ‘letter-spacing’
- ‘word-spacing’
- ‘line-height’
- ‘float’
- ‘vertical-align’ (only if ‘float’ is ‘none’)
- margin properties
- padding properties
- border properties
- color property
- background properties

Sedangkan untuk property yang bisa diterapkan pada `:first-line` dibatasi pada :

- font properties
- color property
- background properties
- ‘word-spacing’
- ‘letter-spacing’
- ‘text-decoration’
- ‘vertical-align’
- ‘text-transform’
- ‘line-height’

![CSS Pseudo Element: First-line](/assets/img/first-line.png)

## CSS PSEUDO ELEMENT DALAM CSS3

Ada sedikit perubahan dalam spesifikasi CSS3, yakni setiap pseudo element harus menggunakan double colon atau titik duanya ditulis dua kali seperti `::before`, `::after`. (Sumber:[http://www.w3.org/TR/selectors/#pseudo-elements](http://www.w3.org/TR/selectors/#pseudo-elements "CSS3 Pseudo-Element Specs"))

Ini dimaksudkan untuk membedakan antara pseudo class dengan pseudo element. Tapi merujuk pada kompatibilitas dengan browser lama seperti IE7 yang menggunakan spec CSS2 maka penggunaan single colon sudah cukup mengingat browser modern mampu mendeteksinya sebagai pseudo element secara otomatis.

## IMPLEMENTASI DALAM DESAIN WEB

Banyak sekali implementasi yang dapat anda lakukan dengan bantuan pseuso element ini, seperti membuat [efek shadow](/bermain-main-dengan-css3-box-shadow/ "Bermain-main dengan CSS3 : Box-shadow"), efek callout (balon suara), tooltip, [menambahkan efek clip](/how-to-add-a-paper-clip-on/ "How to add a paper clip on an element") dan masih banyak lagi tergantung dari kreatifitas yang anda miliki.

![Efek Shadow](/assets/img/lengkungtengah.jpg) ![Paper Clip](/assets/img/demo.png)

## KESIMPULAN

Pseudo elemen sangat efektif dalam kasus-kasus tertentu sehingga kita tidak perlu menambahkan tag extra dalam HTML. Pada tutorial selanjutnya saya akan bahas implementasi pseudo element :before dan :after dalam pembuatan CSS Tooltip, So stay tuned!

## SUMBER :

- [http://nicolasgallagher.com/an-introduction-to-css-pseudo-element-hacks/](http://nicolasgallagher.com/an-introduction-to-css-pseudo-element-hacks/ "CSS Pseudo Element Hack")
- [http://www.w3.org/wiki/CSS/Selectors#Pseudo-elements](http://www.w3.org/wiki/CSS/Selectors#Pseudo-elements "w3.org Wiki about CSS Pseudo Element")
- [http://www.w3.org/TR/selectors/#pseudo-elements](http://www.w3.org/TR/selectors/#pseudo-elements "CSS3 Pseudo-Element Specs")
