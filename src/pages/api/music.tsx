import { NextApiHandler } from 'next'
import fs from 'fs'
import { promisify } from 'util'
import ytdl from 'ytdl-core'
import audioUrl from '../../../public/lofi.mp3'
const audio = new Audio(audioUrl)

const handler: NextApiHandler = async (req, res) => {
    try {
        // ytdl('https://youtu.be/95XZwnnwgzM', { filter: 'audioonly' })
        //     .pipe(fs.createWriteStream('lofi.mp3'))

        const getStat = promisify(fs.stat)
        const stat = await getStat(audioUrl)
        console.log(stat)

        return res.status(201).json({ message: 'Music downloaded successfully' })
    } catch (err) {
        return res.status(500).json({ error: err })
    }
}

export default handler