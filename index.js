let tg =window.Telegram.WebApp;
let age = 0;
tg.expand();
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let birthdate = document.getElementById("age").value;
    let about = document.getElementById("about").value;
        // Здесь можно сделать что-то с полученными значениями, например, отправить их на сервер
    function calculateAge() {
    	let today = new Date();
    	let birthDate = new Date(birthdate);
    	age = today.getFullYear() - birthDate.getFullYear();
    	let monthDiff = today.getMonth() - birthDate.getMonth();
    
	if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        	age--;
	return age;
   	}
    }
    tg.sendData(name);
    tg.close();
    
    });
