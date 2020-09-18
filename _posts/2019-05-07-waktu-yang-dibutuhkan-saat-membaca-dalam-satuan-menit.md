---
layout: post
permalink: /blog/waktu-yang-dibutuhkan-saat-membaca-dalam-satuan-menit
title: Waktu yang Dibutuhkan saat Membaca dalam Satuan Menit
description: Kita dapat menghitung lama dari suatu tulisan atau artikel untuk dibaca
image: https://erwindosianipar.herokuapp.com/assets/images/article/large/19_1557301514_3480775811145542169_20190508024514_n.jpg
image-credit: Photo by Google Image
tags: programming
toc: true
---

Jika anda melihat gambar keterangan artikel ini, anda akan mengerti apa yang saya maksudkan. Didalam beberapa postingan atau suatu artikel seringkali telihat **x min read** artinya adalah waktu estimasi yang dibutuhkan dalam membaca sampai dengan selesai.

Ada beberapa website yang akan menunjukan waktu estimasi kita membaca suatu tulisan berdasarkan banyak kata yang ada di dalam tulisan tersebut. Pertama anda dapat mengunjungi [http://www.speechinminutes.com/](http://www.speechinminutes.com/). Ini adalah kalkulator website yang dapat memperkirakan lama membaca suatu tulisan, kita akan diminta memasukan jumlah kata dan website tersebut akan menghitung waktu yang dibutuhkan untuk selesai membaca dari jumlah kata yang anda masukan dan menampilkan lama waktunya dalam satuan menit.

penghitungan dari website tersebut berdasarkan kecepatan WPM (Word per minutes), dengan catatan 130 kata dapat dibaca dalam satu menit.

![speechinminutes.com](https://erwindosianipar.herokuapp.com/assets/images/content/sp12.png)

Ini adalah data yang saya dapatkan dari website [speechinminutes.com](http://www.speechinminutes.com/). Ditampilkan bahwa 130 kata akan dapat di baca dalam satu menit dan begitu untuk penjumlahan seterusnya, sekali lagi dengan catatan kecepatan bahwa anda dapat membaca 130 kata permenit.


### Penerapan pada kode

Contoh penerapannya dalam kode sangat mudah di implementasikan, anda hanya membutuhkan algoritma penjumlahan yang sangat mudah dan sedikit konversi bilangan akibat penjumlahan bilangan dari desimal dengan bilangan bulat agar waktu yang ingin didapatkan cukup sempurna.

Jika anda menggunakan *framework* seperti CodeIgniter ataupun Laravel, anda dapat membuat suatu helper baru, berikut contoh penggunaanya dalam CodeIgniter.

Pertama buat helper baru, masuk ke folder `application/helpers` buat file baru dengan nama `readtime_helper.php` lalu ketikan kode berikut:

```php
<?php
defined('BASEPATH') OR exit('No direct script access alowed');

if (!function_exist('readTime')) {
    function readTime($word) {
        $count = str_word_count(strip_tags($word));
        $word = $count / 130;
        $minute = intval(ceil($word));
        return $minute;
    }
}
```

Jika sudah mengetikan kodingan tersebut simpan pada *helper* yang baru dibuat tersebut. Selanjutnya masuk ke file konfigurasi di `application/config/autoload.php` aktifkan `autoload` untuk *helper* tersebut agar saat penggunaan anda dapat memanggil fungsi *helper* tersebut dari mana saja.

Pemanggilan fungsi *helper* `readTime` tersebut sama seperti memanggil fungsi pada umumnya. pertama buatlah sebuah *variable* string, lalu isi dengan kata-kata, berikut contoh penggunaanya:

```php
$loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam";
readtime($loremIpsum);
```

### Akhir Kata

Semoga ini dapat membantu, dan semoga ini menjawab pertanyaan, terimakasih.
