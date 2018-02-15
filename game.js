


var playerInfo = {
	name: 'Frank',
	level: 1,
	maxSpells: 1,
	exp: 0,
	race: 'Human',
	class: 'Paladin',
	stats: {
		hp: 100,
		mana: 100,
		crit: {
			chance: 20,
			dmg: 25
		},
		racialmods: {
			hp: 1,
			mana: 1,
			weapondmg: 1,
			spelldmg: 1
		},
		classmods: {
			hp: 1.25,
			mana: .90,
			weapondmg: 1.1,
			spelldmg: .8
		}
	},
	spells: {
		ice: [],
		fire: [],
		water: [],
		earth: [],
		lightning: []
	},
	weapon: {
		name: 'Fist',
		dmg: 3,
		speed: 5,
		extras: {
			crit: {
				chance: 0,
				dmg: 0
			}
		}
	},
	armor: [

	]
};

 

table = {
	level: {
		1: {name: 'Level One!', hp: 100, mana: 100, reqExp: 0, maxSpells: 1},
		2: {name: 'Level Two!', hp: 200, mana: 150, reqExp: 500, maxSpells: 2},
		3: {name: 'Level Three!', hp: 350, mana: 200, reqExp: 500, maxSpells: 2},
		4: {name: 'Level Four!', hp: 400, mana: 250, reqExp: 1000, maxSpells: 2},
		5: {name: 'Level Five!', hp: 475, mana: 350, reqExp: 1250, maxSpells: 3},
		6: {name: 'Level Six!', hp: 550, mana: 400, reqExp: 1500, maxSpells:3},
		7: {name: 'Level Seven!', hp: 700, mana: 500, reqExp: 2000, maxSpells:4},
		8: {name: 'Level Eight!', hp: 750, mana: 550, reqExp: 2500, maxSpells: 4},
		9: {name: 'Level Nine!', hp: 800, mana: 600, reqExp: 2500, maxSpells: 4},
		10: {name: 'Level Ten!', hp: 1000, mana: 750, reqExp: 3000, maxSpells: 5}
	},
	spells: {
		ice: [
			{name: 'Ice Bolt', isaoe: false, issplash: true, dmg: 100, chancetofreeze: 15, chancetoburn: 0, pierce: 2, waves: 1, level: 1, reqLevel: 1},
			{name: 'Glacier', isaoe: true, issplash: false, dmg: 50, chancetofreeze: 75, chancetoburn: 0, pierce: 0, waves: 1, level: 1, reqLevel: 3},
			{name: 'Cascade', isaoe: true, issplash: true, dmg: 60, chancetofreeze: 50, chancetoburn: 0, pierce: 0, waves: 3, level: 1, reqLevel: 6}
		],
		fire: [
			{name: 'Blast', isaoe: false, issplash: true, dmg: 75, chancetofreeze: 0, chancetoburn: 50, pierce: 1, waves: 1, level: 1, reqLevel: 2},
			{name: 'Cinder Quake', isaoe: true, issplash: false, dmg: 125, chancetofreeze: 0, chancetoburn: 90, pierce: 0, waves: 2, level: 1, reqLevel: 4},
			{name: 'Ember Rain', isaoe: true, issplash: true, dmg: 25, chancetofreeze: 0, chancetoburn: 90, pierce: 0, waves: 10, level: 1, reqLevel: 8}
		],
		water: [
			{name: 'Water Shot', isaoe: false, issplash: true, dmg: 100, chancetofreeze: 0, chancetoburn: 0, pierce: 0, waves: 2, level: 1, reqLevel: 5},
			{name: 'Whirling Eddy', isaoe: true, issplash: false, dmg: 175, chancetofreeze: 0, chancetoburn: 0, pierce: 0, waves: 3, level: 1, reqLevel: 7}
		], 
		melee: {
			rogue: [
				{name: 'backstab', dmg: 3, crit: {chance: 50, dmg: 2}, cooldown: 30},
				{name: 'flurry', dmg: 1.25, crit: {chance: 25, dmg: 1.5}, cooldown: 15},
				{name: 'stealth', dmg: 0, crit: {chance: 0, dmg: 0}, cooldown: 60}
			],
			warrior: [
				{name: 'slash', dmg: 1.5, crit: {chance: 25, dmg: 1.5}, cooldown: 30},
				{name: 'bash', dmg: 1.25, crit: {chance: 5, dmg: 1}, cooldown: 15},
				{name: 'block', dmg: 0, crit: {chance: 0, dmg: 0}, cooldown: 20}
			]
		}
	},
	armor: {

	},
	weapons: {
		fist: [
			{name: 'fists', dmg: 3, critchance: 0, critdmg: 0, speed: 5, hp: 0, mana: 0, chancetoburn: 0, chancetofreeze: 0, magical: false},
			{name: 'brass knuckles', dmg: 5, critchance: 15, critdmg: 10, speed: 5, hp: 0, mana: 0, chancetoburn: 0, chancetofreeze: 0, magical: true},
			{name: 'spiked gloves', dmg: 7, critchance: 20, critdmg: 20, speed: 4, hp: 0, mana: 0, chancetoburn: 0, chancetofreeze: 0, magical: true}
		],
		sword: [
			{name: 'broadsword', dmg: 9, critchance: 20, critdmg: 25, speed: 4, hp: 30, mana: 0, chancetoburn: 0, chancetofreeze: 0, magical: false},
			{name: 'rapier', dmg: 7, critchance: 10, critdmg: 35, speed: 8, hp: 0, mana: 0, chancetoburn: 0, chancetofreeze: 0, magical: true},
			{name: 'glave', dmg: 6, critchance: 0, critdmg: 0, speed: 8, hp: 25, mana: 0, chancetoburn: 0, chancetofreeze: 0, magical: true}
		],
		wand: [
			{name: 'dark wand', dmg: 6, critchance: 10, critdmg: 5, speed: 5, hp: 0, mana: 25, chancetoburn: 0, chancetofreeze: 0, magical: true},
			{name: 'wand of ice', dmg: 10, critchance: 0, critdmg: 0, speed: 3, hp: 0, mana: 30, chancetoburn: 0, chancetofreeze: 15, magical: true},
			{name: 'wand of fire', dmg: 9, critchance: 0, critdmg: 0, speed: 5, hp: 0, mana: 30, chancetoburn: 15, chancetofreeze: 0, magical: true}
		]
	},
	races: [
		{name: 'Elf', hp: .9, mana: .7, speed: 1.50, crit: {chance: 25, dmg: 15}, dmg: .9, spelldmg: .7},
		{name: 'High Elf', hp: .7, mana: 1.5, speed: .8, crit: {chance: 10, dmg: 25}, dmg: 1, spelldmg: 1.50},
		{name: 'Human', hp: 1, mana: 1, speed: 1, crit: {chance: 5, dmg: 5}, dmg: 1, spelldmg: 1},
		{name: 'Dwarf', hp: 1.25, mana: .6, speed: 1.25, crit: {chance: 20, dmg: 7}, dmg: 1.25, spelldmg: .8},
		{name: 'Troll', hp: 1.25, mana: .4, speed: .9, crit: {chance: 40, dmg: 7}, dmg: 1.75, spelldmg: .3},
		{name: 'Dark Elf', hp: .9, mana: 1.25, speed: 1, crit: {chance: 15, dmg: 12}, dmg: 1.1, spelldmg: 1.25}
	],
	classes: [
		{name: 'Rogue', hp: .9, mana: .7, speed: 1.50, crit: {chance: 15, dmg: 10}, dmg: 1.5, spelldmg: 0},
		{name: 'Warrior', hp: 1.50, mana: .5, speed: 1.25, crit: {chance: 20, dmg: 15}, dmg: 1.25, spelldmg: 0}
	]

}


