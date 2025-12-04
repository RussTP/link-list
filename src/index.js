import LinkedList from "./link-list.js";

const list = new LinkedList();


list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

//list.insertAt("snake", 2);
//list.removeAt(1);
//list.pop();
//list.pop();

console.log("HEAD", list.getHead());          
console.log("TAIL",list.getTail());          
console.log("AT 0:", list.at(0));           
console.log("AT 3:", list.at(3));         
console.log("SIZE:", list.size());          
console.log("POP REMOVE:", list.pop())
console.log("CONTAINS TRUE:", list.contains("cat")); 
console.log("CONTAINS FALSE:", list.contains("bear"));
console.log("FIND RETURNS NULL:", list.find("plane")); 
console.log("FIND RETURNS INDEX:", list.find("cat")); 


console.log(list.toString());