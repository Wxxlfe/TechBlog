document.querySelector('#signup-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const username = document.querySelector('#username-input').value.trim();
    const email = document.querySelector('#email-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();
  
    if (username && email && password) {
      fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to sign up');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('An error occurred while trying to sign up. Please try again later.');
        });
    }
  });