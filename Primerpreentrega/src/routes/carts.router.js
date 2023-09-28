import { Router } from "express";
import { CartsManager } from "../CartsManager";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const carts = await manager.getCarts(req.query);
    if (!carts.lenght) {
      return res.status(200).json({ message: "No carts" });
    }
    res.status(200).json({ message: "Carts found", carts });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post("/:idCart", async (req, res) => {
  const { idCart } = req.params;
  try {
    const cart = await manager.getCartById(+idCart);
    if (!cart) {
      return res
        .status(404)
        .json({ message: "Cart not found with the id provided" });
    }
    res.status(200).json({ message: "Cart found", cart });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.post("/:idCart/product/:idProduct", async (req, res) => {
  const { idCart, idProduct } = req.params;
  try {
    if (!idCart || !idProduct)
      return res.status(401).send("Missing parameters");
    const cart = await CartsManager.addProductToCart(idCart, idProduct);
    res.status(200).json({ message: "Product add", cart: cart });
  } catch (e) {}
});

export default router;
