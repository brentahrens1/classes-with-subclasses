class Element {
    constructor(name, buildYear) {
        this.name = name
        this.buildYear = buildYear
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numOfTrees) {
        super(name, buildYear)
        this.area = area
        this.numOfTrees = numOfTrees
    }

    treeDensity() {
        const density = this.numOfTrees / this.area
        console.log(`${this.name} has a tree density of ${density} trees per square km.`)
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear)
        this.length = length
        this.size = size
    }

    classifyStreet() {
        const classification = new Map()
        classification.set(1, 'tiny')
        classification.set(2, 'small')
        classification.set(3, 'normal')
        classification.set(4, 'big')
        classification.set(5, 'huge')
        console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)}`)
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
                  new Park('National Park', 2018, 0.9, 400),
                  new Park('Gallery Park', 1957, 2.8, 300)]

const allStreets = [new Street('River Street', 1920, 2.7, 2),
                    new Street('Ocean Ave', 1999, 1.1, 4),
                    new Street('Tidal Ave', 2004, 4.4),
                    new Street('Sunset Ave', 1818, 1.1, 5)]


function calc(arr) {
    const sum = arr.reduce((prev, cur) => prev + cur, 0)

    return [sum, sum / arr.length]
}

function reportParks(p) {
    console.log('---Parks Report---')

    p.forEach(el => el.treeDensity())

    const ages = p.map(el => new Date().getFullYear() - el.buildYear)
    const [totalAge, avgAge] = calc(ages)
    console.log(`Our ${p.length} have an average of ${avgAge} years.`)

    // const i = p.map(el => el.numOfTrees).findIndex(el => el >= 1000)

    // console.log(`${p[i].name} has more than 1000 trees.`)
}

function reportStreets(s) {
    console.log('---Streets Report---')

    const [totalLength, avgLength] = calc(s.map(el => el.length))
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`)

    s.forEach(el => el.classifyStreet())

}

reportParks(allParks)
reportStreets(allStreets)


