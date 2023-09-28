if ('speechSynthesis' in window) {
    const speechSynth = window.speechSynthesis;
    const textInput = document.getElementById('text-input');
    const speakButton = document.getElementById('speak-button');
    const spokenText = document.getElementById('spoken-text');

    speakButton.addEventListener('click', () => {
        const text = textInput.value;
        const utterance = new SpeechSynthesisUtterance(text);

        utterance.volume = 1; // 0 to 1
        utterance.rate = 1;   // 0.1 to 10
        utterance.pitch = 1;  // 0 to 2

        speechSynth.speak(utterance);
    });
    
    speechSynth.addEventListener('end', () => {
        spokenText.textContent = `Spoken: "${textInput.value}"`;
    });
} else {
    alert('Speech synthesis is not supported in this browser.');
}
