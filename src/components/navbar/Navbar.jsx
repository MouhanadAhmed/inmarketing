import { useState } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-in-green text-custom-gold hover:text-white fixed top-0 right-0 left-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to={'/'} className="-m-1.5 p-1.5" onClick={scrollToTop}>
            <span className="sr-only">IN Marketing</span>
            <img className="w-16" src={logo} alt="IN Marketing" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-custom-gold hover:text-custom-green"
            onClick={() => mobileMenuOpen?setMobileMenuOpen(false) :setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to={'/'} className="text-sm font-semibold leading-6 text-custom-gold hover:text-white" onClick={scrollToTop}>
            Home
          </Link>
          <Link to={'/about'} className="text-sm font-semibold leading-6 text-custom-gold hover:text-white" onClick={scrollToTop}>
            About
          </Link>
          <Link to={'/services'} className="text-sm font-semibold leading-6 text-custom-gold hover:text-white" onClick={scrollToTop}>
            Services
          </Link>
          <Link to={'/portfolio'} className="text-sm font-semibold leading-6 text-custom-gold hover:text-white" onClick={scrollToTop}>
            Portfolio
          </Link>
          <Link to={'/contact'} className="text-sm font-semibold leading-6 text-custom-gold hover:text-white" onClick={scrollToTop}>
            Contact
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="hidden text-sm font-semibold leading-6 text-custom-gold hover:text-white">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-custom-green px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-end pt-12">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-custom-gold"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link to={'/'} onClick={() => { setMobileMenuOpen(false); scrollToTop(); }} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-custom-gold hover:text-white">
                  Home
                </Link>
                <Link to={'/about'} onClick={() => { setMobileMenuOpen(false); scrollToTop(); }} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-custom-gold hover:text-white">
                  About
                </Link>
                <Link to={'/services'} onClick={() => { setMobileMenuOpen(false); scrollToTop(); }} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-custom-gold hover:text-white">
                  Services
                </Link>
                <Link to={'/portfolio'} onClick={() => { setMobileMenuOpen(false); scrollToTop(); }} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-custom-gold hover:text-white">
                  Portfolio
                </Link>
                <Link to={'/contact'} onClick={() => { setMobileMenuOpen(false); scrollToTop(); }} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-custom-gold hover:text-white">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
