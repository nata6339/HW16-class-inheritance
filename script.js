class Timer {
    constructor(elem) {
        this.elem = elem;
        this.isShort = false;
        this.fullFormat = 'hh:mm:ss';
        this.shortFormat = 'hh:mm';
    };

    start () {
        this.render();
        setInterval(() => this.render(), 500);
        this.elem.addEventListener('click',() => this.toggle());
    };

    render(){
        if (this.isShort) {
            this.elem.innerHTML = this.formatDate(this.shortFormat);
        } else {
            this.elem.innerHTML = this.formatDate(this.fullFormat);
        }
    };

    toggle() {
        this.isShort = !this.isShort;
    };

    setShortFormat(shortFormat){
        this.shortFormat = shortFormat;
    };

    setFullFormat(fullFormat){
        this.fullFormat = fullFormat;
    };

    formatDate(format){
        let fullDate = new Date();
        let hours = this.fixNumber(fullDate.getHours());
        let minutes = this.fixNumber(fullDate.getMinutes());
        let seconds = this.fixNumber(fullDate.getSeconds());
        this.fixNumber()
        let ren = format
            .replace('hh', hours)
            .replace('mm', minutes)
            .replace('ss', seconds)
        return ren;
    };

    fixNumber(num){

        if (num < 10)
            return '0' + num;
        return num;
    };
}

class Star extends Timer{
    constructor(elem) {
        super(elem);
        this.shortFormat = 'hh*mm'
        this.fullFormat = 'hh*mm*ss'
    }
}

class Slash extends Timer{
    constructor(elem) {
        super(elem);
        this.shortFormat = 'hh/mm'
        this.fullFormat = 'hh/mm/ss'
    }

}

let timer = new Timer(document.getElementById('clock'));
let star = new Star(document.getElementById('star'));
let slash = new Slash(document.getElementById('slash'));
timer.start();
star.start();
slash.start();

