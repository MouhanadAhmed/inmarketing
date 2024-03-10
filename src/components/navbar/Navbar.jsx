import {  useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-nav-green text-white   " >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to={'/'} className="-m-1.5 p-1.5">
            <span className="sr-only">IN Marketing</span>
            <img className=" w-16" src={logo} alt="IN Marketing" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-custom-cafe  hover:text-custom-gold"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {/* <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Product
              <ChevronDownIcon className="h-5 w-5 flex-none text-white" aria-hidden="true" />
            </Popover.Button>

       
          </Popover> */}

          <Link to={'/'} className="text-sm font-semibold leading-6 text-custom-cafe hover:text-custom-gold">
          Home
          </Link>
          <Link to={'/about'}  className="text-sm font-semibold leading-6 text-custom-cafe hover:text-custom-gold">
            About
          </Link>
          <Link to={'/services'}  className="text-sm font-semibold leading-6 text-custom-cafe hover:text-custom-gold">
            Services
          </Link>
          <Link to={'/portfolio'}  className="text-sm font-semibold leading-6 text-custom-cafe hover:text-custom-gold">
            Portofolio
          </Link>
          <Link to={'/contact'}  className="text-sm font-semibold leading-6 text-custom-cafe hover:text-custom-gold">
            Contact
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="hidden text-sm font-semibold leading-6 text-custom-cafe hover:text-custom-gold">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-custom-green px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to={'/'} className="-m-1.5 p-1.5">
              <span className="sr-only">IN Marketing</span>
              <img
                className="h-16 w-auto"
                src={logo}
                alt="IN marketing logo mobile"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-custom-cafe"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <Link to={'/'} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  text-custom-cafe hover:text-custom-gold">
          Home
          </Link>
          <Link to={'/about'} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  text-custom-cafe hover:text-custom-gold">
            About
          </Link>
          <Link to={'/services'} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  text-custom-cafe hover:text-custom-gold">
            Services
          </Link>
          <Link to={'/portfolio'} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  text-custom-cafe hover:text-custom-gold">
            Portofolio
          </Link>
          <Link to={'/contact'} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  text-custom-cafe hover:text-custom-gold">
            Contact
          </Link>

              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
