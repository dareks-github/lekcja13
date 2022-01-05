// export funkcji do obróbki danych w modelu

import { numbers, users } from "./model.js"
// console.log(model.data);
// let data = model.numbers

import path from 'path';
const __dirname = path.resolve(); // potrzebny do statycznego serwowania stron
//

export default {
    start: (req, res) => {
        res.sendFile(__dirname + "/static/start.html")
    },
    add: (x) => {
        numbers.push(x)
    },
    length: () => {
        return numbers.length
    },
    delete: (index) => {
        numbers.splice(index, 1)
    },
    all: () => {
        return numbers
    }

}