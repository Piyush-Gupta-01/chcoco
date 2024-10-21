import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Importing social icons

export function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-12 px-4"> {/* Increased padding here */}
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* About Us Section */}
                    <div className="mb-8 md:mb-0 md:w-1/3">
                        <h2 className="text-lg font-bold mb-4">About Us</h2>
                        <p className="text-sm">
                            ComForm is a community-driven platform where local members can ask questions, share resources, and discuss topics of interest. We aim to create an inclusive and supportive environment.
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="mb-8 md:mb-0 md:w-1/3">
                        <h2 className="text-lg font-bold mb-4">Contact Us</h2>
                        <p className="text-sm">Email: support@comform.com</p>
                        <p className="text-sm">Phone: +123 456 7890</p>
                        <p className="text-sm">Address: 1234 Community Ave, City, Country</p>
                    </div>

                    {/* Social Media Links */}
                    <div className="md:w-1/3">
                        <h2 className="text-lg font-bold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="Facebook" className="text-white hover:text-blue-500">
                                <FaFacebook size={24} />
                            </a>
                            <a href="#" aria-label="Twitter" className="text-white hover:text-blue-400">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" aria-label="Instagram" className="text-white hover:text-pink-500">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Legal Links */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-6">
                    <p className="text-xs text-gray-400">&copy; 2024 ComForm. All rights reserved.</p>
                    <div className="flex space-x-4 text-xs">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

