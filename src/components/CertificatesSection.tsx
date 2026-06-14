import CertificateCard, { certificates } from "./ICertificate.tsx";
import { FC } from "react";
import { motion } from "framer-motion";
import SectionShell from "./SectionShell.tsx";

const CertificatesSection: FC = () => {
    return (
        <SectionShell
            id="certificates"
            track="Certificates"
            eyebrow="Credentials"
            title="Certificates"
            subtitle="Professional certifications and achievements that validate my expertise"
        >
            <motion.div
                className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                {certificates.map((certificate, index) => (
                    <motion.div
                        key={certificate.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                    >
                        <CertificateCard certificate={certificate} />
                    </motion.div>
                ))}
            </motion.div>
        </SectionShell>
    );
};

export default CertificatesSection;
