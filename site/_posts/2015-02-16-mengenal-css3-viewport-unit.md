---
title: "Mengenal CSS3 Viewport unit"
date: "2015-02-16"
thumbnail: /assets/img/thumbnail.jpg
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - css3
  - unit
  - viewport

categories: 
  - html-css
---

Dalam CSS3 terdapat unit/satuan baru untuk menentukan suatu ukuran, jika sebelumnya kita telah mengenal unit persentase untuk mendapatkan ukuran yang relative terhadap parent, maka Dalam CSS3 kita dikenalkan dengan unit viewport (Viewport unit) yang mana relatif terhadap viewport/ukuran window browser.

Keberadaan viewport unit memang sangat membantu untuk menambahkan ukuran-ukuran yang mengacu pada ukuran window browser. Sebelumnya agak sulit untuk menentukan ukuran suatu elemen berdasarkan ukuran browser. Salah satu contohnya adalah membuat tinggi suatu element sama dengan tinggi browser.

Sebagai contoh, kita akan mempelajari bagaimana cara membuat suatu element memiliki tinggi sama dengan tinggi browser.  
Pertama-tama kita harus mengatur terlebih dahulu tinggi dari tag html dan body menjadi 100%, setelah itu kita baru bisa menerapkan heignt:100% untuk mendapatkan tinggi yang sama dengan browser.

```html
<div class="element">Tinggi element ini sama dengan tinggi browser</div>
```

```css
html, body { height: 100% }
.element{ 
    height: 100%;
    background: #bad455;
}
```

Cara tersebut memang bisa menjadi solusi, namun tidak untuk beberapa kasus tertentu. Salah satu kelemahannya adalah tinggi dari dokumen HTML menjadi fix sesuai dengan tinggi browser dan ini akan berpengaruh ketika content yang ada didalamnya lebih tinggi/banyak.

## CSS3 Viewport Unit

Jika yang ingin anda lakukan adalah mengatur ukuran element menggunakan persentasi tapi relatif atau mengacu terhadap ukuran browser, Anda dapat menggunakan CSS3 viewport unit. Sebagaimana ukuran sebuah browser, viewport unit memiliki dua type yakni vw dan vh.

vw adalah kependekan dari viewport width, sedangkan vh adalah kependekan dari viewport height. Cara kerjanya sama dengan persentase namun acuannya adalah lebar dan tinggi browser. Katakanlah Anda ingin mengatur elemen memiliki tinggi 100% dari tinggi browser maka nilai yang digunakan adalah seperti berikut:

```css
.element{
    height: 100vh;
}
```

Contoh lain misalnya, Anda ingin mengatur lebar element 80% dari lebar browser, maka nilai yang digunakan seperti berikut:

```css
.element{
    width: 80vw;
}
```

Cukup membantu bukan?. Selanjutnya saya akan menerapkan viewport unit agar anda lebih mengerti cara penggunaannya.

## Studi kasus

Pada studi kasus yang akan kita buat, adalah membuat semacam cover untuk artikel. Sebelum masuk ke artikel utama, kita disuguhkan dengan image cover yang menutupi seluruh layar browser. Silahkan klik demonstrasi dibawah untuk melihat apa yang akan kita buat:

https://codepen.io/ariona/pen/VJeYXa

Demo studi kasus viewport unit

## HTML

Pertama-tama kita persiapkan dulu Markup HTML untuk bagian cover. bagian cover ini memiliki dua elemen penting, yakni cover itu sendiri, dan cover-content untuk menampung isi dari cover yang akan kita isi dengan judul artikel dan beberapa teks lainnya seperti author dan tanggal.

```html
<div class="cover">
    <div class="cover-content">
        <h1 class="entry-title">Memahami penggunaan CSS3 viewport unit</h1>
        <div class="entry-meta">
            <span class="author">Oleh Rian Ariona</span>
            <span class="date">9 Februari 2015</span>
        </div>
    </div>
</div>
```

Selanjutnya, setelah markup cover diatas, kita tambahkan juga markup untuk artikel utamanya:

```html
<div class="entry-content">
    <p>Sama halnya dengan unit persentase, Viewport unit adalah unit persentase yang mengacu pada lebar dan tinggi viewport/area visible browser.</p>
    <p><strong>Perhatikan tinggi cover image diatas</strong> :)</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est repellendus perferendis culpa, laudantium ut nisi sunt nostrum atque labore similique nihil quasi sint deleniti facere unde molestiae dolorem impedit nulla!</p>
    <p>Nostrum voluptates tempore dolore impedit quae omnis, corporis qui quibusdam officia. Atque, provident? Minus unde praesentium dignissimos odit, amet, atque libero consequuntur perferendis facilis soluta aperiam suscipit, nemo voluptates neque!</p>
</div>
```

Dan alangkah baiknya jika seluruh markup di atas kita masukkan ke dalam tag artikel agar lebih semantik :) .

## CSS

Lanjut ke pembahasan utama, yakni penggunaan CSS3 viewport. Penggunaan CSS3 viewport dalam kasus ini hanya diterapkan pake Cover saja, sedangkan style lainnya hanyalah pemanis.

```css
.cover{
    background-image: url(background.jpg);
    background-size: cover;

    height: 100vh;

    position: relative;
    display: flex;
}
```

Perhatikan bagian height:100vh, kita set tinggi cover ini agar sama tingginya dengan layar, jadi kita hanya tinggal mengatur height menjadi 100vh.

Mungkin sebagian dari anda akan bertanya mengenai display:flex, ini saya gunakan sebagai teknik untuk autocenter content nantinya, dan saya akan jelaskan pada tutorial lainnya.

```css
.cover-content{
    width: 700px;
    max-width: 90%;
    margin: auto;
    text-align: center;
    background: rgba(255,255,255,.8);
    padding:50px;
    border: 6px double #333;
}
.entry-title{
    font-size: 3em;
    margin-bottom: 30px;
}
.entry-meta{
    font-style: italic;
}
a{color: #666;}
```

Style diatas adalah style untuk cover content beserta isinya, tidak ada yang spesial dari style diatas. Begitu juga dengan style selanjutnya, hanya digunakan untuk mempermanis article utamanya.

```css
article{
    width:700px;
    max-width: 90%;
    margin:0 auto;
    padding: 50px 30px 200px;
    line-height: 2em;
    font-size:1.3em;
}
.leading{
    font-size: 1.5em;
    font-style: italic;
    margin-bottom: 50px;
    font-weight: 700;
}
```

Silahkan anda coba preview hasil pekerjaan anda, perhatikan bahwa tinggi dari cover akan sama dengan tinggi dari browser, begitu juga ketika anda melakukan resize tinggi browser. Secara otomatis tinggi cover akan menyesuaikan.

Namun untuk menjaga dari hal-hal yang tidak diinginkan, alangkah baiknya untuk mengatur min-height, untuk mengakomodasi height browser yang terlampau kecil agar kontent di dalamnnya tidak berdempetan.

## Kesimpulan

Keberadaan viewport unit akan sangat membantu untuk penyelesaian masalah-masalah tertentu, meskipun begitu penggunaan cara-lama masih berlaku juga untuk beberapa kasus lainnya. Anda hanya perlu memilah teknik apa yang pantas untuk diterapkan ke dalam projek yang sedang Anda kerjakan.

## Referensi

- [http://dev.w3.org/](http://dev.w3.org/csswg/css-values-3/#viewport-relative-lengths)
- [http://caniuse.com/#feat=viewport-units](http://caniuse.com/#feat=viewport-units)
