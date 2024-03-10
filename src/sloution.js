function minDeletedCharactersForAnagram(str1, str2) {
    function countCharacterFrequency(str) {
        const freqMap = new Map();
        for (let char of str) {
            freqMap.set(char, (freqMap.get(char) || 0) + 1);
        }
        return freqMap;
    }

    const freqMap1 = countCharacterFrequency(str1);
    const freqMap2 = countCharacterFrequency(str2);

    let deletedChars = 0;
    for (let [char, freq] of freqMap1) {
        const freq2 = freqMap2.get(char) || 0;
        deletedChars += Math.abs(freq - freq2); 
    }

    for (let [char, freq] of freqMap2) {
        if (!freqMap1.has(char)) {
            deletedChars += freq;
        }
    }

    return deletedChars;
}

const str1 = "ddehgt";
const str2 = "gtd";
console.log(minDeletedCharactersForAnagram(str1, str2)); 
