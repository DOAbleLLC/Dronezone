// src/components/ui/navigation-menu.tsx
import React from 'react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

// NavigationMenu Component
export function NavigationMenu({ children }) {
  return (
    <nav className="relative flex flex-col">
      {children}
    </nav>
  );
}


export function NavigationMenuList({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between">
      {/* All items side by side on larger screens */}
      <ul className="flex flex-row flex-wrap items-center space-x-4 lg:space-x-6">
        {children.slice(0, -3)}

        {/* Hamburger Menu Toggle for mobile */}
        <li className="lg:hidden pl-14">
          <button
            onClick={toggleMenu}
            className="p-2 text-white bg-gray-800 rounded-md focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </li>
      </ul>

      {/* Hamburger Menu Content for mobile */}
      {isOpen && (
        <ul className="lg:hidden w-full mt-4 mb-20 space-y-2 bg-gray-800 p-4 rounded-md">
          {children.slice(-3).map((child, index) => (
            <li key={index} className="flex items-center">
              {child}
            </li>
          ))}
        </ul>
      )}

      {/* Render the last three items side by side on larger screens */}
      <ul className="hidden lg:flex lg:space-x-6 lg:mt-0 lg:flex-row lg:items-center">
        {children.slice(-3)}
      </ul>
    </div>
  );
}


// NavigationMenuItem Component
export function NavigationMenuItem({ children }) {
  return (
    <li className="flex items-center">
      {children}
    </li>
  );
}

// NavigationMenuLink Component
export function NavigationMenuLink({ children, className, ...props }) {
  return (
    <a className={`flex items-center py-2 px-6 rounded-md hover:bg-blue-800 focus:bg-blue-800 transition-colors ${className}`} {...props}>
      {children}
    </a>
  );
}

// NavigationMenuContent Component
export function NavigationMenuContent({ children }) {
    return (
      <div className="absolute left-0 top-5 mt-8 bg-blue-800 focus:bg-blue-800 bg-opacity-90 rounded-lg shadow-lg">
        {children}
      </div>
    );
  }


export function NavigationMenuTrigger({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="py-2 px-6 rounded-md hover:bg-blue-800 focus:bg-blue-800 transition-colors"
    >
      {children}
    </button>
  );
}