import { createServer, Model } from "miragejs";

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
      this.get("/api/quiz/capitals", () => ({
    1: {
        question: 'What is the capital city of Wales?',
        correctAnswer: 'Cardiff', 
        options: ['Cardiff', 'Swansea', 'Newport', 'Bangor'],
        answerSelected: null,
        active: true,
    },
    2: {
        question: 'What is the capital city of Japan?',
        correctAnswer: 'Tokyo',
        options: ['Kyoto', 'Osaka', 'Tokyo', 'Nara'],
        answerSelected: null,
        active: false,
    },
    3: {
        question: 'What is the capital city of France?',
        correctAnswer: 'Paris',
        options: ['Marseille', 'Bordeaux', 'Lyon', 'Paris'],
        answerSelected: null,
        active: false,
    },
    4: {
        question: 'What is the capital city of Australia?',
        correctAnswer: 'Canberra',
        options: ['Canberra', 'Perth', 'Sydney', 'Gold Coast'],
        answerSelected: null,
        active: false,
    },
    5: {
        question: 'What is the capital city of Thailand?',
        correctAnswer: 'Bangkok',
        options: ['Chiang Mai', 'Bangkok', 'Phuket', 'Khon Kaen'],
        answerSelected: null,
        active: false,
    },
    6: {
        question: 'What is the capital city of Germany?',
        correctAnswer: 'Berlin',
        options: ['Munich', 'Hamburg', 'Berlin', 'Frankfurt'],
        answerSelected: null,
        active: false,
    },
    7: {
        question: 'What is the capital city of Kenya?',
        correctAnswer: 'Nairobi',
        options: ['Nairobi', 'Mombasa', 'Kisumu', 'Eldoret'],
        answerSelected: null,
        active: false,
    },
    8: {
        question: 'What is the capital city of Brazil?',
        correctAnswer: 'Brasilia',
        options: ['Rio de Janeiro', 'Brasilia', 'São Paulo', 'Belo Horizonte'],
        answerSelected: null,
        active: false,
    },
    9: {
        question: 'What is the capital city of India?',
        correctAnswer: 'Delhi',
        options: ['Chennai', 'Bengaluru', 'Delhi', 'Mumbai'],
        answerSelected: null,
        active: false,
    },
    10: {
        question: 'What is the capital city of Canada?',
        correctAnswer: 'Ottawa',
        options: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'],
        answerSelected: null,
        active: false,
    },
    }))

    this.get("/api/quiz/maths", () => ({
        1: {
            question: 'What is the capital city of Wales?',
            correctAnswer: 'Cardiff', 
            options: ['Cardiff', 'Rome', 'Tokyo', 'Paris'],
            answerSelected: null,
            active: true,
        },
    })) 

    this.post("/api/add-account/", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        schema.users.create(attrs);
        return attrs;
    })
    this.post("/api/check-account/", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        try {
            return schema.db.users.findBy({ email: attrs.email })
        } catch(error) {
            throw new Error('Account not found');
        }

    })
    },
  })
}


