import { Transition } from "framer-motion";

export const faqVariants = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
};

export const bounceTransition: Transition = {
    type: "spring",
    stiffness: 200,
    damping: 20,
};