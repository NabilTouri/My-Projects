const nums = [5,10,15,30,40]


const mapFn = (element,index) => {
    console.log('title ' + index + ' = ' + element)
}

Array.from(nums).map((x,i) => console.log('title ' + i + ' = ' + x))
Array.from(nums).map((x,i) => mapFn(x,i))


// let nums1 = nums.map(x=>"title "+ nums.indexOf(x)+ " = "+ x);

// console.log(nums1);






// let somma = 0
// for(let index = 0; index < nums.length; index++){
//     console.log('titolo ', index, "= ", nums[index])
//     somma += nums[index]
// }

// console.log('somma = ', somma)
// nums.forEach(element => {
//     console.log('forEach = ', element)
// })