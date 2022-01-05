// import, export - przykłady
// dodatek do testowania metod http ?? - może na później, do mongoose
// podział aplikacji na pliki: serwer.js, router.js, model.js, controller.js
// na przykładzie prostej aplikacji z logowaniem

// server.js - node i  importy
// router js - export routera
// model.js - export tablicy
// controller.js - metody dostępu do modelu

// zadanie : publikacja na heroku, z możliwością podglądu ww plików

//https://www.freecodecamp.org/news/how-to-enable-es6-and-beyond-syntax-with-node-and-express-68d3e11fe1ab/
//https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

//start serwera

const PORT = process.env.PORT || 3000;

import app from "./app/app.js"

app.listen(PORT, function () {
    console.log("+---------- start app " + PORT)
})