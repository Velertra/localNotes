


// const data = JSON.parse(localStorage.getItem('projectData'));

//     if (data) {
//       const output = document.getElementById('output');
//       output.innerHTML = `
//         <p><strong>School:</strong> ${data.school}</p>
//         <p><strong>Sales:</strong> ${data.sales}</p>
//         <p><strong>Complete Order:</strong> ${data.completeOrder}</p>
//         <p><strong>Trailer Notes:</strong> ${data.trailerNotes}</p>
//         <p><strong>Leads Notes:</strong> ${data.leadsNotes}</p>
//         <p><strong>Project Title:</strong> ${data.projectTitle}</p>
//         <p><strong>Project Link:</strong> <a href="${data.projectLink}" target="_blank">${data.projectLink}</a></p>
//       `;
//     } else {
//       document.getElementById('output').textContent = 'No data found.';
//     }


fetch("/data.json")
      .then(res => res.json())
      .then(data => {
        document.getElementById('output').innerHTML = `
          <p><strong>School:</strong> ${data.school}</p>
          <p><strong>Sales:</strong> ${data.sales}</p>
          <p><strong>Complete Order:</strong> ${data.completeOrder}</p>
          <p><strong>Trailer Notes:</strong> ${data.trailerNotes}</p>
          <p><strong>Leads Notes:</strong> ${data.leadsNotes}</p>
          <p><strong>Project Title:</strong> ${data.projectTitle}</p>
          <p><strong>Project Link:</strong> <a href="${data.projectLink}" target="_blank">${data.projectLink}</a></p>
        `;
      });