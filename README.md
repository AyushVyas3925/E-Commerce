# ShopZone - Premium E-Commerce SPA

A sleek, responsive, and dynamic Single Page Application (SPA) built with React, React Router, and the Context API. It features product browsing, detailed views, global cart state management, and a premium glassmorphic UI.

---

## 📑 Table of Contents
- [Preview](#-preview)
- [Demo](#-demo)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Installation](#-installation)
- [Usage](#-usage)
- [How It Works](#-how-it-works)
- [Responsive Design](#-responsive-design)
- [Acknowledgments](#-acknowledgments)
- [Contact](#-contact)

---

## 📸 Preview

| Desktop View |
|:---:|
| ![Desktop View](Screenshots/desktop-preview.png) |


---

## 🚀 Demo
Check out the live version here:  
👉 **[Live Demo Link](https://shop-zone-eta.vercel.app/)** 

---

## ✨ Features

- 🛒 **Dynamic E-Commerce Front**: Browse curated products fetching in real-time.
- 🔗 **Single Page Routing**: Seamless page transitions without reloading using React Router v6.
- 📦 **Global State Management**: Context API powers the shopping cart ensuring it's accessible anywhere.
- 🎨 **Premium UI**: Features a modern, dark-themed, glassmorphism-inspired design with smooth animations.
- 📱 **Fully Responsive**: Adapts elegantly across desktop and mobile screens using CSS Grid and Flexbox.
- 🔍 **Detailed Views**: Click on any product to see full descriptions, ratings, and larger imagery.
- 🛍️ **Interactive Cart**: Instantly add items, watch the Navbar badge update, and review your total order summary.

---

## 🛠 Technologies Used

-   **React**: Component-based UI library for building interactive interfaces.
-   **React Router v6**: For handling client-side routing (`BrowserRouter`, `Routes`, `Route`).
-   **Context API**: Built-in React tool for managing global state (Cart).
-   **Vite**: Next-generation frontend tooling for amazingly fast dev environment.
-   **Vanilla CSS**: Custom styling, grid layouts, animations, and glass effects.
-   **Lucide React**: For sleek, scalable SVG icons.
-   **DummyJSON API**: Providing realistic mock product data.

---

## 🚀 Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/AyushVyas3925/shopzone.git
    cd shopzone
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    # Also ensure router and icons are installed
    npm install react-router-dom lucide-react
    ```

3.  **Run the Development Server**:
    ```bash
    npm run dev
    ```
    *   The app will launch at `http://localhost:5173` (or similar).

4.  **Build for Production**:
    ```bash
    npm run build
    ```

---

## 📖 Usage

1.  **Browse Shop**: Review the curated collection of items fetched from the API.
2.  **View Details**: Click "View Details" on any card to navigate to its dedicated informational page.
3.  **Add to Cart**: Click the "Add to Cart" button on the product details page. Notice the Navbar badge count increments.
4.  **Review Cart**: Click the Cart icon in the Navbar to see your selected items and total order price.
5.  **Remove Items**: Use the specific "Remove" buttons to delete items from your current cart session.

---

## 🧠 How It Works

1.  **Component Architecture**: Split into `App.jsx` (Routing container), `pages/` (Views tied to URLs), and `components/` (Reusable UI chunks like Navbar).
2.  **State Management**: `CartContext.jsx` creates a global provider wrapped around the application in `main.jsx`. Elements use the `useCart()` custom hook to read or update the cart.
3.  **Data Fetching**: The `useEffect` hook runs on component mount (`Shop` and `ProductDetails`) to asynchronously request JSON data from the DummyJSON API.
4.  **Dynamic Routing**: The `ProductDetails` component leverages `useParams()` to grab the product `ID` out of the URL string and fetch exactly that item.
5.  **Styling**: Pure CSS handles layout logic via Grid (for the catalog layout) and Flexbox (for the cart summary and individual cards).

---

## 📱 Responsive Design

-   **Mobile**: The product grid drops to single-column layouts. The two-column Cart layout stacks vertically allowing easy scrolling.
-   **Desktop**: The interface expands using CSS Grid auto-fill rules allowing beautiful repeating patterns of product cards.
-   **Adaptive**: Glassmorphism backdrops, font sizes, and button padding dynamically adjust to remain highly legible and "tap-friendly".

---

## 👏 Acknowledgments

-   **DummyJSON**: For an incredibly easy-to-use e-commerce API.
-   **Vite**: For the unparalleled local development speed.
-   **React Router Team**: For providing seamless declarative routing.
-   **Lucide React**: For beautiful open-source iconography.

---

## 📬 Contact

**Ayush Vyas**

-   📧 Email: s.ayushvyas3925@gmail.com
-   🔗 LinkedIn: [Ayush Vyas](https://www.linkedin.com/in/ayush-vyas-287980286/)

---
*Created for the Week 6 Project.*
