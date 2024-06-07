import { User } from '../models/auth.model.js'

export const createUser = async (body) => {
    try {
        const data = await User(body);
        await data.save();
    } catch (err) {
        console.log(err);
        throw err
    }
}

export const getUser = async (email) => {
    try {
        const data = await User.find({ email: email });
        return data[0];

    } catch (err) {
        console.log(err);
        throw err
    }
}

export const getMe = async (email) => {
    try {
        const data = await User.find({ email: email });
        return data;

    } catch (err) {
        console.log(err);
        throw err;
    };
}

export const getAll = async () => {
    try {

        const data = User.find();
        return data

    } catch (err) {
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
        return data;

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
