---
layout: post
permalink: /blog/pecahkanlah-masalah-bukan-malah-memperbaikinya
title: Pecahkanlah Masalah Bukan Malah Memperbaikinya
description: "Masalah itu umum dalam proses software development bahkan di kehidupan sehari-hari"
image: https://images.unsplash.com/photo-1509078932415-355dbe95f1ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
image-credit: Chuttersnap on Unsplash
tags: reading
---

### TL;DR

Dalam kehidupan sehari-hari pasti selalu saja ada masalah, tidak terlepas dari *software development process* pasti akan selalu saja ada masalah yang harus dihadapi, entah itu *error*, *bugs*, dan banyak kesalahan *logic* yang selalu menjadi teman kami sehari-hari.

Setiap ada masalah baru yang muncul. Kita selalu mencoba menyelesaikannya, dan akhirnya kita tau apa penyebabnya. Setelah mengetahui apa penyebanya selanjutnya kita mencari solusi dan *gotcha* masalah terpecahkan, bug diperbaiki.

Misalkan besoknya, masalah ini muncul lagi untuk kedua dan ketiga kalinya, dan hal ini pastinya sudah tidak mengherankan kita lagi, karena kita tau penyebabnya pasti tidak jauh berbeda dari penyebab sebelumnya, bahkan sama. Singkat cerita masalah kali ini langsung kita perbaiki lebih cepat dari sebelumnya, dan akhirnya masalah selesai, *commit* dan *push* buat *pull-request* selesai!

### Something went wrong

Pada titik ini kita menyadari bahwa ada yang salah dari proses yang kita lakukan tersebut. Kita melakukan kesalahan dan perbaikan yang sama berulang kali. Ini jelas berlawanan dengan konsep **DRY**-nya programmer ([Don't Don't repeat yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)).

Untuk suatu masalah sebaiknya, kita mencoba untuk mempersingkat pemecahan masalah tersebut agar kita tidak melakukannya lagi secara berulang kedepannya.

Ada dua jenis *hooman problem solver* dalam menghadapi masalah:

1. Mereka yang merasa cuek bebek, dan terus menerus melakukan hal yang sama (mendapatkan masalah dan memperbaikinya).
2. Mereka yang memiliki keinginan untuk memecahkan masalah tersebut.

Jenis *hooman* dengan point yang kedua akan melakukan riset tentang bagaimana masalah ini muncul pertama kali, dan mencari bagaimana cara mencegah masalah ini agar tidak terjadi lagi selamanya.

Ini adalah contoh sederhana bagaimana membedakan antara **selesaikan** dan **perbaiki**.

> **Memperbaiki** berarti menerapkan solusi yang sama berulang kali pada masalah yang dihadapi.
> 
> **Menyelesaikan** berarti mencari solusi dari masalah tersebut, sehingga masalah tersebut tidak pernah muncul lagi.

Dengan solusi kita mendapatkan lebih banyak pengetahuan untuk menyelesaikan lebih banyak masalah, bukan dengan menerapkan hal yang sama.

Dalam *software development process* contohnya saat seorang *engineer* yang memperbaiki atau membuat suatu *function*, *class*, *design pattern*, atau menggunakan *tools* seperti, *library*, atau *framework* yang dipakai bahkan dengan *IDE* yang digunakan yang biasanya kami sebagai **solusi**.

### Solve the problem

Ada dua cara untuk meng*handle* masalah:

1. **Selesaikan, perbaiki, perbaiki, perbaiki**. Adalah tipe orang yang puas dengan solusi yang sama untuk waktu yang lama.
2. **Selesaikan, selesaikan, selesaikan, selesaikan**. Adalah tipe orang yang selalu mencoba memecahkan masalah yang lebih dalam dan menjadi lebih baik dalam hal itu.

Tentu ini terlalu sederhana. Dalam implementasinya, kita tidak dapat menyelesaikan masalah yang ada setiap saat karena pastinya membutuhkan usaha dan mental yang kuat. Untuk menyelesaikan pekerjaan kami di *software development*, kami memperbaiki banyak hal, sehingga dituntut untuk cepat dan tepat. Dari situasi yang terjadi ini, ada baiknya untuk meluangkan waktu untuk berpikir lebih lama dan menyelesaikan masalah semacam ini.

Cobalah untuk berpikir tentang sifat suatu masalah, buat suatu rangka dari masalah tersebut dan jangan lihat kebelakang.

### Break the rules

Lain kali jika kita menerapkan solusi yang sama secara manual lebih dari beberapa kali misalnya hanya *copy* dan *paste*. Ketahuilah bahwa kita sedang memperbaiki sesuatu, bukan menyelesaikannya. Sebaliknya, desain ulang masalah, terapkan dalam *class*, buat *library*, automatisasi proses. Lihat apa yang orang lain lakukan untuk memecahkan masalah-masalah tersebut *don't repeat your self*.
