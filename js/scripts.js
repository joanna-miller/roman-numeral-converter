var romanMatrix = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
];
function romanize(number){
  if (num === 0) {
    return '';
  }
for (var i = 0; i < romanMatrix.length; i++) {
  if (number >= romanMatrix[i][0]) {
    return romanMatrix[i][1] + romanize(num - romanMatrix[i][0]);
  }



    