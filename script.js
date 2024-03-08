do {
    var n = +prompt('Введите число')
} while (isNaN(n) || n == 0);

do {
    var s = +prompt('Введите степень числа')
} while (isNaN(s) || s == 0){
    var u = (n ** s)
}

console.log(u);