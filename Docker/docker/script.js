var quotes = [
    "In the journey of life, challenges and obstacles are inevitable, but it is how we choose to face them that defines our path. Every setback is an opportunity for growth, every failure a stepping stone to success. Believe in yourself, stay determined, and keep pushing forward, for the greatest achievements often come from the darkest moments.",
    "Embrace the challenges, learn from them, and let them fuel your drive to reach new heights. Your potential is limitless, and with perseverance and a positive mindset, you can conquer anything you set your mind to.",
    "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
    "When you change your thoughts, remember to also change your world.",
    "It is better to fail in originality than to succeed in imitation."
];

function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

function funct() {
    var newText = prompt('Enter your name:');
    if (newText !== null && newText !== '') {
        document.getElementById('user-text').innerText = "Dear " + newText + ",";
        document.getElementById('quote').innerText = getRandomQuote();
        document.getElementById('quote').removeAttribute("hidden");
    }
}
