import { Router } from "express";
import healthRoutes from "./health.js";
import userRoutes from "./users.js";
import customerRoutes from "./customers.js";
import ambassadorLevelRoutes from "./ambassadorLevels.js";
import currencyRoutes from "./currencies.js";
import projectRoutes from "./projects.js";
import salesStatusRoutes from "./salesStatuses.js";
import menuRoutes from "./menus.js";
import depositRecordRoutes from "./depositRecords.js";
import withdrawalRoutes from "./withdrawals.js";
import withdrawalRecordRoutes from "./withdrawalRecords.js";
import transactionRecordRoutes from "./transactionRecords.js";
import tasklistRoutes from "./tasklists.js";
import customerTaskRoutes from "./customerTasks.js";
import dailyCheckInRoutes from "./dailyCheckIn.js";
import performTaskRoutes from "./performTask.js";
import logoutRoutes from "../../auth/logout.mjs";
import { env } from "../config/env.js";

const router = Router();
const prefix = env.API_PREFIX;

router.use(logoutRoutes);
router.use(`${prefix}/health`, healthRoutes);
router.use(`${prefix}/users`, userRoutes);
router.use(`${prefix}/customers`, customerRoutes);
router.use(`${prefix}/ambassador-levels`, ambassadorLevelRoutes);
router.use(`${prefix}/currencies`, currencyRoutes);
router.use(`${prefix}/projects`, projectRoutes);
router.use(`${prefix}/sales-statuses`, salesStatusRoutes);
router.use(`${prefix}/menus`, menuRoutes);
router.use(`${prefix}/deposit-records`, depositRecordRoutes);
router.use(`${prefix}/withdrawals`, withdrawalRoutes);
router.use(`${prefix}/withdrawal-records`, withdrawalRecordRoutes);
router.use(`${prefix}/transaction-records`, transactionRecordRoutes);
router.use(`${prefix}/tasklists`, tasklistRoutes);
router.use(`${prefix}/customer-tasks`, customerTaskRoutes);
router.use(`${prefix}/daily-check-in`, dailyCheckInRoutes);
router.use(`${prefix}/perform-task`, performTaskRoutes);

// API info
router.get(prefix, (req, res) => {
  res.json({
    success: true,
    message: "Giga Backend API",
    version: "1.0.0",
    endpoints: {
      health: `${prefix}/health`,
      users: `${prefix}/users`,
      customers: `${prefix}/customers`,
      ambassadorLevels: `${prefix}/ambassador-levels`,
      currencies: `${prefix}/currencies`,
      projects: `${prefix}/projects`,
      salesStatuses: `${prefix}/sales-statuses`,
      menus: `${prefix}/menus`,
      depositRecords: `${prefix}/deposit-records`,
      withdrawals: `${prefix}/withdrawals`,
      withdrawalRecords: `${prefix}/withdrawal-records`,
      transactionRecords: `${prefix}/transaction-records`,
      tasklists: `${prefix}/tasklists`,
      customerTasks: `${prefix}/customer-tasks`,
      dailyCheckIn: `${prefix}/daily-check-in`,
      performTask: `${prefix}/perform-task`,
    },
  });
});

export default router;
