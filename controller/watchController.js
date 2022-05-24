import Watch from "../models/Watch.js";
import cloudinary from "../config/cloudinaryConfig.js";

async function createWatch(req, res) {
  let filesUrls = [];
  if (req.files) {
    for (const file of req.files) {
      let result = await cloudinary.uploader.upload(file.path);
      filesUrls.push(result.secure_url);
    }
  }
  try {
    req.body.images = filesUrls;
    let result = await Watch.create(req.body);
    // console.log(result);
    res.status(201).send({ sucess: true, result });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getWatches(req, res) {
  try {
    let result = await Watch.find();
    // console.log(result);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function getWatch(req, res) {
  try {
    let result = await Watch.findById(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function updateWatch(req, res) {
  try {
    let result = await Watch.FindOneAndUpdate({ _id: req.body._id }, req.body);
    res.status(200).send("product Updated");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function deleteWatch(req, res) {
  try {
    let result = await Watch.deleteOne({ _id: req.params.id });
    res.status(200).send("Product deleted");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export { createWatch, getWatches, getWatch, updateWatch, deleteWatch };
