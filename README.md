This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Download and install the app

```
git clone https://github.com/rhysflook/quiz-app.git
cd quiz-app
npm install
npm start
```

**Email and password for tesing:**
test@app.com
123

# Table of contents

1. **Technologies Used**
2. **States**
3. **Components**
4. **Other Modules**


# 1. Technologies Used

* node.js 16.1.0
* CSS
* React 17.0.02
* React-router 5.2.0
  * Used to handle routing
* Redux-toolkit 1.5.1
  * Used to manage the states for all components
* Redux-persist 6.0.0
  * Used to persist state in the event that a user refreshes a page or enters a url manually 
* Mirage.js 0.1.41
  * Used to create a mock server to make API calls to 

# 2. States and Reducers

This section explains the states and reducers that are being handled by redux-toolkit.

## tabSlice

**States**
* **tab** : number
  * The current tab being viewed on the QuestionNavBar component, used for navigating questions and getting question data (initial value 1)
* **navBarVisible** : boolean
  * Used to determine whether to render QuestionNavBar or not (initial value false)

**Reducers**

* **increment**
  * adds 1 to tab
* **decrement**
  * minuses 1 from tab
* **changeTab**
  * sets tab to the number of the NavItem component clicked by the user
* **resetTab**
  * sets tab to 1
* **toggleNavBarOn**
  * sets navBarVisible to true
* **toggleNavBarOff**
  * sets navBarVisible to false

## questionsSlice

**States**

* **category** : string
  * the category for current quiz being taken (initial value null)
* **questions** : object
  * contains data for all questions of the current quiz (initial value {})
* **results** : object
  * contains results of quiz (initial state {})
* **score** : number
  * the number of correct answer (initial state null)
* **quizComplete** : boolean
  * Used to determine if the quiz has been completed (initial state false)
* **doingQuiz** : boolean
  * used to determine if the quiz is still in progress 

**Reducers**

* **selectAnswer**
  * adds user selected answer to questions object then sets next question to active
* **setCategory**
  * sets category 
* **getQuestionSet**
  * sets questions, sets doingQuiz to true
* **getResultsSet**
  * sets results and score, sets quizComplete to true
* **clearQuizState**
  * resets questions, catergory, doingQuiz and quizComplete to their initial states

**Other functions**

* **getQuestions** : params - category, history
  * sends a get request to the mock server which returns questions for the category selected
  * dispatches **getQuestionSet**
  * uses ```history.push``` to redirect to Quiz component
  
* **getResults** : params - category, userAnswers, history
  * sends a post request to the server containing the category and user answers, recieves results calculated by server
  * dispatches **getResultsSet**
  * uses ```history.push``` to redirect to Results component

## accountSlice

**States**

* **loggedIn** : boolean
  * determines if a user is logged in (initial value false)
* **currentAccount** : object
  * contains user account information (initial value {})
* **failedLogin** : boolean
  * determines if a login attempt has failed (initial value false)

**Reducers**

* **login**
  * sets loggedIn to true, sets currentAccount data
* **logout**
 * sets loggedIn to false, sets currentAccount to {}
* **showLoginError**:
 * sets failedLogin to true
* **hideLoginError**:
 * sets failedLogin to false

**Other functions**

* **getAccount** : params - email, password
  * dispatches **hideLoginError** 
  * sends post request to server containing email and password
  * if no error thrown, dispatches **login**
  * if error, dispatches **showLoginError**

# 3. Components and other Modules

This section explains the modules used in the application starting from index.js moving down through all React components.


### Index.js

This module contains the ```ReactDOM.render``` function which renders the App component and wraps it with a Provider from redux-toolkit which provides a store to manage state.

App is also wrapped with a <Persistor> component which is passed a persisted redux-toolkit store. This enables the application to retain its state when a user refreshes or enters a url manually.

The module also initialises a Mirage.js server to be used for login and to retrieve quiz questions and results.
  
  
### App
  
