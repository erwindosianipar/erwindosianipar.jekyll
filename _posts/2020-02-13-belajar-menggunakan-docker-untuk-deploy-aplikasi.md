---
layout: post
permalink: /blog/belajar-menggunakan-docker-untuk-deploy-aplikasi
title: Belajar Menggunakan Docker untuk Deploy Aplikasi
description: Simple and flexible deployment tricks
image: https://miro.medium.com/max/10944/0*7Xk7KsmckMhwD_jV
image-credit: Photo by Bernd Dittrich on Unsplash
tags: programming
---

Hari ini saya mempelajari satu tools yang sangat berguna dalam *development* aplikasi.
Aplikasi ini bernama Docker, dimana docker ini sedikit memiliki kesamaan dengan konsep *virtual machine* namun lebih *power full*

### Apa itu Docker?

Docker adalah project *open-source platform* sebagai produk atau layanan yang ditujukan kepada developer untuk membangun, mengemas, dan menjalankan aplikasi secara *virtualisasi* dalam satu tingkat sistem operasi di dalam sebuah *container*. [<sup>[1]</sup>](https://en.wikipedia.org/wiki/Docker_(software))

Docker ini sendiri, berada di atas *infrastructure* dan satu sistem operasi berbasis Unix selanjutnya aplikasi-aplikasi yang akan di *deploy* berada di dalam *container*. Container-container ini adalah paket-paket aplikasi yang siap untuk dijalankan atau siap untuk *deploy*

![Konsep Docker container](/media/2020-02-13/1-docker-container.png)

Gambar diatas menjelaskan bahwa aplikasi-aplikasi kita yang siap untuk di *deploy* berada di dalam sebuah container, dimana container berada di atas Docker.

### Virtual Machine VS. Docker

Seperti namanya *Virtual Machine* adalah sebuah mesin *virtual* yang memiliki kemampuan untuk menciptakan mesin komputer yang memiliki kemampuan yang sama dengan komputer yang menjalankannya. Virtual Machine berdiri diatas sistem operasi yang selanjutnya kita harus menginstal kembali sistem operasi untuk *deployment* atau media dimana aplikasi kita akan berjalan.

Konsep *Virtual Machine* diatas akan cukup merepotkan, karena kita harus menginstal satu sistem operasi untuk media dimana aplikasi kita berjalan, coba bayangkan jika kita memiliki beberapa aplikasi *micro services* maka kita harus menginstal sistem operasi untuk masing-masing *micro-services*nya dan belum termasuk dengan menginstal *prerequisite* yang lain agar aplikasi kita berjalan dengan baik.

Docker sendiri telah mempermudah tahapan-tahapan *deployment* aplikasi diatas, dimana, semua aplikasi-aplikasi kita berada di dalam satu *container* yang berdiri diatas Docker. *Package* atau aplikasi pendukung hanya perlu diinstal sekali di dalam Docker Image dan jika aplikasi-aplikasi kita adalah *micro-services* maka setiap aplikasinya dapat menggunakan resource yang sama.

### Docker Images

Docker Images adalah sebuah template yang bersifat *read only*. *Template* ini sebenarnya adalah sebuah sistem operasi yang telah diinstal berbagai aplikasi. Docker Images berfungsi untuk membuat *Docker Container*, dengan hanya satu Docker Images kita dapat membuat banyak Docker Container.

Dengan kata lain Docker Images ini berisi aplikasi kita yang sudah *"dibekukan"* atau sudah di *build* menjadi file *executable* yang nanti akan digunakan atau di*running*.

### Docker Container

Docker Container dapat dikatakan sebagai sebuah media tempat aplikasi kita berjalan. Setiap Docker Container yang disimpan maka akan terbentuk layer baru tepat diatas Docker Images. Kita dapat membuat banyak Docker Container dari satu Docker Images. Docker Container ini nantinya dapat di*build* sehingga akan menghasilkan sebuah Docker Images, dan Docker Images yang dihasilkan dari Docker Container ini dapat kita gunakan kembali untuk membuat docker container yang baru jika suatu saat atau kondisi ingin digunakan kembali.

### Menggunakan Docker

Untuk menggunakan Docker, maka kita memerlukan Docker yang sudah terinstal di komputer kita, disini saya tidak akan menulis bagaimana cara menginstalnya wkwkwk, silahkan cara tutorialnya di artikel lain.

Pertama buat sebuah folder untuk kita menempatkan project

``` console
$ mkdir BELAJAR-DOCKER
$ cd BELAJAR-DOCKER
```

Selanjutnya kita perlu membuat satu file `Dockerfile` yang berguna untuk *initialisasi* Docker

``` console
$ touch Dockerfile
```

Sampai disini kita telah memiliki satu Docker file yang masih kosong, yang nantinya akan kita isi perintah *shell* untuk dijalankan.

### Project

Disini saya akan mencontohkannya dengan aplikasi sederhana dengan Golang, aplikasi nya hanya akan menampilkan Hello World saat URL webnya dikunjungi. Berikut *source code* Golang yang akan saya gunakan.

<script src="https://gist.github.com/erwindosianipar/3f9b4b78b3ffedf564a4a8ad2a3b4125.js"></script>

Aplikasi tersebut nantinya akan kita *build* menjadi satu aplikasi yang *executable* untuk dijalankan di dalam Container pada Docker.

To be continue...
