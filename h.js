var n = 11;
        var center = parseInt(n / 2) ;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (j == 0 ||  i == center || j == n-1) { 
                    document.write("#");
                } else {
                    document.write("&nbsp&nbsp")
                }
            }
            document.write("</br>")
        }
