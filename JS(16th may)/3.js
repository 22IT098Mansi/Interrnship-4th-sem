const str = "Lorem ipsum may be used as a placeholder before final copy is available";
const newStr = str.replace(/may|final/g, '').trim();
console.log(newStr);