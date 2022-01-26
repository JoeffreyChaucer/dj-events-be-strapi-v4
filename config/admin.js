module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cf721d17db382c6938daa8ca424936a6'),
  },
});
