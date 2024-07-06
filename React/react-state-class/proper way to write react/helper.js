function genTicket (n) {
   let Arr = new Array(n);
   for(let i = 0; i<n; i++) {
     Arr[i] = Math.floor(Math.random() * 10)
   }

   return Arr;
}

function sum(arr) {
    return arr.reduce((sum , curr) => sum + curr, 0);
}

export {genTicket, sum};
