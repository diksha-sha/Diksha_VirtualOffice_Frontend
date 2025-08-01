// Load intern data from API
fetch("http://127.0.0.1:5000/api/interns")
  .then((response) => response.json())
  .then((interns) => {
    const internTableBody = document.querySelector("#internTable tbody");
    internTableBody.innerHTML = ""; // Clear existing content

    interns.forEach((intern) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${intern.name}</td>
        <td>${intern.department}</td>
        <td>${intern.status}</td>
        <td>${intern.progress}</td>
      `;
      internTableBody.appendChild(row);
    });
  })
  .catch((error) => {
    console.error("Error loading intern data:", error);
  });


// Team data
const teams = [
  { name: "Tech Team", members: 6 },
  { name: "Design Team", members: 3 },
  { name: "Marketing Team", members: 4 }
];

// Add teams to card grid
const cardGrid = document.querySelector("#teamCards");
teams.forEach(team => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <h3>${team.name}</h3>
    <p>${team.members} Members</p>
  `;
  cardGrid.appendChild(card);
});
