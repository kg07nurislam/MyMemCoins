// Telegram Web App интеграциясы
if (Telegram.WebApp.initData) {
  const userData = Telegram.WebApp.initDataUnsafe;

  // Telegram'дан келген маалыматтарды толтуруу
  document.getElementById("profile-picture").src = userData.user.photo_url || "default-avatar.png";
  document.getElementById("user-name").textContent = userData.user.first_name || "Аты";
  document.getElementById("user-username").textContent = "@" + (userData.user.username || "username");
  document.getElementById("user-id").textContent = "ID: " + (userData.user.id || "Unknown");
} else {
  alert("Telegram аркылуу кирүү керек!");
  window.location.href = "https://t.me/kg7n_bot";
}
