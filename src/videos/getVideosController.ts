import {Request, Response} from 'express'
import {db} from '@/db/db'

export const getVideosController = (req: Request, res: Response<any[]>) => {
    res
        .status(200)
        .json(db.videos)
}