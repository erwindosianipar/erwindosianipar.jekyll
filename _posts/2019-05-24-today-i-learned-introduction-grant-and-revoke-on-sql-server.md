---
layout: post
permalink: /blog/today-i-learned-introduction-grant-and-revoke-on-sql-server
title: 'Today I Learned: Introduction Grant and Revoke on SQL Server'
description: Data Control Language dalam SQL Server Management Studio
image: https://erwindosianipar.herokuapp.com/assets/images/article/large/19_1558660180_14406544632111087457_20190524080940_n.jpeg
image-credit: Photo by Google Image
tags: programming
toc: true
---

Hallo semuanya apa kabar? Saya harap kita semua dalam keadaan sehat dan tidak kekurangan sesuatu apapun, berhubung dengan adanya kesibukan saya pada akhir-akhir ini menjadikan blog ini agak kurang update hehe.

Dalam penggunaan SQL Server dan beberapa *software* Data Base Management System yang lain dikenal beberapa istilah yang digunakan untuk pengelolaan data di dalam database, kali ini saya telah mempelajari dan mencoba memaparkan pengertian dan pengenalan Data Control Language didalam SQL Server Management Studio.

Walaupun kali ini saya berfokus pada *software* SQL Server, perintah-perintah ini juga dapat dijalankan pada *software* pengolah basisdata lainnya, Structure Query Language (SQL) adalah bahasa yang umum digunakan untuk mengolah basisdata.

Data Control Language (DCL) adalah perintah yang digunakan untuk melakukan kontrol terhadap basisdata, seperti memberikan dan mencabut akses dari user atau pengguna basisdata.

Dua perintah yang umum digunakan dalam DCL ini adalah pemberian akses (Grant) dan pencabutan akses (Revoke).

**Grant** adalah perintah untuk memberi hak akses istimewa kepada user atau memberikan seorang pengguna atau user suatu permission untuk mengakses ke basisdata didalam sebuah server.

**Revoke** adalah perintah untuk mencabut hak akses yang telah diberikan hak istimewa.

Pemberian hak akses (Privileges) pada user SQL bertujuan untuk setiap user memiliki hak seperti melihat, mengisi, memperbarui, menghapus, penggabungan tabel dalam suatu database. Akses juga dapat berguna sebagai menjaga sekuritas dari data yang ada didalam database agar pengguna lain yang tidak memiliki autentikasi untuk mengolah database.

Sebelum masuk dalam penggunaan Grant dan Revoke kita akan membuatkan satu pengguna dimana pengguna yang diciptakan ini dapat login ke koneksi database dan akan menggunakan hak akses yang diberikan.

### Pembuatan Login Koneksi

Pembuatan login ini bertujuan untuk setiap pengguna yang ingin mengakses dan ingin membuat koneksi ke database harus melewati autentikasi.

```sql
CREATE LOGIN Pengguna WITH PASSWORD = 1234567890;
CREATE USER Pengguna01 FOR LOGIN PENGGUNA;
```

#### Penjelasan Kode

Adalah pembuatan akses login untuk pengguna, artinya pengguna yang terdaftar dapat masuk dan menciptakan koneksi ke database, pengguna dapat login dengan password: `1234567890` tanpa tanda kutip.

`CREATE USER Pengguna01` adalah menciptakan pengguna atau siapa yang dapat login, kita anggap ini adalah membuat pengguna dengan *username* `Pengguna01 FOR LOGIN Pengguna` berfungsi untuk `Pengguna01` ini diciptakan atau terdaftar sebagai bagian dari login `Pengguna`. Jadi didalam SQL Server, pengguna yang telah dibuat dapat login dan membuat koneksi ke database dengan kemampuan yang dimilikinya.

### Jenis Permission / Privileges

Jenis permission adalah suatu kemampuan yang dimiliki oleh pengguna untuk melakukan suatu tindakan atau *query* ke database

1. `SELECT` Kemampuan untuk menjalankan pernyataan `SELECT` atau tampilkan data dari tabel.
2. `INSERT` Kemampuan untuk mengisi data atau menambahkan data ke dalam tabel.
3. `UPDATE` Kemampuan untuk memperbarui atau mengedit data yang ada didalam tabel.
4. `DELETE` Kemampuan untuk menjalankan pernyataan `DELETE` atau hapus pada tabel.
5. `REFERENCES` Sebuah constraint yang mengacu pada tabel.
6. `ALTER` Pernyataan `ALTER TABLE` untuk merubah definisi tabel.
7. `ALL` tidak memberikan semua ijin untuk tabel, sebaliknya, ia hanya memberikan ijin `ANSI-92` yang merupakan `SELECT`, `INSERT`, `UPDATE`, `DELETE`, dan `REFERENCES`.

### Sintaks Grant

Sintaks atau *query* untuk memberikan Grant atau hak akses pada tabel di SQL Server

```sql
GRANT [jenis permission] ON [nama tabel] TO [nama pengguna];
```

#### Penjelasan Kode

1. `jenis permission` adalah jenis hak akses yang akan diberikan kepada pengguna.
2. `nama tabel` adalah nama objek, dalam kasus kali ini adalah tabel mana yang dapat di akses oleh pengguna yang diberikan akses kepadanya.
3. `nama pengguna` adalah pengguna mana yang berhak mendapatkan atau pengguna mana yang diberikan akses.

#### Contoh Sederhana:

```sql
GRANT UPDATE ON Tbl_pengguna TO Pengguna01;
```

Perintah ini memberikan hak untuk `Pengguna01` memperbarui data didalam tabel `Tbl_pengguna`.

Jika anda ingin membuat atau memberikan jenis hak akses `SELECT`, `INSERT`, `UPDATE`, `DELETE`, dan `REFERENCES`, sekaligus anda bisa menggunakan jenis hak akses `ALL`, berikut adalah contoh *query* `ALL`

```sql
GRANT ALL ON Pengguna TO
Pengguna01,
Pengguna02,
Pengguna03, ...
Pengguna10;
```

### Sintaks Revoke

Setelah anda membuat atau memberikan hak akses pada sebuah user SQL Server, anda mungkin perlu mencabut atau menghapus beberapa atau semua hak akses tersebut.

```sql
REVOKE UPDATE ON Tbl_pengguna FROM Pengguna01;
```

Perintah ini akan menghilangkan/menghapus hak istimewa berupa memberbarui atau `UPDATE Pengguna01` pada tabel `Tbl_pengguna`, sehingga pengguna tidak akan dapat menggunakan `UPDATE` data dari tabel itu lagi.

Namun, jika pengguna telah menerima hak istimewa lebih dari satu pengguna, maka pengguna tersebut memiliki hak istimewa `UPDATE` pada tabel sampai setiap orang yang diberikan ijin itu dicabut. Revoke hak istimewa tidak dapat dilakukan jika dari awalnya hak istimewa tersebut tidak diberikan.

### Akhir kata

Sekian tentang pengenalan Grant dan Revoke dalam SQL Server kali ini, selamat belajar dan selamat mencoba.