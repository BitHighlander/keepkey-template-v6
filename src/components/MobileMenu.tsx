import { Transition } from "@headlessui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
export default function MobileMenu({ show }: { show: boolean }) {

  return (
    <Transition
      show={show}
      enter="transition-[height] duration-300"
      enterFrom="h-0 w-full"
      enterTo="h-52 w-full"
      leave="transition-[height] duration-300"
      leaveFrom="h-52 w-full"
      leaveTo="h-0 w-full"
    >
      <div className="flex flex-col px-4 mb-4">
      <ConnectButton></ConnectButton>
      </div>
    </Transition>
  );
}
