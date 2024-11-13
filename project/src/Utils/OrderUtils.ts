export const generateOrderId = () => {
    const timestamp = Date.now().toString();
    const random = Math.random().toString(36).substring(2, 8).toUpperCase();
    return `CB-${timestamp.slice(-6)}${random}`;
  };
  
  export const generateReceiptHtml = (
    orderId: string,
    items: Array<{ name: string; quantity: number; price: number }>,
    subtotal: number,
    discount: number,
    total: number,
    couponCode?: string
  ) => {
    const itemsHtml = items
      .map(
        (item) => `
        <tr>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>$${item.price.toFixed(2)}</td>
          <td>$${(item.price * item.quantity).toFixed(2)}</td>
        </tr>
      `
      )
      .join('');
  
    return `
      <div style="max-width: 800px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
        <h1 style="text-align: center; color: #4F46E5;">Campus Bites</h1>
        <div style="text-align: right; margin-bottom: 20px;">
          <strong>Order ID:</strong> ${orderId}<br>
          <strong>Date:</strong> ${new Date().toLocaleString()}
        </div>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
          <thead>
            <tr style="background-color: #f3f4f6;">
              <th style="padding: 10px; text-align: left;">Item</th>
              <th style="padding: 10px; text-align: left;">Quantity</th>
              <th style="padding: 10px; text-align: left;">Price</th>
              <th style="padding: 10px; text-align: left;">Total</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>
        <div style="text-align: right;">
          <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
          ${couponCode ? `<p><strong>Coupon Applied:</strong> ${couponCode}</p>` : ''}
          ${discount > 0 ? `<p><strong>Discount:</strong> -$${discount.toFixed(2)}</p>` : ''}
          <p style="font-size: 1.2em;"><strong>Total:</strong> $${total.toFixed(2)}</p>
        </div>
        <div style="margin-top: 40px; text-align: center; color: #666;">
          <p>Thank you for your order!</p>
          <p>Your order will be ready for pickup in 15-20 minutes.</p>
        </div>
      </div>
    `;
  };