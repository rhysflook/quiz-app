import { createServer, Model } from "miragejs";

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


export function makeServer({ environment = "test" } = {}) {
  createServer({
    environment,

    models: {
        question: Model,
        user: Model
    },

    seeds(server) {
        server.create('user', {
            email: 'test@app.com',
            password: '123',
            fName: 'Tom',
            lName: 'Tom'
        })
    },

    routes() {
        this.get("/api/quiz/capitals", () => (capitalQuestions))

        this.get("/api/quiz/maths", () => (mathsQuestions))

        this.get("/api/quiz/science", () => (scienceQuestions))

        this.get("/api/quiz/movies", () => (movieQuestions))

        this.post("/api/answers", (schema, request) => {
            const { category, userAnswers } = JSON.parse(request.requestBody);
            return getResults(correctAnswers[category], userAnswers); 
        })

        this.post("/api/check-account/", (schema, request) => {
            let attrs = JSON.parse(request.requestBody);
            try {
                let userData = schema.db.users.findBy({ email: attrs.email });
                return userData;
               
            } catch(error) {
                console.log(error);
            }

        })
    },
  })
}

const capitalQuestions = {
    1: {
        question: 'What is the capital city of Wales?',
        options: ['Cardiff', 'Swansea', 'Newport', 'Bangor'],
        answerSelected: null,
        active: true,
    },
    2: {
        question: 'What is the capital city of Japan?',
        options: ['Kyoto', 'Osaka', 'Tokyo', 'Nara'],
        answerSelected: null,
        active: false,
    },
    3: {
        question: 'What is the capital city of France?',
        options: ['Marseille', 'Bordeaux', 'Lyon', 'Paris'],
        answerSelected: null,
        active: false,
    },
    4: {
        question: 'What is the capital city of Australia?',
        options: ['Canberra', 'Perth', 'Sydney', 'Gold Coast'],
        answerSelected: null,
        active: false,
    },
    5: {
        question: 'What is the capital city of Thailand?',
        options: ['Chiang Mai', 'Bangkok', 'Phuket', 'Khon Kaen'],
        answerSelected: null,
        active: false,
    },
    6: {
        question: 'What is the capital city of Germany?',
        options: ['Munich', 'Hamburg', 'Berlin', 'Frankfurt'],
        answerSelected: null,
        active: false,
    },
    7: {
        question: 'What is the capital city of Kenya?',
        options: ['Nairobi', 'Mombasa', 'Kisumu', 'Eldoret'],
        answerSelected: null,
        active: false,
    },
    8: {
        question: 'What is the capital city of Brazil?',
        options: ['Rio de Janeiro', 'Brasilia', 'São Paulo', 'Belo Horizonte'],
        answerSelected: null,
        active: false,
    },
    9: {
        question: 'What is the capital city of India?',
        options: ['Chennai', 'Bengaluru', 'Delhi', 'Mumbai'],
        answerSelected: null,
        active: false,
    },
    10: {
        question: 'What is the capital city of Canada?',
        options: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'],
        answerSelected: null,
        active: false,
    },
}

const mathsQuestions = {
    1: {
        question: '20 - 11', 
        options: ['5', '7', '9', '10'],
        answerSelected: null,
        active: true,
    },
    2: {
        question: '12 × 6',
        options: ['72', '144', '45', '96'],
        answerSelected: null,
        active: false,
    },
    3: {
        question: '15 ÷ 3',
        options: ['4', '2', '6', '5'],
        answerSelected: null,
        active: false,
    },
    4: {
        question: '317 + 109',
        options: ['435', '416', '399', '381'],
        answerSelected: null,
        active: false,
    },
    5: {
        question: '700 - 436',
        options: ['278', '436', '364', '401'],
        answerSelected: null,
        active: false,
    },
    6: {
        question: '15 × 8',
        options: ['120', '135', '105', '150'],
        answerSelected: null,
        active: false,
    },
    7: {
        question: '240 ÷ 8',
        options: ['40', '30', '20', '50'],
        answerSelected: null,
        active: false,
    },
    8: {
        question: '57 + 113',
        options: ['181', '172', '167', '170'],
        answerSelected: null,
        active: false,
    },
    9: {
        question: '50 × 11',
        options: ['600', '550', '500', '450'],
        answerSelected: null,
        active: false,
    },
    10: {
        question: '123 - 61',
        options: ['62', '57', '60', '59'],
        answerSelected: null,
        active: false,
    },
}

