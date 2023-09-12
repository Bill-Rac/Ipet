import { registerAs } from '@nestjs/config';
import * as Joi from 'joi';

type DatabaseConfig = {
  password: string;
  host: string;
};

export default registerAs('database', (): DatabaseConfig => {
  const values: DatabaseConfig = {
    password: process.env.MONGO_PASSWORD,
    host: process.env.MONGO_HOST,
  };
  const schema = Joi.object<DatabaseConfig, true>({
    password: Joi.string().required(),
    host: Joi.string().required(),
  });

  const { error } = schema.validate(values, { abortEarly: false });

  if (error) {
    throw new Error(`Variables for database not found: ${error.message}`);
  }

  return values;
});
