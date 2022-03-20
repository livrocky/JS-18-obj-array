//1. Parašykite metodą klasėje, kuris pasakys ar žmogus yra pilnametis ar ne, pagal jo amžių.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge() {
    if (this.age >= 18) console.log(`${this.name} yra pilnametis`);
    else if (this.age <= 18) console.log(`${this.name} yra nepilnametis`);
  }
}
const p1 = new Person("Rokas", 27);
p1.compareAge();

//2. Parašykit funkciją, kuri priimtu mąsyvą sudarytą iš skaičių ir raidžių. Grąžinkite masyvą tik su skaičiais.

const arr = [1, 5, "a", "g", "z", 6];

function onlyNumbers(arr) {
  return arr.filter((obj) => Number(obj));
}
const skaiciai = onlyNumbers(arr);
console.log(skaiciai);

// const onlyNumbers = arr.filter(function (item) {
//   return parseInt(item) === item;
// });
// console.log(onlyNumbers);

//3. Sukurk funkciją, kuri paims stringą kaip parametrą ir padvigubins kiekvieną raidę (bet ne simbolį ar skaičių).

// const string = "rokas 12 ruze";
// console.log(
//   string
//     .split("")
//     .map(function (v) {
//       return v + v;
//     })
//     .join("")
// );

// const string = "rokas 123 ruze";
// console.log(string);

function doubleString(string) {
  return Array.from(string)
    .map((char) => {
      if (String(Number(char)) === "NaN") {
        return char + char;
      } else {
        return char;
      }
    })
    .join("");
}
const double = doubleString("rokas 123 ruzevicius");
console.log(double);

//4. Parašykite funkciją, kuri tikrins ar paduotas post code - teisingas. Post code turi susidėti iš 5 skaičių, arba trijų skaičių ir dviejų raidžių. Jei yra tarpų - post code neteisingas.

// const code = 55555;

function isPostCodeValid(postCode) {
  //   if (postCode.toString().length === 5) console.log(true);
  if (postCode.toString().length === 3 && charAt(3).isNaN(postCode) = true) console.log(true);
  else if (postCode.toString().length !== 5) console.log(false);
}
const post = isPostCodeValid("5555");

//   if (Number(postCode.trim().length() === 5){ console.log("true");
// } else if (postCode.trim().length() !== 5) console.log("false");
// }}
// const post = isPostCodeValid("55555");
// console.log(post);

// function isPostCodeValid(post){
//     if (post.trim().length === 5) {
//         if (String(Number(post)) !== "NaN"){
//             return true;
//         } else if (
//             String(Number(post.charAt(0))) !== "NaN" &&
//             String(Number(post.charAt(1))) !== "NaN" &&
//             String(Number(post.charAt(2))) !== "NaN" &&
//             post.charAt(0) !== " " &&
//             post.charAt(1) !== " " &&
//             post.charAt(2) !== " " &&
//         );
//     }