The App component contains a Router component from react-router which wraps a NavBar component which will be used on every page, and a Switch component.
  
The Switch component contains all the routes available on the web page and the components that will be displayed. The last Route handles an invalid url entry and displays a message informing the user that no such page is available.

  
### NavBar : child of App
  
The NavBar component is displayed at the top of every page.
  
**Children - QuestionNavBar, HomeButton, LogoutButton**
  
  
### QuestionNavBar : child of NavBar
  
**States Used - navBarVisible, questions**
  
**Children - NavItem**
    
 
### NavItem : child of QuestionNavBar
  
Returns a list item contaning a question number.
  
**States used - tab, questions**
   
**functions**
  
* **getButtonClass** 
  *The NavItem whose id corresponds to the current **tab** is highlighted in a different colour to indicate the current question number.
  *Any NavItem whose id corresponds to a question that is not yet active is hidden.
  *All other NavItems are shown.
  
* **handleClick** 
  * if clicked NavItem is active dispatches **changeTab**
  
  
### HomeButton : child of NavBar
  
Returns a button which returns the user to the main menu.
  
**functions**
  
* **handleClick**
  * uses the ```useHistory``` hook to redirect to the main menu
  
  
### LogoutButton : child of NavBar
  
Returns a button which logs the user out.
  
Redirects user to main menu if logged in. 

**States Used - loggedIn**
  
**functions**
  
*handleClick
  * dispatches **logout**
 
   
### Menu.js - child of App

Displays a menu with a selection of quizzes to choose from.
  
Uses the ```useEffect``` to clear the current quiz data when redirected to by dispatching resetTab and clearQuizState

If the user is not logged in redirects to the login page

**States used - loggedIn, currentAccount**

**Children - QuizButton**
  
### QuizButton - child of Menu
  
Return a button which starts a quiz.
  
**props**
  
* text : string
  * text to be displayed on the button
* category : string
  * current quiz catergory to be used for server requests
  
**functions**

* **handleClick**
  * dispatches **setCategory**
  * dispatches **getQuestions**
  
  
### Quiz - child of App

Displays the questions for the quiz one at a time.
  
Each question has four options displayed.
  
Also contains a back and next button.
  
Redirects to login if user not logged in.
  
If user logged in but quiz not started, redirects to main menu.
  
Only displays SubmitButton if all questions have been answered.
  
**States Used - loggedIn, questions, doingQuiz**
  
**Children - Question, AnswerButton, NavButton, SubmitButton**
  
**Functions**
  
* **checkIfAnswered**
  * used as a callback for the every function to check if questions have been answered

### Question - child of Quiz
  
Returns a header containing the current quiz question.
  
Finds the question by searching the questions state using the current tab number.
  
**States Used - tab, questions, quizComplete**
  

### AnswerButton - child of Quiz

Return a button which displays one of four possible answers.

Selects an option to display as the button text using the index number passed in to props with the options list provided by each question.
  
When an answer is selected changes the className so that the button is higlighted.
  
If **quizComplete** is true, can no longer be selected.
  
**States Used - tab, questions, quizComplete**
**props**

* optionIndex
  * A number from one to four

**Functions**

* **handleClick**
  * dispatches **selectAnswer**
  
  
### NavButton - child of Quiz
  
Used to navigate through answered questions.
  
**States Used -  tab, questions**

**props**

*direction : number
  * indicates the direction to move on click, 1 is forwards -1 is backwards
* text : string
  * text to be displayed on the button

**Functions**

* **handleClick**
  * checks if current tab is 1 and direction is -1
  * checks if current tab is the same as the amount of **questions** and direction is 1
  * if both checks return true, does nothing
  * if direction is 1 and **nextQuestionActive** returns true, moves forward one tab
  * otherwise, if direction is -1 moves back one tab
  
* **nextQuestionActive**
  * used for forward navigation
  * returns true if the next question has been activated
  
  
### SubmitButton - child of Quiz
  
A button that only displays if all **questions** have been answered.
  
