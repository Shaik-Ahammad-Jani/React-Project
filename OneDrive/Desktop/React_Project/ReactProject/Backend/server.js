const express = require('express')
const fs = require('fs')
const cors = require('cors')
require('dotenv').config(); // Load environment variables

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const app = express()
const port = 3000
const secret_key = "login_System";

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const mongoose = require('mongoose');

const SchemasAll = require('./schemas')

console.log(SchemasAll)

mongoose
  .connect(process.env.MONGODB_URI)
  .then((sucess) => console.log("connected"))
  .catch((failed) => console.log("failed connection"));
 

// app.get('/HTML',async (req,res)=>{
//     try {
//         const docs = await HTMLDocumentation.find();
//         res.status(200).json(docs);
//       } catch (error) {
//         res.status(500).json({ error: "Failed to fetch HTML docs", details: error });
//       }
// })

app.get('/',async (req,res)=>{
  const data = await SchemasAll.UsersSchema.find()
  res.send(data)
})

app.get('/syntax',(req,res)=>{
    const syntax = fs.readFileSync('./syntax.json','utf8')
    res.send(syntax)
    // console.log(syntax)
})

// app.post('/',async (req,res)=>{
//   try {
//     console.log("Incoming:", req.body);
//     const savedData = await new SchemasAll.UsersSchema(req.body).save();
//     console.log("Saved:", savedData);
//     res.status(201).send(savedData);
//   } catch (err) {
//     console.error("Save error:", err);
//     res.status(500).send({ error: "Failed to save data" });
//   }
// }
// )

app.post("/signUp", async (req, res) => {
  try {
    const { name,email, password ,confirmPassword , number } = req.body;

    // Check if user already exists
    const existingUser = await SchemasAll.UsersSchema.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(String(password), 10);

    // Create new user
    const newUser = new SchemasAll.UsersSchema({
      name,
      email,
      password: hashedPassword,
      confirmPassword,
      number
    });
    // Save user to DB
    await newUser.save();
    res
      .status(201)
      .json({ message: "User created successfully", data: newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
 // replace with actual secret key

app.post("/LogIn", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Missing email or password" });
    }

    const user = await SchemasAll.UsersSchema.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordCorrect = await bcrypt.compare(String(password), user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT token using only existing fields
    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        name: user.name,
      },
      secret_key,
      { expiresIn: "3h" }
    );

    res.status(200).json({
      message: `Welcome ${user.name}`,
      token,
      status: 200,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        number: user.number
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))