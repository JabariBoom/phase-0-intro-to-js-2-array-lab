// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

const destructivelyAppendCat = function(){
    return cats.push("Ralph")
}

const destructivelyPrependCat = function(){
    return cats.unshift("Bob")
}

const destructivelyRemoveLastCat = function(){
    return cats.pop()
}

const destructivelyRemoveFirstCat = function(){
    return cats.shift()
}

const appendCat = function(){
    return [...cats,"Broom"]
}

const prependCat = function(){
    return ["Arnold",...cats]
}

const removeLastCat = function(){
    return cats.slice(0, -1)
}

const removeFirstCat = function(){
    return cats.slice(1)
}