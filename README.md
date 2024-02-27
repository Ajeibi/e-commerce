**README.md**

# E-Commerce Website with React, Commerce.js, and Stripe Payment Integration

## Overview
This repository contains the code for an E-Commerce website built using React.js, Commerce.js, and integrated with Stripe for payment processing. The website allows users to browse products, add them to their cart, and proceed with checkout using Stripe's secure payment gateway.

## Features
- **Product Listing:** Browse a variety of products available for purchase.
- **Product Details:** View detailed information about each product.
- **Shopping Cart:** Add products to the cart and manage quantities before checkout.
- **Checkout:** Securely process payments using Stripe's payment gateway.
- **Responsive Design:** Ensures the website is accessible and functional across different devices.

## Getting Started
1. **Clone the Repository:**
    ```
    git clone https://github.com/Ajeibi/e-commerce
    ```

2. **Install Dependencies:**
    ```
    cd e-commerce-website
    npm install
    ```

3. **Set up Commerce.js:**
    - Sign up for an account on [Commerce.js](https://commercejs.com/) and obtain your API key.
    - Replace `YOUR_COMMERCE_JS_API_KEY` in `src/lib/commerce.js` with your actual API key.

4. **Set up Stripe:**
    - Sign up for an account on [Stripe](https://stripe.com/) and obtain your API keys.
    - Replace `YOUR_STRIPE_PUBLIC_KEY` in `src/components/CheckoutForm/CheckoutForm.jsx` with your actual publishable key.

5. **Run the Application:**
    ```
    npm start
    ```

## Important Note
Please be aware that the Commerce.js API key provided with the free version expires after 7 days. As a result, the products on the website cannot be displayed once the token is expired because we are unable to make API calls to fetch product data. Hosting this website may not be feasible for a prolonged period without upgrading to a paid version of Commerce.js.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
- [React.js](https://reactjs.org/)
- [Commerce.js](https://commercejs.com/)
- [Stripe](https://stripe.com/)

## Project Owner
This project belongs to Oche (Ajeibi). You can find more of my work on [GitHub](http://github.com/Ajeibi).
