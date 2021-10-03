var n = 10;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (j == 0 || i==n-1 || j == n - 1) {
                    document.write("#");
                } else {
                    document.write("&nbsp&nbsp")
                }
            }
            document.write("</br>")
        }
