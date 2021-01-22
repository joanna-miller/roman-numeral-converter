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
function romanize(num){
  if (num === 0) {
    return '';
  }
for (var i = 0; i < romanMatrix.length; i++) {
  if (num >= romanMatrix[i][0]) {
    return romanMatrix[i][1] + romanize(num - romanMatrix[i][0]);
  }
  }
}

  $(document).ready(function() {
    $("form#converterForm").submit(function(event) {
      event.preventDefault();
      const numToConvert = parseInt($("#number").val());
      console.log(numToConvert)
      let romanNum = romanize(numToConvert);
      $("#roman").text(romanNum);
      $("#results").show();
    });
  });    

    
  
    
  
    
  
