import {writeFile} from "fs/promises";

await writeFile("stud.txt","Name: Anish Singh\nRoll No. : 2503201000200");
console.log("file written");