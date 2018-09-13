import { Component } from '@angular/core';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent {

  stringInput: string;
  result: string ="";

  generateAnagrams() {
    this.result = stringAnagrams(this.stringInput, 0, []);
    function stringAnagrams(inputString, startIndex, storeResult) {
      if (typeof inputString == "string")
        inputString = inputString.split("");

      if (startIndex >= inputString.length){
        let uniqueAnagrams = Array.from(new Set(storeResult));

        return uniqueAnagrams;
      }
       
      for (let i = startIndex; i < inputString.length; i++)
      storeResult.push(createWord(inputString, startIndex, i));
      return stringAnagrams(inputString, startIndex + 1, storeResult);
    }

    function createWord(inputString, startIndex, endIndex) {
      if (startIndex != endIndex) {
        let temp = inputString[startIndex];
        inputString[startIndex] = inputString[endIndex];
        inputString[endIndex] = temp;
      }
      return inputString.join("");
    }
  }

}