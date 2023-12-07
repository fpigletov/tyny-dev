'use strict'

export function contact() {

  new window.JustValidate('.contact__form', {
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      message: {
        required: true
      }
    },
    colorWrong: '#FB5555',
    messages: {
      name: {
        required: 'Введите Ваше имя',
      },
      email: {
        required: 'Введите Ваш Email',
        email: 'Неверный формат'
      },
      message: {
        required: 'Введите Ваше сообщение'
      },
    },
    submitHandler: function (form) {
      const nameValue = form.querySelector('input[type="text"]').value;
      const emailValue = form.querySelector('input[type="email"]').value;
      const textValue = form.querySelector('textarea').value;

      console.log(`Имя: ${nameValue}`)
      console.log(`Email: ${emailValue}`)
      console.log(`Сообщение: ${textValue}`)

      form.reset();
    }
  });
}