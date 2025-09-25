import emailjs from 'emailjs-com';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-us-form');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const serviceID = 'service_1igewl4';
    const templateID = 'template_fmp3git';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        alert(' Message sent successfully!');
        form.reset();
      }, (err) => {
        console.error('Failed to send message:', err);
        alert('Failed to send message. Check console for details.');
      });
  });
});
