const express = require('express');
const pdfRouter = express.Router();

const {
    generatePapers
} = require('../controllers/paper-controller')

pdfRouter.post('/generate', generatePapers)

module.exports = pdfRouter;