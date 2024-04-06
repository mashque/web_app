let tg =window.Telegram.WebApp;
tg.expand();
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let birthdate = document.getElementById("age").value;
    let about = document.getElementById("about").value;
        // Здесь можно сделать что-то с полученными значениями, например, отправить их на сервер
    function calculateAge() {
    var today = new Date();
    var birthDate = new Date(birthdate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
	tg.sendData(age);
    tg.close();
	}
    
    });
