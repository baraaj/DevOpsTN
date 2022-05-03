const courService = require('../services/CourService');
const coursController = {};

coursController.ajouter = async(req,res) => {
    let {nom_cour,contenue,video,prof_id} = req.body;
    let cours = {};

    cours.nom_cour = nom_cour;
    cours.video = video;
    cours.contenue = contenue;
    cours.prof_id = prof_id;
    // cours.code_module = code_module;
    cours.image = req.files['image'][0].path.replace('\\','/');
    cours.fichier = req.files['fichier'][0].path.replace('\\','/');

    let resultat = await courService.ajouter(cours);
    // if(err)
    // console.log("error");
    res.json(resultat);
    
    
}

coursController.modifier = async(req,res) => {
    let {cours} = req.body;
    var resultat = await courService.modifier(cours);
    res.send({resultat});
}
coursController.supprimer = async(req,res) => {
    let {id} = req.body;
    var resultat = await courService.supprimer(id);
    res.send({resultat});
}

coursController.afficherTout = async(req,res) => {
    var resultat = await courService.afficherTout();
    res.send({resultat});
}

coursController.afficherParId = async(req,res) => {
    let {id} = req.params;
    var resultat = await courService.afficherParId(id);
    res.send({resultat});
}

module.exports = coursController;