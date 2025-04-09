function calculateBMI() {
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const bmi = (weight / (height * height)).toFixed(2);

    const resultDiv = document.getElementById('result');
    const counselingDiv = document.getElementById('counseling');
    const historyDiv = document.getElementById('history');

    let category = '';
    let counseling = [];

    if (bmi < 18.5) {
        category = 'Underweight';
        counseling = [
            "Eat more frequently and include healthy snacks.",
            "Incorporate protein-rich foods in your meals.",
            "Choose nutrient-dense foods instead of empty calories.",
            "Drink smoothies with added nuts, seeds, or dairy.",
            "Avoid drinking water before meals to prevent early satiety.",
            "Include resistance training to build muscle mass.",
            "Track food intake to identify nutrient gaps.",
            "Consult a healthcare provider to rule out underlying issues.",
            "Increase healthy fat intake like avocados, nuts, and seeds.",
            "Ensure consistent meal timings to establish routine."
        ];
    } else if (bmi < 24.9) {
        category = 'Normal weight';
        counseling = [
            "Continue a balanced diet with fruits, vegetables, and lean proteins.",
            "Exercise regularly (150 min/week of moderate activity).",
            "Stay hydrated with water and limit sugary drinks.",
            "Maintain regular sleep patterns.",
            "Monitor weight periodically to detect changes early.",
            "Practice mindful eating and portion control.",
            "Limit processed foods and fast food.",
            "Include whole grains in daily meals.",
            "Encourage social support for healthy behaviors.",
            "Avoid alcohol and tobacco use."
        ];
    } else if (bmi < 29.9) {
        category = 'Overweight';
        counseling = [
            "Adopt a calorie deficit with a dietician's guidance.",
            "Increase physical activity and reduce sedentary time.",
            "Limit added sugars, fried foods, and refined carbs.",
            "Track progress with food and activity logs.",
            "Eat more fiber-rich foods (legumes, veggies, fruits).",
            "Use smaller plates to manage portion sizes.",
            "Limit late-night snacking.",
            "Focus on healthy behavior changes rather than crash diets.",
            "Engage family or friends for support.",
            "Consider screening for metabolic issues."
        ];
    } else {
        category = 'Obese';
        counseling = [
            "Work closely with a healthcare provider or dietician.",
            "Follow structured, sustainable meal plans.",
            "Incorporate daily physical activity starting gently.",
            "Address emotional eating and stress through counseling.",
            "Avoid fad diets—focus on long-term change.",
            "Monitor blood pressure, glucose, and lipid profiles.",
            "Practice portion control with every meal.",
            "Opt for home-cooked meals over eating out.",
            "Sleep 7-8 hours per night consistently.",
            "Identify and manage barriers to lifestyle change."
        ];
    }

    resultDiv.innerHTML = `BMI: <strong>${bmi} kg/m²</strong> — Category: <strong>${category}</strong>`;
    counselingDiv.innerHTML = `<h4>Nutrition Counseling for Age ${age}:</h4><ul>${counseling.map(item => `<li>${item}</li>`).join('')}</ul>`;

    const entry = document.createElement('div');
    entry.className = 'history-entry';
    entry.innerHTML = `Age: ${age} | BMI: ${bmi} | ${category} <button class="delete-btn" onclick="this.parentElement.remove()">×</button>`;
    historyDiv.prepend(entry);
}

async function downloadPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const result = document.getElementById('result').innerText;
    const counselingList = Array.from(document.querySelectorAll('#counseling ul li')).map(li => li.innerText);

    doc.setFontSize(16);
    doc.text("BMI Report", 10, 20);
    doc.setFontSize(12);
    doc.text(result, 10, 30);
    doc.text("\nCounseling:", 10, 40);

    let y = 50;
    counselingList.forEach((line) => {
        doc.text(`• ${line}`, 10, y);
        y += 10;
        if (y > 270) {
            doc.addPage();
            y = 20;
        }
    });

    doc.save("BMI_Report.pdf");
}