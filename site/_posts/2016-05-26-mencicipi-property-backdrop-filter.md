---
title: Mencicipi Property backdrop-filter dari Webkit
thumbnail: /site/.vuepress/dist/01-07-2013%25207-28-40.png
---

CSS3 membawa beberapa property yang sangat mendukung untuk pembuatan tampilan User Interface yang unik seperti halnya backdrop-filter yang akan kita bahas dalam artikel ini. Namun ada juga beberapa property unofficial atau tidak resmi dari tiap browser vendor.

Webkit merupakan salah satu vendor sering mengeluarkan spec experiment unofficial, seperti yang akan saya bahas pada tutorial kali ini, backdrop-filter.

Bermula dari redesign radikal IOS 7 dengan gaya Flat yang beda dengan gaya flat lainnya. IOS7 saya rasa lebih ke semi flat karena masih ada nilai-nilai realistic yang dibawa. Salah satu design yang paling saya sukai adalah efek translucent pada beberapa area, seperti area notification dan lockscreen.

![ios7](/assets/img/ios7.jpg)

Efek translucent ini adalah efek blur pada element yang berada dibelakang objek utama. Seperti frosted glass atau kaca es.

Beberapa tahun kemudian, Design language dari IOS7 dibawa ke OS X Yosemite. Dan tentunya efek translucent tadi juga ikut disertakan. Beberapa bulan kemudian team webkit memperkenalkan property backdrop-filter tak hanya untuk mereplikasi efek translucent tapi juga filter-filter lain yang sudah ada pada css3 filter.

## Browser Support backdrop-filter

`backdrop-filter` adalah experiment dari webkit dan sudah diajukan sebagai module CSS Filter Effect. Untuk saat ini hanya Safari dan Chrome yang dapat menampilkan efek ini. Jika anda tidak menggunakan OS X, anda bisa menggunakan Chrome terbaru dan mengaktifkan fitur ini melalui `chrome://flags`.

Ketikkan alamat berikut pada address bar `chrome://flags` , cari opsi `Experimental Web Platform features` dan klik _Enable_ lalu restart Chromenya.

![Chrome Flags Settings](/assets/img/Screen-Shot-2016-05-25-at-10.17.28.png)

Chrome Flags Settings

Halaman `chrome://flags` ini adalah pengaturan-pengaturan experimen dari Google Chrome. Anda bisa mengaktifkan atau mematikan fitur-fitur menarik disana.

## Penggunaan backdrop-filter

Untuk mendemonstrasikan property ini, kita coba buat box sederhana.

```html
<div class="box">
  <h2>Demonstrasi backdrop-filter</h2>
</div>
```

Dan untuk CSSnya:

```css
body{
    height: 100vh;
    background-image: url(http://unsplash.it/1980/1080?random)
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

.box{
    width: 500px;
    height: 300px;
    border-radius: 10px;
    background-color: rgba(255,255,255,.5);
    display: flex;
    align-items: center;
    text-align: center;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    position: relative;
}
```

Pada style diatas, saya berikan background pada body dan membuat tinggi bodynya 100vh. Lalu saya atur agar posisi box berada ditengah dengan teknik flexbox.

Untuk mempelajari tentang viewport unit (vh) silahkan baca di artikel [/mengenal-css3-viewport-unit/](/mengenal-css3-viewport-unit/). dan untuk mempelajari layouting dengan flexbox, silahkan baca seri artikel saya tentang flex box di sini [/menguasai-flexbox-layout/](/menguasai-flexbox-layout/)

Lalu pada box, saya berikan background putih transparant agar kita bisa melihat apa yang terjadi dibelakangnya. Lalu saya atur positionnya menjadi relative, karena property backdrop-filter ini akan berjalan jiga positionnya diatur selain static. Berikut hasil yang didapat:

![Demo backdrop-filter](/assets/img/preview-1.png)

Demo backdrop-filter

## Filter Function

Tak hanya blur saja yang bisa kita gunakan dalam property ini. Semua fungsi filter bisa digunakan bersamaan dengan property backdrop-filter ini.

Filter-filter lain yang bisa digunakan antara lain:

- blur()
- brightness()
- contrast()
- drop-shadow()
- grayscale()
- hue-rotate()
- invert()
- opacity()
- sepia()
- saturate()

Semua fungsi filter tersebut sudah pernah saya jelaskan dalam tutorial [Bermain-main dengan CSS3 Filter](/bermain-main-dengan-css3-filter/) .

Berikut ini adalah salah satu contoh penggabunga blur dan grayscale:

```css
-webkit-backdrop-filter: grayscale(100%) blur(5px);
backdrop-filter: grayscale(100%) blur(5px);
```

![Gabungan blur dan grayscale function backdrop-filter](/assets/img/preview-2.png)

Gabungan blur dan grayscale function pada backdrop-filter

## Implementasi

Backdrop filter akan memberikan efek unik pada web atau user interface web kita. Berikut salah satu contoh implementasi yang saya buat:

<div class="codepen-iframe">
  <iframe src="https://codepen.io/ariona/embed/ONKpqb/" frameborder="0"></iframe>
</div>


Contoh implementasi backdrop filter

## Referensi Lebih Lanjut

- [https://webkit.org/blog/3632/introducing-backdrop-filters/](https://webkit.org/blog/3632/introducing-backdrop-filters/)
- [https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
