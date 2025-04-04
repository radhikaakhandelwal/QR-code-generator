# QR-code-generator

A simple Node.js app that:
1. Accepts a URL using the **Inquirer** CLI prompt.
2. Generates a QR code for the URL using **qr-image**.
3. Saves the QR code as a `.png` image.
4. Stores the entered URL in a `URL.txt` file using **fs**.

---

## 📦 Technologies Used

- [inquirer](https://www.npmjs.com/package/inquirer) – for CLI user input
- [qr-image](https://www.npmjs.com/package/qr-image) – to generate QR codes from URLs
- Node.js `fs` module – to write the input URL to a `.txt` file

---

## 🚀 Getting Started

Clone the repository

```bash
git clone https://github.com/your-username/url-to-qr-code.git
cd url-to-qr-code
npm install
node index.js


