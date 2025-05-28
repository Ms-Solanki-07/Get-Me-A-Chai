# Get-Me-A-Chai

Get-Me-A-Chai is a web application that allows users to receive payments (like "buy me a coffee", but for chai!) from supporters. Users can create a profile, share their page, and receive payments with personalized messages via Razorpay.

## 🧩 Features

- User authentication with NextAuth (supports GitHub and more)
- Personalized user pages (e.g. `/username`)
- Secure payment integration with Razorpay
- Supporters can leave messages with their payments
- Dashboard for users to view and manage their payments
- Responsive UI built with React and Tailwind CSS
- Toast notifications for payment status

## ⚙️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [React](https://react.dev/)
- [MongoDB](https://www.mongodb.com/) (via Mongoose)
- [Razorpay](https://razorpay.com/) (for payments)
- [NextAuth.js](https://next-auth.js.org/) (for authentication)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB database
- Razorpay account (for API keys)

### 🔧 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ms-Solanki-07/Get-Me-A-Chai.git
   cd Get-Me-A-Chai
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env.local` file in the root directory and add:

   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_SECRET=your_nextauth_secret
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret
   NEXT_PUBLIC_KEY_ID=your_razorpay_key_id
   ```

   > **Note:** Never expose your Razorpay key secret on the client.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000) in your browser.**

## Usage

- Sign in with GitHub (or other providers if enabled).
- Set up your profile and Razorpay credentials.
- Share your unique page link with supporters.
- Supporters can send you a chai (payment) and leave a message.
- View your supporters and payments on your dashboard.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---
## ✍️ Authors <a name = "authors"></a>

- Ms Solanki - [GitHub](https://github.com/Ms-Solanki-07)

---
## 🎉 Connect with me <a name = "follow-us"></a>
Stay connected and get the latest updates:
- LinkedIn: https://www.linkedin.com/in/ms-solanki-07-ms/
- Twitter: https://x.com/Ms_Solanki_07
- GitHub: https://github.com/Ms-Solanki-07
- Instagram: https://www.instagram.com/ms_solanki_07
---