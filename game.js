

/*
//NOT NEEDED YET
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
*/
 
//TROOP DATA AND FACTION BONUSESS
table = {
	troops: [
		{id: 1, name: 'LightInfantry', hp: 4, speed: 4, dmg: 2, charge: 4},
		{name: 'HeavyInfantry', hp: 10, speed: 2, dmg: 6, charge: 2},
		{name: 'LightCavalry', hp: 6, speed: 3, dmg: 4, charge: 4},
		{name: 'HevayCavalry', hp: 10, speed: 1, dmg: 8, charge: 2},
		{name: 'Skirmishers', hp: 4, speed: 3, dmg: 4, charge: 8},
		{name: 'Militia', hp: 4, speed: 2, dmg: 4, charge: 6},
		{name: 'Grenadiers', hp: 2, speed: 2, dmg: 8, charge: 2},
		{name: 'Artillery', hp: 2, speed: 1, dmg: 10, charge: 2},
		{name: 'Scouts', hp: 2, speed: 5, dmg: 2, charge: 4}
	],
	factions: [
		//French gets +1 speed to everything
		{id: 1, name: 'French', hp: 0, speed: 1, dmg: 0,},
		//Brits only get calvary +1 buff all around
		{name: 'British', hp: 0, speed: 0, dmg: 0,},
		//Gets 1 extra spawn Point
		{name: 'Spain', hp: 0, speed: 0, dmg: 0,},
		//Gets 2 extra spawn Points
		{name: 'Russian', hp: 0, speed: 0, dmg: 0,}
	]

}

/*
//NOT NEEDED
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
*/