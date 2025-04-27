import express from "express";
import {
  getAllUsers,
  getUsersbyId,
  addUser,
  loginUser,
  deleteUser,
  updateUser
} from "../controlers/UserControler.js"

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUsersbyId);
router.post("/addUser", addUser);
router.post("/login", loginUser);
router.delete("/deleteUser/:id" , deleteUser);
router.put("/updateUser/:id", updateUser);


export default router;