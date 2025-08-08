import Character from './Character.js';
import Team from './Team.js';

function displayTeam(team) {
  const teamContainer = document.createElement('div');
  teamContainer.id = 'team-container';
  document.body.appendChild(teamContainer);

  for (const character of team) {
    const charElement = document.createElement('p');
    charElement.textContent = JSON.stringify(character, null, 2);
    teamContainer.appendChild(charElement);
  }
}

const bowman = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const swordsman = new Character('Мечник', 'Swordsman', 70, 1, 30, 20);
const magician = new Character('Маг', 'Magician', 40, 1, 20, 30);

const team = new Team();
team.addAll(bowman, swordsman, magician);

displayTeam(team);
