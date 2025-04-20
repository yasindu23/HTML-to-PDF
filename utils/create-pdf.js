const puppeteer = require("puppeteer");

const generateReportPdf = async (content) => {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    await page.setContent(content);

    // Generate PDF for the report
    const pdfBuffer = await page.pdf({ format: "A4" });

    await browser.close();
    return pdfBuffer;
}

module.exports = generateReportPdf