let tg =window.Telegram.WebApp;
	tg.expand();
    let submit = document.getElementById("submit");
    submit.addEventListener("click", () => {
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let about = document.getElementById("about").value;
        // Здесь можно сделать что-то с полученными значениями, например, отправить их на сервер
        
        
        tg.sendData(name);
        tg.close();
    });