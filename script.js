const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");
const checkInBtn = document.getElementById("checkInBtn");
const attendeeCount = document.getElementById("attendeeCount");
const progressBar = document.getElementById("progressBar");
const greeting = document.getElementById("greeting");

let count = 0;
const maxCount = 50;

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (count >= maxCount) {
    return;
  }

  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, team, teamName);
  count++;
  console.log("Current check-in:", count);
  attendeeCount.textContent = count;

  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log("Current percentage:", percentage);
  progressBar.style.width = percentage;

  // team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  const message = `🎉Welcome ${name} from ${teamName}!`;
  console.log(message);
  greeting.textContent = message;
  greeting.style.display = "block";
  greeting.classList.add("success-message");

  if (count === maxCount) {
    const waterCount = parseInt(
      document.getElementById("waterCount").textContent,
    );
    const zeroCount = parseInt(
      document.getElementById("zeroCount").textContent,
    );
    const powerCount = parseInt(
      document.getElementById("powerCount").textContent,
    );

    let winningTeamName = "Team Water Wise";
    let highestCount = waterCount;

    if (zeroCount > highestCount) {
      highestCount = zeroCount;
      winningTeamName = "Team Net Zero";
    }

    if (powerCount > highestCount) {
      winningTeamName = "Team Renewables";
    }

    greeting.textContent = `🎉 All people are Checked in! Winning team is: ${winningTeamName}`;
    nameInput.disabled = true;
    teamSelect.disabled = true;
    checkInBtn.disabled = true;
  }

  form.reset();
});
