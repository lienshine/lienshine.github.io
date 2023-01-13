---
title: mac创建带点的文件夹
autoGroup-3: Vuepress
---



文件最前面带上.就会变成隐藏文件，系统默认不显示隐藏文件，所以你必须开启显示隐藏文件才能把文件命名为隐藏文件。

显示隐藏文件：

打开『终端』这个程序，输入以下:

defaults write com.apple.finder AppleShowAllFiles -boolean true ; killall Finder

回车执行。

隐藏隐藏文件：

打开『终端』这个程序，输入以下:

defaults write com.apple.finder AppleShowAllFiles FALSE ; killall Finder

回车执行。