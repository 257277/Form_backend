const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    question1: {
        answers: [{ id: Number, answer: String, Category: String }],
        category: [{ id: String, name: String, PlacedAnswer: [String] }],
        question: String
    },
    question2: {
        question: String,
        answer: [String],

    },
    question3: {
        paragraph: String,
        MCQ: [{ id: Number, question: String, options: [String], answer: String }]

    }
});

const FormModel = mongoose.model("Form", formSchema);

module.exports = {
    FormModel
};
