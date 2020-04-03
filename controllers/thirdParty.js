var models = require('../models')

module.exports = {
    //get list for port page
    list:(req,res,next)=>{
        models.ThirdParty.findAll({raw:true})
        .then(result=>{
            //get result for page to render 
            res.render('thirdParty.html',{
                parties:result
            })
        })
    },
    //add
    // add:(req,res,next)=>{
    //     let {name,host,route} = req.body
    //     models.Port.findOrCreate({
    //         where:{
    //             route
    //         },
    //         defaults:{
    //             name,host,route
    //         }
    //     }).then(([doc,created])=>{
    //         if(!created){
    //             res.json({
    //                 result:1,
    //                 msg:'Already exists'
    //             })
    //         }else{
    //             res.json({
    //                 result:0,
    //                 msg:'Success',
    //                 data:doc
    //             })
    //         }
    //     })
    // },
    //delete
    // delete:(req,res,next)=>{
    //     let{route} = req.body
    //     models.Port.destroy({where:{route}})
    //     .then(result=>{
    //         if(result){
    //             return res.json({
    //                 result:0,
    //                 msg:'Success'
    //             })
    //         }
    //         return res.json({
    //             result:1,
    //             msg:'Delete failed!'
    //         })
    //     })
    // }
}