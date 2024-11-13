import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import React, { useState } from 'react';
import { generateOrderId } from '../Utils/OrderUtils';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: number;
  onSuccess: (orderId: string) => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ isOpen, onClose, amount, onSuccess }) => {
  const [selectedMethod, setSelectedMethod] = useState<string>('');

  const handlePayment = async () => {
    // In a real application, integrate with actual payment gateways
    const orderId = generateOrderId();
    
    // Simulate payment processing
    setTimeout(() => {
      onSuccess(orderId);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-6">Choose Payment Method</h2>

            <div className="space-y-4 mb-6">
              {['UPI', 'Razorpay', 'Paytm', 'PhonePe', 'Card'].map((method) => (
                <button
                  key={method}
                  onClick={() => setSelectedMethod(method)}
                  className={`w-full p-4 rounded-lg border-2 transition-colors ${
                    selectedMethod === method
                      ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                      : 'border-gray-200 dark:border-gray-700 hover:border-indigo-600'
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>

            <div className="border-t pt-4 dark:border-gray-700">
              <div className="flex justify-between mb-4">
                <span className="font-semibold">Total Amount:</span>
                <span className="font-bold">${amount.toFixed(2)}</span>
              </div>

              <button
                onClick={handlePayment}
                disabled={!selectedMethod}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white py-3 rounded-lg transition-colors"
              >
                Pay Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;