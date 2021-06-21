const { Router } = require("express");
const basicMiddlewares = require("../middlewares/basicMiddlewares");
const contestController = require("../controllers/contestController");
const checkToken = require("../middlewares/checkToken");
const upload = require("../utils/fileUpload");
const contestRouter = Router();
contestRouter.get(
  "/creativesContests",
  basicMiddlewares.onlyForCreative,
  contestController.getContests
);
// /api/contests
contestRouter.get(
  "/:contestId",
  basicMiddlewares.canGetContest,
  contestController.getContestById
);
contestRouter.put(
  "/:contestId",
  upload.updateContestFile,
  contestController.updateContest
);
module.exports = contestRouter;
