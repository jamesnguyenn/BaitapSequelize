const sequelize  =require("../models/index");
const initModels = require("../models/init-models");

const models  = initModels(sequelize)

const getLike = async(req,res)=>{
    try{
       const data = await models.like_res.findAll({include: ["re","user"]})
       res.status(200).json({error:false, message:data})
    }
    catch(err) {
        console.log(err)
        res.status(500).json({error:true,message:"Có lỗi xảy ra vui lòng thử lại"})
    }
}

const likeAction = async(req,res) => {
    try{
        const {userId, resId} = req.query;
        const data = await models.like_res.findAll({where:{
            "user_id" :userId,
            "res_id" :resId
        }})
        console.log(data)
        if(data.length <= 0) {
            const object = {"user_id":userId, "res_id":resId}
          const newData= await models.like_res.create(object);
            res.status(200).json({error:false, message:"Like nhà hàng thành công",data:newData})
        } else{
            let newData = await models.like_res.destroy({where: {res_id:resId}})
            res.status(200).json({error:false, message:"Xoá nhà hàng thành công",data:{"user_id":userId,"res_id":resId}})
        }
        
    }
    catch(err) {
        console.log(err)
        res.status(500).json({error:true,message:"Có lỗi xảy ra vui lòng thử lại"})
    }
}

module.exports = {getLike, likeAction}