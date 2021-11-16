var filmes = ["https://m.media-amazon.com/images/I/A10dWOrYXFL._AC_UY327_FMwebp_QL65_.jpg", 
"https://m.media-amazon.com/images/I/91wjdH78QDL._AC_UY327_FMwebp_QL65_.jpg", 
"https://m.media-amazon.com/images/I/91QWbCKNSoL._AC_UY327_FMwebp_QL65_.jpg",
"https://m.media-amazon.com/images/I/71zhsQyBmLL._AC_UY327_QL65_.jpg",
"https://m.media-amazon.com/images/I/71jD0lfQd+L._AC_UY327_FMwebp_QL65_.jpg",
"https://m.media-amazon.com/images/I/91C51lv07HL._AC_UY327_FMwebp_QL65_.jpg",
"https://m.media-amazon.com/images/I/81bX53VmBsL._AC_UY327_QL65_.jpg", 
"https://m.media-amazon.com/images/I/91Jsh-UClvL._AC_UY327_FMwebp_QL65_.jpg",
"https://m.media-amazon.com/images/I/71IbhG2jAYL._AC_UY327_FMwebp_QL65_.jpg",
"https://m.media-amazon.com/images/I/91JVttvFIsS._AC_UY327_FMwebp_QL65_.jpg"]

//precisa consertar o bug dos links
for(i = 0; i < filmes.length; i++) {
  document.write("<a href=https://www.google.com.br/>" + "<img src=" + filmes[i] + "></a>")
}