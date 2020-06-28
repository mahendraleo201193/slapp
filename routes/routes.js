module.exports = app => {
    
    const loginController = require("../controllers/controller.login.js");
    const authController = require("../controllers/controller.authentication.js");
    const homeController = require("../controllers/controller.home.js");
    const students = require("../controllers/controller.students.js");
    const gradeDetails = require("../controllers/controller.gradeDetails.js");
    const classDetails = require("../controllers/controller.classDetails.js");
    const questionDetails = require("../controllers/controller.questionDetails.js");
    const studentClassMap = require("../controllers/controller.studentClassMap.js");
    const studentQuestionMap = require("../controllers/controller.studentQuestionMap.js");
  
      var router = require("express").Router();
  
      router.get("/login",loginController.login);
      
      router.get("/home/",homeController.home);
      
      router.get("/",function(req,res){
          res.set({
            'Access-Control-Allow-Origin' : '*'
          });
          return res.redirect('/public/index.html');
      });

      router.post("/students/",students.create);
     

      router.post("/auth/",students.auth);

      // Grade APIs
      router.post("/gradeDetails/",gradeDetails.create);

      // Class API
      router.post("/classDetails/",classDetails.create);

      // Question API
      router.post("/questionDetails/",questionDetails.create);

      // Student Class Map API
      router.post("/studentClassMap/",studentClassMap.create);
      router.get("/studentClassMap/:username",studentClassMap.findOne);

      // Student Question Map API
      router.post("/studentQuestionMap/",studentQuestionMap.create);
      router.get("/studentQuestionMap/:username/:classId",studentQuestionMap.findOne);
      router.put("/studentQuestionMap/:username/:classId",studentQuestionMap.update);


      app.use('/', router);
  
    };