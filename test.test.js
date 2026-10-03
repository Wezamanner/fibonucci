import fibs from "./script.js"

test(`fibbonuci serie`,()=>{
    expect(fibs(3)).toEqual([0,1,1])
})