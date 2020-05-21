---
title: "Bermain-main dengan CSS3 : font-face"
date: "2011-11-20"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - bermain-main-dengan-css3
  - css3
  - font-face
  - webfonts

categories: 
  - html-css
---

Jika sebelumnya anda dibatasi untuk menggunakan web-safe font, yang artinya anda hanya terbatas untuk menggunakan font-font yang memang aman dan terdapat di berbagai platform seperti Times New Roman, Arial, Tahoma dan sebagainya. Kini anda dapat bebas berekspresi dengan font pilihan anda dengan menggunakan font-face.

Penggunaan font-face memungkinkan anda menggunakan berbagaimacam font dalam situs anda. dan Seri Bermain-main dengan CSS3 kali ini akan membahas kelebihan dan kekurangan dari font-face ini serta tool-tool yang andalan yang harus anda ketahui.

Untuk meload font yang anda pilih, pertama-tama anda harus mendeklarasikan font apa yang akan anda gunakan dan url ke font-pilihan anda, berikut adalah contoh penggunaan font-face:

@font-face {
    font-family: 'TheSansLightItalic';
    src: url('assets/fonts/thesans-3-lightita-webfont-webfont.ttf');
    font-weight: normal;
    font-style: normal;
}

Pada property font-family, kita beri nama font yang akan kita gunakan, dan selanjutnya pada property src, kita tuliskan lokasi dari font yang kita maksud, selanjutnya kita buat weight dan stylenya menjadi normal.  
Selanjutnya anda tinggal menggunakannya pada element yang anda kehendaki, misalnya seperti berikut :

#content p{
    font-family : 'TheSansLightItalic';
}

## Format Font apa saja yang bisa digunakan?

Ada berbagai macam format font yang dapat digunakan dan harus anda gunakan, agar semua browser dapat menampilkannya dengan benar. Misalnya untuk Internet Explorer, format font yang dibutuhkan adalah .eot. Berikut ini adalah list browser yang support font-face dan format font yang didukung:

- Internet Explorer (Semua Versi): EOT
- Safari (3.2+): TTF / OTF
- iPhone (3.1): SVG
- Chrome (Semua versi): SVG (TTF/OTF support ditambahkan pada 25 Jan 2010)
- Firefox (3.5+): TTF/OTF (.WOFF support ditambahkan pada versi 3.6)
- Opera (10+) TTF/OTF

## Ada Tool yang bisa konversi ke semua format itu ga?

Untuk mengkonversi ke berbagai format seperti : svg,eot,woff,ttf dan otf, kita bisa menggunakan layanan gratis dari [font-squirrel](http://www.fontsquirrel.com/fontface/generator "Font-squirrel : font-face generator"). [font-face generator dari font-squirrel](http://www.fontsquirrel.com/fontface/generator "Cek ke TKP : fontsquirrel") ini akan mengkonversi font yang kita submit ke berbagai format font tersebut dan langsung mengenerate kode CSS untuk kita gunakan pada proyek kita.

\[image url="http://ariona.net/wp-content/uploads/2011/11/20/font-face-generator.jpg" alt="Font-face generator dari font-squirrel"\]

Setelah Anda beres mengenerate font dari fontsquirrel, tekan tombol "Download Your Kit". Pada file yang kita download terdapat font hasil konversi dalam beberapa format, dan file stylesheet siap pakai.

\[image url="http://ariona.net/wp-content/uploads/2011/11/20/bundle.jpg" alt="Hasil download dari font-squirrel"\]

## Ada yang lebih mudah?

Oke, yang paling mudah adalah dengan menggunakan situs pihak ketiga, yaitu Google Webfonts. Di sana anda dapat memilih berbagai macam font sesuai selera anda, cara penggunaannyapun sangat mudah, anda tinggal mengkopy kode hasil generate dan meletakkannya pada file html anda (layaknya meload file CSS).

\[fancyimage url="http://ariona.net/wp-content/uploads/2011/11/20/google-webfonts.jpg" alt="Google Webfonts" title="Google Webfonts" big="http://ariona.net/wp-content/uploads/2011/11/20/google-webfonts.jpg" \]

## Butuh Inspirasi nih?

Dengan font-face andapun dapat merangkai huruf-huruf sesuai kehendak anda, batasannya hanya pada imajinasi dan kekreatifitas anda dalam seni typografi ini. Berikut adalah beberapa contoh web untuk inspirasi anda :

- [http://www.font-face.com](http://www.font-face.com)
- [http://craigmod.com/journal/font-face/](http://craigmod.com/journal/font-face/)
- [smashingmagazine.com](http://designinformer.smashingmagazine.com/2010/05/06/css-posters/)

## Kelebihan dan Kekurangannya?

Kelebihannya ada pada kebebasan anda untuk menggunakan berbagaimacam font, dan hampir semua browser support dengan font-face ini, tentunya dengan bantuan generator atau situs pihak ketiga seperti webfonts. Namun dari semau kelebihan tersebut tentunya masih ada kekurangannya, yaitu loading situs yang lama. Ya.. karena user dipaksa untuk mendownload font-font pilihan anda tersebut yang pada akhirnya berimbas pada loading situs yang bertambah. Namun hal ini tidak menjadi kendala karena setelah loading situs awal beres, selanjutnya loading situs akan seperti biasa karena font telah tersimpan dalam cache browser user.

## Kesimpulan

Batasan penggunaan font hanya terbatas pada kreatifitas anda dalam memadupadankan font yang anda gunakan, namun perlu diingat, jangan menggunakan banyak jenis font, karena ini akan memperlambat loading situs anda.
