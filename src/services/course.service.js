import { Course } from "../models/mongodb/course.model.js";

export const postOne = async (body) => {
    try {
        const data = await Course(body);
        data.save();
        return data
    } catch (err) {
        throw err
    }
}

export const getAll = async () => {
    try {
        const data = await Course.find();
        return data

    } catch (err) {
        throw err
    }
}

export const getOne = async (id) => {
    try {
        const data = await Course.find({ _id: id })
        return data
    } catch (err) {
        throw err
    }
}

export const putOne = async (id, body) => {
    try {
        const data = await Course.updateOne({ _id: id }, { $set: { ...body } })
    } catch (err) {
        throw err
    }
}

export const deleteOne = async (id) => {
    try {
        const data = await Course.deleteOne({ _id: id });
        return data;
    } catch (err) {
        throw err
    }
}