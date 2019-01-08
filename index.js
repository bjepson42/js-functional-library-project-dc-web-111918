fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)){
        for (const element of collection){
          callback(element);
        }
      } else {
        for (const key in collection){
          callback(collection[key]);
        }
      };
      return collection;
    },

    map: function(collection, callback) {
      let newCollection = [];
      if (Array.isArray(collection)){
        for (const element of collection){
          newCollection.push(callback(element));
        };
      } else {
          for (const key in collection){
            newCollection.push(callback(collection[key]));
          };
      };
      return newCollection;
    },

    reduce: function(collection, callback, acc) {
      if (acc === undefined) {acc = 0;};
      for (const element of collection){
        acc = callback(acc, element, collection);
      };
      return acc;
    },

    find: function(collection, predicate) {
      for (const element of collection){
        if (predicate(element)){return element;};
      };
    },

    filter: function(collection, predicate){
      let newArr = [];
      for (const element of collection){
        if (predicate(element)){ newArr.push(element);};
      };
      return newArr;
    },

    size: function(collection){
      let i = 0;
      if (Array.isArray(collection)){
        for (const element of collection){
          i++;
        };
      } else {
        for (const key in collection){
          i++;
        };
      };
      return i;
    },

    first: function(array, n){
      // if (n === undefined) {
      //   return array.slice(0, 1)[0]
      // } else {
      //   return array.slice(0, n)
      // }
      if (n === undefined) {
          return array[0];
        };
      var i = 0;
      var newArr = [];
      for (i = 0; i < n; i++){
        newArr.push(array[i]);
      };
      return newArr;
    },
    // 
    // last: function(array, n){
    //   if (n === undefined) {
    //     return array.slice(-1)[0];
    //   } else {
    //     let newArr = [];
    //     let num = n;
    //     for (i = 0; i < n; i++){
    //       newArr.push(array[array.length - num]);
    //       //num = num - 1;
    //     };
    //     return newArr;
    //   };
    // },

    compact: function(arr){
      let newArr = [];
      for (const element of arr){
        if (!!element){
          newArr.push(element);
        };
      };
      return newArr;
    },

    sortBy: function(arr, callback){
        return arr.slice(0).sort(function(a,b){
            return callback(a) - callback(b);
        });
    },

    flatten: function(){ /////bonus!!

    },

    uniq: function(array, isSorted, callback){
      let newArr = [];
      if (isSorted) {

      } else {
        array.sort();
        let len = array.length;
        for (i=0; i < len; i++){
          if (array[i] === array[i+1]) {
            array.splice(i+1, 1);
            i = i - 1;
          };
        };
      };
      debugger;
      return newArr;
    },

    keys: function(){

    },

    values: function(){

    },

    functions: function(){

    },

    giveMeMore: function(){

    },
  }
})()

fi.libraryMethod()
