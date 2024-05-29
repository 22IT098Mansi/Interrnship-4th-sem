/*Create a function in which will pass array and argument as any number and 
that function will return true if that number exists in that array else return 
false 
const arr = [1, 2, 3, 4, 5]; 
Output => checkNumberInArray(arr,3) => true */
 function checkNumberInArray(num) {
    const arr=[1,2,3,4,5];

l=arr.length;
for(let i=0;i<l;i++){
    if(num==arr[i]){
        return true;
    }
    }
    return false;
}
console.log(checkNumberInArray(9));