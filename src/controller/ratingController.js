const sequelize  =require("../models/index");
const initModels = require("../models/init-models");

const models  = initModels(sequelize)

const getRating = async (req,res) => {
    try{
        const data = await models.rate_res.findAll({include: ['user','re']})
        res.status(200).json({error:false, message:'Thành công', data: data})
    }
    catch(err) {
        console.log(err)
        res.status(500).json({error:true,message:"Có lỗi xảy ra vui lòng thử lại"})
    }
}

const ratingAction  = async (req,res) => {
        const {userId, resId, rateNumber} = req.query;
        const data = await models.rate_res.findOne({
        where: {
        "user_id" :userId,
        "res_id" :resId
        },
        })
         const object = {"user_id":Number(userId), "res_id":Number(resId),"amount":Number(rateNumber),"date_rate": Date.now()};
        if(!data) {
            const response = await models.rate_res.create(object);
            res.status(200).json({error:false, message:'Thêm đánh giá thành công', object})
        } else{ 
            const response = await models.rate_res.update(object, {
                where: {
                "user_id": userId,
                "res_id": resId
            }})
            res.status(200).json({error:false, message:'Cập nhật đánh giá thành công', object})
        }
}

module.exports = {getRating,ratingAction}