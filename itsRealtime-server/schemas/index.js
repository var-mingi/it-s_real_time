require('dotenv').config()

const mongoose = require('mongoose');

const db = () => {
  const connect = () => {
    if (process.env.NODE_ENV !== 'production') {
      mongoose.set('debug', true);
    }

    mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'realtime-dev',
    }, (error) => {
      if (error) {
        console.log('몽고디비 연결 에러', error);
      } else {
        console.log('몽고디비 연결 성공');
      }
    });
  };

  connect();
  
  mongoose.connection.on('error', (error) => {
    console.error('몽고디비 연결 에러', error);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
    connect();
  });
};

export default db