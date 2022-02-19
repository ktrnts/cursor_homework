const Apple = 15.678;
const Banana = 123.965;
const Coconut = 90.2345;

let a = Apple;
let b = Banana;
let c = Coconut;




const maxPrice = Math.max(Apple, Banana, Coconut);
console.log(maxPrice);


const minPrice = Math.min(a, b, c);
console.log(minPrice);


const sumPrices = a + b + c;
console.log(sumPrices) ;


const mathFloorPrices = Math.floor(a) + Math.floor(b) + Math.floor(c);
console.log(mathFloorPrices);


const priceToHundred = Math.round(sumPrices/100) * 100;
console.log(priceToHundred);


const idkPrice = mathFloorPrices % 2;
console.log(!idkPrice);


const rest = 500 - sumPrices;
console.log(rest);


const average = (sumPrices / 3).toFixed(2);
console.log(average);


const discount = Math.round(Math.random() * (90 - 1) + 1);
console.log(discount);


const randomDiscount = sumPrices / 100 * (100 - discount);
console.log(randomDiscount.toFixed(2));


const profit = sumPrices / 2 - (sumPrices * (discount / 100));
console.log(profit.toFixed(3));



   document.writeln(
    `
    <b> Максимальна ціна: </b> ${maxPrice} </br>
      <hr>
      <b> Мінімальна ціна: </b> ${minPrice} </br>
      <hr>
      <b> Загальна сума: </b> ${sumPrices} </br>
      <hr>
      <b> Ціна без копійок: </b> ${mathFloorPrices} </br>
      <hr>
      <b> Сума товарів округлена до сотень: </b> ${priceToHundred}</br>
      <hr>
      <b> Парність числа:</b> ${!idkPrice} </br>
      <hr>
      <b> Решта з 500 грн:</b> ${rest} </br>
      <hr>
      <b> Середня ціна:</b> ${average} </br>
      <hr>
      <b> Знижка:</b> ${discount}% </br>
      <hr>
      <b> Ціна зі знижкою:</b> ${randomDiscount.toFixed(2)} </br>
      <hr>
      <b> Чистий прибуток:</b> ${profit.toFixed()} </br>
      `);
 
      