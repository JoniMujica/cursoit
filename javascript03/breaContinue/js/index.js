for (var i = 0; i < 10; i++) {
        if(i == 5){
            break; //con 'break' rompé el bucle
        }
        document.write("vuelta" + (i+1) + "<br>");
}

for (var i = 0; i < 10; i++) {
    if(i == 5){
        continue; // permite que continue el bucle
    }
    document.write("vuelta" + (i+1) + "<br>");
}