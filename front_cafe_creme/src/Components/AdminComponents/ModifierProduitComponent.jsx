import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import AdminService from "../../Services/AdminService";
import ProduitService from "../../Services/ProduitService";
import { toast } from "react-toastify";
import "../../Styles/AdminStyles/ModifierProduitStyle.scss";

const ModifierProduitComponent = ({ isOpen, onClose, produit }) => {
    const [dataBaseAromes, setDataBaseAromes] = useState([]);
    const [dataBaseSaveurs, setDataBaseSaveurs] = useState([]);
    const [image, setImage] = useState(produit.PR_Img || "");
    const [pays, setPays] = useState(produit.PA_Id || "");
    const [nomProduit, setNomProduit] = useState(produit.PR_Label || "");
    const [forme, setForme] = useState(produit.FO_Id || "");
    const [description, setDescription] = useState(produit.PR_Description || "");
    const [aromesChoisis, setAromesChoisis] = useState([]);
    const [saveursChoisis, setSaveursChoisis] = useState([]);
    const [intensite, setIntensite] = useState(produit.IN_Id || "");
    const [bio, setBio] = useState(produit.PR_Certification === "1");
    const [robusta, setRobusta] = useState(produit.PR_Robusta || 0);
    const [arabica, setArabica] = useState(produit.PR_Arabica || 0);
    const [prix, setPrix] = useState(produit.PR_Prix || 0);
    const [origine, setOrigine] = useState(produit.PR_Origine || "");
    const [degustation, setDegustation] = useState(produit.PR_Degustation || "");
    const [preparation, setPreparation] = useState(produit.PR_Preparation || "");
    const [resume, setResume] = useState(produit.PR_Resume || "");

    const fetchAromes = async () => {
        try {
            const response = await ProduitService.GetAromes();
            setDataBaseAromes(response);
        } catch (e) {
            console.log(e);
        }
    };

    const fetchSaveurs = async () => {
        try {
            const response = await ProduitService.GetSaveurs();
            setDataBaseSaveurs(response);
        } catch (e) {
            console.log(e);
        }
    };

    const handleAromeChange = (aromeId) => {
        const updatedAromes = aromesChoisis.includes(aromeId)
            ? aromesChoisis.filter(id => id !== aromeId)
            : [...aromesChoisis, aromeId];
        setAromesChoisis(updatedAromes);
    };

    const handleSaveurChange = (saveurId) => {
        const updatedSaveurs = saveursChoisis.includes(saveurId)
            ? saveursChoisis.filter(id => id !== saveurId)
            : [...saveursChoisis, saveurId];
        setSaveursChoisis(updatedSaveurs);
    };

    const paysIdMap = {
        "Brasilian": 1,
        "Vietnamese": 2,
        "Colombian": 3,
        "Indonesian": 4,
        "Ethiopian": 5,
        "Jamaican": 6,
        "Costa Ricain": 7,
        "Yemenite": 8,
        "Ecuadorian": 9,
        "Honduran": 10,
    };

    const formeIdMap = {
        "Café en grains": 1,
        "Café moulu": 2,
        "Capsule": 3,
    };

    const intensiteIdMap = {
        "Léger": 1,
        "Moyen": 2,
        "Fort": 3,
        "Très Fort": 4,
        "Extra Fort": 5
    };

    const modifierProduit = async (e) => {
        e.preventDefault();
        const produitModifie = {
            PR_Img: image,
            PR_Label: nomProduit,
            PR_Description: description,
            PR_Certification: bio ? "1" : "0",
            PR_Robusta: robusta,
            PR_Arabica: arabica,
            PR_Prix: prix,
            PR_Origine: origine,
            PR_Degustation: degustation,
            PR_Preparation: preparation,
            PR_Resume: resume,
            PA_Id: paysIdMap[pays],
            FO_Id: formeIdMap[forme],
            IN_Id: intensiteIdMap[intensite],
            nouveauxAromes: aromesChoisis,
            nouvellesSaveurs: saveursChoisis,
        };

        try {
            await AdminService.modifierProduit(produit.id, produitModifie);
            toast.success(`Le produit ${nomProduit} a bien été modifié`);
            onClose();
        } catch (error) {
            toast.error("Erreur lors de la modification du produit: " + error.message);
        }
    };


    useEffect(() => {
        setImage(produit.Image)
        setPays(produit.Pays);
        setNomProduit(produit.Produit);
        setForme(produit.Forme);
        setDescription(produit.Description);
        setAromesChoisis(produit.Arome);
        setSaveursChoisis(produit.Saveur);
        setIntensite(produit.Intensite);
        setBio(produit.Bio);
        setRobusta(produit.Robusta);
        setArabica(produit.Arabica);
        setPrix(produit.Prix);
        setOrigine(produit.Origine);
        setDegustation(produit.Degustation);
        setPreparation(produit.Preparation);
        setResume(produit.Resume);
        fetchAromes();
        fetchSaveurs();
        setAromesChoisis(produit?.aromes || []);
        setSaveursChoisis(produit?.saveurs || []);
        if (onClose) {
            enableScroll();
        } else {
            disableScroll();
        }
    }, [produit, isOpen, produit]);

    const disableScroll = () => {
        document.body.style.overflow = 'hidden';
    };

    const enableScroll = () => {
        document.body.style.overflow = 'unset';
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}
            className="modal-container"
            overlayClassName="modal-overlay">
            <h2 className="modal-title">Modifier le produit {produit.id}</h2>
            <form onSubmit={modifierProduit}>
                <div className="form-group">
                    <label htmlFor="image">Image :</label>
                    {image && <img src={image} alt="Aperçu du produit" style={{ maxWidth: "100px", marginTop: "10px" }} />}
                    <input type="text" id="image" value={image} onChange={(e) => setImage(e.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor="pays">Pays:</label>
                    <select name="pays" id="pays" value={pays} onChange={(e) => setPays(e.target.value)}>
                        <option value="">Choisir un pays</option>
                        <option value="Brasilian">Brasilian</option>
                        <option value="Vietnamese">Vietnamese</option>
                        <option value="Colombian">Colombian</option>
                        <option value="Indonesian">Indonesian</option>
                        <option value="Ethiopian">Ethiopian</option>
                        <option value="Jamaican">Jamaican</option>
                        <option value="Costa Ricain">Costa</option>
                        <option value="Yemenite">Yemenite</option>
                        <option value="Ecuadorian">Ecuadorian</option>
                        <option value="Honduran">Honduran</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="nomProduit">Produit:</label>
                    <input type="text" id="nomProduit" value={nomProduit} onChange={(e) => setNomProduit(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="forme">Forme:</label>
                    <select name="forme" id="forme" value={forme} onChange={(e) => setForme(e.target.value)}>
                        <option value="">Choisir une forme</option>
                        <option value="Café en grains">Café en grains</option>
                        <option value="Café moulu">Café moulu</option>
                        <option value="Capsule">Capsule</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Arômes:</label>
                    <div className="checkboxes-container">
                        {dataBaseAromes.map((arome, index) => {
                            console.log(produit)
                            return (
                                <div key={index} className="form-group-checkbox">
                                    <input
                                        type="checkbox"
                                        id={`arome-${arome.AR_Id}`}
                                        value={produit.arome}
                                        checked={aromesChoisis.includes(arome.AR_Id)}
                                        onChange={() => handleAromeChange(arome.AR_Id)}
                                    />
                                    <label htmlFor={`arome-${arome.AR_Id}`}>{arome.AR_Label}</label>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="form-group">
                    <label>Saveurs:</label>
                    <div className="checkboxes-container">
                        {dataBaseSaveurs.map((saveur, index) => (
                            <div key={index} className="form-group-checkbox">
                                <input
                                    type="checkbox"
                                    id={`saveur-${saveur.SA_Id}`}
                                    value={saveur.SA_Id}
                                    checked={saveursChoisis.includes(saveur.SA_Id)}
                                    onChange={() => handleSaveurChange(saveur.SA_Id)}
                                />
                                <label htmlFor={`saveur-${saveur.SA_Id}`}>{saveur.SA_Label}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="intensite">Intensité:</label>
                    <select name="intensite" id="intensite" value={intensite} onChange={(e) => setIntensite(e.target.value)}>
                        <option value="">Choisir une Intensité</option>
                        <option value="Léger">Léger</option>
                        <option value="Moyen">Moyen</option>
                        <option value="Fort">Fort</option>
                        <option value="Très Fort">Très Fort</option>
                        <option value="Extra Fort">Extra Fort</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Bio:</label>
                    <input type="checkbox" id="bio" checked={bio} onChange={(e) => setBio(e.target.checked)} />
                </div>
                <div className="form-group">
                    <label htmlFor="robusta">Robusta (%):</label>
                    <input type="number" id="robusta" value={robusta} onChange={(e) => setRobusta(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="arabica">Arabica (%):</label>
                    <input type="number" id="arabica" value={arabica} onChange={(e) => setArabica(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="prix">Prix (€):</label>
                    <input type="number" id="prix" value={prix} onChange={(e) => setPrix(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="origine">Origine:</label>
                    <input type="text" id="origine" value={origine} onChange={(e) => setOrigine(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="degustation">Dégustation:</label>
                    <textarea id="degustation" value={degustation} onChange={(e) => setDegustation(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="preparation">Préparation:</label>
                    <textarea id="preparation" value={preparation} onChange={(e) => setPreparation(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="resume">Résumé:</label>
                    <textarea id="resume" value={resume} onChange={(e) => setResume(e.target.value)} />
                </div>
                <button onClick={modifierProduit} className="button-modal" type="submit">Modifier</button>
            </form>
        </Modal>
    );
};

export default ModifierProduitComponent;
