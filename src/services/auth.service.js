import User from '../models/auth.model.js'

export const signUp = async (body) => {
    try{
       const data = await User(body);
       await data.save();
    } catch (err) {
        console.log(err);
        throw err
    }
}

export const signIn = async (login) => {
    try{
        const data = await User.find({login: login});
        return data;
        
     } catch (err) {
         console.log(err);
         throw err
     }
}

export const getMe = async (login) => {
    try{
        const data = await User.find({login: login});
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    };
}

export const getAll = async () => {
    try{

        const data = User.find();
        return data

    }catch(err){
        throw err
    }
}

export const getOne = async (id) => {
    try {
        const data = await User.find({
            _id: id
        });
        return data

    } catch (error) {
        throw error
    }
}

export const deleteOne = async (id) => {
    try {
        
        const data = await User.deleteOne({
            _id: id
        });
        console.log("User deleted");

    } catch (error) {
        throw error
    }
}

export const updateUserStatus = async (email) => {
	try {
        const newUser = await User.updateOne({
            email,
        }, {
            status: true
        })
    
        return newUser

    } catch (error) {
        throw error
    }
};