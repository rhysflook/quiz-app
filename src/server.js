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
            question: '20 - 11',
            correctAnswer: '9', 
            options: ['5', '7', '9', '10'],
            answerSelected: null,
            active: true,
        },
        2: {
            question: '12 × 6',
            correctAnswer: '72',
            options: ['72', '144', '45', '96'],
            answerSelected: null,
            active: false,
        },
        3: {
            question: '15 ÷ 3',
            correctAnswer: '5',
            options: ['4', '2', '6', '5'],
            answerSelected: null,
            active: false,
        },
        4: {
            question: '317 + 109',
            correctAnswer: '416',
            options: ['435', '416', '399', '381'],
            answerSelected: null,
            active: false,
        },
        5: {
            question: '700 - 436',
            correctAnswer: '364',
            options: ['278', '436', '364', '401'],
            answerSelected: null,
            active: false,
        },
        6: {
            question: '15 × 8',
            correctAnswer: '120',
            options: ['120', '135', '105', '150'],
            answerSelected: null,
            active: false,
        },
        7: {
            question: '240 ÷ 8',
            correctAnswer: '30',
            options: ['40', '30', '20', '50'],
            answerSelected: null,
            active: false,
        },
        8: {
            question: '57 + 113',
            correctAnswer: '170',
            options: ['181', '172', '167', '170'],
            answerSelected: null,
            active: false,
        },
        9: {
            question: '50 × 11',
            correctAnswer: '550',
            options: ['600', '550', '500', '450'],
            answerSelected: null,
            active: false,
        },
        10: {
            question: '123 - 61',
            correctAnswer: '62',
            options: ['62', '57', '60', '59'],
            answerSelected: null,
            active: false,
        },
    }))

    this.get("/api/quiz/science", () => ({
        1: {
            question: 'What would you get if you mix all light colours together?',
            correctAnswer: 'White', 
            options: ['Gray', 'White', 'Purple', 'Black'],
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

    this.get("/api/quiz/movies", () => ({
        1: {
            question: 'What is the capital city of Wales?',
            correctAnswer: 'Cardiff', 
            options: ['Cardiff', 'Rome', 'Tokyo', 'Paris'],
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


