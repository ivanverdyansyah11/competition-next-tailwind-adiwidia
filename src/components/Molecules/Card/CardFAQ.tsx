import { motion, AnimatePresence } from "framer-motion";
import {bounceTransition, faqVariants} from "@/utils/motionVariant";

type Props = {
    question: string,
    answer: string,
    isOpen?: boolean,
    onClickOpenAction: () => void,
}

export default function CardFAQ({question, answer, isOpen = false, onClickOpenAction}: Props) {
    return (
        <div className={`card-faq group/faq ${isOpen ? 'show' : ''}`} onClick={onClickOpenAction}>
            <div className="faq-header">
                <h6 className="header-question">{question}</h6>
                <div className="header-icon group-hover/faq:bg-primary group-hover/faq:border-primary">
                    <span className={`w-[10px] h-[10px] icon ${isOpen ? "bg-[url('/image/icon/minus/minus-primary.svg')] group-hover/faq:!bg-[url('/image/icon/minus/minus-light.svg')]" : "bg-[url('/image/icon/plus/plus-primary.svg')] group-hover/faq:!bg-[url('/image/icon/plus/plus-light.svg')]"}`}></span>
                </div>
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        variants={faqVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={bounceTransition}
                        className="faq-answer"
                    >
                        <p className="answer">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}