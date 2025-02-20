export function ceasarCipher(str, num){
    const result = []
    const alphabetArray = [..."abcdefghijklmnopqrstuvwxyz"];
    const strArr = [...str];
    const regex = /[^a-zA-Z]/;
    strArr.forEach(item =>{
        if(regex.test(item)){
            result.push(item)
            return
        }
        const itemIndex = (alphabetArray.findIndex(word => word === item.toLowerCase()) + num) % 26;
        if(item === item.toUpperCase()){
            result.push(alphabetArray[itemIndex].toUpperCase())
        }else{
            result.push(alphabetArray[itemIndex])
        }
    })
    return result.join('')
}

