const db = require('../database/database');
const courService = {};

courService.ajouter = async(cours) => {
    return new Promise((reslove,reject) => {
        let {nom_cour,contenue,image,video,fichier,prof_id} = cours;
        db.query(`INSERT INTO cours(nom_cour,contenue,image,video,fichier,prof_id) VALUES('${nom_cour}','${contenue}','${image}','${video}','${fichier}',${prof_id})`,(err,res) => {
            let resultat = {};
            if(err){ 
            // resultat.error = err;
            console.log("ajoutservice");
            throw err;}
            else{
                resultat.message = `Ajout Reussit`;
                resultat.added = true;
            }
            reslove(resultat);
        });
    });
}

courService.modifier = async(cours) => {
    return new Promise((reslove,reject) => {
        let {cour_id,nom_cour,conetnue,image,video,fichier,prof_id} = cours;
        db.query(`UPDATE cours SET nom_cour=${nom_cour},conetnue=${conetnue},image=${image},video=${video},fichier=${fichier},=${prof_id} WHERE id=${cour_id}`,(err,res) => {
            let resultat = {};
            if(err) resultat.error = err;
            else resultat.message = `Modification Reussit`
            reslove(resultat);
        });
    });
}

courService.supprimer = async(id) => {
    return new Promise((reslove,reject) => {
        db.query(`DELETE FROM cours WHERE id=${id}`,(err,res) => {
            let resultat = {};
            if(err) resultat.error = err;
            else resultat.message = `Suppression Reussit`
            reslove(resultat);
        });
    });
}


courService.afficherParId = async(id) => {
    return new Promise((reslove,reject) => {
        db.query(`SELECT * FROM cours WHERE id = 7`,(err,res) => {
            let resultat = {};
            if(err) resultat.error = err;
            else resultat.cour = res[0]
            reslove(resultat);
           console.log(resultat);
        });
    });
}

courService.afficherTout = async(id) => {
    return new Promise((reslove,reject) => {
        db.query(`SELECT * FROM cours `,(err,res) => {
            let resultat = {};
            if(err) resultat.error = err;
            else resultat.cours = res
            reslove(resultat);
        });
    });
}



module.exports = courService;