function generation(generationNumber,gender) { 
    return generationNumber === -3 && gender === 'm' ? 'great grandfather'
    : generationNumber === -3 && gender === 'f' ? 'great grandmother'
    : generationNumber === -2 && gender === 'm' ? 'grandfather'
    : generationNumber === -2 && gender === 'f' ? 'grandmother'
    : generationNumber === -1 && gender === 'm' ? 'father'
    : generationNumber === -1 && gender === 'f' ? 'mother'
    : generationNumber === 0 && gender === 'm' ? 'me!'
    : generationNumber === 0 && gender === 'f' ? 'me!'
    : generationNumber === 1 && gender === 'm' ? 'son'
    : generationNumber === 1 && gender === 'f' ? 'daugther'
    : generationNumber === 2 && gender === 'm' ? 'grandson'
    : generationNumber === 2 && gender === 'f' ? 'granddaugther'
    : generationNumber === 3 && gender === 'm' ? 'great grandson'
    : generationNumber === 3 && gender === 'f' ? 'great granddaugther'
    :-1;
  }
  
  console.log(generation(2, "f"));
  console.log(generation(-3, "m"));
  console.log(generation(1, "f"));