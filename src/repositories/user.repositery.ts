import db from "../bd";
import User from "../models/user.model";



class UserRepository{

        async findAllUser() : Promise<User[]>{
                const query = `
                SELECT uuid, username FROM appllication_user
                `;

                const {rows} = await db.query<User>(query);
                return rows || [];
        }

        async findById(uuid: string): Promise<User>{
                const query = `
                        SELECT uuid, username
                        FROM appllication_user
                        WHERE uuid = $1
                `;
                const values = [uuid];
                
                const { rows } = await db.query<User>(query, values);     
                const [ user ] = rows;
                
                return user;
        }

        async create(user: User): Promise<string> {
                const script = 
                `INSERT INTO appllication_user( 
                        username,
                        password
                )
                VALUES ($1, crypt($2, 'guga')
                RETURN [uuid]
                `;
                const values = [user.username, user.password];

            const {rows} = await db.query<{ uuid: string}>(script, values)
                const [newUser] = rows;
                return newUser.uuid;
        }

}

export default new UserRepository();