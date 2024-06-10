Big O is a way to categorized your algorithms time or memory requirements based on input. It means to generate the growth of your algorithm.

function sum_char_codes(n: string): number {
  let sum = 0;
  for (let i = 0; i < n.length; i++){
    sum += n.charCodeAt(i);
  }
  return sum;
}

unbreaking memory space

ArrayBuffer {Unit8Contents}: <2d 00 2d 0045 45>, byteLength: