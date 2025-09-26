// routes/contactRoutes.js
const express = require("express");
const router = express.Router();
const Contact = require("../models/contactSchema");

router.get("/", async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json({ success: true, data: contacts });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error });
    }
});

router.post("/", async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        const newContact = new Contact({ name, email, subject, message });
        await newContact.save();

        res.status(201).json({ success: true, message: "Message saved successfully!" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error", error });
    }
});
module.exports = router;
