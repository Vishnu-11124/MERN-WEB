
// Regular Function
const printString = (value: string) : void => console.log(value)
const printNumber = (value: number) : void => console.log(value)
const printBoolean = (value: boolean) : void => console.log(value)

printString("Regular Function")
printNumber(75)
printBoolean(true)

// Generic Function
const printValue = <T>(value: T) : T => {
    return  value
}

const name = printValue<string>("harry")
console.log(name)
const age = printValue<number>(34)
console.log(age)

//---------------------------------------------------------------------

const filterArray = <T>(array: T[], callback: (item: T) => boolean): T[] => {
  return array.filter(callback);
};

const numberArray: number[] = [1,2,3,4,5,6,7,8,9,10]

const evenNumbers = filterArray<number>(numberArray, n=> n%2 === 0)
console.log(evenNumbers)

const oddNumbers = filterArray<number>(numberArray, n => n%2 !== 0)
console.log(oddNumbers)

const subjects: string[] = ['english', 'maths', 'physics', 'chemistry', 'biology']

const sortSubject = filterArray<string>(subjects, s=> s.length > 6)
console.log(sortSubject)

// ---------------------------------------------------------------------

class Box<T> {
  private content: T;

  constructor(initialContent: T){
    this.content = initialContent
  }

  getContent(): T {
    return this.content
  }

  setContent(newContent: T): void {
    this.content = newContent
  }
}

const stringBox =new Box<string>("TypeScript")

console.log(stringBox.getContent())
stringBox.setContent("Learn TypeScript basics!")
console.log(stringBox.getContent())