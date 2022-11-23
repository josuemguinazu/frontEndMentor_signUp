const submitBtn = () => {
  const submitBtn_ = document.querySelector('.submitBtn');
  submitBtn_.addEventListener('click', validateForm);
};
const validateForm = () => {
  const firstName = document.querySelector('#firstName').value;
  const lastName = document.querySelector('#lastName').value;
  const emailAddr = document.querySelector('#emailAddr').value;
  const password = document.querySelector('#password').value;

  if (firstName === '') {
    const formPHs = document.querySelector('.fnf');
    formPHs.classList.add('errorWarn');
    const mensaje = 'First name cannot be empty';
    const fstNameError = document.querySelector('.fstNameError');
    const icon = document.querySelector('.icon1');
    icon.style.display = 'block';
    fstNameError.insertAdjacentHTML('beforeend', mensaje);
    setTimeout(() => {
      formPHs.classList.remove('errorWarn');
      fstNameError.innerHTML = '';
      icon.style.display = 'none';
    }, 2850);
  }

  if (lastName === '') {
    const formPHs = document.querySelector('.lnf');
    formPHs.classList.add('errorWarn');
    const mensaje = 'Last name cannot be empty';
    const fstNameError = document.querySelector('.lstNameError');
    const icon = document.querySelector('.icon2');
    icon.style.display = 'block';
    fstNameError.insertAdjacentHTML('beforeend', mensaje);
    setTimeout(() => {
      formPHs.classList.remove('errorWarn');
      fstNameError.innerHTML = '';
      icon.style.display = 'none';
    }, 2850);
  }

  if (emailAddr === '') {
    const formPHs = document.querySelector('.emf');
    formPHs.classList.add('errorWarn');
    const mensaje = 'email cannot be empty';
    const fstNameError = document.querySelector('.emailError');
    const icon = document.querySelector('.icon3');
    icon.style.display = 'block';
    fstNameError.insertAdjacentHTML('beforeend', mensaje);
    setTimeout(() => {
      formPHs.classList.remove('errorWarn');
      fstNameError.innerHTML = '';
      icon.style.display = 'none';
    }, 2850);
  }

  if (password === '') {
    const formPHs = document.querySelector('.psf');
    formPHs.classList.add('errorWarn');
    const mensaje = 'Password cannot be empty';
    const fstNameError = document.querySelector('.passError');
    const icon = document.querySelector('.icon4');
    icon.style.display = 'block';
    fstNameError.insertAdjacentHTML('beforeend', mensaje);
    setTimeout(() => {
      formPHs.classList.remove('errorWarn');
      fstNameError.innerHTML = '';
      icon.style.display = 'none';
    }, 2850);
  }
};
submitBtn();