If the user has not yet submitted their answers, text is 'Submit Answers'.
Otherwise, text is 'Results'.

**States Used - questions, category, quizComplete**

**Functions**

* **sendAnswers**
  * if results already obtained, use the ```useHistory``` hook redirect to results page
  * otherwise, dispatch **getResults**


### Results - child of App
  
Displays a table showing the results for the quiz.

If user not logged in, redirect to login page.

If quiz not finished, redirect to quiz.
  
**States Used - results, score, quizComplete, loggedIn**

**Children - ResultRow**
  
**Functions**
  
* **handleClick**
  * uses the ```useHistory``` hook to redirect user to quiz page

  
### Result Row - child of Results
  
A row showing a question and the users answer.
  
The users answer is displayed in green if correct, red if incorrect.
  
**props**

* question : string
  * the question to be displayed
* correct : boolean
  * indicates whether the users answer was correct or not
* answerSelected : string
  * the answer the user selected
  
  
# 4. Other modules
  
## redux-toolkit and redux-persist

### Setting up the store
 
```JavaScript
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import tabReducer from './tabSlice.js';
import questionsReducer from './questionsSlice.js';
import accountReducer from './accountSlice.js';

const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({tab: tabReducer,
    questions: questionsReducer,
    accounts: accountReducer}
)

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default  configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
});
```

First an object to configure the ```persistedReducer``` is created.
  
Then, all of the slices that have been created are combined into one reducer.
  
The configuration object and the combined reducer are passed to ```persistReducer``` to create a ```persistedReducer```.

As React discourages using non-serializable values in actions, a middleware is set up in ```configureStore``` to ignore warnings for actions used by redux-persist.
  
Finally, in the index.js file, ```persistStore``` is called to created the persisted store.

```JavaScript
const persistor = persistStore(store);
```
  
## Miragejs
  
Miragejs is used in the server.js module.
  
When the application starts, ```makeServer``` is called from the index.js file.
  
The server contains all the question and answer data for the quizzes and various request routes.
  
There are three main things that the server does.
  
### Respond to a get request with question data
  
```JavaScript
this.get("/api/quiz/capitals", () => (capitalQuestions))

this.get("/api/quiz/maths", () => (mathsQuestions))

this.get("/api/quiz/science", () => (scienceQuestions))

this.get("/api/quiz/movies", () => (movieQuestions))
```

A set of quiz questions is sent depending on the category passed in the get request url.

### Calculate and send results after a post request
  
```JavaScript
this.post("/api/answers", (schema, request) => {
  const { category, userAnswers } = JSON.parse(request.requestBody);
  return getResults(correctAnswers[category], userAnswers); 
})
```

The server parses the request to get the users answers and category.

```JavaScript
 function getResults(answers, userAnswers) {
    const questionNums = Object.keys(userAnswers);
    const results = questionNums.map(num => checkAnswer(answers[num], userAnswers[num]));
    const score = results.reduce((points, result) => {
        return result.correct ? points + 1 : points
    }, 0);
    return { results, score };
} 

function checkAnswer(correctAnswer, userAnswer) {
    const {question, answerSelected} = userAnswer;
    return {question, correct: answerSelected === correctAnswer, correctAnswer, answerSelected};
}
```

Then, the server runs some functions to check the users answers and returns the results back to the redux store.
 

### Respond to a login request

A test account is created and added to the server's mock database when the application starts.
  
```JavaScript
seeds(server) {
    server.create('user', {
        email: 'test@app.com',
        password: '123',
        fName: 'Test',
        lName: 'User'
    })
},
```
  
When the user clicks the login button on the login page, the email and password are sent to the server which checks the database for the email address. Then returns the user data if it is found.
  
```JavaScript
this.post("/api/check-account/", (schema, request) => {
    let attrs = JSON.parse(request.requestBody);
    try {
        let userData = schema.db.users.findBy({ email: attrs.email });
        return userData;

    } catch(error) {
        console.log(error);
    }

})
```  

  
