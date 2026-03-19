const translations = {
    en: {
        welcome: "Welcome to NerdTrio",
        intro: "We help people with problems with laptops and PCs. Come to us for repair or advice!",
    },
    nl: {
        welcome: "Welkom bij NerdTrio",
        intro: "Wij helpen mensen met problemen met laptops en pc's. Kom bij ons voor reparatie of advies!",
    },
};

document.getElementById("translate-btn").addEventListener("click", () => {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === "nl" ? "en" : "nl";
    document.documentElement.lang = newLang;

    document.querySelectorAll("[data-lang]").forEach((element) => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[newLang][key];
    });

    document.getElementById("translate-btn").textContent =
        newLang === "nl" ? "Translate to English" : "Vertaal naar Nederlands";
});