---
layout: post
permalink: /blog/memperbaiki-deployment-target-warning-cocoapods-xcode-12
title: Memperbaiki Deployment Target Warning CocoaPods Xcode 12
description: "The iOS Simulator deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 8.0, but the range of supported deployment target versions is 9.0 to 14.0.99."
tags: programming
toc: true
---

Berdasarkan XCode [Release notes](https://developer.apple.com/documentation/xcode-release-notes/xcode-12_2-beta-release-notes) kali ini mengatakan.

> The XCode 12.2 beta 2 release supports on-device debugging for iOS 9 and later, tvOS 9 and later, and watchOS 2 and later. Xcode 12.2 beta 2 requires a Mac with Apple silicon running macOS Big Sur 11 or later, or an Intel-based Mac running macOS Catalina 10.15.4 or later.

Saya tidak yakin apakah ini artinya dukungan XCode 12 Beta untuk iOS 8 **sepenuhnya** akan dihentikan? Tetapi sepertinya hal ini memang akan terjadi. Jika pada *project* yang Anda kembangkan menggunakan CococaPods dan editor XCode yang Anda gunakan adalah versi 12 Beta serta menemukan *error* yang sama.

```bash
The iOS Simulator deployment target 'IPHONEOS_DEPLOYMENT_TARGET' is set to 8.0, but the range of supported deployment target versions is 9.0 to 14.0.99.
```

*Error warning* seperti ini terlihat, dan ini terjadi karena dukungan untuk iOS 8 telah dicabut pada XCode 12 Beta, dan pada *project* yang digunakan masih menggunakan **Pod** dengan *minimum deployment target*nya adalah iOS 8.

Berikut adalah link [Github Issue](https://github.com/CocoaPods/CocoaPods/issues/7314)*nya*. CocoaPods telah membahas sedikit tentang *issue* ini dan masih *open issue* di [CococaPods](https://github.com/CocoaPods/CocoaPods/issues/9884).

Dan jika perbaikan yang telah Anda lakukan hanya dengan mengubah *minimum deployment target* ke yang lebih tinggi dari iOS 8, maka *error* ini masih akan tetap muncul.

Menunggu *bugs* ini diperbaiki oleh CocoaPods, Anda dapat menambahkan kode berikut ke `Podfile` sebagai salah satu solusinya.

```swift
post_install do |installer|
   installer.pods_project.targets.each do |t|
       t.build_configurations.each do |bc|
           if bc.build_settings["IPHONEOS_DEPLOYMENT_TARGET"] == "8.0"
             bc.build_settings["IPHONEOS_DEPLOYMENT_TARGET"] = "9.0"
           end
       end
   end
end
```

Ini akan mengubah semua *target setting* yang telah diterapkan di semua **Pod** dalam proyek Anda ke *deployment target* versi 9. Tempatkan baris kode tersebut setelah target untuk *project* yang Anda gunakan.
