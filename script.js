function analyzeFood() {
  const fileInput = document.getElementById("foodImage");
  if (!fileInput.files.length) {
    alert("Please upload a food image");
    return;
  }
  const img = document.createElement("img");
  img.src = URL.createObjectURL(fileInput.files[0]);
  document.getElementById("preview").innerHTML = "";
  document.getElementById("preview").appendChild(img);
  const foodData = {
    calories: 320,
    sugar: 18,
    fat: 22,
    vitamins: "Vitamin B, Iron"
  };

  document.getElementById("calories").innerText = foodData.calories + " kcal";
  document.getElementById("sugar").innerText = foodData.sugar + " g";
  document.getElementById("fat").innerText = foodData.fat + " g";
  document.getElementById("vitamins").innerText = foodData.vitamins;

  document.getElementById("result").classList.remove("hidden");

  const healthStatus = document.getElementById("healthStatus");
  const alternate = document.getElementById("alternate");

  if (foodData.calories > 250 || foodData.sugar > 15) {
    healthStatus.className = "warning";
    healthStatus.innerText = "⚠️ High calories or sugar detected";
    alternate.innerHTML =
      "Recommended alternatives:<br>• Fruit salad<br>• Vegetable soup<br>• Sprouts & nuts bowl";
  } else {
    healthStatus.className = "safe";
    healthStatus.innerText = "✅ This food is a healthy choice";
    alternate.innerText = "";
  }
}