const scienceQuestions = {
    1: {
        question: 'What would you get if you mix all light colours together?',
        options: ['Gray', 'White', 'Purple', 'Black'],
        answerSelected: null,
        active: true,
    },
    2: {
        question: 'The earth has three layers of varying temperatures. What are its three layers?',
        options: [
            'Crustacean, manticore, boar', 'Loaf, bread, crumbs', 'Crust, mantle, core', 'Top, middle, bottom'],
        answerSelected: null,
        active: false,
    },
    3: {
        question: 'What is the largest planet in the solar system?',
        options: ['Jupiter', 'Earth', 'Uranus', 'Saturn'],
        answerSelected: null,
        active: false,
    },
    4: {
        question: 'What do bees collect and use to create honey?',
        options: ['Leaves', 'Petals', 'Pollen', 'Nectar'],
        answerSelected: null,
        active: false,
    },
    5: {
        question: 'What is the hottest planet in the solar system?',
        options: ['Venus', 'Mercury', 'Pluto', 'Neptune'],
        answerSelected: null,
        active: false,
    },
    6: {
        question: 'On what part of your body would you find the pinna?',
        options: ['Lips', 'Nose', 'Ears', 'Hands'],
        answerSelected: null,
        active: false,
    },
    7: {
        question: 'What part of the plant conducts photosyntehsis?',
        options: ['Leaf', 'Fruit', 'Stem', 'Petal'],
        answerSelected: null,
        active: false,
    },
    8: {
        question: 'What tissues connect the muscles to the bones?',
        options: ['Cartilage', 'Ligaments', 'Cleanex', 'Tendons'],
        answerSelected: null,
        active: false,
    },
    9: {
        question: 'How many elements are there in the periodic table?',
        options: ['999', '118', '78', '101'],
        answerSelected: null,
        active: false,
    },
    10: {
        question: 'How many hearts does an octopus have?',
        options: ['4', '5', '3', '1'],
        answerSelected: null,
        active: false,
    },
}

const movieQuestions = {
    1: {
        question: 'In The Matrix, does Neo take the blue pill or the red pill?',
        options: ['Blue', 'Red', 'Neither', 'Both'],
        answerSelected: null,
        active: true,
    },
    2: {
        question: 'For what movie did Tom Hanks score his first Academy Award nomination?',
        options: ['Sully', 'Forrest Gump', 'Big', 'Castaway'],
        answerSelected: null,
        active: false,
    },
    3: {
        question: 'Who played park owner John Hammond in Jurassic Park?',
        options: ['Sam Neill', 'Jeff Goldblum', 'David Attenborough', 'Richard Attenborough'],
        answerSelected: null,
        active: false,
    },
    4: {
        question: 'For what movie did Steven Spielberg win his first Oscar for Best Director?',
        options: ['Schindler’s List', 'War Horse', 'A.I', 'Hook'],
        answerSelected: null,
        active: false,
    },
    5: {
        question: 'What Hollywood movie star plays himself in Zombieland?',
        options: ['Eddy Murphy', 'Jack Black', 'Bill Murray', 'Woody Harrelson'],
        answerSelected: null,
        active: false,
    },
    6: {
        question: 'In what 1979 James Bond movie does the famous spy go to outer space?',
        options: ['Live and Let Die', 'Thunderball', 'Goldfinger', 'Moonraker'],
        answerSelected: null,
        active: false,
    },
    7: {
        question: 'Which Alfred Hitchcock thriller is notorious for its shocking “shower scene”?',
        options: ['Psycho', 'Vertigo', 'The Birds', 'Rebecca'],
        answerSelected: null,
        active: false,
    },
    8: {
        question: 'How many suns does Luke’s home planet of Tatooine have in Star Wars?',
        options: ['3', '2', '1', '5'],
        answerSelected: null,
        active: false,
    },
    9: {
        question: 'What 1970 movie marked the feature debut of Arnold Schwarzenegger?',
        options: ['Predator', 'The Terminator', 'Hercules in New York', 'Commando'],
        answerSelected: null,
        active: false,
    },
    10: {
        question: 'Who played detective Rick Deckard in Blade Runner?',
        options: ['M. Emmet Walsh', 'Edward James Olmos', 'Rutger Hauer', 'Harrison Ford'],
        answerSelected: null,
        active: false,
    },
}

const correctAnswers = {
    capitals: {
        1: 'Cardiff', 2: 'Tokyo', 3: 'Paris', 4: 'Canberra', 5: 'Bangkok',
        6: 'Berlin', 7: 'Nairobi', 8: 'Brasilia', 9: 'Delhi', 10: 'Ottawa'
    },
    maths: {
        1: '9', 2: '72', 3: '5', 4: '416', 5: '364',
        6: '120', 7: '30', 8: '170', 9: '550', 10: '62',
    },
    science: {
        1: 'White', 2: 'Crust, mantle, core', 3: 'Jupiter', 4: 'Nectar',
        5: 'Venus', 6: 'Ears', 7: 'Leaf', 8: 'Tendons', 9: '118', 10: '3',
    },
    movies: {
        1: 'Both', 2: 'Big', 3: 'Richard Attenborough', 4: 'Schindler’s List ',
        5: 'Bill Murray', 6: 'Moonraker', 7: 'Psycho', 8: '2', 9: 'Hercules in New York ',
        10: 'Harrison Ford',
    },
};