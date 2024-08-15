import { Box, Image } from "@chakra-ui/react";
import tablu from "../../assets/img/logo.jpeg"

export default function Footer() {
    return (

        <Box position="absolute" bottom="20px" justifySelf="flex-end">
            <Image src={tablu} alt="Tablu tech" boxSize="180px" height="auto" />
        </Box>

    )
}
