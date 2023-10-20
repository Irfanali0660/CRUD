let userData=require('../model/userModel')

module.exports={
    adduser:(req,res)=>{
        try {
            console.log(req.body);
            let user=userData({
                userName:req.body.name,
                email:req.body.email,
                phonenumber:req.body.phonenumber
            })
            user.save().then(()=>{
                console.log("success");
                res.status(200).json('userData added successfully')
            }).catch(()=>{

            })
            
        } catch (error) {
            res.status(500).json('Internal error')
        }
    }
}