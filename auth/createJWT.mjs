import jwt from 'jsonwebtoken';
const createJWT=async(res,user) => {
  // Create JWT token
  const payload = { username:user?.name, uid:user?.id, email:user?.email || 'admin@gmail.com', role:user?.role};
  /* console.log("Payload for JWT:", payload); */

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });

  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  });

  return { token };
};


export default createJWT;
