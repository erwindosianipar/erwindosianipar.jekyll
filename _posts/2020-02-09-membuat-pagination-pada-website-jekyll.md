---
layout: post
permalink: /blog/membuat-pagination-pada-website-jekyll
title: Membuat Pagination pada website Jekyll
description: Mengaktifkan plugin pagination pada website berbasis Jekyll
image: https://miro.medium.com/max/12020/0*MliSazNrG955nKNT
image-credit: Photo by Clarissa Watson on Unsplash
tags: programming
toc: true
---

Ini adalah cara sederhana untuk mengaktifkan plugin pagination pada website berbasis Jekyll. Ini telah saya terapkan terhadap website ini. Caranya cukup mudah karna Jekyll telah menyediakan plugin pagination yang dapat langsung kita gunakan.

### Memulai

Melalui terminal, silahkan masuk ke dalam folder *project* Jekyll anda berada, berikut contoh yang saya gunakan dalam *project* website Jekyll saya.

``` console
$ cd ~/Projects/jekyll/blog
```

Setelah masuk ke dalam folder tempat project website Jekyll, selanjutnya buka dengan *code editor* andalan, disini saya menggunakan VS Code.

``` console
$ code .
```

### Menambahkan plugin di dependencies

Pada file `Gemfile` tambahkan *plugin* `jekyll-paginate` pada *group* Jekyll Plugins.

``` ruby
group :jekyll_plugins do
	gem "jekyll-feed", "~> 0.12"
	gem 'jekyll-seo-tag'
	gem 'jekyll-sitemap'
	gem 'jekyll-paginate'
end
```

### Update dependencies Jekyll

Selanjutnya lakukan peng*updatean* *dependencies* untuk mengunduh semua *plugin* Jekyll terbaru.

``` console
$ bundle update
```
*Bundle* akan selesai ter*update* dan memunculkan pesan berhasil `Bundle updated!`

### Configurasi

Selanjutnya kita akan membuat *configurasi*. *Configurasi* ini adalah inti pemasangan *plugin pagination* dalam website. Untuk menambahkan *pagination* pada website, buka file `_config.yml`

Tambahkan baris kode berikut untuk *configurasi*nya

``` yaml
paginate: 5
paginate_path: "/blog/page/:num/"
```
Pengertian `paginate: 5`  adalah total postingan blog yang akan ditampilkan dalam setiap halaman, sedangkan `paginate_path: "/blog/page/:num/"` adalah lokasi folder *path* dimana Jekyll akan meng*generate* halaman untuk dijadikan sebagai halaman *pagination*.

**Catatan:** `pagination_path` akan membaca *file* `index.html` yang berada didalam folder `blog`, jika anda melakukan kesalahan dalam memasukkan *path* kemungkinan akan terjadi error.

Selanjutnya tambahkan *plugins* *jekyll-paginate* pada *build settings configuration*.

``` yaml
# Build settings
plugins:
  - jekyll-feed
  - jekyll-seo-tag
  - jekyll-sitemap
  - jekyll-paginate
```

### Menambahkan di halaman website

Dalam file `index.html` blog anda, tambahkan kode berikut untuk memunculkan *link pagination*.

{% raw %}
``` html
<div  class="pagination">
{% if paginator.previous_page %}
	<a  href="{{ paginator.previous_page_path }}" class="previous">
		« Prev
	</a>
{% else %}
	<span  class="previous">
		« Prev
	</span>
{% endif %}
	<span  class="page_number">
		{{ paginator.page }} of {{ paginator.total_pages }}
	</span>
{% if paginator.next_page %}
	<a  href="{{ paginator.next_page_path }}"  class="next">
		Next »
	</a>
{% else %}
	<span  class="next ">Next »</span>
{% endif %}
</div>
```
{% endraw %}

### Terakhir

Jalan website anda.

``` console
$ bundle exec jekyll serve
```
