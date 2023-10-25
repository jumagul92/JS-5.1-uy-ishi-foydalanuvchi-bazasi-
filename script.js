const user = {};

for (let i = 0; i < 10; i++) {
    user.name = prompt("Ismingizni kiriting");
    while (!isNaN(user.name) || user.name == "" || user.name == null) {
        user.name = prompt("Xato! Iltimos, qaytadan urinib, ismingizni kiriting")
    }

    user.age = +prompt("Yoshingizni kiriting")
    while (isNaN(user.age)) {
        user.age = +prompt("Xato! Iltimos, qaytadan urinib, yoshingizni kiriting")
    }
    console.log(`Foydalanuvchi ${i+1}: 
    Sizning ismingiz: ${user.name},
    Sizning yoshingiz ${user.age} da`); 
}