playerFunc = {
	spell: {
		cast: function(type, spell){
			var _ = {};

			// find the spells of this type
			_.spells = playerInfo.spells[type];

			// find the one we're casting
			for(i=0;i<_.spells.length;i++){
				if(_.spells[i].name == spell){
					thisSpell = _.spells[i];
				}
			}

			return thisSpell;

		},
		add: function(type, spell){
			var _ = {};

			// find the spells of this type
			_.spells = table.spells[type];

			// find the one we're adding
			for(i=0;i<_.spells.length;i++){
				if(_.spells[i].name == spell){
					console.info('adding ' + spell);
					playerInfo.spells[type].push(_.spells[i]);
				}
			}

			return true;
		}
	},
	exp: {
		add: function(exp){
			var _ = {};

			_.currentLevel = playerInfo.level;
			_.currentExp = playerInfo.exp;

			_.nextLevel = table.level[playerInfo.level+1];
			_.neededExp = _.nextLevel.reqExp - _.currentExp;

			// Send the exp gain message to console
			console.info('Gained ' + exp + ' experience');

			if(exp >= _.neededExp){						// Character should level up
				playerFunc.level.up(_.extraExp);			// level up
				playerInfo.exp = exp - _.neededExp;		// added remaining exp
			} else {
				playerInfo.exp = exp + _.currentExp;
			}
		},
		sub: function(exp){
			// Upon death, remove some (exp) from the character
			var _ = {};

			_.currentLevel = playerInfo.level;
			_.currentExp = playerInfo.exp;

			_.prevLevel = table.level[playerInfo.level-1];
			_.lowerExp = _.currentExp - exp;

			// Send the exp gain message to console
			console.info('Lost ' + exp + ' experience due to your death');

			if(0 > _.lowerExp){						// Character should level down
				playerFunc.level.down(_.extraExp);	// level down
				playerInfo.exp = exp - _.lowerExp;	// calculate new exp amount
			} else {
				playerInfo.exp = exp + _.currentExp;
			}
		}
	},
	level: {
		up: function(){
			var _ = {};

			_.currentLevel = playerInfo.level;
			_.nextLevel = _.currentLevel + 1;
			_.newLevel = table.level[_.nextLevel];
			playerInfo.level = _.nextLevel;

			// Send level up message to console
			console.warn(_.newLevel.name);

			return true;
		},
		down: function(){
			var _ = {};

			_.currentLevel = playerInfo.level;
			_.nextLevel = _.currentLevel - 1;
			_.newLevel = table.level[_.nextLevel];
			playerInfo.level = _.nextLevel;

			// Send level up message to console
			console.warn('You have lost a level! ' + _.newLevel.name);

			return true;
		}
	}
	
	
}



myFunc = function(){

	var myTest = 10;

	for (let i = 0; i < myTest; i++) {
		console.info(i,myTest);
	}

	console.warn(i, myTest);


}


console.clear();
