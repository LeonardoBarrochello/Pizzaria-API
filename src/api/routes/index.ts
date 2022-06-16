import { Router } from "express";
import appRoutes from "./routes";

const router = Router();

router.use("/api" , appRoutes);

export default router;