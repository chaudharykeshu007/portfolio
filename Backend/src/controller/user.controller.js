import User from "../model/user.model.js";


export async function createUser(req, res){
    try{

        const{ fname, email, message } = req.body;

        await User.create({
            fname,
            email,
            message,
        });

        res.status(200).json({
            message: "user was data created",
        });
    }catch (err) {
        res.status(500).json({
            message: "Internal server problem",
            error: err.message,
        });
    }
}
