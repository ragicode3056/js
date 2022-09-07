const anagramFind = (a,b) =>{
    let len1 = a.length;
    let len2 = b.length;

    if(len1 != len2){
        return "not an anagram";
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');

    if(str1 != str2){
        return "not a anagram"
    }else{
        return "is a anagram"
    }
} 

console.log('anagram',anagramFind("india","nidia"));