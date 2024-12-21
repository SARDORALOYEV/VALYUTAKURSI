// Valyutalarning kurslari
let dollarKurs = 12889; // 1 dollar = 12,000 so'm
let euroKurs = 13398;   // 1 euro = 13,000 so'm
let yuanKurs = 1766;    // 1 yuan = 1,700 so'm

// Foydalanuvchiga tanlov berish
let tanlov = +prompt("Qaysi valyutani so'mga aylantirmoqchisiz? \n 1 - Dollar \n 2 - Euro \n 3 - Yuan");

// Foydalanuvchidan miqdorni so'rash
let miqdor = +prompt("Necha miqdorni aylantirmoqchisiz?");

// Hisoblash va natijani chiqarish
if (tanlov === 1) {
    alert(`${miqdor}$ = ${miqdor * dollarKurs} so'm`);
} else if (tanlov === 2) {
    alert(`${miqdor}€ = ${miqdor * euroKurs} so'm`);
} else if (tanlov === 3) {
    alert(`${miqdor}¥ = ${miqdor * yuanKurs} so'm`);
} else {
    alert("Noto'g'ri tanlov qildingiz!");
}
