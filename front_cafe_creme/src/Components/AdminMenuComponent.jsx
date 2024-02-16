import React, { useState, useEffect } from "react";
import AdminService from "../Services/AdminService";

const AdminComponent = ({ produit, refreshProduits }) => {
  const [formData, setFormData] = useState({
    nom: "",
    image: "",
    origine: "",
    degustation: "",
    preparation: "",
    resume: "",
    robusta: "",
    arabica: "",
    certification: "",
    prix: "",
  });

  useEffect(() => {
    if (produit) {
      setFormData({
        nom: produit.nom,
        image: produit.image,
        origine: produit.origine,
        degustation: produit.degustation,
        preparation: produit.preparation,
        resume: produit.resume,
        robusta: produit.robusta,
        arabica: produit.arabica,
        certification: produit.certification,
        prix: produit.prix,
      });
    }
  }, [produit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (produit) {
      await AdminService.modifierProduit(produit.id, formData);
    } else {
      await AdminService.ajouterProduit(formData);
    }
    refreshProduits();
    setFormData({
      nom: "",
      image: "",
      origine: "",
      degustation: "",
      preparation: "",
      resume: "",
      robusta: "",
      arabica: "",
      certification: "",
      prix: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nom" value={formData.nom} onChange={handleChange} />
      <input name="prix" value={formData.image} onChange={handleChange} />
      <input name="prix" value={formData.origine} onChange={handleChange} />
      <input name="prix" value={formData.degustation} onChange={handleChange} />
      <input name="prix" value={formData.preparation} onChange={handleChange} />
      <input name="prix" value={formData.resume} onChange={handleChange} />
      <input name="prix" value={formData.robusta} onChange={handleChange} />
      <input name="prix" value={formData.arabica} onChange={handleChange} />
      <input
        name="prix"
        value={formData.certification}
        onChange={handleChange}
      />
      <input name="prix" value={formData.prix} onChange={handleChange} />
      <button type="submit">Soumettre</button>
    </form>
  );
};

export default AdminComponent;
