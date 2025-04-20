const generateReportPdf = require('../utils/create-pdf');

const generatePapers = async (req, res, next) => {
    try {
        const { content } = req.body

        const pdfBuffer = await generateReportPdf(content);

        res.set({
            "Content-Type": "application/pdf",
            "Content-Disposition": "attachment; filename=report.pdf",
        });

        res.send(pdfBuffer);
    } catch (error) {
        next(error)
    }
}

module.exports = {
    generatePapers
}