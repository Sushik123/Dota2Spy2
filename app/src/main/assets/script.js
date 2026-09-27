const HEROES = [
    { name: "Abaddon", slug: "abaddon" },
    { name: "Alchemist", slug: "alchemist" },
    { name: "Ancient Apparition", slug: "ancient_apparition" },
    { name: "Anti-Mage", slug: "antimage" },
    { name: "Arc Warden", slug: "arc_warden" },
    { name: "Axe", slug: "axe" },
    { name: "Bane", slug: "bane" },
    { name: "Batrider", slug: "batrider" },
    { name: "Beastmaster", slug: "beastmaster" },
    { name: "Bloodseeker", slug: "bloodseeker" },
    { name: "Bounty Hunter", slug: "bounty_hunter" },
    { name: "Brewmaster", slug: "brewmaster" },
    { name: "Bristleback", slug: "bristleback" },
    { name: "Broodmother", slug: "broodmother" },
    { name: "Centaur Warrunner", slug: "centaur" },
    { name: "Chaos Knight", slug: "chaos_knight" },
    { name: "Chen", slug: "chen" },
    { name: "Clinkz", slug: "clinkz" },
    { name: "Clockwerk", slug: "rattletrap" },
    { name: "Crystal Maiden", slug: "crystal_maiden" },
    { name: "Dark Seer", slug: "dark_seer" },
    { name: "Dark Willow", slug: "dark_willow" },
    { name: "Dawnbreaker", slug: "dawnbreaker" },
    { name: "Dazzle", slug: "dazzle" },
    { name: "Death Prophet", slug: "death_prophet" },
    { name: "Disruptor", slug: "disruptor" },
    { name: "Doom", slug: "doom_bringer" },
    { name: "Dragon Knight", slug: "dragon_knight" },
    { name: "Drow Ranger", slug: "drow_ranger" },
    { name: "Earth Spirit", slug: "earth_spirit" },
    { name: "Earthshaker", slug: "earthshaker" },
    { name: "Elder Titan", slug: "elder_titan" },
    { name: "Ember Spirit", slug: "ember_spirit" },
    { name: "Enchantress", slug: "enchantress" },
    { name: "Enigma", slug: "enigma" },
    { name: "Faceless Void", slug: "faceless_void" },
    { name: "Grimstroke", slug: "grimstroke" },
    { name: "Gyrocopter", slug: "gyrocopter" },
    { name: "Hoodwink", slug: "hoodwink" },
    { name: "Huskar", slug: "huskar" },
    { name: "Invoker", slug: "invoker" },
    { name: "Io", slug: "wisp" },
    { name: "Jakiro", slug: "jakiro" },
    { name: "Juggernaut", slug: "juggernaut" },
    { name: "Keeper of the Light", slug: "keeper_of_the_light" },
    { name: "Kez", slug: "kez" },
    { name: "Kunkka", slug: "kunkka" },
    { name: "Legion Commander", slug: "legion_commander" },
    { name: "Leshrac", slug: "leshrac" },
    { name: "Lich", slug: "lich" },
    { name: "Lifestealer", slug: "lifestealer" },
    { name: "Lina", slug: "lina" },
    { name: "Lion", slug: "lion" },
    { name: "Lone Druid", slug: "lone_druid" },
    { name: "Luna", slug: "luna" },
    { name: "Lycan", slug: "lycan" },
    { name: "Magnus", slug: "magnataur" },
    { name: "Marci", slug: "marci" },
    { name: "Mars", slug: "mars" },
    { name: "Medusa", slug: "medusa" },
    { name: "Meepo", slug: "meepo" },
    { name: "Mirana", slug: "mirana" },
    { name: "Monkey King", slug: "monkey_king" },
    { name: "Morphling", slug: "morphling" },
    { name: "Muerta", slug: "muerta" },
    { name: "Naga Siren", slug: "naga_siren" },
    { name: "Nature's Prophet", slug: "furion" },
    { name: "Necrophos", slug: "necrolyte" },
    { name: "Night Stalker", slug: "night_stalker" },
    { name: "Nyx Assassin", slug: "nyx_assassin" },
    { name: "Ogre Magi", slug: "ogre_magi" },
    { name: "Omniknight", slug: "omniknight" },
    { name: "Oracle", slug: "oracle" },
    { name: "Outworld Destroyer", slug: "obsidian_destroyer" },
    { name: "Pangolier", slug: "pangolier" },
    { name: "Phantom Assassin", slug: "phantom_assassin" },
    { name: "Phantom Lancer", slug: "phantom_lancer" },
    { name: "Phoenix", slug: "phoenix" },
    { name: "Primal Beast", slug: "primal_beast" },
    { name: "Puck", slug: "puck" },
    { name: "Pudge", slug: "pudge" },
    { name: "Pugna", slug: "pugna" },
    { name: "Queen of Pain", slug: "queenofpain" },
    { name: "Razor", slug: "razor" },
    { name: "Riki", slug: "riki" },
    { name: "Ringmaster", slug: "ringmaster" },
    { name: "Rubick", slug: "rubick" },
    { name: "Sand King", slug: "sand_king" },
    { name: "Shadow Demon", slug: "shadow_demon" },
    { name: "Shadow Fiend", slug: "nevermore" },
    { name: "Shadow Shaman", slug: "shadow_shaman" },
    { name: "Silencer", slug: "silencer" },
    { name: "Skywrath Mage", slug: "skywrath_mage" },
    { name: "Slardar", slug: "slardar" },
    { name: "Slark", slug: "slark" },
    { name: "Snapfire", slug: "snapfire" },
    { name: "Sniper", slug: "sniper" },
    { name: "Spectre", slug: "spectre" },
    { name: "Spirit Breaker", slug: "spirit_breaker" },
    { name: "Storm Spirit", slug: "storm_spirit" },
    { name: "Sven", slug: "sven" },
    { name: "Techies", slug: "techies" },
    { name: "Templar Assassin", slug: "templar_assassin" },
    { name: "Terrorblade", slug: "terrorblade" },
    { name: "Tidehunter", slug: "tidehunter" },
    { name: "Timbersaw", slug: "shredder" },
    { name: "Tinker", slug: "tinker" },
    { name: "Tiny", slug: "tiny" },
    { name: "Treant Protector", slug: "treant" },
    { name: "Troll Warlord", slug: "troll_warlord" },
    { name: "Tusk", slug: "tusk" },
    { name: "Underlord", slug: "underlord" },
    { name: "Undying", slug: "undying" },
    { name: "Ursa", slug: "ursa" },
    { name: "Vengeful Spirit", slug: "vengefulspirit" },
    { name: "Venomancer", slug: "venomancer" },
    { name: "Viper", slug: "viper" },
    { name: "Visage", slug: "visage" },
    { name: "Void Spirit", slug: "void_spirit" },
    { name: "Warlock", slug: "warlock" },
    { name: "Weaver", slug: "weaver" },
    { name: "Windranger", slug: "windrunner" },
    { name: "Winter Wyvern", slug: "winter_wyvern" },
    { name: "Witch Doctor", slug: "witch_doctor" },
    { name: "Wraith King", slug: "skeleton_king" },
    { name: "Zeus", slug: "zuus" }
];

