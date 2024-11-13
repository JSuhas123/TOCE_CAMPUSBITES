import { Apple, Clock, Facebook, Heart, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<string | null>(null);
  

  const timings = [
    { day: 'Monday - Friday', hours: '7:30 AM - 9:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '9:00 AM - 4:00 PM' },
  ];

  const popularItems = [
    { name: 'Grilled Chicken Salad', calories: 350, protein: '25g' },
    { name: 'Quinoa Bowl', calories: 420, protein: '18g' },
    { name: 'Protein Smoothie', calories: 280, protein: '20g' },
    { name: 'Veggie Wrap', calories: 310, protein: '15g' },
  ];

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = parseFloat(height) / 100;
      const bmiValue = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
    }
  };

  const getBMICategory = (bmiValue: number) => {
    if (bmiValue < 18.5) return 'Underweight';
    if (bmiValue < 25) return 'Normal weight';
    if (bmiValue < 30) return 'Overweight';
    return 'Obese';
  };

  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Campus Bites</h3>
            <p className="text-gray-200">Serving delicious moments to our campus community since 2023</p>
            <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="hover:text-gray-300 transition-colors">
                <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.twitter.com" className="hover:text-gray-300 transition-colors">
                <Twitter className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com" className="hover:text-gray-300 transition-colors">
                <Instagram className="w-6 h-6" />
            </a>
            </div>
          </div>

          {/* Nutrition Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Apple className="w-5 h-5 mr-2" />
              Popular Items Nutrition
            </h4>
            <div className="space-y-2">
              {popularItems.map((item) => (
                <div key={item.name} className="bg-white/10 p-2 rounded-md">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-200">
                    Calories: {item.calories} | Protein: {item.protein}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* BMI Calculator */}
          <div className="bg-white/10 p-4 rounded-lg">
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              BMI Calculator
            </h4>
            <div className="space-y-3">
              <input
                type="number"
                placeholder="Height (cm)"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-3 py-2 bg-white/20 rounded-md placeholder-gray-300"
              />
              <input
                type="number"
                placeholder="Weight (kg)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-3 py-2 bg-white/20 rounded-md placeholder-gray-300"
              />
              <button
                onClick={calculateBMI}
                className="w-full bg-white text-indigo-600 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                Calculate BMI
              </button>
              {bmi && (
                <div className="mt-2 text-center">
                  <p className="font-bold">Your BMI: {bmi}</p>
                  <p className="text-sm">({getBMICategory(parseFloat(bmi))})</p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-2">
              <p className="flex items-center text-gray-200">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+1234567890" className="hover:underline">
                  (123) 456-7890
                </a>
              </p>
              <p className="flex items-center text-gray-200">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:info@campusbites.com" className="hover:underline">
                  info@campusbites.com
                </a>
              </p>
              <p className="flex items-center text-gray-200">
                <MapPin className="w-5 h-5 mr-2" />
                Student Center, Floor 2
              </p>
              <div className="pt-4">
                <h5 className="font-semibold flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Hours
                </h5>
                {timings.map((timing) => (
                  <p key={timing.day} className="text-sm text-gray-200">
                    {timing.day}: {timing.hours}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-300/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-200">
                © {currentYear} Campus Bites. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <p className="text-sm">Get our mobile app:</p>
              <div className="flex space-x-4">
                <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  App Store
                </button>
                <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                  Play Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;