const abc = 'abcdefghijklmnopqrstuvwxyz';
export const lastPosition = abc.length - 1;

export function caesar(input: string, key: number): string {

  // weird hacks in action... even my IDE says "wat?" and highlights it with yellow
  key = key * 1;

  if ( key > lastPosition ) {
    throw new Error('Key is invalid');
  }

  let output = '';

  for ( let i = 0; i < input.length; i++ ) {
    let ch = input[i];
    let index = abc.indexOf(ch);

    if ( index !== -1 ) {
      let offset = index + key;

      console.log(offset);

      if ( offset > lastPosition ) {
        offset = offset - abc.length;
      }

      output += abc.charAt(offset);
    } else {
      output = output + ch;
    }
  }

  return output;
}