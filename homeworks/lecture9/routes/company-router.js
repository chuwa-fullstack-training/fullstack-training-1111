const express = require("express");
const {
  createCompany,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
  getAllCompanies,
} = require("../controllers/company");
const router = express.Router();

router.post("/", createCompany);
router.get("/:id", getCompanyById);
router.put("/:id", updateCompanyById);
router.delete("/:id", deleteCompanyById);
router.get("/", getAllCompanies);

module.exports = router;
