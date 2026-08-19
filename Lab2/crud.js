import readline from "readline/promises";
import { writeFile, readFile } from "fs/promises";
import { stdin, stdout } from "process";

const FILE = "products.json";

// Save cart
const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2));
};

// Get cart
const getCart = async () => {
  try {
    const data = await readFile(FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
};

// Add item
const addToCart = async (item) => {
  const cart = await getCart();

  // Check duplicate ID
  if (cart.some((product) => product.id === item.id)) {
    console.log("⚠️ Product ID already exists!");
    return;
  }

  cart.push(item);
  await saveCart(cart);
  console.log("✅ Item added successfully!");
};

// Show cart
const showCart = async () => {
  const cart = await getCart();

  if (cart.length === 0) {
    console.log("🛒 Cart is empty!");
    return;
  }

  console.log("🛒 Your Cart:");
  console.table(cart);
};

// Delete item
const deleteFromCart = async (id) => {
  const cart = await getCart();

  const exists = cart.some((item) => item.id === id);

  if (!exists) {
    console.log(`⚠️ Item with id ${id} not found.`);
    return;
  }

  const newCart = cart.filter((item) => item.id !== id);

  await saveCart(newCart);
  console.log(`❌ Item with id ${id} removed.`);
};

// Update quantity
const updateCart = async (id, qty) => {
  const cart = await getCart();

  const exists = cart.some((item) => item.id === id);

  if (!exists) {
    console.log(`⚠️ Item with id ${id} not found.`);
    return;
  }

  const newCart = cart.map((item) =>
    item.id === id ? { ...item, qty } : item
  );

  await saveCart(newCart);
  console.log(`🔄 Quantity updated for id ${id}.`);
};

// Main menu
const main = async () => {
  const cin = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  let choice;

  do {
    console.log("\n🛍️ Welcome to Shopping Cart");
    console.log("1 ------- Add to cart");
    console.log("2 ------- Show Cart");
    console.log("3 ------- Remove Item");
    console.log("4 ------- Update Quantity");
    console.log("5 ------- Checkout");

    choice = await cin.question("Enter your choice: ");

    switch (Number(choice)) {
      case 1: {
        const data = await cin.question(
          "Enter id,name,price,qty: "
        );

        const [id, name, price, qty] = data
          .split(",")
          .map((x) => x.trim());

        const product = {
          id: Number(id),
          name,
          price: Number(price),
          qty: Number(qty),
        };

        if (
          !Number.isFinite(product.id) ||
          !Number.isFinite(product.price) ||
          !Number.isFinite(product.qty)
        ) {
          console.log("⚠️ Invalid product details!");
          break;
        }

        await addToCart(product);
        break;
      }

      case 2:
        await showCart();
        break;

      case 3: {
        const id = await cin.question(
          "Enter product id to remove: "
        );

        await deleteFromCart(Number(id));
        break;
      }

      case 4: {
        const data = await cin.question(
          "Enter id,newQty: "
        );

        const [id, qty] = data
          .split(",")
          .map((x) => x.trim());

        if (!Number.isFinite(Number(qty)) || Number(qty) < 0) {
          console.log("⚠️ Invalid quantity!");
          break;
        }

        await updateCart(Number(id), Number(qty));
        break;
      }

      case 5:
        console.log("See you later... 😃");
        cin.close();
        return;

      default:
        console.log("🛑 Invalid choice! Try again.");
    }
  } while (choice !== "5");
};

main();