const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

// definition d'un schèma
const postSchema = new mongoose.Schema(
  {
    titre: {
      // chaine de caractère unique non nulle
      type: String,
      unique: true,
      nullable: false,
    },
    auteur: {
      // chaine de caractère avec la valeur "unkown" par defaut
      type: String,
      nullable: false,
      defaultValue: "unkown",
    },
    resume: {
      // chaine de caractère non nulle de moins de 100 caractères
      type: String,
      nullable: false,
      max: 100,
    },
    content: {
      // chaine de caractère non nulle, au moins de 100 caractères
      type: String,
      nullable: false,
      min: 100,
    },
  },
  {
    timestamps: true,
  }
);
//créer et exporter un Modéle Post
module.exports = mongoose.model("Post", postSchema);
