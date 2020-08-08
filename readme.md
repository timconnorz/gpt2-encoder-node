# Basic Usage

const encoded = await getEncoded('Some string');

console.log(encoded.length);
console.log(encoded.tokens);
console.log(encoded.ids);
console.log(encoded.attentionMask);
console.log(encoded.offsets);
console.log(encoded.overflowing);
console.log(encoded.specialTokensMask);
console.log(encoded.typeIds);
console.log(encoded.wordIndexes);


*Created 8-7-2020*
*tw: @itstimconnors*