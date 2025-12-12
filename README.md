# 🛍️ Product Showcase Website  
A modern, fast, and responsive **Product Showcase Web App** built using **Vite + React + React Router**.  
The platform allows users to browse products, search by name, view detailed product pages, and experience a clean, dark-mode optimized UI.

---

## 🚀 Live Demo  
*(Add your deployed link here — Netlify / Vercel)*  
👉 https://your-product-showcase-demo-link.com

---

## ✨ Features  
- ⚡ **Built with Vite** — extremely fast development & production builds  
- 🎨 **Modern Dark Mode UI** — clean, minimal, professional  
- 🧭 **Client-side routing** using React Router  
- 🔍 **Search products instantly**  
- 📦 **Product details page** with specs, price & image  
- 🖼️ **Local product images support**  
- 🧱 **Modular components & clean folder structure**  
- 🎬 **Smooth animations** (hero, team cards, fade transitions)  
- 📱 **Fully responsive** for mobile, tablet, desktop  
- ❌ Graceful error handling for invalid product IDs  

---

## 📂 Project Structure

src/
├── assets/
│ └── products/
│ ├── aurora.jpg
│ ├── keyboard.jpg
│ ├── lamp.jpg
│ └── chair.jpg
├── components/
│ ├── Layout.jsx
│ └── ProductCard.jsx
├── data/
│ └── products.js
├── pages/
│ ├── Home.jsx
│ ├── Products.jsx
│ ├── ProductDetails.jsx
│ └── About.jsx
├── styles/
│ ├── global.css
│ └── product-card.css
├── App.jsx
└── main.jsx

yaml
Copy code

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| **Vite** | Fast build & development server |
| **React** | UI framework |
| **React Router DOM** | Multi-page navigation |
| **CSS (custom / modules)** | Styling & animations |
| **Local JSON data** | Mock product list |
| **Local Images** | Product images |

---

## 📃 Pages Overview

### 🏠 **Home Page**
- Modern hero section  
- Featured products  
- Smooth animations  
- Introduction to the platform  

---

### 🛍️ **Products Page**
- Displays all products in grid format  
- Search bar for filtering  
- Each card contains title, price, description  
- "View Details" button  

---

### 🔍 **Product Details Page**
- Large image  
- Title, price & full description  
- Specifications list  
- Back to products button  
- Error message if product not found  

---

### 👥 **About Page**
- Company introduction  
- Mission, vision, values  
- Team section with animations  
- Clean layout optimized for readability  

---

## 🔌 Routing Structure

The app uses **React Router v6**:

```jsx
<BrowserRouter>
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/about" element={<About />} />
    </Route>
  </Routes>
</BrowserRouter>
How Dynamic Route Works
/products/:id → Reads URL parameter using useParams()

jsx
Copy code
const { id } = useParams();
const product = products.find(p => p.id === Number(id));
If product not found → show a friendly error message.

📦 Installation & Running the Project
1️⃣ Clone the repo
bash
Copy code
git clone https://github.com/your-username/product-showcase.git
cd product-showcase
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Start development server
bash
Copy code
npm run dev
4️⃣ Build for production
bash
Copy code
npm run build
💡 How to Add a New Product
Go to:
src/data/products.js

Add a new object:

js
Copy code
{
  id: 5,
  title: "New Product",
  price: 999,
  description: "A great new product.",
  category: "Electronics",
  imageUrl: "/src/assets/products/new-product.jpg",
  specs: ["Spec 1", "Spec 2"]
}
Add your new product image into:
src/assets/products/

🎯 Future Enhancements (Optional)
🛒 Add to Cart functionality

⭐ Product rating & reviews

🎞️ Image slider on details page

🔎 Advanced product filters (Category, Price range)

🌐 Backend API integration

👤 Login & User Dashboard

🛢️ Database + Admin Panel

📸 Screenshots
(Add your screenshots here)

Example:

scss
Copy code
![Home Page](screenshots/home.png)
![Products Page](screenshots/products.png)
![Details Page](screenshots/details.png)
