function filterArray (str, array) {

   return array.filter(function (el) { 
        return el.toLocaleLowerCase().indexOf(str.toLocaleLowerCase()) !== -1;
    });
}


export {filterArray}