import { Router } from "express";
import User from "../models/User";
import Park from "../models/Park";
import Packages from "../models/Packages";
import Organization from "../models/Organization";

const router = Router();

//Ejemplos
router.get("/", (req, res) => {
  res.send("Guardado");
});

router.get("/about", (req, res) => {
  res.send("about");
});

//Users

router.get("/user", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

router.post("/user", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//Park

router.get("/park", async (req, res) => {
    try {
      const parks = await Park.find({});
      res.status(200).json(parks);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });
router.post("/park", async (req, res) => {
  try {
    const { name, departament, city, ubication, schedule } = req.body;
    const park = new Park({ name, departament, city, ubication, schedule });
    await park.save();
    res.status(200).json(park);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//Packages

router.get("/packages", async (req, res) => {
    try {
      const packages = await Packages.find({});
      res.status(200).json(packages);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });

router.post("/packages", async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const packages = new Packages({ name, description, price });
    await packages.save();
    res.status(200).json(packages);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//Organization


router.get("/organization", async (req, res) => {
    try {
      const organizations= await Organization.find({});
      res.status(200).json(organizations);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });

router.post("/organization", async (req, res) => {
  try {
    const { name, description, nit, url } = req.body;
    const organization = new Organization({ name, description, nit, url });
    await organization.save();
    res.status(200).json({ organization });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

export default router;
