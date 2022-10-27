const isValidJSON = obj => {
    try {
      JSON.parse(obj);
      return true;
    } catch (e) {
      return false;
    }
};
console.log(isValidJSON('{"name":"Toan","age":22}'));
console.log(isValidJSON('{NguyenDucToan}'));
console.log(isValidJSON(null));