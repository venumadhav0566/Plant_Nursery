# 🌿 GreenLeaf Plant Nursery

A modern and responsive **Plant Nursery E-Commerce Website** built using **HTML, CSS, and JavaScript**.

GreenLeaf allows users to explore plants, filter products by category, search for plants, add products to a cart or wishlist, buy plants instantly, and choose between UPI and Cash on Delivery demo payment options.

---

## 🌱 Project Overview

**GreenLeaf Plant Nursery** is designed to make online plant shopping simple and user-friendly.

The website provides:

* 🌿 Indoor plants
* 🌳 Outdoor plants
* 🌺 Flowering plants
* 🌵 Succulents
* 🛒 Shopping cart
* ❤️ Wishlist
* 🔎 Plant search
* 🏷️ Category filtering
* ⚡ Buy Now
* 📱 UPI payment demo
* 💵 Cash on Delivery
* 📧 Newsletter subscription
* 📩 Contact form
* 📱 Responsive design

## The homepage includes navigation, plant categories, product cards, about section, newsletter subscription, contact form, and footer information.

## ✨ Features

### 🏠 Home Page

* Attractive plant-themed hero section
* "Shop Plants" button
* "Explore Categories" button
* Responsive navigation bar

### 🌿 Plant Categories

Users can browse plants by:

* Indoor
* Outdoor
* Flowering
* Succulent

Category filtering is implemented using JavaScript.

### 🛍️ Products

The project currently contains sample products such as:

| Product     | Category  | Price |
| ----------- | --------- | ----: |
| Snake Plant | Indoor    |  ₹399 |
| Money Plant | Indoor    |  ₹249 |
| Areca Palm  | Outdoor   |  ₹599 |
| Rose Plant  | Flowering |  ₹299 |
| Aloe Vera   | Succulent |  ₹199 |
| Hibiscus    | Flowering |  ₹349 |

## Each product provides **Add to Cart**, **Buy Now**, and **Wishlist** functionality.

## 🛒 Shopping Cart

Users can:

* Add plants to cart
* Increase product quantity
* View cart items
* Remove products
* View total price
* Proceed to checkout

The JavaScript cart maintains product name, price, and quantity.

---

## ❤️ Wishlist

Users can add plants to their wishlist and view the wishlist count.

The wishlist prevents the same plant from being added multiple times.

---

## 💳 Payment Demo

The checkout interface supports:

### 📱 UPI

* Google Pay
* PhonePe
* Paytm
* UPI ID input

### 💵 Cash on Delivery

Users can select Cash on Delivery and place a demo order.

> ⚠️ **Important:** The UPI implementation is only a frontend demo. It does **not actually transfer money or connect to a payment gateway**.

For a production website, integrate a secure payment gateway such as Razorpay, Stripe, or another supported provider through a backend.

---

## 🔎 Search

Users can search for plants by name using the search box.

The JavaScript searches product names dynamically and displays matching products.

---

## 📧 Newsletter

Users can enter their email address to subscribe for:

* Plant care tips
* Gardening information
* Special offers

The current implementation provides frontend validation and a demo success message.

---

## 📩 Contact Form

The contact section includes:

* Name
* Email
* Subject
* Message

The form currently uses JavaScript to display a successful submission message.

---

## 🎨 UI & Design

The website uses:

* HTML5
* CSS3
* JavaScript
* Google Poppins Font
* Font Awesome icons
* Responsive CSS
* CSS Grid
* Flexbox
* Modal dialogs
* Hover animations

## The styling uses a green/nature-inspired theme and responsive layouts for desktop, tablet, and mobile devices.

## 📂 Project Structure

```text
GreenLeaf-Plant-Nursery/
│
├── index.html
├── style.css
├── script.js
│
└── README.md
```

### `index.html`

Contains the complete website structure, including:

* Navbar
* Hero section
* Categories
* Products
* About section
* Newsletter
* Contact
* Footer
* Cart modal
* Payment modal

### `style.css`

Contains:

* Website layout
* Colors
* Typography
* Buttons
* Product cards
* Cart styling
* Payment modal
* Responsive design

### `script.js`

Contains:

* Cart functionality
* Wishlist functionality
* Product filtering
* Search
* Buy Now
* UPI demo
* COD demo
* Newsletter
* Contact form
* Modal handling

---

