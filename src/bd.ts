import { Pool }  from 'pg';

const connectionString = 'postgres://moyzswjh:ov9Bjrp2KZF5ZRitbkyG8wUdCGexnYom@motty.db.elephantsql.com/moyzswjh';

const db = new Pool({ connectionString });

export default db;