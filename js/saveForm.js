// document.getElementById('notesForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const formData = new FormData(this);
//     const data = {};
//     formData.forEach((value, key) => data[key] = value);

//     localStorage.setItem('notesData', JSON.stringify(data));
//     console.log(data)
// });

document.getElementById('notesForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      const data = {};
      formData.forEach((value, key) => data[key] = value);
      
      fetch('/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      
      .then(res => res.json())
      .then(response => alert(response.message));
      
    });