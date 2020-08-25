(()=>{const anim = {
    init() {
        document.documentElement.classList.add('js-enabled')
        this.keyEltArray = document.querySelectorAll("div .key");
        this.keyArray = [];
        this.keyEltArray.forEach(elt => this.keyArray.push(elt.dataset.key));

        window.addEventListener("keypress", (e) => {
            if (this.exists(e.key)) {
                this.exists(e.key)
            }
        })

        window.addEventListener("transitionend", () => {
            this.keyEltArray[this.index].classList.remove("playing")
            document.body.classList.remove(this.keyPressed)
        });
    },
    exists(keyPressed) {
        this.keyPressed = keyPressed;
        if (this.keyArray.includes(this.keyPressed)) {
            this.index = this.keyArray.indexOf(keyPressed)
            this.playSound()
        }
    },
    playSound() {
        this.media = document.querySelector(`audio[data-key="` + this.keyPressed + `"]`)
        this.media.play()
        this.colorEverything()
    },
    colorEverything() {
        this.keyEltArray[this.index].classList.add("playing")
        document.body.classList.add(this.keyPressed)
    },
}
anim.init();})()