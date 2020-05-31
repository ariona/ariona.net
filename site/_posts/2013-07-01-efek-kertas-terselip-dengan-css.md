---
title: "Efek kertas terselip dengan CSS"
date: "2013-07-01"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - css3
  - pseudo-element

categories: 
  - html-css
---

Efek yang akan kita buat pada tutorial ini adalah efek kertas yang terselip. Efek ini juga merupakan contoh lain dari penerapan Pseudo-Element Before dan After yang sebelumnya telah anda pelajari dalam tutorial berjudul ["Mengenal lebih dalam CSS Pseudo Element"](/mengenal-lebih-dalam-css-pseudo-element/ "Mengenal lebih dalam CSS Pseudo Element") dan beberapa kasus yang pernah dibahas, seperti pada tutorial ["Membuat CSS Tooltip"](/membuat-css-tooltip/ "Membuat CSS Tooltip")

Kembali ke pembahasan utama, kali ini kita akan membuat sebuah efek kertas yang terselip ke dalam lubang. Berikut ini adalah screenshot dari efek yang kita bicarakan jika anda masih belum memiliki gambarannya.

![Efek Kertas Terselip Preview](/assets/img/01-07-2013%25207-28-40.png) [Demonstrasi](https://dl.dropboxusercontent.com/u/26808427/cdn/ariona/demo/tucked-paper/index.html "Demonstrasi Efek Kertas Terselip")

## Markup HTML

Untuk markup HTMLnya sederhana saja, kita hanya membutuhkan sebuah div sebagai objek kertas, saya beri kelas kertas pada div tersebut. Saya juga tambahkan sedikit random/dummy text pada kertas tersebut.

    

# Lorem Ipsum Dolor Sit Amet

    
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut at consectetur officia et accusamus inventore dolor cupiditate tempore fuga alias aliquam quo dolorum voluptatem tenetur ipsum corporis commodi vitae! Iusto!
    

## CSS

Pertama-tama kita beri style terlebih dahulu kertas yang akan kita selipkan nantinya beserta background dari bodynya.

body{
    background:#d8d8d8;
}
.kertas{
    background:white;
    width:400px;
    margin:20px auto;
    padding:20px;
    position:relative;
    font-family:cambria,serif;
    box-shadow:0 1px 10px rgba(0,0,0,.3);
}

Selanjutnya adalah efek utama yang akan kita buat, Tekniknya sangat sederhana, kita buat tambahkan pseudo element pada class kertas, yang akan menjadi efek lubang untuk menyelipkan kertas.

.kertas::before, .kertas::after{
    background:#d8d8d8;
    content:"";
    width:100px;
    height:50px;
    position:absolute;
    top:-25px;
    box-shadow:0 5px 10px -7px rgba(0,0,0,.3);
}

style tersebut akan membuat sebuah box yang akan kita gunakan untuk menutupi ujung-ujung kertas dan pada style selanjutnya kita akan mengatur rotasi dari tiap ujung.

.kertas::before{
    left:-50px;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.kertas::after{
    right:-50px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}

Silahkan simpan pekerjaan anda dan perhatikan apa yang ditampilkan dalam browser.

## Efek Selotip

Dengan teknik yang sama, kita juga bisa membuat efek kertas yang menempel dengan menggunakan [selotip](https://www.google.com/search?q=selotip&tbm=isch&tbo=u&source=univ&sa=X&ei=A8XQUbvTJcTlrAfpxYGgAQ&ved=0CEYQsAQ "Selotip") di setiap ujungnya. yang perlu kita lakukan hanyalah merubah tinggi dari pseudo element dan memberi background yang transparan

.kertas::before, .kertas::after{
    background:rgba(255,255,255,.5);
    content:"";
    width:100px;
    height:25px;
    position:absolute;
    top:-10px;
    box-shadow:0 5px 10px -7px rgba(0,0,0,.3);
}

Dalam contoh di atas saya memberikan warna transparan dengan system rgba, anda bisa menggunakan background-image dan membuat gambar selotip yang lebih realistis.
