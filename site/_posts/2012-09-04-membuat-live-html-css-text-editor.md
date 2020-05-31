---
title: "Membuat Live HTML & CSS Text Editor"
date: "2012-09-04"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - javascript
  - live-text-editor
  - syntax-highlighting
  - zen-coding

categories: 
  - javascript
---

Anda pernah menggunakan CSSdesk? dabblet? atau text editor online lainnya yang menyertakan live preview? Pada tutorial ini kita akan belajar membuat aplikasi serupa dengan live text-editor tersebut lengkap dengan fitur Download.

[Demonstrasi](https://demo.ariona.net/text-editor "Demonstrasi")[Download](https://demo.ariona.net/text-editor/text-editor.zip "Download")

## Persiapan (Library)

Untuk membuat text editor online seperti yang saya sebutkan sebelumnya, kita membutuhkan beberapa library antara lain sebagai berikut :

### Syntax highlighting

Ada banyak library javascript yang berfungsi untuk merubah textarea HTML biasa menjadi text editor dengan fitur Syntax Highlighting, seperti TextEdit, AceEditor atau CodeMirror.  
Pada tutorial ini, kita akan menggunakan library CodeMirror untuk membuat text editor online kita.

![CodeMirror](/assets/img/baboon.png)

Anda dapat mempelajari dan mendownload library CodeMirror di [http://codemirror.net/](http://codemirror.net/ "Code Mirror Official web")

### Downloadify

Berhubung aplikasi yang kita buat tidak akan menggunakan PHP, maka perlu library javascript & flash untuk membuat file yang dapat disave dari text editor kita. Library yang akan kita gunakan antara lain Downloadify, namun sayang kita tidak bisa menggunakan library ini secara local, jadi anda harus menyimpan text editor yang kita buat pada server dan membuatnya online. Download script downloadify di [https://github.com/dcneiner/Downloadify](https://github.com/dcneiner/Downloadify "Downloadify Github Page") atau Download langsung [disini](https://github.com/dcneiner/Downloadify/zipball/master)

### Zen Coding

Kita akan menambahkan fitur Zen Coding pada text editor yang kita buat, jika anda belum tahu apa itu zen coding silahkan baca artikel Zen Coding : [Cara cepat menulis kode HTML & CSS](/zen-coding-cara-cepat-menulis-kode-html-css/ "Zen Coding : Cara cepat menulis kode HTML & CSS") dan [bagian keduanya](/zen-coding-cara-cepat-menulis-kode-html-css-bagian-2/ "Zen Coding : Cara cepat menulis kode HTML & CSS Bagian 2"). Kabar baiknya, Zen Coding juga tersedia untuk Codemirror dan dapat didownload [disini](http://code.google.com/p/zen-coding/downloads/detail?name=Zen.Coding-CodeMirror.v0.7.zip "Zen Coding for Code Mirror").

### Font

Font yang akan kita gunakan antara lain ["Web Symbols"](http://www.justbenicestudio.com/studio/websymbols/ "Download WebSymbols font") yang berisi kumpulan icon, jadi kita tidak perlu menggunakan gambar untuk icon. sebenarnya hanya dua icon yang akan kita gunakan, namun saya ingin mengajarkan teknik penggunakan icon tanpa menggunakan gambar (dengan font) :).

## Membuat Antar Muka (User Interface) Live Text Editor

Berikut ini adalah User Interface dari text editor yang akan kita buat, sederhana saja yang terpenting adalah keberadaan area editor dan live preview yang menjadi topik utama tutorial ini, tidak lupa tombol Download untuk mendownload kode yang selesai diketik.

![Tampilan Live Text Editor](/assets/img/UI.png)

## Markup HTML

Dari desain user interface tersebut, kita dapat mengkonversinya menjadi markup HTML seperti berikut :

```html
<!DOCTYPE HTML>
<html lang="en-US">
    <head>
        <meta charset="UTF-8">
        <title>Ariona Live Text Editor</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div id="header">
            <a id="logo" href="http://www.ariona.net"><img src="logo.png" alt="" /></a>
            <div id="toolbar">
                <div id="editor-toolbar">
                    <h2><span class="icon">H</span>Editor</h2>
                    <ul>
                        <li id="download">Download</li>
                    </ul>
                </div>
                <div id="preview-toolbar">
                    <h2><span class="icon">L</span>Preview</h2>
                </div>
            </div>
        </div>
        <div id="ide">
            <div id="editor">
                <div class="container">
                    <textarea id="editor-area" cols="30" name="" rows="10"></textarea>
                </div>
            </div>
            <div id="preview">
                <div class="container"></div>
            </div>
        </div>
    </body>
</html>
```

Simpan kode tersebut dengan nama file index.html

## CSS

Selanjutnya kita buat file style.css, dan paste Style berikut :

```css
/*************************
 *  Global Style
 *************************/

*{
    margin:0;
    padding:0;
    font-family:"TheSans"calibri,arial,sans-serif;
    color:#333;
}
html{height:100%;}
.clearfix{clear:both;}

/*************************
 *  Header, Toolbar
 *************************/
#header{background:url("https://dl.dropbox.com/u/26808427/cdn/ariona/demo/text-editor/grid_noise.png")}
#logo{
    margin:10px 0 10px 10px;
    display: inline-block;
}
#toolbar{
    border-top:1px solid #e3e3e3;
    border-bottom:1px solid #e3e3e3;
    height:20px;
    padding:10px;
    box-shadow:0 5px 10px -7px rgba(0,0,0,.3);
    height:30px;
    background: -webkit-linear-gradient(top,#fff,#efefef);
}
#editor-toolbar,#preview-toolbar{
    width:50%;
    float:left;
}
#toolbar h2{
    font-weight:normal;
    text-shadow:0 1px 1px white;
    color:#888;
    line-height:35px;
    display: inline-block;
}
.icon{
    font-family:"web symbols";
    margin-right:20px;
    font-size:16px;
    position: relative;
    top:-2px;
    color:#888;
}

#toolbar ul{list-style:none;float:right;margin-right:20px;}
#toolbar ul li{float:left;}

.button{
    padding:5px 10px;
    border:1px solid #e3e3e3;
    border-radius:3px;
    cursor:pointer;
    background: -webkit-linear-gradient(top,#fff,#eee);
    box-shadow:0 1px 1px white;
}
#download{
    padding:0;width:100px;height:30px;
    border:1px solid #e3e3e3;
    border-radius:3px;
    cursor:pointer;
    box-shadow:0 1px 1px white;
    position: relative;
    z-index:2;
}
#download:after{
    content:"Download";
    position: absolute;
    top:0;left:0;
    width:100px;
    height:25px;
    padding-top:5px;
    text-align:center;
    background: -webkit-linear-gradient(top,#fff,#eee);
    z-index:-1;
}
/*************************
 *  IDE (EDITOR & PREVIEW)
 *************************/
#ide{
    position: absolute;
    padding-top:10px;
    top:150px;
    left:0;
    right:0;
    bottom:10px;
}
#editor, #preview{
    width:50%;
    float:left;
    height:100%;
    position:relative;
}
.container{
    height:100%;
    position: absolute;
    top:-10px;
    left:0;
    right:0;
    bottom:10px;
}
#editor .container{
    border-right:1px solid #e3e3e3;
    bottom:0;
}
.container textarea,.container iframe,.CodeMirror{
    height:100%;
    width:100%;
    resize:none;
    border:none;
    outline:none;
}
.container iframe{
    position:absolute;
}

/*************************
 *  CodeMirror Style Fix
 *************************/
.CodeMirror-scroll{height:100%  !important}
.CodeMirror-gutter,.CodeMirror-lines{line-height:20px;}

::-webkit-scrollbar {
    width : 5px;
    height: 5px;
}
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius        : 10px;
    background           : #A8DAEA;
}
::-webkit-slider-thumb element,
::-webkit-scrollbar-track {
    background           : white;
    -webkit-border-radius: 10px;
    border-radius        : 10px;
}
```

Isi dari style tersebut antara lain, layouting dan Styling untuk CodeMirror serta Customisasi Scrollbar.

## Javascript

Lanjut ke bagian terpenting dari pembuatan Text Editor ini yakni penambahan library-library javascript.

### Code Mirror

Dari file yang anda download Copy beberapa file berikut dan paste di folder yang sama dengan file HTML yang kita buat sebelumnya.

```
lib/codemirror.js
lib/codemirror.css
mode/javascript/javascript.js
mode/css/css.js
mode/htmlmixed/htmlmixed.js
mode/xml/xml.js
```

Selanjutnya adalah memanggil file-file javascript dan css tersebut ke dalam file HTML kita, untuk melakukannya tambahkan kode berikut di dalam tag Head file index.html.

```html
<link rel="stylesheet" href="codemirror.css">
<script src="lib/codemirror.js"></script>
<script src="mode/javascript/javascript.js"></script>
<script src="mode/css/css.js"></script>
<script src="mode/htmlmixed/htmlmixed.js"></script>
<script src="mode/xml/xml.js"></script>
```

Setelah penyertaan script-script tersebut, saatnya kita buat text editor kita berjalan sebagaimana mestinya, tambahkan script berikut tepat sebelum tag penutup body.

```js
var delay;
var editor = CodeMirror.fromTextArea(document.getElementById('editor-area'), {
    mode: 'text/html',
    tabSize:8,
    lineNumbers:true,
    onChange: function() {
        clearTimeout(delay);
        delay = setTimeout(updatePreview, 300);
    }
});
  
function updatePreview() {
    var previewFrame = document.getElementById('preview-area');
    var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
    preview.open();
    preview.write(editor.getValue());
    preview.close();
}
setTimeout(updatePreview, 300);
```

berikut ini adalah penjelasan kode tersebut :

- **Baris ke 1-10**
    
    Baris ini adalah baris inisiasi CodeMirror pada texarea dengan id "editor-area" serta mengaktifkan beberapa property CodeMirror seperti mode,lineNumbers,tabSize dan penambahan event onChange sebagai event yang akan dilakukan ketika kita mengetikkan kode pada editor
    
- **Baris 12-18**
    
    Adalah fungsi yang akan dipanggil ketika kita melakukan perubahan pada text editor, dalam hal ini adalah membuat preview dari code yang diketikkan di editor ke dalam iframe/preview area yang kita sediakan
    
- **Baris 19**
    
    Terakhir kita set timeout untuk fungsi updatePreview
    

Sejauh ini text editor anda sudah bisa digunakan.

### Zen Coding

Seperti yang saya sebutkan sebelumnya, kita akan menambahkan fitur Zen-Coding pada text editor yang kita buat, dari file yang anda download di atas, copy file berikut ke folder yang sama dengan lokasi file HTML kita.
```
zen\_codemirror.js
```
Panggil file tersebut dalam file index.html kita :

```html
<script src="zen\_codemirror.js"></script>
```

Untuk membuat Editor kita memiliki fitur Zen Coding, edit kode inisiasi CodeMirror menjadi seperti berikut :

```js
var editor = CodeMirror.fromTextArea(document.getElementById('editor-area'), {
    mode: 'text/html',
    tabSize:8,
    lineNumbers:true,
    onChange: function() {
        clearTimeout(delay);
        delay = setTimeout(updatePreview, 300);
    },
    onKeyEvent: function() {
        return zen_editor.handleKeyEvent.apply(zen_editor, arguments);
    }
});
```

Kita menambahkan event `onKeyEvent` dan mengembalikan nilai dari fungsi ZenCoding.

### Downloadify

Pada folder Downloadify yang telah anda download sebelumnya, copy file-file berikut dan paste pada folder yang sama dengan lokasi file HTML kita (index.html).

```
js/downloadify.min.js
js/swfobject.js
media/downloadify.swf
```

Seperti file-file JS sebelumnya, sertakan file-file downloadify ini pada file index.html (kecuali downloadify.swf).

```html
<script src="js/downloadify.min.js"></script>
<script src="js/swfobject.js"></script>
```

Terakhir adalah membuat tombol download kita berjalan sebagaimana mestinya dengan menerapkan library downloadify, tambahkan script berikut setelah fungsi codemirro sebelumnya.

```js
Downloadify.create('download',{
    filename: "index.html",
    data: function(){ 
      return editor.getValue();
    },
    onComplete: function(){ 
      alert('Your file has been saved!'); 
    },
    onCancel: function(){ 
      alert('You have cancelled the saving of this file.');
    },
    onError: function(){ 
      alert('You must put something in the File Contents or there will be nothing to save!'); 
    },
    transparent: false,
    swf: 'downloadify.swf',
    downloadImage:'download.png',
    width: 100,
    height: 30,
    transparent: true,
    append: false
});
```

Copy file `download.png` disini, file ini dibutuhkan untuk gambar tombol, saya menggunakan gambar kosong, karena tombol telah kita buat dengan CSS.

## Kesimpulan

Projek sederhana di atas ditujukan untuk mempelajari bagaimana suatu teks editor online bekerja dan bagaimana cara pembuatannya. Selebihnya Anda bisa mengembangkannya dengan menambahkan fitur-fitur yang penting ke dalam teks editor yang telah anda buat dan mungkin teks editor yang anda buat mampu bersaing dengan layanan teks editor online yang telah ada :).
