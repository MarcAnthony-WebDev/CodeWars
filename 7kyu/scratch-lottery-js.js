function scratch(lottery) {
  const lines = lottery
  .map(line => line.toString())
  .map(line => line.split(' '));
  return lines.reduce((acc, line) => {
    return line[0] === line[1] && line[1] === line[2] ? acc + Number(line[3]) : acc ;
  }, 0)
}

//best practice
//
function scratchBest(lottery){
  return lottery.map( e => e.split(" ") )
                .filter( array => array[0] === array[1] && array[1] === array[2] )
                .map( s => parseInt(s[3]) )
                .reduce( (a, b) => a + b, 0);
}
