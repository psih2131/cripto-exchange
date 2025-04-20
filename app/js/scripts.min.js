

window.addEventListener('load', function () {
    let burger = document.querySelector('.burger')
    let headerMob = document.querySelector('.header-mob')

    burger.addEventListener('click', function () {
        headerMob.classList.toggle('header-mob_activ')
        burger.classList.toggle('burger_activ')
    })

    let allSelect = document.querySelectorAll('.main-form-popup__select')
    if (allSelect && allSelect.length > 0) {
        for (let i = 0; i < allSelect.length; i++) {
            let getActivBtn = allSelect[i].querySelector('.main-form-popup__select-activ')
            let getAllValueWrapper = allSelect[i].querySelector('.main-form-popup__select-all-value')
            let allValues = allSelect[i].querySelectorAll('.main-form-popup__select-all-value .main-form-popup__select-value')

            getActivBtn.addEventListener('click', function () {

                getAllValueWrapper.classList.toggle('ain-form-popup__select-all-value_activ')
                console.log('gg')
            })

            for (let x = 0; x < allValues.length; x++) {
                allValues[x].addEventListener('click', function () {
                    getActivBtn.innerHTML = allValues[x].innerHTML
                    getAllValueWrapper.classList.remove('ain-form-popup__select-all-value_activ')
                })
            }
        }

    }

    //popup script

    // <div class="popup-air galery-conteiner" data-air="test">
    // 		<div class="galery-popup">
    // 		</div>
    // 	</div>
    // 	<button class="air-open-btn" data-popup-current="galery">galery</button>
    // 	<button class="air-open-btn" data-popup-current="test">test</button>
    //popup


    function popupAir() {
        const footerElement = document.querySelector('footer');
        if (!footerElement) {
            alert('dont find teg footer')
        }
        else {
            let airElements = document.querySelectorAll('.popup-air');
            if (airElements.length > 0) {
                let airBtnOpen = document.querySelectorAll('.air-open-btn');
                createAirPopups()

                for (let i = 0; i < airBtnOpen.length; i++) {
                    airBtnOpen[i].onclick = openAirPopup
                }
            }
            else {
                return
            }

            function createAirPopups() {
                let airConteiner = document.createElement("div");
                airConteiner.classList.add('air-conteiner');

                for (let i = 0; i < airElements.length; i++) {
                    let airCloseIcon = document.createElement("div");
                    airCloseIcon.classList.add('air-close');
                    airElements[i].appendChild(airCloseIcon)
                    airConteiner.appendChild(airElements[i])

                }
                footerElement.after(airConteiner)
            }

            function openAirPopup() {
                let currentAirPopupBtn = this.getAttribute('data-popup-current');
                let allPopups = document.querySelectorAll('.popup-air');
                let currentAirPopup = document.querySelector(`.popup-air[data-air="${currentAirPopupBtn}"]`)
                let closeAirIcon = currentAirPopup.querySelector('.air-close');
                closeAllAirPopups(allPopups);
                openAirConteiner();
                currentAirPopup.classList.add('air-popup_active');

                closeAirIcon.addEventListener('click', function () {
                    currentAirPopup.classList.remove('air-popup_active');
                    closeAirConteiner()
                })
            }


            function openAirPopupForForm(curretnDonePopup) {
                let allPopups = document.querySelectorAll('.popup-air');
                let currentAirPopup = document.querySelector(`.popup-air[data-air="${curretnDonePopup}"]`)
                let closeAirIcon = currentAirPopup.querySelector('.air-close');
                closeAllAirPopups(allPopups);
                openAirConteiner();
                currentAirPopup.classList.add('air-popup_active');

                closeAirIcon.addEventListener('click', function () {
                    currentAirPopup.classList.remove('air-popup_active');
                    closeAirConteiner()
                })

            }



            function openAirConteiner() {
                let airConteier = document.querySelector('.air-conteiner');
                airConteier.classList.add('air-conteiner_active');
            }

            function closeAllAirPopups(allPopups) {
                for (let i = 0; i < allPopups.length; i++) {
                    allPopups[i].classList.remove('air-popup_active');
                }
            }
            function closeAirConteiner() {
                let airConteier = document.querySelector('.air-conteiner');
                airConteier.classList.remove('air-conteiner_active');
            }

            function sendFormDone() {
                let allPopups = document.querySelectorAll('.popup-air');
                let curretnDonePopup = 'formdone';
                closeAllAirPopups(allPopups)
                openAirPopupForForm(curretnDonePopup);
                setTimeout(function () {
                    closeAllAirPopups(allPopups)
                    setTimeout(closeAirConteiner, 1000);

                }, 3000);
            }

            //Успешная отправка формы
            document.addEventListener('wpcf7mailsent', function (event) {
                if ('279' == event.detail.contactFormId) {
                    sendFormDone();
                    let sendFormDoneText = document.querySelector('.done-body__subtitle');
                    sendFormDoneText.style.display = 'block';
                }
                if ('280' == event.detail.contactFormId) {
                    sendFormDone();
                    let sendFormDoneText = document.querySelector('.done-body__subtitle');
                    sendFormDoneText.style.display = 'block';
                }
                if ('311' == event.detail.contactFormId) {
                    sendFormDone();
                    let sendFormDoneText = document.querySelector('.done-body__subtitle');
                    sendFormDoneText.style.display = 'none';
                }
                if ('199' == event.detail.contactFormId) {
                    sendFormDone();
                    let sendFormDoneText = document.querySelector('.done-body__subtitle');
                    sendFormDoneText.style.display = 'block';
                }
                if ('108' == event.detail.contactFormId) {
                    sendFormDone();
                    let sendFormDoneText = document.querySelector('.done-body__subtitle');
                    sendFormDoneText.style.display = 'block';
                }
            }, false);
        }
    }
    popupAir()
}, false);


