function initialize() {
        var btn_contact = document.getElementById('btn_contact');
        btn_contact.addEventListener('click', ecrireContact);

    }
function ecrireContact(evt) {
        var formData = new FormData(document.getElementById('contactform'));
        var form = document.getElementById('contactform');
        var contact = {};
        for (var i = 0; i < form.length; i++) {
            console.log('form[' + i + '].name : ' + form[i].name);
            console.log('value : ' + formData.get(form[i].name));
            contact[form[i].name] = formData.get(form[i].name);
        }
        delete contact.button; //
        console.log('contact : ', contact);
        var contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts.push(contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        evt.preventDefault();
        form.reset();
    }
window.onload = initialize();
