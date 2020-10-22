import Image from '../models/Images_model'

export default {
    render(image:Image){
        return {
            id: image.id,
            url:`http://localhost:3333/media/${image.path}`
        }
    },

    renderMany(image:Image[]){
        return image.map((item)=> this.render(item))
    }
}