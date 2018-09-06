#!/usr/bin/env bash
FOLDER=diagram
DATE=$(date '+%Y%m%d')

NR=$(< version)
NEXT=$(($NR + 1))
echo $NEXT > version

VERSION=$(printf "%d%02d" $DATE $NR)

echo $VERSION


rm -r $FOLDER
mkdir $FOLDER
cp -r {db,lang,pix,drawio,classes} $FOLDER
cp {version,renderer,questiontype,question,lib,edit_diagram_form}.php  $FOLDER
cp LICENSE $FOLDER
cp README.md $FOLDER
cp script.js $FOLDER


sed -i -e "s/@version@/$VERSION/g" $FOLDER/version.php


rm qtype_diagram_*.zip
zip -r qtype_diagram_$VERSION.zip $FOLDER -x "*.DS_Store"