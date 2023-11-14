import { Transition, Dialog } from "@headlessui/react";
import React, { Fragment, ReactNode } from "react";

type Props = {
  title: string;
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  children: ReactNode;
};

const DialogWrapper = (props: Props) => {
  return (
    <Transition show={props.isOpen} appear as={Fragment}>
      <Dialog open={props.isOpen} onClose={() => props.setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="bg-white dark:bg-gray-800 rounded-lg 2xl:mx-96 transition-all">
              <Dialog.Title
                className={
                  "bg-[#197278] p-8 rounded-t-lg 2xl:p-8 2xl:rounded-t-lg text-white text-2xl"
                }
              >
                {props.title}
              </Dialog.Title>
              {props.children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DialogWrapper;
