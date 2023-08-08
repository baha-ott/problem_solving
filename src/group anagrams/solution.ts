// First solutinon

// function groupAnagrams(strs: string[]): string[][] {
//   const map: { [key: string]: string[] } = {

//   };

//   for (const s of strs) {
//       const key = s.split('').sort().join("");
//       // generate a key
//       if (map[key]) {
//           map[key].push(s);
//       }
//       else {
//           map[key] = [s]
//       }

//   }

//   return Object.values(map)
// };

// Second solution

// function groupAnagrams(strs: string[]): string[][] {
//   const map: { [key: string]: string[] } = {};

//   for (const s of strs) {
//     const array = Array(26).fill(0);
//     // we will have an array with 26 zeroes
//     for (let i = 0; i < s.length; i += 1) {
//       const ascii = s.charCodeAt(i);
//       array[ascii - 97] += 1;
//     }

//     const key = array.join("-");
//     // generate a key
//     if (map[key]) {
//       map[key].push(s);
//     } else {
//       map[key] = [s];
//     }
//   }

//   return Object.values(map);
// }

// abc [0, 0, 0 ....] 26 zeroes => [1, 1, 1, 0, 0, 0, 0.......]=>'1-1-1-0-0....'

// Third solution

function groupAnagrams(strs: string[]): string[][] {
  const map: { [key: string]: string[] } = {};

  const prime = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97, 101,
  ];

  for (const s of strs) {
    let key = 1;
    for (let i = 0; i < s.length; i += 1) {
      const ascii = s.charCodeAt(i);
      key *= prime[ascii - 97];
      // generate a key
    }
    if (map[key]) {
      map[key].push(s);
    } else {
      map[key] = [s];
    }
  }
  return Object.values(map);
}
