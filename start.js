class Publication {
    constructor(identifier, authors, name, content = null) {
        this.identifier = identifier
        this.authors = authors
        this.name = name
        this.content = content
        this.created = new Date()
    }

    description() {
        console.log(this.identifier, this.authors, this.name, this.content
        )
    }

}

class Blogpost extends Publication {

    constructor(identifier, authors, name,edited, address) {
        super(identifier, authors, name);
        this.edited = edited 
        this.address = address
    }
}

class Book extends Publication {

    constructor(identifier, authors, name,ISBN) {
        super(identifier, authors, name,);
        this.ISBN = ISBN // 978-3-16-148410-0
    }
}

class Score extends Publication {
    constructor (identifier, authors, name,type) {
        super(identifier, authors, name,)
        this.type = type
    }
}

const p = new Publication(11,"Chetan", "Renold")
// console.log(p)
p.description()
console.log(p)

const b = new Blogpost(11, "Rudesh", "Test","hello", "Germany")

console.log(b)

const c = new Book(11, "Rudesh", "Test",978-3-16-148410-0)

console.log(c)

const d = new Score(11, "Rudesh", "Test","A")

console.log(d)