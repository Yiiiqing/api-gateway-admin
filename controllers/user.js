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
                users:result,//all user
                currentUser: req.session.User
            })
        })
    },
    //edit privilege
    edit:(req,res,next)=>{
        let {password,username} = req.body
        models.User.update({
            password
        },{
            where:{
                username
            }
        }).then(result=>{
            // console.log("edit",result)
            if(result){
                return res.json({
                    result:0,
                    msg:'Success'
                })
            }
            return res.json({
                result:1,
                msg:'Failed'
            })
        })
    },
    //add user
    add:(req,res,next)=>{
        let {username,password} = req.body
        models.User.findOrCreate({
            where:{
                username
            },
            defaults:{
                username,password
            }
        }).then(([doc,created])=>{
            //exist
            if(!created){
                return res.json({
                    result:1,
                    msg:'Already exists'
                })
            }
            res.json({
                result:0,
                msg:'Success',
                data:doc
            })
        })
    },
    //delete user
    delete:(req,res,next)=>{
        let {username} = req.body
        models.User.destroy({
            where:{
                username
            }
        }).then(function(){
            res.json({
                result:0,
                msg:'Success'
            })
        },function(){
            res.json({
                result:1,
                msg:'Unkown Error'
            })
        })
    }
}