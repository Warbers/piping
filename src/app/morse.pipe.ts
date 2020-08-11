import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'morse'
})
export class MorsePipe implements PipeTransform {

  transform(value: string): string {
    let morseArr = {
      "a": ".-",
      "b": "-...",
      "c": "-.-.",
      "d": "-..",
      "e": ".",
      "f": "..-.",
      "g": "--.",
      "h": "....",
      "i": "..",
      "j": ".---",
      "k": "-.-",
      "l": ".-..",
      "m": "--",
      "n": "-.",
      "o": "---",
      "p": ".--.",
      "q": "--.-",
      "r": ".-.",
      "s": "...",
      "t": "-",
      "u": "..-",
      "v": "...-",
      "w": ".--",
      "x": "-..-",
      "y": "-.--",
      "z": "--..",
      "æ": ".-.-", "ä": ".-.-", "ą": ".-.-",
      "ø": "---.", "ö": "---.", "ó": "---.",
      "å": ".--.-", "à": ".--.-",
      "1": ".----",
      "2": "..---",
      "3": "...--",
      "4": "....-",
      "5": ".....",
      "6": "-....",
      "7": "--...",
      "8": "---..",
      "9": "----.",
      "0": "-----",
      ".": ".-.-.-",
      ",": "--..--",
      ":": "---...",
      "?": "..--..",
      "'": ".----.",
      "-": "-....-",
      "/": "-..-.",
      "(": "-.--.",
      ")": "-.--.-",
      "\"": ".-..-.",
      "\n": ".-.-",
      "×": "-..-",
      "@": ".--.-.",
      " ": "",
    };
    let output = "";
    for (let chr of value.toLowerCase()) {
      if (output != "") {
        output += "|"
      }
      output += morseArr[chr];
    }
    return output;
  }

}
