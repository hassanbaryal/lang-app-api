import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity('cards')
export class Card {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('text')
    front!: string;

    @Column('text')
    back!: 'string';

    @CreateDateColumn({ name: 'created_at'})
    createdAt!: Date;
}