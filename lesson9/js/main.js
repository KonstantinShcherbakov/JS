function familyCounter(accumulator,currentValue) {
	if(accumulator.hasOwnProperty(currentValue.family))
	{
		accumulator[currentValue.family] = accumulator[currentValue.family] + 1;
	}
	else {
		accumulator[currentValue.family] = 1;
	}

	return accumulator;
}

function makeRegister(accumulator,currentValue)
{
	if(Object.keys(accumulator).length===0)
	{
		accumulator.register = {length:0};
		accumulator.stats =
		{
			count: 0,
			males: 0,
			females: 0,
			minAge: null,
			maxAge: null
		};
	}
	accumulator.register.length += 1;
	if(!(accumulator.register.hasOwnProperty(currentValue.type)))
	{
		accumulator.register[currentValue.type] = {length:1};
	}
	else {
		accumulator.register[currentValue.type].length += 1;
	}
	if(!(accumulator.register[currentValue.type].hasOwnProperty(currentValue.class)))
	{
		accumulator.register[currentValue.type][currentValue.class] = {length:1};
	}
	else {
		accumulator.register[currentValue.type][currentValue.class].length += 1;
	}
	if(!(accumulator.register[currentValue.type][currentValue.class].hasOwnProperty(currentValue.family)))
	{
		accumulator.register[currentValue.type][currentValue.class][currentValue.family] = {names: [currentValue.name]};
	}
	else {
		accumulator.register[currentValue.type][currentValue.class][currentValue.family].names.push(currentValue.name);
	}
	accumulator.stats.count += 1;
	if (currentValue.gender==="♂") {
		accumulator.stats.males += 1;
	}
	if (currentValue.gender==="♀") {
		accumulator.stats.females += 1;
	}
	if(accumulator.stats.minAge===null || currentValue.age < accumulator.stats.minAge)
	{
		accumulator.stats.minAge=currentValue.age;
	}
	if(accumulator.stats.maxAge===null || currentValue.age > accumulator.stats.maxAge)
	{
		accumulator.stats.maxAge=currentValue.age;
	}
	return accumulator;
}

const farmAccountLog = [
	{
	  id: 11,
	  type: "Meat",
	  class: "Cattle",
	  family: "Cow",
	  name: "Wiz",
	  gender: "♂",
	  age: 10
	},
	{
	  id: 12,
	  type: "Milk",
	  class: "Cattle",
	  family: "Cow",
	  name: "Roseanne",
	  gender: "♀",
	  age: 2
	},
	{
	  id: 13,
	  type: "Egg",
	  class: "Birds",
	  family: "Chicken",
	  name: "Bam",
	  gender: "♀",
	  age: 5
	},
	{
	  id: 14,
	  type: "Meat",
	  class: "Birds",
	  family: "Goose",
	  name: "Gobble",
	  gender: "♂",
	  age: 8
	},
	{
	  id: 15,
	  type: "Milk",
	  class: "Cattle",
	  family: "Goat",
	  name: "Anti",
	  gender: "♀",
	  age: 9
	},
	{
	  id: 16,
	  type: "Income",
	  class: "Cattle",
	  family: "Cow",
	  name: "Gizmo",
	  gender: "♂",
	  age: 10
	},
	{
	  id: 17,
	  type: "Egg",
	  class: "Birds",
	  family: "Quail",
	  name: "Maya",
	  gender: "♀",
	  age: 2
	},
	{
	  id: 18,
	  type: "Meat",
	  class: "Birds",
	  family: "Rooster",
	  name: "Toto",
	  gender: "♂",
	  age: 1
	},
	{
	  id: 18,
	  type: "Milk",
	  class: "Cattle",
	  family: "Sheep",
	  name: "Hannah",
	  gender: "♀",
	  age: 5
	},
	{
	  id: 19,
	  type: "Milk",
	  class: "Cattle",
	  family: "Cow",
	  name: "Sparky",
	  gender: "♀",
	  age: 7
	},
	{
	  id: 20,
	  type: "Income",
	  class: "Cattle",
	  family: "Goat",
	  name: "Charlie",
	  gender: "♂",
	  age: 3
	}
  ];

console.log(farmAccountLog.reduce(familyCounter,{}));

console.log(farmAccountLog.reduce(makeRegister,{}));