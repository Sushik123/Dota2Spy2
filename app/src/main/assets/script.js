const HEROES = [
    "Pudge", "Invoker", "Anti-Mage", "Crystal Maiden", "Juggernaut",
    "Shadow Fiend", "Lina", "Zeus", "Sniper", "Axe",
    "Lion", "Earthshaker", "Drow Ranger", "Mirana", "Storm Spirit",
    "Windranger", "Tinker", "Witch Doctor", "Riki", "Enigma",
    "Tidehunter", "Slardar", "Lich", "Kunkka", "Luna",
    "Phantom Assassin", "Faceless Void", "Warlock", "Queen of Pain", "Sand King",
    "Death Prophet", "Puck", "Pugna", "Necrophos", "Templar Assassin",
    "Slark", "Medusa", "Meepo", "Troll Warlord", "Spectre",
    "Silencer", "Ogre Magi", "Chaos Knight", "Undying", "Rubick"
];

const ITEMS = [
    "Blink Dagger", "Aghanim's Scepter", "Divine Rapier", "Black King Bar",
    "Heart of Tarrasque", "Butterfly", "Satanic", "Eye of Skadi",
    "Desolator", "Sange and Yasha", "Manta Style", "Radiance",
    "Daedalus", "Monkey King Bar", "Mjollnir", "Linken's Sphere",
    "Shiva's Guard", "Assault Cuirass", "Guardian Greaves", "Pipe of Insight",
    "Crimson Guard", "Mekansm", "Solar Crest", "Glimmer Cape",
    "Force Staff", "Aether Lens", "Dagon", "Ethereal Blade",
    "Refresher Orb", "Octarine Core", "Sheepstick", "Orchid Malevolence",
    "Bloodthorn", "Nullifier", "Diffusal Blade", "Mage Slayer",
    "Echo Sabre", "Armlet of Mordiggian", "Vladmir's Offering", "Helm of the Dominator"
];

let gameState = {
    mode: null,
    word: null,
    spyIndex: null,
    playerCount: 0,
    currentPlayer: 1
};

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function startGame(mode) {
    gameState.mode = mode;
    renderPlayerButtons();
    showScreen('screen-players');
}

function renderPlayerButtons() {
    const grid = document.getElementById('players-grid');
    grid.innerHTML = '';
    for (let i = 2; i <= 12; i++) {
        const btn = document.createElement('button');
        btn.className = 'btn-player';
        btn.textContent = i;
        btn.onclick = () => selectPlayers(i);
        grid.appendChild(btn);
    }
}

function selectPlayers(count) {
    gameState.playerCount = count;

    const pool = gameState.mode === 'heroes' ? HEROES : ITEMS;
    gameState.word = pool[Math.floor(Math.random() * pool.length)];
    gameState.spyIndex = Math.floor(Math.random() * count) + 1;
    gameState.currentPlayer = 1;

    updatePassScreen();
    showScreen('screen-pass');
}

function updatePassScreen() {
    document.getElementById('pass-title').textContent = 'Игрок ' + gameState.currentPlayer;
    document.getElementById('pass-sub').textContent = 'Возьми телефон и нажми кнопку';
}

function revealRole() {
    const wordEl = document.getElementById('role-word');
    const labelEl = document.querySelector('.role-label');
    const content = document.getElementById('role-content');

    if (gameState.currentPlayer === gameState.spyIndex) {
        content.className = 'role-spy';
        labelEl.textContent = 'ТЫ';
        wordEl.textContent = 'ШПИОН';
    } else {
        content.className = '';
        labelEl.textContent = 'ТВОЯ РОЛЬ';
        wordEl.textContent = gameState.word;
    }

    showScreen('screen-role');
}

function hideAndPass() {
    if (gameState.currentPlayer >= gameState.playerCount) {
        showScreen('screen-done');
    } else {
        gameState.currentPlayer++;
        updatePassScreen();
        showScreen('screen-pass');
    }
}
