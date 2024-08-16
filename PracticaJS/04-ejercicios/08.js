let array= [{
    id:1,
    name:'nicolas',
},{
    id:2,
    name:'felipe',
},{
    id:3,
    name: 'cacona',
}];

let pares=[
    [1,{id:1, name:'nicolas'}],
    [2,{id:2, name:'felipe'}],
    [3,{id:3, name:'cacona'}],
]

function toPairs(arr){
    // for(let pares of arr){
    //     pares[3]
    // }
    // return pares
    let pairs=[]
    for(idx in arr){
        let elemento= arr[idx]
        pairs[idx]= [elemento.id, elemento]
    }
    return pairs

}

let resultado= toPairs(array)
console.log(resultado);