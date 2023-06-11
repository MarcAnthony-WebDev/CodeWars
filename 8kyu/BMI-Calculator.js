/*Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
Fundamentals

Suggest kata description edits */

//My solution:
function bmi(weight, height) {
  return weight / height ** 2 <= 18.5
    ? 'Underweight'
    : weight / height ** 2 <= 25
    ? 'Normal'
    : weight / height ** 2 <= 30
    ? 'Overweight'
    : 'Obese';
}

//Best Practice
const bmi = (w, h, bmi = w / h / h) =>
  bmi <= 18.5
    ? 'Underweight'
    : bmi <= 25
    ? 'Normal'
    : bmi <= 30
    ? 'Overweight'
    : 'Obese';
