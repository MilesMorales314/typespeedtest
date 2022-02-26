const typeSpeed = () => {
    let strSet = ['Empty your mind, be formless. Shapeless, like water. If you put water into a cup, it becomes the cup. You put water into a bottle and it becomes the bottle. You put it in a teapot, it becomes the teapot. Now, water can flow or it can crash. Be water, my friend.', 
    'Poneratoxin is a paralyzing neurotoxic peptide made by the bullet ant Paraponera clavata. It prevents inactivation of voltage gated sodium channels and therefore blocks the synaptic transmission in the central nervous system. Specifically, poneratoxin acts on voltage gated sodium channels in skeletal muscle fibers, causing paralysis, and nociceptive fibers, causing pain.', 
    'It was a few days after the birth of Lucy, in 1970, that I had a eureka moment. While getting into bed one evening, I realized that the area of horizon of a black hole could only increase, not decrease. This eventually led me to discover that black holes were not really black, they had a temperature and would glow red like hot coals. I had discovered a concept that is now named after me, Hawking Radiation.', 
    'I have three visions for India. In 3000 years of our history, people from all over the world have come and invaded us, captured our lands, conquered our minds. From Alexander onwards, the Greeks, the Turks, the Moguls, the Portuguese, the British, the French, the Dutch, all of them came and looted us, took over what was ours. Yet, we have not conquered anyone.', 
    "I am sure many of you have been hearing rumours lately about me, about the future of this firm, and that is what I would like to talk to you about today. Five years ago when I started Stratton with Donnie Azoff, I knew the day would eventually come when I would be moving on. It is truly with a heavy heart that I tell you that day is here."]
    let str = strSet[Math.floor(Math.random()*strSet.length)]
    let left = str.length, date = Date.now(), wrong = 0, i = 0

    document.getElementById('typebox').onclick = ''
    document.getElementById('changeHere').innerHTML = str

    const endTime = (event) => {
        key = event.key
        // if (key === 'Backspace') {
        //     i--
        // }
        if (key === 'Enter'){
            document.getElementById('typebox').value = ''
            wrong += left-i
            console.log(left - i)
            let timeTaken = (Date.now()-date)/60000
            let wordsPerMinute = Math.round((i+1/timeTaken)/4.7)
            document.getElementById('changeHere').innerHTML = `words/min:${wordsPerMinute}, wrong:${wrong}`;
        }
        if (key.length === 1){
            if (i < str.length){
                if (key!=str[i]){
                    wrong++
                }
            }
            if (i > str.length) {
                wrong++
            }
            i++
        }
    }

    document.getElementById('typebox').addEventListener('keypress', endTime)

}

const refresh = () => {
    location.reload()
}