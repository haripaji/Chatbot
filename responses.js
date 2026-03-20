// responses.js - Bot ka Dimaag (Database)
const vedaDatabase = {
    // 1. Basic Greetings
    "hi": "Hello! Main Veda AI hoon. Aaj hum kis baare mein baat karein?",
    "hello": "Namaste! Kaise hain aap?",
    "namaste": "Namaste! Main aapki kya madad kar sakta hoon?",
    
    // 2. Creative Writing / Novel (Aryan Project)
    "aryan": "Aryan aapke novel ka protagonist hai na? Uska 'Chakra-tech' system kaafi kamaal hai!",
    "novel": "World-building mein historical aesthetics aur modern tech ka mel kaafi unique lagta hai.",
    "fantasy": "15th-century India mein magic aur science ka combination... behtareen idea hai!",
    
    // 3. Coding & Tech
    "html": "HTML web ka skeleton hai. Kya aapko ismein kuch naya seekhna hai?",
    "css": "CSS se hi toh hum bot ko sundar banate hain, jaise humne is Glassmorphism UI ko banaya!",
    "javascript": "JS hi bot ka dimaag hai. Ise seekhna aapke liye bahut faydemand hoga.",
    
    // 4. Study & Career (Class 12)
    "history": "Class 12 History mein 'Bricks, Beads and Bones' se lekar 'Mahatma Gandhi' tak bahut kuch interesting hai.",
    "economics": "Economics mein Macro aur Micro ke concepts samajhna scoring hota hai. Koi topic poonchna hai?",
    "exam": "Exams ke liye revision aur sample papers sabse zaroori hain. All the best!",

    // 5. Fun & Jokes
    "joke": "Ek programmer ki bad-dua: 'Tera code hamesha compile ho, par kabhi chale nahi!' 😂",
    "funny": "Duniya mein do hi mushkil kaam hain: Ek coding aur doosra coding mein error dhoondhna!"
};

// Default response agar kuch samajh na aaye
const defaultResponse = "Hmm, ye mere database mein nahi hai, par ye kaafi interesting lag raha hai! Thoda aur bataiye?";
// --- ADVANCED KEYWORD MAPPING DATA ---
// Ye keywords user ke toote-foote sentences ko bhi samajh lenge

    // 1. Math Keywords (Chote inputs ke liye)
    "hisab": "Haan, main math aur hisab-kitab mein expert hoon! Bataiye kya calculate karna hai?",
    "calc": "Calculator mode ON! Aap apna sawal (jaise 45*2) likh kar bhejiye.",
    "jod": "Jodna (Addition) bahut simple hai. Bas numbers ke beech '+' lagaiye.",
    "ghata": "Ghatao (Subtraction) ke liye '-' ka use karein. Main foran solve kar dunga.",
    "guna": "Guna (Multiplication) ke liye '*' ka use hota hai. Jaise: 10 * 5.",
    "bhag": "Bhag (Division) ka matlab hai barabar baantna. Symbol: '/'",

    // 2. Study & Exam (Short words)
    "paper": "Exams ki taiyari kar rahe ho? History aur Economics ke important topics poonchh sakte ho.",
    "result": "Mehnat ka phal hamesha milta hai! Bas focus banaye rakhein.",
    "notes": "Main aapko concepts samjha sakta hoon, jisse aap apne notes behtar bana sakein.",
    "padhai": "Padhai mein man nahi lag raha? Thoda break lo aur phir 'Economics' se shuru karo!",

    // 3. User Confusion (Jab user clear na ho)
    "help": "Main aapka Veda AI assistant hoon. Main Math solve kar sakta hoon aur subjects samjha sakta hoon.",
    "kya": "Main bahut kuch kar sakta hoon! Math, Coding, ya aapke novel 'Aryan' par baat karein?",
    "hello": "Hello! Bolne ki zaroorat nahi, bas apna sawal likhiye, main hazir hoon.",

    // 4. Creative/Novel (Key points)
    "story": "Aapki story 'Aryan' ke baare mein baat karni hai? Uska magic system kamaal hai!",
    "book": "Novel likhna ek lambi journey hai. Character building par dhyan dein.",

    // 5. Tech/AI (Simple terms)
    "bot": "Ji, main ek AI bot hoon. Mujhe 'thoughts_sounds' ne ek advanced interface diya hai.",
    "net": "Internet ki duniya badi hai, lekin main yahan offline logic se bhi kaam karta hoon!",
    "app": "Ye ek web-app hai jo GitHub par hosted hai. Kaafi smooth chalti hai na?"
