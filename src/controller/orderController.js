const sequelize  =require("../models/index");
const initModels = require("../models/init-models");

const models  = initModels(sequelize);

const createOrder = async (req,res) => {
    try{
        const object = req.body;
        console.log("🚀 ~ object", object)
        const data = await models.order.create(object);
        res.status(200).json({error:false, message:'Thành công', data})
    }
    catch(error) {
        console.log(error)
        res.status(500).json({error:true,message:"Có lỗi xảy ra vui lòng thử lại"})
    }
}

module.exports = {createOrder}