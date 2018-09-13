import { Component } from '@angular/core';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent {

  stringInput: string;
  // Assigning result variable 
  result: string ="";

  generateAnagrams() {
    this.result = stringAnagrams(this.stringInput, 0, []);
    function stringAnagrams(inputString, startIndex, storeResult) {
      // Spilting each character of input string including whitespaces
      // only if it is of type string
      if (typeof inputString == "string")
        { 
          inputString = inputString.split("");
        
    }


      if (startIndex >= inputString.length){
        // removing duplicates using set
        let uniqueAnagrams = Array.from(new Set(storeResult));
        // returning the result
        return uniqueAnagrams;
      }
       
      for (let i = startIndex; i < inputString.length; i++){
      // creating new word by swaping the character of inputString
      // and storing in storeResult  
      storeResult.push(createWord(inputString, startIndex, i));
      
    }
      
      return stringAnagrams(inputString, startIndex + 1, storeResult);
    }

    function createWord(inputString, startIndex, endIndex) {
     
      if (startIndex != endIndex) {
        // swapping using temp 
        let temp = inputString[startIndex];
        inputString[startIndex] = inputString[endIndex];
        inputString[endIndex] = temp;
      }
     
      return inputString.join("");
    }
  }

}