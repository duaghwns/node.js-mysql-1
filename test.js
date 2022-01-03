const array = [1,2,3,4,5,6,7,8,9,10,11,12];



array.forEach((item)=>{
    console.log(item);
})

let hojoon = {
    name : 'hojoon',
    age : 26
}

hojoon.some((item)=>{
    console.log(item.name);
})