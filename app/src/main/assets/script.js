const HEROES = [
    "Abaddon", "Alchemist", "Ancient Apparition", "Anti-Mage", "Arc Warden",
    "Axe", "Bane", "Batrider", "Beastmaster", "Bloodseeker",
    "Bounty Hunter", "Brewmaster", "Bristleback", "Broodmother", "Centaur Warrunner",
    "Chaos Knight", "Chen", "Clinkz", "Clockwerk", "Crystal Maiden",
    "Dark Seer", "Dark Willow", "Dawnbreaker", "Dazzle", "Death Prophet",
    "Disruptor", "Doom", "Dragon Knight", "Drow Ranger", "Earth Spirit",
    "Earthshaker", "Elder Titan", "Ember Spirit", "Enchantress", "Enigma",
    "Faceless Void", "Grimstroke", "Gyrocopter", "Hoodwink", "Huskar",
    "Invoker", "Io", "Jakiro", "Juggernaut", "Keeper of the Light",
    "Kez", "Kunkka", "Legion Commander", "Leshrac", "Lich",
    "Lifestealer", "Lina", "Lion", "Lone Druid", "Luna",
    "Lycan", "Magnus", "Marci", "Mars", "Medusa",
    "Meepo", "Mirana", "Monkey King", "Morphling", "Muerta",
    "Naga Siren", "Nature's Prophet", "Necrophos", "Night Stalker", "Nyx Assassin",
    "Ogre Magi", "Omniknight", "Oracle", "Outworld Destroyer", "Pangolier",
    "Phantom Assassin", "Phantom Lancer", "Phoenix", "Primal Beast", "Puck",
    "Pudge", "Pugna", "Queen of Pain", "Razor", "Riki",
    "Ringmaster", "Rubick", "Sand King", "Shadow Demon", "Shadow Fiend",
    "Shadow Shaman", "Silencer", "Skywrath Mage", "Slardar", "Slark",
    "Snapfire", "Sniper", "Spectre", "Spirit Breaker", "Storm Spirit",
    "Sven", "Techies", "Templar Assassin", "Terrorblade", "Tidehunter",
    "Timbersaw", "Tinker", "Tiny", "Treant Protector", "Troll Warlord",
    "Tusk", "Underlord", "Undying", "Ursa", "Vengeful Spirit",
    "Venomancer", "Viper", "Visage", "Void Spirit", "Warlock",
    "Weaver", "Windranger", "Winter Wyvern", "Witch Doctor", "Wraith King",
    "Zeus"
];

const ITEMS = [
    "Blink Dagger", "Black King Bar", "Aghanim's Scepter", "Aghanim's Shard",
    "Divine Rapier", "Heart of Tarrasque", "Butterfly", "Satanic",
    "Eye of Skadi", "Assault Cuirass", "Shiva's Guard", "Bloodstone",
    "Octarine Core", "Refresher Orb", "Scythe of Vyse", "Linken's Sphere",
    "Lotus Orb", "Hurricane Pike", "Aeon Disk", "Eternal Shroud",
    "Desolator", "Daedalus", "Monkey King Bar", "Mjollnir",
    "Maelstrom", "Battle Fury", "Radiance", "Silver Edge",
    "Sange and Yasha", "Manta Style", "Skull Basher", "Abyssal Blade",
    "Diffusal Blade", "Nullifier", "Bloodthorn", "Orchid Malevolence",
    "Force Staff", "Glimmer Cape", "Ghost Scepter", "Eul's Scepter of Divinity",
    "Rod of Atos", "Veil of Discord", "Dagon", "Ethereal Blade",
    "Aether Lens", "Solar Crest", "Medallion of Courage", "Spirit Vessel",
    "Urn of Shadows", "Pipe of Insight", "Crimson Guard", "Guardian Greaves",
    "Mekansm", "Arcane Boots", "Power Treads", "Phase Boots",
    "Tranquil Boots", "Boots of Travel", "Hand of Midas", "Magic Wand",
    "Bottle", "Bracer", "Null Talisman", "Wraith Band"
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
