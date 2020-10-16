const data = "name=Invoice&type=%22pdf%22%2C%20%22html%22%2C%20%22docx%22&output=%22pdf%22%2C%20%22docx%22%2C%20%22email%22&size_width=8.5&html=%3Ch1%3EInvoice%3C%2Fh1%3E....&output_name=From%20%7B%24FirstName%7D";

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("POST", "https://rapidapi.p.rapidapi.com/documents");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("x-rapidapi-host", "webmerge-webmerge.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "224e87754cmsh2ee96502cebc0fdp13819ajsnf62691d09001");

xhr.send(data);