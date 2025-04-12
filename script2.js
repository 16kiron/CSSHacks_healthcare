const input_field = document.querySelector('.askai input[type="text"]');
input_field.addEventListener('keydown', async (key_name) => {
    if (key_name.key === 'Enter') {
        key_name.preventDefault();

        // Manually update form data by ensuring that the input field has data
        const formData = new FormData(document.querySelector('.askai form'));

        const response = await fetch('/prompt', {
            method: 'POST',
            body: formData,
        });

        const data = await response.text();
        const message =  document.createElement('p');
        message.innerHTML = data;
        message.classList.add('reply');
        const messageBox = document.querySelector('.messages')
        messageBox.appendChild(message)
    }
});