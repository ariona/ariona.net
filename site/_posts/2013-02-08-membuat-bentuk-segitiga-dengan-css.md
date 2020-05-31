---
title: "Membuat bentuk segitiga dengan CSS"
date: "2013-02-08"
author: Ariona Rian
email: helloariona@gmail.com
tags: 
  - css
  - css-shape
  - triangle

categories: 
  - tips-trik
---

Dengan teknik border, kita dapat membuat bentuk segitiga dengan mudah.

## Markup HTML

## CSS

```html

.segitiga{
    width:0;
    height:0;
    border-style:solid;
    border-width:100px;
    border-color:red green blue yellow;
}
```

![triangle box](/assets/img/tiranglebox.gif)

Itu adalah bentuk dari border ketika elemen berukuran 0x0. Urutan warna border itu searah jarum jam (top, right, bottom, dan left). Jadi jika kita ingin membuat segitiga menghadap ke kiri, beri warna pada border-right dan sisanya beri nilai `transparent`.

```html

.segitiga{
    width:0;
    height:0;
    border-style:solid;
    border-width:100px;
    border-color:transparent green transparent transparent;
}
```

![triangle](/assets/img/triangle.gif)
