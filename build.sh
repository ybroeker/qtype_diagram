DATE=$(date '+%Y%m%d')

NR=$(< version)
NEXT=$(($NR + 1))
echo $NEXT > version

VERSION=$(printf "%d%02d" $DATE $NR)

echo $VERSION


rm -r qtype_diagram
mkdir qtype_diagram
cp -r db qtype_diagram/db
cp -r lang qtype_diagram/lang
cp -r pix qtype_diagram/pix
cp -r drawio qtype_diagram/drawio
cp -r drawio qtype_diagram/drawio
cp -r classes qtype_diagram
cp {version,renderer,questiontype,question,lib,edit_diagram_form}.php  qtype_diagram
cp LICENSE qtype_diagram
cp README.md qtype_diagram
cp script.js qtype_diagram


sed -i -e "s/@version@/$VERSION/g" qtype_diagram/version.php


rm qtype_diagram_*.zip
zip -r qtype_diagram_$VERSION.zip qtype_diagram -x "*.DS_Store"