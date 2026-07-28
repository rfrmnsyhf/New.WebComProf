import { motion } from "framer-motion";
import Container from "@/components/layout/Container";

const clients = [
  { name: "PT Pertamina", abbr: "Pertamina" },
  { name: "PT Offshore Energy", abbr: "Offshore Energy" },
  { name: "Pacific Maritime Lines", abbr: "Pacific Maritime" },
  { name: "Global Offshore Solutions", abbr: "Global Offshore" },
  { name: "PT Pelabuhan Indonesia", abbr: "Pelindo" },
  { name: "Mitsui O.S.K. Lines", abbr: "MOL" },
];

const duplicated = [...clients, ...clients];

const ClientLogos = () => {
  return (
    <section className="border-b border-slate-100 bg-white py-12 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <span className="text-sm font-medium uppercase tracking-wider text-slate-400">
            Dipercaya oleh mitra terkemuka
          </span>
        </motion.div>
      </Container>

      <div className="group relative">
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-white to-transparent" />

        <div className="flex w-fit animate-marquee group-hover:paused">
          {duplicated.map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="mx-4 flex h-16 w-48 shrink-0 items-center justify-center rounded-xl border border-slate-100 px-6 transition-all duration-300 hover:border-secondary/20 hover:shadow-md"
            >
              <span className="text-sm font-semibold text-slate-400 transition-colors duration-300 hover:text-secondary">
                {client.abbr}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
