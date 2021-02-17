const Walk = require("../models/walkModel.js");


//Create and Save a new Post
exports.create = (req, res) => {
   // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
   
  }
    // Create a Walk
    const walk = new Walk({
        walkPlaceName : req.body.walkPlaceName, //步道名稱
        walkCity : req.body.walkCity, //步道地區
        walkAddress : req.body.walkAddress, //步道地址
        walkDetial : req.body.walkDetial, //步道介紹
        walkTel : req.body.walkTel, //步道電話
        walkLength : req.body.walkLength, //步道長度
        walkTime : req.body.walkTime, //步道總花費時間
        walkPic1 : req.body.walkPic1, //步道照片
        walkPic2 : req.body.walkPic2, //步道照片
        addressLat : req.body.addressLat, //步道起始緯度
        addressLng : req.body.addressLng, //步道起始經度
        iconLat1 : req.body.iconLat1, //金幣緯度
        iconLng1 : req.body.iconLng1, //金幣經度
        iconLat2 : req.body.iconLat2, //金幣緯度
        iconLng2 : req.body.iconLng2, //金幣經度
        iconLat3 : req.body.iconLat3, //金幣緯度
        iconLng3 : req.body.iconLng3, //金幣經度
        iconLat4 : req.body.iconLat4, //金幣緯度
        iconLng4 : req.body.iconLng4, //金幣經度
        visited : req.body.visited, //瀏覽人次
        walkArea : req.body.walkArea // 地區
    });
    // Save WalkPlace in the database
    Walk.create(walk, (err, succ,data ) => {
        // if (err)
        //     res.status(500).send({
        //         message:
        //             err.message || "Some error occurred while creating the Walk."
        //     });
        // else res.send(data);

           if (err){
             res.status(500).send({
                 message:
                     err.message || "Some error occurred while creating the Walk."
             });
           }else if(succ){
            res.status(200).send({
              message:
              succ.message || "成功新增一筆資料",data
          });
        }
    });
};

//Fine All WalkPlace
exports.findAll = (req, res) => {
    Walk.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "錯誤連線"
      });
        else res.send(data);
    });
};


// Find a single WalkPlace with a walkId
exports.findOne = (req, res) => {
    Walk.findById(req.params.walkId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Walk with walkId ${req.params.walkId}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Walk with walkId " + req.params.walkId
            });
          }
        } else res.send(data);
      });
};

// Update a WalkPlace identified by the walkId in the request
exports.update = (req, res) => {
 // Validate Request
 if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  Walk.updateById(
    req.params.walkId,
    new Walk(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found CusWalktomer with id ${req.params.walkId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Walk with id " + req.params.walkId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a WalkPlace with the specified walkId in the request
exports.delete = (req, res) => {
    Walk.remove(req.params.walkId, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Walk with id ${req.params.walkId}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Walk with id " + req.params.walkId
            });
          }
        } else res.send({ message: `Walk was deleted successfully!` });
      });
};

