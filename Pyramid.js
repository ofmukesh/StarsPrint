for (let i = 0; i <= center; i++) {
        for (let j = 0; j < n; j++) {
            if (i == center|| j==center+i ||j==center-i ) {
                document.write("#");
            } else {
                document.write("&nbsp&nbsp")
            }
        }
        document.write("</br>")
    }
