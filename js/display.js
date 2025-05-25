


// const data = JSON.parse(localStorage.getItem('projectData'));

//     if (data) {
//       const output = document.getElementById('output');
//       output.innerHTML = `
//         <h3>School:</h3> ${data.school}</p>
//         <h3>Sales:</h3> ${data.sales}</p>
//         <h3>Complete Order:</h3> ${data.completeOrder}</p>
//         <h3>Trailer Notes:</h3> ${data.trailerNotes}</p>
//         <h3>Leads Notes:</h3> ${data.leadsNotes}</p>
//         <h3>Project Title:</h3> ${data.projectTitle}</p>
//         <h3>Project Link:</h3> <a href="${data.projectLink}" target="_blank">${data.projectLink}</a></p>
//       `;
//     } else {
//       document.getElementById('output').textContent = 'No data found.';
//     }


fetch("/data.json")
      .then(res => res.json())
      .then(data => {
        document.getElementById('output').innerHTML = `
          <h3>School:</h3> <p>${data.school}</p>
          <h3>Sales:</h3> <p>${data.sales}</p>
          <h3>Complete Order:</h3> <p>${data.completeOrder}</p>
          <h3>Trailer Notes:</h3> <p>${data.trailerNotes}</p>
          <h3>Leads Notes:</h3> <p>${data.leadsNotes}</p>
          <h3>Project Title:</h3> <p>${data.projectTitle}</p>
          <h3>Project Link:</h3> <p><a href="${data.projectLink}" target="_blank">${data.projectLink}</a></p>
        `;
      });