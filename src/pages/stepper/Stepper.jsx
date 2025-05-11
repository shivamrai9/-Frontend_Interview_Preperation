import React from 'react'
import CheckoutStepper from '../../components/stepper/CheckoutStepper'

const stepsConfig = [
  {
    name: "Cart",
    Component: () => (
      <div className="p-4 border rounded">🛒 Review your cart items.</div>
    ),
  },
  {
    name: "Shipping",
    Component: () => (
      <div className="p-4 border rounded">📦 Enter your shipping details.</div>
    ),
  },
  {
    name: "Payment",
    Component: () => (
      <div className="p-4 border rounded">💳 Choose your payment method.</div>
    ),
  },
  {
    name: "Review",
    Component: () => (
      <div className="p-4 border rounded">
        ✅ Review and confirm your order.
      </div>
    ),
  },
];

const Stepper = () => {
  return (
    <div className="min-h-full bg-gray-800">
      <h1 className="text-3xl font-semibold text-center py-6">
        🧾 Checkout Process
      </h1>
      <CheckoutStepper stepsConfig={stepsConfig} />
    </div>
  );
}

export default Stepper