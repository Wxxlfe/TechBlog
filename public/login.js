document.querySelector('#login-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();
  
    if (email && password) {
      fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to log in');
          }
        })
        .catch((error) => console.error('Error:', error));
    }
  });