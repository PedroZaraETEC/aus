function entrar() {
    const path = window.location.pathname;
    const filename = path.substring(path.lastIndexOf('/') + 1);

    switch (filename) {
        case "index.html": 
            window.location.href = `web/tela1.html`;
        break;

        case "tela1.html": 
            window.location.href = `tela2.html`;
        break;

        case "tela2.html": 
            window.location.href = `tela3.html`;
        break;

        case "tela3.html": 
            window.location.href = `tela4.html`;
        break
    }
}
