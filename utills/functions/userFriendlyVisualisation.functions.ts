export function userFriendlyBigNumbersVisualisation(number: number): string{
    if(!number){
        return ""
    }

    number = Math.round(number)

    let i: number = number.toString().length
    let numberLength: number = number.toString().length
    let result: string = ""

    while(i > 0){
        if((numberLength - i) % 3 === 0 && i !== numberLength) //if it's a 3rd iteration we add '.'
        {
            result += "."
        }

        result += number.toString()[i-1]

        i--
    }

    return result.split("").reverse().join("") //reverses string
}

export function firstLetterCapitalizer(string: string): string{
    if(!string)
    return ""

    if(string.length < 1)
    return ""

    return string[0].toUpperCase() + string.slice(1)
}