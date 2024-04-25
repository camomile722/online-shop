import mongoose from "mongoose";

const slidesSchema = mongoose.Schema(
  {
    image: { url: { type: String, required: true } },
    title: { type: String, required: true },
    description: { type: String, required: true },
    sale: { type: Number, required: false },
    price: { type: Number, required: true },
    originalPrice: { type: Number, required: false },
    link: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Slides = mongoose.model("Slides", slidesSchema);

export default Slides;
