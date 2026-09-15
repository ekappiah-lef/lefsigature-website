export interface ClientLogo {
  src: string;
  name: string;
}

const dir = "/images";

/** Real client & partner logos (uploaded to /public/images). */
export const clients: ClientLogo[] = [
  { src: `${dir}/Siemens_energy-removebg-preview.png`, name: "Siemens Energy" },
  { src: `${dir}/JASOLAR-removebg-preview.png`, name: "JA Solar" },
  { src: `${dir}/sun_synk-removebg-preview.png`, name: "Sunsynk" },
  { src: `${dir}/srne-removebg-preview.png`, name: "SRNE" },
  { src: `${dir}/AGI_ENERGY-removebg-preview.png`, name: "AGI Energy" },
  { src: `${dir}/soluxa-removebg-preview.png`, name: "Soluxa" },
  { src: `${dir}/greenlife-removebg-preview.png`, name: "Greenlife" },
  { src: `${dir}/3esl-removebg-preview.png`, name: "3ESL" },
  { src: `${dir}/CEEBAH_TECHNOLOGY-removebg-preview.png`, name: "Ceebah Technology" },
  { src: `${dir}/JMO_engineering-removebg-preview.png`, name: "JMO Engineering" },
  { src: `${dir}/LMI_LOGISTICS-removebg-preview.png`, name: "LMI Logistics" },
  { src: `${dir}/gilbert_and_maxwell-removebg-preview.png`, name: "Gilbert & Maxwell" },
  { src: `${dir}/kocaer-removebg-preview.png`, name: "Kocaer" },
  { src: `${dir}/faun-removebg-preview.png`, name: "FAUN" },
  { src: `${dir}/geonor-removebg-preview.png`, name: "Geonor" },
  { src: `${dir}/franerix-removebg-preview.png`, name: "Franerix" },
  { src: `${dir}/hpw-removebg-preview.png`, name: "HPW" },
  { src: `${dir}/city_paint-removebg-preview.png`, name: "City Paint" },
  { src: `${dir}/saachi-removebg-preview.png`, name: "Saachi" },
  { src: `${dir}/sunsum-removebg-preview.png`, name: "Sunsum" },
  { src: `${dir}/new_lucky-removebg-preview.png`, name: "New Lucky" },
  { src: `${dir}/HAB-removebg-preview.png`, name: "HAB" },
  { src: `${dir}/BAG-removebg-preview.png`, name: "BAG" },
  { src: `${dir}/Germany_trade-removebg-preview.png`, name: "Germany Trade & Invest" },
  { src: `${dir}/minstry_of_trade-removebg-preview.png`, name: "Ministry of Trade" },
  { src: `${dir}/download-removebg-preview.png`, name: "Partner" },
  { src: `${dir}/atlogo-removebg-preview.png`, name: "AT Ghana" }
];
