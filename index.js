let tg =window.Telegram.WebApp;
tg.expand();
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let birthdate = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let city = document.getElementById("city").value;
    let about = document.getElementById("about").value;
        // Здесь можно сделать что-то с полученными значениями, например, отправить их на сервер
    function calculateAge() {
		let today = new Date();
		let birthDate = new Date(birthdate);
		let age = today.getFullYear() - birthDate.getFullYear();
		let monthDiff = today.getMonth() - birthDate.getMonth();
    
		if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
	return age;
    }
	let age = calculateAge();
	let data = {
		name:name,
		age: age,
		gender: gender,
		city: city
		
	}
    tg.sendData(JSON.stringify(data));
    tg.close();
    });
