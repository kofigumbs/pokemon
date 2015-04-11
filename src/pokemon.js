function Physics(phys_dict) {
  // TODO: type/null check these sexy beasts
  this.types = phys_dict.types;
  this.level = phys_dict.level;
  this.hp_base = phys_dict.hp_base;
  this.hp_ext = 0;
  this.hp_taken = 0;
  this.attack_base = phys_dict.attack_base;
  this.attack_ext = 0;
  this.defense_base = phys_dict.defense_base;
  this.defense_ext = 0;
  this.speed_base = phys_dict.speed_base;
  this.speed_ext = 0;
  this.special_base = phys_dict.special_base;
  this.special_ext = 0;
  this.exp_base = phys_dict.exp_base;
  this.exp_ext = 0;
  this.normal = phys_dict.normal;
  this.weak = phys_dict.weak;
  this.immune = phys_dict.immune;
  this.resistant = phys_dict.resistant;
  this.level_rate = phys_dict.level_rate;
  return this;
}

function Pokemon(poke_dict) {
  // TODO: type/null check these sexy beasts
  this.name = poke_dict.name;
  this.number = poke_dict.number;
  this.catch_rate = poke_dict.catch_rate;
  this.level_rate = poke_dict.level_rate;
  this.physics = new Physics({
    level:poke_dict.level,
    types:poke_dict.types,
    hp_base:poke_dict.hp_base,
    attack_base:poke_dict.attack_base,
    defense_base:poke_dict.defense_base,
    speed_base:poke_dict.speed_base,
    special_base:poke_dict.special_base,
    exp_base:poke_dict.exp_base,
    normal:poke_dict.normal,
    weak:poke_dict.weak,
    immune:poke_dict.immune,
    resistant:poke_dict.resistant
  });
  this.move1 = poke_dict.move1;
  this.move2 = poke_dict.move2;
  this.move3 = poke_dict.move3;
  this.move4 = poke_dict.move4;
  /*this.moves = {
    one:poke_dict.move1,
    two:poke_dict.move2,
    three:poke_dict.move3,
    four:poke_dict.move4
  }*/
  return this;
}

Pokemon.prototype.get_hp = function() {
  return this.physics.hp_base + this.physics.hp_ext - this.physics.hp_taken;
}

module.exports.Pokemon=Pokemon;