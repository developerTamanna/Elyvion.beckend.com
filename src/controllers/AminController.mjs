import prisma from "../lib/prisma.js";

export async function getAdmin(req, res, next) {
  try {
    const id = parseInt(req.params.id, 10);
    if (isNaN(id)) {
      return res.status(400).json({ success: false, error: "Invalid Admin ID" });
    }
    const admin = await prisma.admin.findUnique({
      where: { id },
    });
    if (!admin) {
      return res.status(404).json({ success: false, error: "Admin not found" });
    }
    res.json({ success: true, data: admin });
  } catch (err) {
    next(err);
  }
}

// admin Login
export async function loginAdmin(req, res, next) {
  try {
    const { adminName, password } = req.body;
    console.log("adminName",adminName,password);
    

    if (!adminName || !password) {
      return res.status(400).json({
        success: false,
        error: "adminName and password are required",
      });
    }

    let admin = await prisma.admin.findFirst({
      where: {
        adminName: adminName,
        password: password,
      },
    });

     if (!admin) {
      return res.status(401).json({
        success: false,
        error: "Invalid credentials",
      });
    } 

    // Return user data (without password)
    const { password: _, ...userWithoutPassword } = admin;

    const result = await createJWT(res,userWithoutPassword);

    res.json({
      success: true,
      data: userWithoutPassword,
      token: result.token,
    });
  } catch (err) {
    next(err);
  }
}
// admin update
export async function updateAdmin(req, res, next) {
  try {
    const { id } = req.body;
    console.log("adminID",id);

    const admin = await prisma.admin.update({
        where: { id: parseInt(id) },
        data: {
           whatsappUrl:req.body.whatsappUrl,
           telegramUrl1:req.body.telegramUrl1,
           whatsappUrl2:req.body.telegramUrl2,
           whatsappUrl3:req.body.telegramUrl3,
        },
      });
      console.log("admin updated:", admin);
      
     if (!admin) {
      return res.status(401).json({
        success: false,
        error: "update failed",
      });
    } 


    // Return user data (without password)
    const { password: _, ...userWithoutPassword } = admin;

    res.json({
      success: true,
      data: userWithoutPassword,
      token: "dummy-token", // In production, generate JWT token
    });
  } catch (err) {
    next(err);
  }
}

// admin update
export async function changePassword(req, res, next) {
  try {
    const { password } = req.body;
    console.log("adminpassword",password);

    const admin = await prisma.admin.update({
        where: { id: parseInt(id),password:password },
        data: {
              password:req.body.password,
        },
      });
      console.log("update password:", admin);
      
     if (!admin) {
      return res.status(401).json({
        success: false,
        error: "update failed",
      });
    } 


    // Return user data (without password)
    const { password: _, ...userWithoutPassword } = admin;

    res.json({
      success: true,
      data: userWithoutPassword,
      token: "dummy-token", // In production, generate JWT token
    });
  } catch (err) {
    next(err);
  }
}