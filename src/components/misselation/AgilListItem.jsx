
import { Box, Image } from "@chakra-ui/react"
import agil_photo from "../../assets/img/agil.jpeg"
export default function AgilListItem() {
    return (
        <Box display="flex" gap={5} alignItems="center">
            <Image boxSize="50px" height="auto" src={agil_photo} alt="ilustracao agil no fundo branco e preenchida com a cor laranja " />
            <p>AgilListItem</p>
        </Box>
    )
}
