import express from "express";
import {
  getAllUsers,
  getUsersbyId,
  addUser,
  loginUser,
  deleteUser,
  updateUser , 
  upgradeUserToPremium
} from "../controllers/UserControler.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUsersbyId);
router.post("/addUser", addUser);
router.post("/login", loginUser);
router.delete("/deleteUser/:id", deleteUser);
router.put("/updateUser/:id", updateUser);
router.put("/upgrade", upgradeUserToPremium);


export default router;
