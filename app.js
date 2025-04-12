
const frases = [
    "Domina tus emociones o ellas te dominarán a ti. — Las 48 leyes del poder",
    "Sé el arquitecto de tu destino, no la víctima. — Padre Rico, Padre Pobre",
    "La sabiduría comienza con el asombro. — Confesiones de San Agustín",
    "El poder real es silencioso y observa. — Peaky Blinders"
];

const bibleVerses = [
    "Porque yo sé los planes que tengo para ti, dice el Señor. — Jeremías 29:11",
    "Todo lo puedo en Cristo que me fortalece. — Filipenses 4:13"
];

const books = [
    "Las 48 leyes del poder – Robert Greene",
    "Padre Rico, Padre Pobre – Robert Kiyosaki",
    "Confesiones – San Agustín",
    "La teoría sintérgica – Jacobo Grinberg"
];

const emociones = {
    feliz: "Aprovecha esta energía para trabajar en tu propósito.",
    triste: "Abraza lo que sientes. La tristeza también guía hacia el crecimiento.",
    enojado: "Haz una pausa. La calma es más poderosa que la ira.",
    ansioso: "Respira profundo. Nada dura para siempre.",
    motivado: "¡Este es el momento de actuar!"
};

function getAdvice() {
    const input = document.getElementById("feeling-input").value.toLowerCase();
    const response = emociones[input] || "Tu emoción es válida. Escúchate, pero no te detengas.";
    document.getElementById("advice").innerText = response;
}

function talkToFriend() {
    const input = document.getElementById("ai-input").value;
    const chatBox = document.getElementById("chat-box");
    const reply = input.includes("solo") ? "No estás solo. Estoy contigo." : "Sigue adelante, bro. Eres fuerte.";
    chatBox.innerHTML += `<div><strong>Tú:</strong> ${input}</div>`;
    chatBox.innerHTML += `<div><strong>IA:</strong> ${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
    document.getElementById("ai-input").value = "";
}

function getWiseAdvice() {
    const input = document.getElementById("decision-input").value.toLowerCase();
    let consejo = "Toma decisiones que honren tu propósito.";
    if (input.includes("dinero")) consejo = "Invierte en ti primero.";
    if (input.includes("amor")) consejo = "Elige lo que te dé paz.";
    document.getElementById("wise-advice").innerText = consejo;
}

function saveDiary() {
    const entry = document.getElementById("diary-entry").value;
    localStorage.setItem("diary", entry);
    alert("Entrada guardada!");
}

document.getElementById("quote").innerText = frases[new Date().getDate() % frases.length];
document.getElementById("bible-verse").innerText = bibleVerses[new Date().getDate() % bibleVerses.length];

const bookList = document.getElementById("book-list");
books.forEach(book => {
    const li = document.createElement("li");
    li.textContent = book;
    bookList.appendChild(li);
});
