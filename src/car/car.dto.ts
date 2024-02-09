import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CarDto{
    @IsNotEmpty()
    type: string

    @IsNumber()
    @IsNotEmpty()
    price: number
    
    @IsString()
    @IsNotEmpty()
    description: string

    @IsNotEmpty()
    imageURL: string
}
