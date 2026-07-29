import {readFile} from "fs/promises";

const readData = async (fname) => {
    const data = await readFile(fname, "utf-8");
    console.log("file contents");
    console.log(data);
};

await readData("stud.txt");