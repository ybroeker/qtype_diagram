DATE=$(date '+%Y%m%d')

NR=$(< version)
NEXT=$(($NR + 1))
echo $NEXT > version

VERSION=$(printf "%d%02d" $DATE $NR)

echo $VERSION


rm -r qtype_diagram
mkdir qtype_diagram
cp -r {db,lang,pix,drawio,classes} qtype_diagram
cp {version,renderer,questiontype,question,lib,edit_diagram_form}.php  qtype_diagram
cp LICENSE qtype_diagram
cp README.md qtype_diagram
cp script.js qtype_diagram


sed -i -e "s/@version@/$VERSION/g" qtype_diagram/version.php


rm qtype_diagram_*.zip
zip -r qtype_diagram_$VERSION.zip qtype_diagram -x "*.DS_Store"