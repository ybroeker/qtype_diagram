cd ..
rm qtype_diagram.zip
zip -r qtype_diagram.zip qtype_diagram -x "*vendor/*" -x "qtype_diagram/.git/*" -x "qtype_diagram/.idea/*" -x "*.DS_Store"