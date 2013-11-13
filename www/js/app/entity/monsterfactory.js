define(['app/entity/zombie', 'app/entity/rat', 'app/entity/skeleton',
        'app/entity/hauntedarmour', 'app/entity/lizardman', 'app/entity/spider',
        'app/entity/earthelemental', 'app/entity/fireelemental', 'app/entity/waterelemental'], 
        function(Zombie, Rat, Skeleton, HauntedArmour, Lizardman, Spider, 
        		EarthElemental, FireElemental, WaterElemental) {
	return {
		_monsters: {
			"zombie": Zombie,
			"rat": Rat,
			"skeleton": Skeleton,
			"hauntedArmour": HauntedArmour,
			"lizardman": Lizardman,
			"spider": Spider,
			"earthElemental": EarthElemental,
			"fireElemental": FireElemental,
			"waterElemental": WaterElemental
		},
		
		getMonster: function(name, options) {
			var monster = this._monsters[name];
			if(monster != null) {
				return new monster(options);
			}
			return null;
		}
	};
});