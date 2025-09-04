import { Transition } from "framer-motion";

export const faqVariants = {
    initial: { height: 0, opacity: 0 },
    animate: { height: "auto", opacity: 1 },
    exit: { height: 0, opacity: 0 },
};

export const menuTabVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
};

export const bounceTransition: Transition = {
    type: "spring",
    stiffness: 200,
    damping: 20,
};