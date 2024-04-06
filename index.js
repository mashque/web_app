let tg =window.Telegram.WebApp;
tg.expand();
let submit = document.getElementById("submit");
submit.addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let about = document.getElementById("about").value;
        // Здесь можно сделать что-то с полученными значениями, например, отправить их на сервер
    function getAge(dateString) {
		let today = new Date();
		let birthDate = new Date(dateString);
		let age = today.getFullYear() - birthDate.getFullYear();

		let m = today.getMonth() - birthDate.getMonth();
		let d = today.getDay() - birthDate.getDay();

		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		if ( age === 0 ) {
			m = 12 + m;
			if (d < 0 || (d === 0 && today.getDate() < birthDate.getDate())) {
				m--;
			}
		}

		return age ? age + 'г' : m + 'м';
	}
	let d = age.split('.');
	let date = d[2]+'.'+d[1]+'.'+d[0];
	let birthDate = new Date(date);
	let user_age = getAge(birthDate);
    tg.sendData(user_age);
    tg.close();
    });
