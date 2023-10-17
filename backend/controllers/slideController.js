import asyncHandler from "../middleware/asyncHandler.js";
import Slide from "../models/slideModel.js";

// @desc    Fetch all slides
// @route   GET /api/slides
// @access  Public
const getSlides = asyncHandler(async (req, res) => {
  const slides = await Slide.find({});
  res.json(slides);
});

export { getSlides };
