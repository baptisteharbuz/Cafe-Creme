import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import AdminService from "../../Services/AdminService";
import ProduitService from "../../Services/ProduitService"
import { toast } from 'react-toastify';

const AjouterProduitModal = ({ isOpen, onClose }) => {
    const [image, setImage] = useState('');
    const [pays, setPays] = useState('');
    const [nomProduit, setNomProduit] = useState('');
    const [forme, setForme] = useState('');
    const [description, setDescription] = useState('');
    const [aromesChoisis, setAromesChoisis] = useState([]);
    const [saveursChoisis, setSaveursChoisis] = useState([]);
    const [dataBaseAromes, setDataBaseAromes] = useState([]);
    const [dataBaseSaveurs, setDataBaseSaveurs] = useState([]);
    const [intensite, setIntensite] = useState('');
    const [bio, setBio] = useState(false);
    const [robusta, setRobusta] = useState('');
    const [arabica, setArabica] = useState('');
    const [prix, setPrix] = useState('');
    const [origine, setOrigine] = useState('');
    const [degustation, setDegustation] = useState('');
    const [preparation, setPreparation] = useState('');
    const [resume, setResume] = useState('');

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
        "Honduran": 10
    };

    const formeIdMap = {
        "Café en grains": 1,
        "Café moulu": 2,
        "Capsule": 3
    };

    const intensiteIdMap = {
        "Léger": 1,
        "Moyen": 2,
        "Fort": 3,
        "Très Fort": 4,
        "Extra Fort": 5
    };

    const ajouterProduit = (e) => {
        e.preventDefault();
        const nouveauProduit = {
            PR_Label: nomProduit,
            PR_Img: image,
            PR_Origine: origine,
            PR_Degustation: degustation,
            PR_Preparation: preparation,
            PR_Resume: resume,
            PR_Description: description,
            PR_Robusta: robusta,
            PR_Arabica: arabica,
            PR_Certification: bio ? "1" : "O",
            PR_Prix: prix,
            PA_Id: paysIdMap[pays],
            FO_Id: formeIdMap[forme],
            IN_Id: intensiteIdMap[intensite],
            aromesChoisis,
            saveursChoisis,
        };
        console.log(nouveauProduit)
        AdminService.ajouterProduit(nouveauProduit)
            .then(response => {
                toast.success('Produit ajouté avec succès', response);
                onClose();
            })
            .catch(error => {
                toast.error('Erreur lors de l\'ajout du produit', error);
            });
    };


    useEffect(() => {
        fetchAromes();
        fetchSaveurs()
    }, [])

    // if (dataBaseAromes !== [] && dataBaseSaveurs !== []) {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose}
            className="modal-container"
            overlayClassName="modal-overlay"
        >
            <h2 className="modal-title">Ajouter un nouveau produit</h2>
            <form onSubmit={ajouterProduit}>
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
                        {dataBaseAromes.map((arome, index) => (
                            <div key={index} className="form-group-checkbox">
                                <input
                                    type="checkbox"
                                    id={`arome-${arome.AR_Id}`}
                                    value={arome.AR_Id}
                                    checked={aromesChoisis.includes(arome.AR_Id)}
                                    onChange={() => handleAromeChange(arome.AR_Id)}
                                />
                                <label htmlFor={`arome-${arome.AR_Id}`}>{arome.AR_Label}</label>
                            </div>
                        ))}
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
                <button className="button-modal" type="submit">Ajouter</button>
            </form>
        </Modal>
    );
    // }
    // else {
    //     return (
    //         <>
    //             <p>hello world!</p></>
    //     )
    // }
};

export default AjouterProduitModal;







// import Modal from 'react-modal';
//         return (
//             <Modal isOpen={isOpen} onRequestClose={onClose}
//                 className="modal-container"
//                 overlayClassName="modal-overlay">
//                 <h2>Ajouter un nouveau produit</h2>
//                 <form onSubmit={ajouterProduit}>
//                     <button type="submit">Ajouter</button>
//                 </form>
//             </Modal>
//         );

// export default AjouterProduitModal;
