const sortArr = (arr) =>{
    let len = arr.length;
    let temp =0;
    for(let i=0;i<len;i++){
        for(let j = 0;j<len;j++){
            if(arr[i]<arr[j]){
                temp = arr[i];
                arr[i]= arr[j];
                arr[j]= temp;
            }
        }
        
    }
    return arr;
}

// sort with sort fn

let arr_val = [5,,2,4,1,9,0,44,3];
console.log('arr sort',arr_val.sort());

console.log('arr',sortArr([2,1,9,0,4,5]));