## 🚀 How to Run

### 1. Clone the Repository

```bash
git clone https://github.com/venumadhav0566/Plant_Nursery/tree/main
```

### 2. Open the Project

```bash
cd Plant Nursery-Plant-Nursery
```

### 3. Run the Website

Simply open:

```text
index.html
```

in your browser.

### Recommended

Use **Visual Studio Code** with the **Live Server** extension.

Right-click:

```text
index.html
```

and select:

```text
Open with Live Server
```

---

## 🧑‍💻 Technologies Used

| Technology   | Purpose                       |
| ------------ | ----------------------------- |
| HTML5        | Website structure             |
| CSS3         | Styling and responsive layout |
| JavaScript   | Interactive functionality     |
| Google Fonts | Poppins typography            |
| Font Awesome | Icons                         |

---

## 📱 Responsive Design

The website is designed for:

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

CSS media queries adjust the navigation, product grid, categories, hero section, newsletter, and footer for smaller screens.

---

## 🔮 Future Improvements

The project can be upgraded into a complete full-stack e-commerce application by adding:

* 👤 User Registration & Login
* 🔐 Authentication
* 🗄️ MySQL Database
* 🐍 Python Flask Backend
* 👨‍💼 Admin Dashboard
* 📦 Inventory Management
* 🌱 Plant Management
* 🧾 Order Management
* 💳 Real Payment Gateway
* 🚚 Order Tracking
* 📧 Email Notifications
* ⭐ Product Reviews
* 📍 Address Management
* 📊 Sales Analytics
* 🔔 Admin Notifications

---

## 👨‍💼 Admin Dashboard — Future Version

A future admin panel can provide:

```text
Admin Dashboard
│
├── Dashboard
├── Products
│   ├── Add Product
│   ├── Edit Product
│   └── Delete Product
│
├── Categories
├── Orders
├── Customers
├── Payments
├── Inventory
├── Reviews
├── Sales Reports
└── Settings
```

---

## 🔐 Security Note

This project is currently a **frontend demonstration**.

The payment functionality does not process real payments, and the contact/newsletter forms do not store data in a backend database.

For production deployment:

* Use HTTPS
* Add backend authentication
* Validate data server-side
* Store passwords securely
* Use a real database
* Integrate a certified payment gateway
* Never expose payment secrets/API keys in frontend JavaScript

---

## 📸 Project Sections

The website includes:

```text
Home
  ↓
Categories
  ↓
Popular Plants
  ↓
About GreenLeaf
  ↓
Plant Care Newsletter
  ↓
Contact Us
  ↓
Footer
```

---

## 🌿 Sample Products

### Snake Plant

* Category: Indoor Plant
* Price: ₹399
* Original Price: ₹499
* Rating: ⭐⭐⭐⭐⭐
* Badge: Best Seller

### Money Plant

* Category: Indoor Plant
* Price: ₹249
* Original Price: ₹299

### Areca Palm

* Category: Outdoor Plant
* Price: ₹599
* Original Price: ₹699

### Rose Plant

* Category: Flowering Plant
* Price: ₹299
* Original Price: ₹399
* Badge: New

### Aloe Vera

* Category: Succulent
* Price: ₹199
* Original Price: ₹249

### Hibiscus

* Category: Flowering Plant
* Price: ₹349
* Original Price: ₹449

---

## 🤝 Contributing

Contributions are welcome!

```bash
git fork
git clone
git checkout -b feature/new-feature
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
```

Then create a Pull Request.

---

## 📄 License

This project is created for **educational and demonstration purposes**.

You are free to modify and extend the project for learning and portfolio purposes.

---

## 👨‍💻 Author

**Venu Madhava Reddy**

[**Email**](venumadhavareddy29@gmail.com),

[**GitHub**](https://github.com/venumadhav0566),

[**Linkedin**](https://www.linkedin.com/in/thanneru-venu-madhava-reddy/)

🌿 GreenLeaf Plant Nursery
📍 Bangalore, India

---

## ⭐ Support

If you like this project, please consider giving the repository a ⭐ on GitHub!

```text
🌿 GreenLeaf Plant Nursery
       ↓
   Shop Plants
       ↓
   Add to Cart
       ↓
     Checkout
       ↓
   UPI / COD Demo
```

**Made with ❤️ and 🌿 for plant lovers.**
