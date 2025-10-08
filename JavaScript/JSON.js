
// JSON is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used for transmitting data in web applications.

// Example of a JSON object
const jsonString = `{
    "firstName": "John",    
    "lastName": "Doe",
    "age": 30,
    "isStudent": false,
    "courses": ["Math", "Science", "History"],
    "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA"
    }
}`;

// Parsing JSON string to JavaScript object
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject.firstName); // Output: John

// Converting JavaScript object to JSON string
const newJsonString = JSON.stringify(jsonObject);
console.log(newJsonString);