// import mongoose from "mongoose";
import mongoose from 'mongoose';
import Contact from '../Model/Contact';
class myController {
  static async getProfession(req, res) {
    const User = mongoose.model('Users', {}, 'Users');

    const user = await User.find();

    return res.status(200).json(user[0]);
  }
  static async getContact(req, res) {
    const { id } = req.params;
    const found_contact = await Contact.findById({ _id: id });
    if (!found_contact) {
      return res.status(400).json({
        message: 'Contact not found',
      });
    }
    if (found_contact) {
      return res.status(200).json({
        found_contact,
      });
    }
  }
  static async getAllContacts(req, res) {
    const data = await Contact.find();
    return res.status(200).json({
      message: 'Contacts',
      data,
    });
  }

  static async postContact(req, res) {
    try {
      const { firstname, lastname, email, favoriteColor, Birthday } = req.body;

      if (!firstname || !lastname || !email || !favoriteColor || !Birthday) {
        return res.status(422).json({
          message: 'Please fillout all the required Fields',
        });
      }

      const contact = await Contact.create({
        firstname,
        lastname,
        email,
        favoriteColor,
        Birthday,
      });

      return res.status(201).json({
        message: 'Contact Created',
        contact,
      });
    } catch (error) {
      res.status(500).json({
        Error: error.message,
      });
    }
  }
  static async updateContact(req, res) {
    const { id } = req.params;
    const foundContact = await Contact.findById({ _id: id });

    if (!foundContact) {
      return res.status(400).json({
        message: 'Contact Not found',
      });
    }
    try {
      const { firstname, lastname, email, favoriteColor, Birthday } = req.body;

      const updatedContact = await Contact.findByIdAndUpdate(
        { _id: id },
        {
          $set: { firstname, lastname, email, favoriteColor, Birthday },
        },
        { new: true }
      );

      return res.status(200).json({
        message: 'Contact Updated',
        updatedContact,
      });
    } catch (error) {
      res.status(500).json({
        Error: error.message,
      });
    }
  }

  static async deleteContact(req, res) {
    const { id } = req.params;
    try {
      await Contact.findByIdAndDelete({ _id: id });

      return res.status(200).json({
        message: 'Contact Deleted!',
      });
    } catch (error) {
      res.status(500).json({
        Error: error.message,
      });
    }
  }
}

export default myController;
