import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Orphanage_model from './Orphanage_model';
import Orphanage from './Orphanage_model';

@Entity('images')
export default class Images_model {
    @PrimaryGeneratedColumn('increment')
    id:number;
    
    @Column()
    path:string;

    @ManyToOne(()=>Orphanage, orphanage=> orphanage.images)
    @JoinColumn({name:'orphanage_id'})
    orphanage: Orphanage;
}