import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
  return (
    <div className="px-4 mb-64">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#eb5651]">Our Pencils</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Sharpened Pencil Card */}
          <div className="border border-2 border-[#fb9692] rounded-lg  p-6 ">
            <div className="flex justify-center mb-6">
              <svg viewBox="0 0 240 80" className="w-48 h-48">
                {/* Wood Grain Pattern */}
                <defs>
                  <pattern id="wood" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M0 0 L10 0 L10 10 L0 10 Z" fill="#DAA520"/>
                    <path d="M2 2 Q5 5 8 2" stroke="#B8860B" fill="none" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                
                {/* Pencil Body */}
                <path d="M200 40 L50 40 L60 30 L190 30 Z" fill="#FFD700"/>
                <path d="M200 40 L50 40 L60 50 L190 50 Z" fill="url(#wood)"/>
                
                {/* Pencil Tip Detail */}
                <path d="M50 40 L30 35 L30 45 Z" fill="#4A4A4A"/>
                <path d="M50 40 L40 37.5 L40 42.5 Z" fill="#808080"/>
                <path d="M34 39 L31 40 L34 41" fill="#2F2F2F"/>
                
                {/* Ferrule (Metal Band) */}
                <path d="M200 30 L190 30 L190 50 L200 50 Z" fill="#C0C0C0"/>
                <path d="M198 31 L192 31 L192 49 L198 49 Z" fill="#A8A8A8"/>
                
                {/* Eraser */}
                <path d="M210 30 L200 30 L200 50 L210 50 Z" fill="#FFA07A"/>
                <path d="M208 32 L202 32 L202 48 L208 48 Z" fill="#FF8C69"/>
                
                {/* Pencil Branding */}
                <text x="80" y="42" fill="#B8860B" fontSize="8" fontFamily="Arial">No.2 PREMIUM</text>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Premium Sharpened Pencils</h2>
            <p className="text-gray-600 mb-4">Ready to write! Pre-sharpened for immediate use.</p>
            <div className="flex items-center justify-between">
              <div className="text-lg">
                <span className="line-through text-gray-400">RS. 250</span>
                <span className="ml-2 font-bold text-green-600">RS. 100</span>
                <span className="text-sm text-gray-600">/dozen</span>
              </div>
              <button className="bg-[#fb9692] text-white px-4 py-2 rounded-lg hover:bg-[#ee7e7a] transition-colors">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Unsharpened Pencil Card */}
          <div className="border border-2 border-[#fb9692] rounded-lg  p-6 ">
            <div className="flex justify-center mb-6">
              <svg viewBox="0 0 240 80" className="w-48 h-48">
                {/* Wood Grain Pattern */}
                <defs>
                  <pattern id="wood2" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M0 0 L10 0 L10 10 L0 10 Z" fill="#DAA520"/>
                    <path d="M2 2 Q5 5 8 2" stroke="#B8860B" fill="none" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                
                {/* Pencil Body */}
                <path d="M30 40 L180 40 L180 30 L40 30 Z" fill="#FFD700"/>
                <path d="M30 40 L180 40 L180 50 L40 50 Z" fill="url(#wood2)"/>
                
                {/* Flat End with Wood Texture */}
                <path d="M180 30 L190 30 L190 50 L180 50 Z" fill="#B8860B"/>
                <path d="M180 32 L188 32 L188 48 L180 48 Z" fill="#DAA520"/>
                <path d="M182 34 L186 34 L186 46 L182 46" fill="#CD853F"/>
                
                {/* Ferrule (Metal Band) */}
                <path d="M30 30 L40 30 L40 50 L30 50 Z" fill="#C0C0C0"/>
                <path d="M32 31 L38 31 L38 49 L32 49 Z" fill="#A8A8A8"/>
                
                {/* Eraser */}
                <path d="M20 30 L30 30 L30 50 L20 50 Z" fill="#FFA07A"/>
                <path d="M22 32 L28 32 L28 48 L22 48 Z" fill="#FF8C69"/>
                
                {/* Pencil Branding */}
                <text x="60" y="42" fill="#B8860B" fontSize="8" fontFamily="Arial">No.2 CLASSIC</text>
                
                {/* Subtle Highlights */}
                <path d="M40 32 L170 32" stroke="#FFE5B4" strokeWidth="0.5" opacity="0.5"/>
                <path d="M40 48 L170 48" stroke="#8B6914" strokeWidth="0.5" opacity="0.5"/>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">Classic Unsharpened Pencils</h2>
            <p className="text-gray-600 mb-4">Fresh and pristine, ready to be sharpened your way.</p>
            <div className="flex items-center justify-between">
              <div className="text-lg">
                <span className="line-through text-gray-400">RS. 250</span>
                <span className="ml-2 font-bold text-green-600">RS. 100</span>
                <span className="text-sm text-gray-600">/dozen</span>
              </div>
              <button className="bg-[#fb9692] text-white px-4 py-2 rounded-lg hover:bg-[#ee7e7a] transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;