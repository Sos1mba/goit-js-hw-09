const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

// Завантаження з локального сховища
const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  try {
    const parsedData = JSON.parse(savedData);
    formData = { ...formData, ...parsedData };

    if (form.elements.email) {
      form.elements.email.value = formData.email;
    }
    if (form.elements.message) {
      form.elements.message.value = formData.message;
    }
  } catch (error) {
    console.error('Error parsing form data:', error);
  }
}

// Обробка input
form.addEventListener('input', e => {
  const { name, value } = e.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Обробка submit
form.addEventListener('submit', e => {
  e.preventDefault();

  const { email, message } = formData;

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  // Очистка
  form.reset();
  formData = { email: '', message: '' };
  localStorage.removeItem(STORAGE_KEY);
});