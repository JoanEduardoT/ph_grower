import { getConnection } from "./../database/database.js"

const getLanguages = async (req, res) => {
    try {
        const connection = await getConnection()
        const result = await connection.query("SELECT * FROM `language`")
        console.log(result)
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};
const getLanguage = async (req, res) => {
    try {
        console.log(req.params)
        const{id}=req.params
        const connection = await getConnection()
        const result = await connection.query("SELECT * FROM language WHERE id = ?",id)
        console.log(result)
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};
const addLanguage= async (req, res) => {
    try {
        const {name,programmers}=req.body
        const language={name,programmers}
        if (name === undefined || programmers === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        const connection = await getConnection()
        /* const result= */await connection.query("INSERT INTO language SET ?",language)
        /* 
        console.log(name)
        console.log(programmers)
        */
        res.json({message:"Language Added"})
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};
const updateLanguage = async (req, res) => {
    try {
        const{id}=req.params
        const {name,programmers}=req.body
        if (id=== undefined || name === undefined || programmers === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }
        const language={id,name,programmers}
        const connection = await getConnection()
        const result = await connection.query("UPDATE language SET ? WHERE id = ?",[language,id])
        console.log(result)
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message)}
}
const deleteLanguage = async (req, res) => {
    try {
        const{id}=req.params
        const connection = await getConnection()
        const result = await connection.query("DELETE FROM language WHERE id = ?",id)
        console.log(result)
        res.json(result)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
};

export const methods = {
    getLanguages,
    getLanguage,
    addLanguage,
    deleteLanguage,
    updateLanguage
};

