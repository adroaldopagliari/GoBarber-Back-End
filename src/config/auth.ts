export default {
  jwt: {
    secret: process.env.APP_SECRET || 'a03a27bd0cc70be4201060e66ceecb83',
    expiresIn: '1d',
  },
};
