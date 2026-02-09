import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    ratings: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    money: {
      type: mongoose.Decimal128,
      required: true,
      validate: (v) => v >= 0,
    },
    genre: {
      type: Array,
      required: true,
    },
    comments: [
      {
        type: String,
        published: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    isActive: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  },
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
