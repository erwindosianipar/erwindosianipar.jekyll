---
layout: post
permalink: /blog/bosque-bahasa-pemrograman-baru-dari-microsoft
title: Bosque Bahasa Pemrograman Baru dari Microsoft
description: Bahasa pemrograman baru yang sederhana, jelas, dan mudah dipahami. Bosque programming
image: https://erwindosianipar.herokuapp.com/assets/images/article/large/19_1556949225_1974918229171996484_20190504125345_n.jpeg
image-credit: Photo by Google Image
tags: programming
---

**[Microsoft](https://www.microsoft.com/)** telah memperkenalkan bahasa pemrograman baru dengan nama Bosque (Bosque programming language). Bosque adalah bahasa pemrograman open-source dibawah lisensi MIT.

Desain stuktur kode dari bahasa pemrograman rancangan Mark Marron ini sangat sederhana, jelas dan mudah dipahami oleh manusia dan untuk mesin.

### Fitur utama Bosque

Pengembang dari bahasa pemrograman ini memliki tujuan agar fungsional dari bahasa ini dapat menangani kompleksitas yang tidak diperlukan atau secara tidak disengaja saat melakukan penulisan kode / tahap pengembangan. Tujuannya untuk peningkatan dan kemudahan saat tahap pengembangan, kualitas dari perangkat lunak yang diciptakan, dan untuk alat pengujian (compiler) agar dapat mengeksekusi program.

Bosque menyediakan penggunaan pembuatan program rekursif sederhana dan meminimalkan kesalahan saat program mulai membuat tumpukan data.

### Bosque terinspirasi dari TypeScript

Gaya dari bahasa pemrograman ini sangat mirip dengan JavaScript dan TypeScript. Pesatnya perkembangan JavaScript saat ini sepertinya akan memudahkan perkembangan Bosque untuk melaju cepat.

JavaScript yang dulu hanya untuk FrontEnd dalam pemrograman kini telah dapat digunakan untuk BackEnd dan pengelolaan server.

TypeScript sebagai bahasa semantik dari Node.Js / JavaScript akan memberikan kemudahan untuk bahasa pemrograman baru ini.

Akan dibuat penyesuaian terhadap Bosque dapat digunakan nya deklarasi variabel yang akan lebih banyak dukungannya dan untuk gaya pemrograman fungsional dalam blok kode program.

### Hello World! Bosque

Berikut potongan kode sederhana dari bahasa pemrograman Bosque

```js
namespace NSMain;

endpoint function main(): Int {
    var _ = "Hello world!"->display();
    return 0;
}
```

#### Penjelasan kode program

`namespace NSMain;` Digunakan untuk penanda blok potongan kode program.

`var _"Hello world!"` Sebagai pendeklarasian variabel dan langsung diisi dengan value dengan type data string.

`->display();` Dari nama display kita tau ini adalah fungsi untuk mengirim ke tampilan, return dari fungsi ini akan mengirimkan data kepada compiler untuk di eksekusi dan ditampilkan.

### Penggunaan Bosque

Untuk saat ini Bosque masih dalam pengembangan belum disarankan penggunaannya untuk *production*.

Sepertinya untuk perkembangan kedepan Bosque akan digunakan di banyak industri karna digadang penggunaannya akan dapat diimplementasikan untuk penggunaan skala besar. Penggunaan untuk Cloud dan untuk perangkat-perangkat IoT.
