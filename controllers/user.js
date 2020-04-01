var models = require('../models')

module.exports = {
    login:(req,res,next)=>{
        let {username,password} = req.body
        models.User.findOne(
            {
                where:{
                    username,password
                }
            }
        ).then(result=>{
            if(result){
                //login success
                //set session
                req.session.User = {
                    username,
                }
                return res.json({
                    result:0,
                    msg:'Success'
                })
            }
            res.json({
                result:1,
                msg:'Error'
            })
        })
    },
    //get user list for privilege page
    list:(req,res,next)=>{
        models.User.findAll({raw:true})
        .then(result=>{
            //get result for page to render 
            res.render('privilege.html',{
                users:result
            })
        })
    }
}