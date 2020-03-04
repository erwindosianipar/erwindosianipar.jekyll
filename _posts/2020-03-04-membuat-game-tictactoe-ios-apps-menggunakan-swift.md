---
layout: post
permalink: /blog/membuat-game-tictactoe-ios-apps-menggunakan-swift
title: Membuat Game Tictactoe iOS Apps Menggunakan Swift
description: Tutorial sederhana membuat aplikasi game pada perangkat iOS
tags: programming
---

Ini adalah salah satu aplikasi yang saya ciptakan saat mengikuti *code challenge* membuat aplikasi game sederhana dengan bahasa pemrograman Swift.

Swift adalah bahasa pemrograman yang didukung oleh Apple untuk membuat aplikasi pada perangkat-perangkat berbasis iOS seperti: iPhone, iPad, Mac, Apple Watch, Apple TV, dan perangkat Apple lainnya.

### Persiapan

Buka *code editor* Xcode selanjutnya buat satu Xcode *project* untuk memulai pembuatan game. Pilih *Single View Apps* dan klik tombol *Next*.

![Xcode Project](/media/2020-03-04/1-create-xcode-project.png)

Selanjutnya lakukan *setting options* saat membuat *project* dan pilih tempat penyimpanan *project*.

![Choose Options](/media/2020-03-04/2-choose-options-new-project.png)

Kita akan memiliki folder-folder atau *work area* sebagai berikut:

![Folder Work Area](/media/2020-03-04/3-folder-structure.png)

### Work Area

Didalam `Main.stroryboard` buatlah sembilan `Button` dengan ukuran `100x100` untuk `Tictactoe Blok Board` yang akan kita gunakan untuk permainan.

Tambahkan `Label` diatas kesembilan `Tictactoe Blok Board` untuk informasi *player* yang sedang aktif untuk bermain, dan tambahkan satu `Button` untuk *reset* permainan.

![Block Board](/media/2020-03-04/4-block-board.png)

### Pre Code

Buka `Assistant` pada *sidebar* Xcode maka akan terbuka *window code editor* yang akan membuka file `ViewController.swift`.

Selanjutnya tambahkan `IBOutlet` untuk kesembilan `Tictactoe Blok Board` dengan cara tekan `CTRL` lalu *drag* ke kiri atau ke *code editor*, dan berikan nama untuk setiap nama *Blok Button* nya.

![IBOutlet](/media/2020-03-04/5-iboutlet.png)

Selanjutnya buat satu `IBAction` yang akan menangani kesembilan *Tictactoe Block Board* saat kejadian `Button` tersebut diklik. Buat satu *function* baru dengan nama `clickHandle`.

![IBAction](/media/2020-03-04/6-ibaction.png)

Setelah function tersebut tercipta, maka *function* tersebut akan dipanggil ketika `Button` `block1` dipencet. Selanjutnya hubungkan semua `Button` yang lainnya ke *function* `clickHandle`. Jadi semua `Tictactoe Blok Board` memiliki *function* yang sama.

![Link Action Button](/media/2020-03-04/7-link-button-to-ibaction.png)

### Let's Code

Selanjutnya kita masuk ke dalam tahap *coding* brooom brooom! 😎

#### Inisialisasi

Diatas `IBOutlet` kita akan membuat *inisialisasi* *variabel* yang akan kita perlukan untuk game.

```
var gameIsActive = true
let point = [#imageLiteral(resourceName: "x"), #imageLiteral(resourceName: "o")]
var player = "x"
var buttons = [UIButton]()
var board: [String] = ["", "", "", "", "", "", "", "", ""]
let winPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
```

##### Deskripsi

`gameIsActive` akan menyimpan nilai *Boolean* yang berfungsi untuk penanda, apakah game sudah berakhir atau belum.

`point` menyimpan *imageLiteral* yang menyimpan gambar *icon* `x` dan `o` yang ada didalam folder *Assets*, sebelumnya tambahkan gambar *icon* `x` dan icon `o` terlebih dahulu.

`player` berisi data *player* yang sedang aktif.

`buttons` bertipe *array of UIButton* yang akan menyimpan sembilan `Tictactoe Block Board`

`winPosition` berisi *array* untuk menyimpan posisi menang permainan dalam barisan *board*

#### Life Cycle

Dalam *life cycle* `viewDidLoad` kita harus menambahkan setiap *button*nya kedalam *array of UIButton* yang sudah kita deklarasikan sebelumnya.

```
buttons.append(block1)
buttons.append(block2)
buttons.append(block3)
buttons.append(block4)
buttons.append(block5)
buttons.append(block6)
buttons.append(block7)
buttons.append(block8)
buttons.append(block9)
```

Buat satu `IBOutlet` untuk label informasi *player* dan tambahkan baris kode berikut dalam *life cycle* `viewDidLoad` untuk mengeset sesi *player* yang akan pertama kali bermain.

```
playerName.text = "Player turn: " + player
```

#### Click Block Handle

Dalam *function* `clickHandle` tambahkan baris kode berikut:

```
if buttons[sender.tag-1].isEnabled == true {
    let turn = player == "x" ? point[0] : point[1]
    buttons[sender.tag-1].setImage(turn, for: .normal)
    buttons[sender.tag-1].isEnabled = false
    board[sender.tag-1] = player
    setNextPlayer()
    cekWinner()
}
```
##### Set Next Player

*Function* `setNextPlayer` berisi kode yang akan mengecek siapa *player* yang sedang aktif dan siapa player yang akan bermain selanjutnya.


```
if player == "x" {
    player = "o"
    playerName.text = "Player turn: " + player
} else {
    player = "x"
    playerName.text = "Player turn: " + player
}
```

##### Check The Winner

*Function* `cekWinner` berisi kode untuk memerika apakah didalam susunan *board* sudah ada *player* yang menang.

```
for position in winPosition {
    if board[position[0]] != "" && board[position[0]] == board[position[1]] && board[position[1]] == board[position[2]] {
        if board[position[0]] == "x" {
            disabledAllButton()
            gameIsActive = false
            playerName.text = "Player x win!"
        } else {
            disabledAllButton()
            gameIsActive = false
            playerName.text = "Player o win!"
        }
     }
}
```

Pada baris kode diatas terdapat pemanggilan *function* `disabledAllButton` yang berfungsi untuk men*disable* tombol, agar user tidak dapat mengklik game *board* jika game sudah berakhir, untuk itu buat satu *function* `disabledAllButton` dengan kode seperti berikut.

```
func disabledAllButton() {
    for i in 0...8 {
        buttons[i].isEnabled = false
    }
}
```

##### Game is Draw

Dan tambahkan juga baris kode ini kedalam *function* `cekWinner` untuk memeriksa apakah permainan berakhir seri.

```
var totalPoint = ""
for i in 0...8 {
    totalPoint += board[i]
}

if totalPoint.count == 9 {
    if gameIsActive {
        playerName.text = "Game is draw!"
    }
}
```
#### Click Reset Handle

*Function* terakhir yang kita perlukan adalah untuk memulai ulang game. *Function* ini akan dipanggil jika *button reset* diklik.

```
for i in 0...8 {
    buttons[i].setImage(nil, for: UIControl.State())
    buttons[i].isEnabled = true
    board[i] = ""
}
```

*Function* diatas akan membersihkan *background image* dari *button* dan mengeset semua *board* kembali ke keadaan awal game.

### Game Times 😂

<img src ="/media/2020-03-04/8-game-times.gif" width="300">

### Done

> Untuk *source code* dari *project* ini sudah tersedia di *repository* [Github](https://github.com/erwindosianipar/tictactoe-swift) saya. Happy Coding!
