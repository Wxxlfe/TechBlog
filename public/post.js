document.querySelector('#post-form').addEventListener('submit', (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title-input').value.trim();
    const content = document.querySelector('#content-input').value.trim();
  
    if (title && content) {
      fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          if (response.ok) {
            document.location.replace('/dashboard');
          } else {
            alert('Failed to create post');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('An error occurred while trying to create a post. Please try again later.');
        });
    }
  });