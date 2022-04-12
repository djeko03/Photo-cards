const slides = document.querySelectorAll('.slide');

slides.forEach((slide) => {

    slide.addEventListener('click', () => {
        deActive()

        slide.classList.toggle('active');
    })
})

function deActive() {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
}






class Worker {
    constructor(options) {
        this.name = options.name 
        this.surName = options.surName
        this.rate = options.rate
        this.days = options.days
    }
    
    getSalaty() {
        return this.rate * this.days
    }
}

const worker = new Worker({
    name: 'Ruslan',
    surName: 'Gurbanov',
    rate: 1000,
    days: 20,
})