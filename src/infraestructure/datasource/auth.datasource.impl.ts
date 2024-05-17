import { throws } from "assert";
import { UserModel } from "../../data/models/users.model";
import { AuthDataSource, CustomError, RegisterUserDto, UserEntity } from "../../domain"; //2



export class AuthDataSourceImpl implements AuthDataSource {//1
    async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {//3
        const {name, email, password} = registerUserDto;// 4

        try{//5

            const exists = await UserModel.findOne({ email });
            if (exists) throw CustomError.badRequest("User already exists");

           const user = await UserModel.create({
            name:name,
            email:email,
            password:password,
           });

           await user.save();
           
            return new UserEntity(// 6
                '1', 
                name, 
                email, 
                password, 
                ['USER']);    

        }catch(error){
            if(error instanceof CustomError){//7
                throw error;
            }
            throw CustomError.internalServer();//8
        }
    }
    
}