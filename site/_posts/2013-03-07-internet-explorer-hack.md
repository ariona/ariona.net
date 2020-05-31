---
title: "Internet Explorer Hack"
date: "2013-03-07"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - hack
  - ie

categories: 
  - tips-trik
---

Masih peduli dengan browser jadul seperti IE8 s/d IE6? Berikut ini adalah salah satu hack untuk menargetkan suatu property hanya untuk versi dari IE tertentu disamping menggunakan IE Conditional Tag.

```html

.class {
  width:200px; /* Semua browsers */
  *width:250px; /* Untuk Browser IE */
  _width:300px; /* Untuk IE6 */
  .width:200px; /* Untuk IE7 */ 
}
```

Cara ini sangat simple jika anda malas untuk menggunakan Conditional Tag. Cukup dengan menambahkan karakter \*/\_/. sebelum property CSS untuk menargetkan browser IE, IE6 dan IE7.
