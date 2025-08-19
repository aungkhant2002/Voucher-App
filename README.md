# Voucher App 🎟️

A React-based web application for managing **products**, **sales**, and **vouchers**, designed to help small businesses streamline daily operations.

👉 **Live demo:** https://voucher-app-one.vercel.app/

---

## 📌 Features

- **Product Management** – Add, edit, delete products with validation and loader states
- **Sales Management** – Add sale records dynamically
- **Voucher System** – Auto-generate unique voucher ID (`V-YYMMDD-XXXX`), enter customer data, and confirm voucher
- **UX Enhancements** – Skeleton loaders, empty states, toast notifications, LDRS animated loaders

---

## 🛠 Tech Stack

| Purpose             | Technology                     |
|--------------------|----------------------------------|
| Frontend Framework | React + Vite                     |
| Styling            | Tailwind CSS, Flowbite           |
| Forms              | react-hook-form                  |
| Routing            | react-router-dom                 |
| Data Fetching      | SWR + fetch                      |
| Loaders            | ldrs (Tailspin/Bouncy)           |
| Toasts             | react-hot-toast                 |
| Mock API           | json-server                      |

---


---

## ⚙️ Getting Started (Frontend)

```bash
# 1. Clone repository
git clone https://github.com/aungkhant2002/voucher-app.git
cd voucher-app

# 2. Install packages
npm install

# 3. Setup environment
# Create a file named .env at the project root and add your API base URL
VITE_API_URL=https://your-api.up.railway.app

# 4. Run frontend
npm run dev