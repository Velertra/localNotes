fetch('/data')
    .then(response => response.json())
    .then(data => {
      document.getElementById('school').value = data.school;
      document.getElementById('sales').value = data.sales;
      document.getElementById('school').value = data.school;
      document.getElementById('completeOrder').value = data.completeOrder;
      document.getElementById('trailerNotes').value = data.trailerNotes;
      document.getElementById('leadsNotes').value = data.leadsNotes;
      document.getElementById('projectTitle').value = data.projectTitle;
      document.getElementById('projectLink').value = data.projectLink;
    })
    .catch(error => console.error('Error loading JSON:', error));

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

 