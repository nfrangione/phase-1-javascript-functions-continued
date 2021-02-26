// Your code here
function saturdayFun(fun = 'roller-skate') {
    return `This Saturday, I want to ${fun}!`
}

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`
}

function wrapAdjective(wrapping = "*") {
    let message = `You are `
    return function(descriptor = "special") {
        return `You are ${wrapping}${descriptor}${wrapping}!`
    }
}