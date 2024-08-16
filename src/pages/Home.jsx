import { Grid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Square from "../components/misselation/Square";
export default function Home() {
  const cards = [1, 2, 3, 4];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}>
      <Grid templateColumns="repeat(2, 1fr)" gap={4} p={5} py="50px">
        {cards.map((card) => (
          <Square key={card} index={card} />
        ))}
      </Grid>
    </motion.div>
  );
}
