let inputData = [
  'Akmal',
  5,
  'kaa',
  [4, 5, 6],
  true,
  20,
  false,
  { halo: 'budi' },
  { umur: 25 },
  'lewat',
  { namaPanjang: 'Akmal', namaBelakang: 'Oktarian' },
];

let tipeData = {
  number: 0,
  string: 0,
  boolean: 0,
  object: 0,
  array: 0,
};

for (let i = 0; i < inputData.length; i++) {
  let Data = inputData[i];

  if (typeof Data === 'number') {
    tipeData.number++;
  } else if (typeof Data === 'string') {
    tipeData.string++;
  } else if (typeof Data === 'boolean') {
    tipeData.boolean++;
  } else if (Array.isArray(Data)) {
    tipeData.array++;
  } else if (typeof Data === 'object') {
    tipeData.object++;
  }
}
console.log('number = ', tipeData.number);
console.log('string = ', tipeData.string);
console.log('boolean = ', tipeData.boolean);
console.log('Array = ', tipeData.array);
console.log('Object = ', tipeData.object);
