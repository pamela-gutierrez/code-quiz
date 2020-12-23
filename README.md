# Code Quiz

This is application is a quiz about Central America made with HTML, CSS, Javascript, and some Bootstrap elements. There are a total of five questions, each of which has four multiple choice answers to choose from. Each correct answer will move onto the next question while an incorrect answer will take ten seconds off of the total seventy-five second timer. At the end of the quiz the results will be generated and allow the user to add their initials next to their total score. The total score will reflect the seconds left on the timer after all questions have been answered. 
______________
#### *Code Quiz* 
 
![Site](Insert pic here)

Insert Text Here

![Site](Insert pic here)

![Site](Insert pic here) 

## **Built With**
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Git Hub](https://github.com/)
* [Bootstrap](https://getbootstrap.com/)
*  Git - used to track changes to code
_____________________________________________________
  

#### **Code Snippet**

The code for this quiz is written out in a series of functions that use different previously defined variables. The startQuiz function initiates the quiz by first hiding the starting div which holds the title of the quiz as well as the start button and triggers the next function-- showQuestion.

```
function startQuiz() {
    startingDiv.style.display = "none"
    quizContainerElement.style.display = "block"
    showQuestion(quiz[currentQuestion])
}
```

The showQuestion function below points to the questionElement which was defined at the start of the Javascript code using pointers to the HTML document. The object the function is referring to is actually the entire quiz while the answers point to the different buttons and corresponding answers. 
```
function showQuestion(object) {
    questionElement.innerText = object.question
    buttonA.textContent = object.answers[0]
    buttonB.textContent = object.answers[1]
    buttonC.textContent = object.answers[2]
    buttonD.textContent = object.answers[3]

    // currentQuestion = currentQuestion + 1
}

```
____________________________________________________________________________

#### **Deployed Link**

* [See Live Site](https://pamela-gutierrez.github.io/code-quiz/)

### **Author Links**

* **PAMELA GUTIERREZ**
* **UC Berkeley Coding Bootcamp**
  
- [Link to Portfolio Site](#)
- [Link to Github](https://github.com/pamela-gutierrez) 
- [Link to LinkedIn](www.linkedin.com/in/pamela-gutierrez)

______________________________________________________________________________

#### **License**

This project is licensed under the MIT License


   