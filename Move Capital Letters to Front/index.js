function capToFront(str) {
    // 1. Split the string into array of characters
    // 2. Categorise uppercase and lowercase letters
    // 3. Merge both arrays into 1 by putting the uppercase in the front
    // 4. Join them back to a string

       const arrStr = str.split('')
       
       const lowers = arrStr.filter((char) => char.to UpperCase()!= char)
       const uppers = arrStr.filter((char) => char.toUpperCase() === char)

       const mergedArr = [...uppers, ...lowers]
       const joinedStr = mergedArr.join('')

       return joinedStr

}

console.log(capToFront('hApPy') === 'APhpy')
console.log(capToFront('moneMENT') === 'MENTmove')
console.log(capToFront('shOrtCAKE') === 'OCAKEshrt')