const ITEMS = [
    { name: "Blink Dagger", slug: "blink" },
    { name: "Black King Bar", slug: "black_king_bar" },
    { name: "Aghanim's Scepter", slug: "ultimate_scepter" },
    { name: "Aghanim's Shard", slug: "aghanims_shard" },
    { name: "Divine Rapier", slug: "rapier" },
    { name: "Heart of Tarrasque", slug: "heart" },
    { name: "Butterfly", slug: "butterfly" },
    { name: "Satanic", slug: "satanic" },
    { name: "Eye of Skadi", slug: "skadi" },
    { name: "Assault Cuirass", slug: "assault" },
    { name: "Shiva's Guard", slug: "shivas_guard" },
    { name: "Bloodstone", slug: "bloodstone" },
    { name: "Octarine Core", slug: "octarine_core" },
    { name: "Refresher Orb", slug: "refresher" },
    { name: "Scythe of Vyse", slug: "sheepstick" },
    { name: "Linken's Sphere", slug: "sphere" },
    { name: "Lotus Orb", slug: "lotus_orb" },
    { name: "Hurricane Pike", slug: "hurricane_pike" },
    { name: "Aeon Disk", slug: "aeon_disk" },
    { name: "Eternal Shroud", slug: "eternal_shroud" },
    { name: "Desolator", slug: "desolator" },
    { name: "Daedalus", slug: "greater_crit" },
    { name: "Monkey King Bar", slug: "monkey_king_bar" },
    { name: "Mjollnir", slug: "mjollnir" },
    { name: "Maelstrom", slug: "maelstrom" },
    { name: "Battle Fury", slug: "battle_fury" },
    { name: "Radiance", slug: "radiance" },
    { name: "Silver Edge", slug: "silver_edge" },
    { name: "Sange and Yasha", slug: "sange_and_yasha" },
    { name: "Manta Style", slug: "manta" },
    { name: "Skull Basher", slug: "basher" },
    { name: "Abyssal Blade", slug: "abyssal_blade" },
    { name: "Diffusal Blade", slug: "diffusal_blade" },
    { name: "Nullifier", slug: "nullifier" },
    { name: "Bloodthorn", slug: "bloodthorn" },
    { name: "Orchid Malevolence", slug: "orchid" },
    { name: "Force Staff", slug: "force_staff" },
    { name: "Glimmer Cape", slug: "glimmer_cape" },
    { name: "Ghost Scepter", slug: "ghost_scepter" },
    { name: "Eul's Scepter of Divinity", slug: "cyclone" },
    { name: "Rod of Atos", slug: "rod_of_atos" },
    { name: "Veil of Discord", slug: "veil_of_discord" },
    { name: "Dagon", slug: "dagon" },
    { name: "Ethereal Blade", slug: "ethereal_blade" },
    { name: "Aether Lens", slug: "aether_lens" },
    { name: "Solar Crest", slug: "solar_crest" },
    { name: "Medallion of Courage", slug: "medallion_of_courage" },
    { name: "Spirit Vessel", slug: "spirit_vessel" },
    { name: "Urn of Shadows", slug: "urn_of_shadows" },
    { name: "Pipe of Insight", slug: "pipe" },
    { name: "Crimson Guard", slug: "crimson_guard" },
    { name: "Guardian Greaves", slug: "guardian_greaves" },
    { name: "Mekansm", slug: "mekansm" },
    { name: "Arcane Boots", slug: "arcane_boots" },
    { name: "Power Treads", slug: "power_treads" },
    { name: "Phase Boots", slug: "phase_boots" },
    { name: "Tranquil Boots", slug: "tranquil_boots" },
    { name: "Boots of Travel", slug: "travel_boots" },
    { name: "Hand of Midas", slug: "hand_of_midas" },
    { name: "Magic Wand", slug: "magic_stick" },
    { name: "Bottle", slug: "bottle" },
    { name: "Bracer", slug: "bracer" },
    { name: "Null Talisman", slug: "null_talisman" },
    { name: "Wraith Band", slug: "wraith_band" }
];

let gameState = {
    mode: null,
    word: null,
    wordSlug: null,
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
    const pick = pool[Math.floor(Math.random() * pool.length)];
    gameState.word = pick.name;
    gameState.wordSlug = pick.slug;
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
    const imgEl = document.getElementById('role-image');

    if (gameState.currentPlayer === gameState.spyIndex) {
        content.className = 'role-spy';
        labelEl.textContent = 'ТЫ';
        wordEl.textContent = 'ШПИОН';
        imgEl.style.display = 'none';
    } else {
        content.className = '';
        labelEl.textContent = 'ТВОЯ РОЛЬ';
        wordEl.textContent = gameState.word;

        const folder = gameState.mode === 'heroes' ? 'heroes' : 'items';
        imgEl.src = 'images/' + folder + '/' + gameState.wordSlug + '.png';
        imgEl.style.display = 'block';
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
