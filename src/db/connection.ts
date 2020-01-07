import mongoose from 'mongoose';

const MONGODB_OPTIONS: mongoose.ConnectionOptions = {
  useNewUrlParser: true,
  connectTimeoutMS: Number(process.env.DB_CONNECTION_TIMEOUT)
};

const MONGO_PROTOCOL = 'mongodb+srv';
export const DB_CONNECTION_STRING = `${MONGO_PROTOCOL}://${process.env.DB_USER}:${process.env.DB_PW}@${process.env.DB_HOST}/${process.env.DB_NAME}`;
export let dbConn: mongoose.Connection;
export async function connect(): Promise<mongoose.Connection> {
  const mg = await mongoose.connect(DB_CONNECTION_STRING, MONGODB_OPTIONS);
  dbConn = mg.connection;
  return dbConn;
}

export async function getConnection(): Promise<mongoose.Connection> {
  if (dbConn) {
    return dbConn;
  }
  return await connect();
}