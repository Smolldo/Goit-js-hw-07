
const array = (number) => {
  number = []
  let cut = [];
  for(const i of number){
    if(i > 7){
      cut.push(i)
    }
    return cut;
  }
  
}


console.log(array(9,3,4,5,6,7,8,9));
