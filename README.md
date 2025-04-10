BMI Calculator with Nutritional Counseling (PWA)

A fully functional **Progressive Web App (PWA)** designed for **nutritionists** to calculate BMI, provide **age- and category-specific counseling**, and export **PDF patient reports**. Built for mobile and desktop access, with offline support and installable like a native app.

---

Features

- **Accurate BMI Calculation** using weight (kg) and height (cm)
- **Automatic BMI Categorization**: Underweight, Normal, Overweight, Obese
- **Age-Sensitive Counseling**: Custom guidance based on patient age and BMI category
- **Downloadable PDF Reports** for each patient
- **Patient History Tracker** with Delete function
- **Responsive Design** and **Offline Access** (PWA-ready)
- **Elegant Background & Professional Styling**
- **Installable on Android/iOS** (Add to Home Screen)

---

Technologies Used

- **HTML** – Structure
- **CSS** – Styling & Responsive Design
- **JavaScript** – Logic & Interactivity
- **Netlify** – Hosting & Deployment
- **PWA Setup** – `manifest.json`, `service-worker.js`

---

How to Use

1. **Enter patient details**: Age, Height (cm), Weight (kg)
2. App displays:
   - **BMI result** (e.g. 17.10 kg/m²)
   - **Weight category**
   - **Detailed nutritional counseling (10 points)**
3. **Export PDF** of the report
4. **View and manage history** of patient entries
5. Install the app via **“Add to Home Screen”** on your mobile browser

---

PWA Features

- **Offline Access**: Works without internet after first load
- **Installable**: Appears like a native app on home screen
- **Fast Loading**: Cached with service worker
- **Custom App Icon** and theming

---

Setup & Deployment

To run locally:

```bash
# Clone the repo
git clone https://github.com/yourusername/bmi-calculator-app.git

# Open index.html in browser
