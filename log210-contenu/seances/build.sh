' convert web server page to html
 wget   --recursive   --no-clobber   --page-requisites   --html-extension   --convert-links   --domains codimd.server.net http://localhost:53987/

pandoc -s -c=slide_themes.css   -t revealjs  -o output.html seance-01.md & open output.html