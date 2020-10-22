import { request } from 'express';
import multer from 'multer';
import path from 'path';

export default {
    storage:multer.diskStorage({
        destination: path.join(__dirname, '..','..','medias'),
        filename:(request, file, callback)=>{
            const fileName = `${Date.now()}-${file.originalname}`;
            callback(null, fileName);
        },
    })
};