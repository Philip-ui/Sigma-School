function perimeter(circleOrSquare,num) {
    return circleOrSquare === "c" ? 6.28 * num
           : circleOrSquare === "s" ? 4 * num
           : -1;
  }
  
  console.log(perimeter("s", 7));
  console.log(perimeter("c", 4));
  console.log(perimeter("c", 9));