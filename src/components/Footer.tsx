'use client';

export default function Footer() {
  const footerLinks = [
    {
      title: 'FIND A STORE',
      links: ['Store Locator', 'Become a Member'],
    },
    {
      title: 'HELP',
      links: ['Send Us Feedback', 'Help Center', 'Orders', 'Returns'],
    },
    {
      title: 'ABOUT LEVELING',
      links: ['News', 'Careers', 'Investors', 'Sustainability'],
    },
  ];

  return (
    <footer className="w-full bg-black text-white">
      {/* Newsletter Section */}
      <div className="container py-8 md:py-10 border-b border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              BE IN THE LOOP
            </h3>
            <p className="text-sm md:text-base text-gray-400">
              Sign up to hear about special offers, new arrivals, and more.
            </p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 md:py-3 bg-gray-900 text-white text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-black text-white hover:bg-white hover:text-black px-6 py-2 md:py-3 font-medium whitespace-nowrap rounded-full transition duration-300 cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Links Section - Commented Out */}
      {/* <div className="container section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div> */}

      {/* Social Links & Bottom */}
      <div className="container flex flex-col sm:flex-row justify-between items-center gap-4 py-8 border-t border-gray-800 text-sm text-gray-400">
        <div>&copy; 2024 Leveling, Inc. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition cursor-pointer">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition cursor-pointer">
            Terms of Use
          </a>
        </div>
        <div className="flex gap-6">
          {/* Facebook Icon */}
          <a
            href="#"
            className="text-gray-400 hover:text-white transition cursor-pointer"
            title="Facebook"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          {/* X (Twitter) Icon */}
          <a
            href="#"
            className="text-gray-400 hover:text-white transition cursor-pointer"
            title="X"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.654l-5.207-6.802-5.974 6.802H2.42l7.723-8.835L1.254 2.25h6.554l4.713 6.231 5.429-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117Z" />
            </svg>
          </a>
          {/* Instagram Icon */}
          <a
            href="#"
            className="text-gray-400 hover:text-white transition cursor-pointer"
            title="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                ry="5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
