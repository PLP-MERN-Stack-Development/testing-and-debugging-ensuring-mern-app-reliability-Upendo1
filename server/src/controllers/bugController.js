// Number 2 and 4
import Bug from "../models/Bug.js";

export const getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (err) {
    next(err);
  }
};

export const createBug = async (req, res, next) => {
  try {
    const bug = await Bug.create(req.body);
    res.status(201).json(bug);
  } catch (err) {
    next(err);
  }
};

export const updateBug = async (req, res, next) => {
  try {
    const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(bug);
  } catch (err) {
    next(err);
  }
};

export const deleteBug = async (req, res, next) => {
  try {
    await Bug.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Bug deleted" });
  } catch (err) {
    next(err);
  }
};
