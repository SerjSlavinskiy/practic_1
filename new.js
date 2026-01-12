'use strict'

// if (4 == 9) {
//     console.log ('Ok!');
// } else {
//     console.log('Error');
// }

const dorkdroch = +prompt('Скільки разів за життя Ви дрочили?', '');

const whenYouDrochDB = {
    count: dorkdroch,
    drochka_L: {},
    drochka_R: {},
    limbs: [],
    privat: false
};

const a = prompt('Чи любите Ви дрочити лівою рукою?', ''),
      b = prompt('Як Ви оціните дрочку лівою рукою?', ''),
      c = prompt('Чи любите Ви дрочити правою рукою?', ''),
      d = prompt('Як Ви оціните ддрочку правою рукою?', ''),
      e = prompt('Якими частинами тіла Ви дрочили?', '', '', '', '');

      whenYouDrochDB.drochka_L[a] = b;
      whenYouDrochDB.drochka_R[c] = d;
      whenYouDrochDB.limbs[e];
      
console.log(whenYouDrochDB);