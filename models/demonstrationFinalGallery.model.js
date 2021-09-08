module.exports = (sequelize, Sequelize) => {
    const demonstrationFinalGallery = sequelize.define("demonstrationfinalgallery", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement:true
      },
      
      image : {
        type: Sequelize.STRING
      },
      dd_id : {
        type: Sequelize.STRING
      },
      upazilla_id : {
        type: Sequelize.STRING
      }
      
    });
  
    return demonstrationFinalGallery;
  };