---
title: "Responsive Webdesign, Apa dan Bagaimana ?"
date: "2011-11-09"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - css
  - css3
  - media queries
  - responsive
  - webdesign

categories: 
  - html-css
---

Saat ini, internet sudah dapat diakses oleh berbagai macam perangkat, mulai dari Komputer sampai dengan Smartphone. Dan yang menjadi permasalahan adalah semua perangkat tersebut memiliki layar dengan resolusi yang berbeda-beda, sehingga jika situs yang kita buat dibuka di dalam handphone dengan layar yang kecil, maka konten yang ditampilkanpun menjadi rusak, atau jika bisa ditampilkan secara penuh atau mungkin akan direpotkan dengan aktifitas zoom-in dan zoom-out untuk membaca kontent.

Disinilah Responsive webdesign berperan. Webdesign yang responsive akan langsung beradaptasi dengan ukuran layar device, sehingga konten yang ditampilkan tidak rusak atau tidak perlu lagi zoom-in dan zoom-out. Dan pada tutorial inilah saya akan membahas bagaimana cara membuat responsive web design tersebut dengan menggunakan metode CSS media queries.

Jika masih bingung apa yang sedang saya bicarakan, silahkan tengok demonstrasi berikut, lalu resize browser anda secara horizontal. Perhatikan bahwa konten juga ikut beradaptasi sesuai dengan ukuran browser. [Demonstrasi](http://demo.ariona.net/responsive/index.html "Demonstrasi Responsive Webdesign")

[![](/assets/img/preview.jpg)](https://lh3.googleusercontent.com/-W5vlfTQi1-0/UB-fpXLa-qI/AAAAAAAABXA/b3jDXqzUvaU/s2048/preview.jpg)

Ketika browser diresize dengan ukuran lebar 768px, Sidebar berpindah lokasi menjadi di bawah. selanjutnya ketika browser diresize kembali ke ukuran 600px, List menu berubah menjadi Combo Menu. Menarik bukan jika desain web seperti itu ?.

## HTML

Pertama-tama kita buat markup untuk demonstrasi tutorial ini, markup adalah layout web standar yakni header, navigation, content, sidebar dan footer.

<!DOCTYPE HTML>
<html lang="en-US">
<head>
    <title>Responsive Demonstration</title>
</head>
<body>
    

        

            

# [Responsive Webdesign Demonstration](http://www.ariona.net)

        

        

            

                - Home
                - Blog
                - Arsip
                - About
                - Contact
            

            
                Home
                Blog
                Arsip
                About
                Contact
            
        

        

            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        

        

            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                quis nostrud exercitation ullamco laboris nisi ut tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        

        

        

            
                copyright © 2011 by [ariona.net](http://www.ariona.net)
            
        

    </div>
    

</body>
</html>

Perhatikan bahwa pada navigation, selain saya menuliskan Unordered list untuk menu, saya juga menyiapkan combobox untuk menu.

## CSS

Selanjutnya kita beri style pada markup yang telah kita buat, untuk style berikut saya yakin anda sudah pada jago.

\*{
    margin:0;padding:0;
}
body{
    background:#F9F4EB;
    font-family: georgia;
}
p{padding:20px;line-height:30px;}
a{color:black;text-decoration:none}
#wrapper{
    width:960px;
    margin:auto;
    background: white;
}
.clear{clear:both;}
#header{
    background:#9acf11;
    padding:20px;
}

#navigation ul{list-style:none;background:#62830a;overflow:hidden;}
#navigation ul li{float:left;padding:10px;border-right:1px solid #384b06;}
#navigation select{
    padding:10px;width:100%;
    display:none;
    background:#62830a
}
#content {
    float:left;
    width:600px;
}

#sidebar{float:left;width:360px;}

#footer{
    background:#62830a;
}

Untuk menu yang menggunakan combobox, saya hide terlebih dahulu, karena kita akan memunculkannya pada resolusi 600px kebawah sebagai pengganti menu list.

## Let's Make it Responsive

Tahap yang paling utama dari tutorial ini adalah membuat layout yang kita buat menjadi responsive. Seperti yang saya katakan tadi, bahwa kita akan menggunakan CSS media queries untuk membuat layout kita menjadi responsive. Contoh penggunaannya seperti berikut

@media screen and (max-width:768px){
    /\* Masukkan style yang akan dirubah \*/
}

Jika saya translate ke bahasa Indonesia :), kira-kira menjadi seperti berikut :

_"Jika website dibuka dengan perangkat layar dan ukuran maksimal layar adalah 768px maka gunakan style berikut"_ Maksud screen adalah website yang dibuka menggunakan layar baik itu monitor atau layar handphone, kita juga bisa membuat style untuk printer, jadi medianya print.

Cukup penjelasan singkatnya, kita lanjutkan ke praktek. Seperti yang saya demonstrasikan pertama kita buat style untuk ukuran layar 768px ke bawah. Jadi dalam file CSS tambahkan kode berikut :

@media screen and (max-width:768px){
    
}

yang akan kita rubah adalah ukuran #wrapper, #content dan #sidebar, jadi tambahkan kode berikut di dalam Media Queries yang kita buat barusan.

@media screen and (max-width:768px){
    #wrapper{
        width:90%;
    }
    #content{
        width:100%;
        float:none;
    }
    #sidebar{
        width:100%;
        float:none;
        border-top:1px solid #384b06;
    }
}

Jika kita menggunakan persentasi untuk ukuran, maka layout akan otomatis berubah mengikuti ukuran layar. Selanjutnya kita override float:left pada #content dan #sidebar menjadi none, dan kita tambahkan border atas pada #sidebar, sebagai pemisah antara #content dan #sidebar.

Selanjutnya kita tambahkan media querie baru untuk ukuran layar 600px ke bawah. Dalam query ini kita akan menyembunyikan Menu List dan menampilkan menu combo.

@media screen and (max-width:600px){
    #navigation ul{display:none;}                             
    #navigation select{display:block;}
}

Yep, projek selesai, silahkan save dan buka pada browser. Coba untuk meresize browser secara horizontal. Sebagai contoh kasus lainnya Saya juga membuat web ini responsive, namun hanya untuk ukuran 800px.

## Kesimpulan

Pada dasarnya kita bisa menggunakan persentasi untuk membuat web menjadi responsive, namun cara ini sangat sulit karena kita harus menentukan setiap ukuran element dalam persentasi. Untuk itu cara Media Query lah yang termudah untuk membuat website menjadi responsive dan Jangan Lupa untuk meninggalkan komentar :).

## Sumber Referensi

Sebagai sumber referensi lainnya anda dapat membuka situs-situs berikut. disana dibahas bagaimana membuat video, gambar, table menjadi responsive.

- [catswhocode.com : Create an adaptable website layout with CSS3 media queries](http://www.catswhocode.com/blog/create-an-adaptable-website-layout-with-css3-media-queries "Catswhocode")
- [unstoppablerobotninja.com : Fluid images](http://unstoppablerobotninja.com/entry/fluid-images/ "unstoppablerobotninja")
- [webdesignerwall.com : CSS3: Elastic videos](http://webdesignerwall.com/tutorials/css-elastic-videos "webdesignerwall.com")
- [css-tricks.com : Responsive Data Tables](http://css-tricks.com/9096-responsive-data-tables/ "css-tricks")

## Update

Tambahkan tag berikut di dalam header supaya bisa berjalan dengan baik di perangkat Android atau iOS. Karena jika tidak kedua device tersebut biasanya menampilkan versi desktop bukan versi mobile.

<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" >
