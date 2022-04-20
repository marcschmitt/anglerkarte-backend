module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '09854c0c9ad11eb3924a7a44d185f755'),
  },
});
