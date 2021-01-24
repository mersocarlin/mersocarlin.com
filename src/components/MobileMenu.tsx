import React, { Fragment, useState } from 'react'
import { createPortal } from 'react-dom'
import HeaderLink from './HeaderLink'
import { menuItems } from './Menu'
import SocialList from './SocialList'

type ModalProps = {
  children: React.ReactNode
}

function Modal({ children }: ModalProps) {
  return createPortal(children, document.body)
}

function MobileMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <Fragment>
      <button
        className="p-2 mersocarlin-text-gray focus:outline-none"
        onClick={() => setIsModalOpen((prevValue) => !prevValue)}
      >
        <svg className="block w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>

      {isModalOpen && (
        <Modal>
          <div
            className="bg-gray-200 dark:bg-gray-700 fixed inset-0 z-20"
            data-backdrop={true}
            onClick={() => {
              setIsModalOpen(false)
            }}
          >
            <div
              className="h-full w-full max-w-lg p-4 m-0 mx-auto bg-transparent flex flex-col justify-between"
              role="dialog"
              tabIndex={-1}
            >
              <div className="flex flex-wrap">
                <div className="flex items-center justify-center w-full mt-6">
                  <HeaderLink
                    className="w-full py-6 rounded bg-gray-50 dark:bg-gray-500 shadow-md mx-2 text-center"
                    fontStyles="text-xl"
                    path="/"
                  >
                    Home
                  </HeaderLink>
                </div>

                {menuItems.map((menuItem) => (
                  <div
                    key={menuItem.name}
                    className="flex items-center justify-center w-1/2 mt-4"
                  >
                    <HeaderLink
                      className="w-full py-6 rounded bg-gray-50 dark:bg-gray-500 shadow-md mx-2 text-center"
                      fontStyles="text-xl"
                      path={menuItem.path}
                    >
                      {menuItem.name}
                    </HeaderLink>
                  </div>
                ))}
              </div>

              <SocialList size={50} />
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  )
}

export default MobileMenu
