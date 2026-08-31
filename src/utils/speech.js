/**
 * Web Speech Synthesis utility for Chinese pronunciation
 */

let synth = null;
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  synth = window.speechSynthesis;
}

export const speakChinese = (text, rate = 0.9) => {
  if (!synth) {
    console.warn("Speech synthesis not supported in this browser.");
    return;
  }

  // Cancel any ongoing speech
  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'zh-CN';
  utterance.rate = rate; // slightly slower for language learning

  // Find native Chinese voice if available
  const voices = synth.getVoices();
  const zhVoice = voices.find(v => v.lang.includes('zh') || v.lang.includes('CN') || v.name.includes('Chinese'));
  if (zhVoice) {
    utterance.voice = zhVoice;
  }

  synth.speak(utterance);
};
