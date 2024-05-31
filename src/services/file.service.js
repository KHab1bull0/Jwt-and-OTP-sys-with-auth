import File from '../models/file.model.js'

export const uploadfile = async (body) => {
    try{
        const data = await File(body);
        await data.save();
        return data
    } catch (err) {
        throw err
    }
}


export const getAllfile = async () => {
    try{
        const data = await File.find();
        return data
    } catch (err) {
        throw err
    }
}

export const deleteFile = async (id) => {
    try{
        const data = await File.deleteOne({_id: id})
        return data;
    } catch (err) {
        throw err
    }
}

export const getFile = async (id) => {
    try{
        const data = await File.find({_id: id});
        return data;
    } catch (err) {
        throw err
    }
}

export const putOne = async (id, body) => {
    try{
        const data = await File.updateOne({_id: id}, {$set: {filename: body}})

    } catch (err) {
        throw err
    }
}