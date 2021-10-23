import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req, res) {
    res.status(200).json(
        {
            rnt: [
                {
                    id: 1,
                    name: "Banheiro",
                    image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023151/public/RENDERS/PROJETO%20RNT/BANHEIRO/3_oyr2yf.jpg",
                    link: "#"
                },
                {
                    id: 2,
                    name: "Cozinha",
                    image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023151/public/RENDERS/PROJETO%20RNT/COZINHA/2_aenaut.jpg",
                    link: "#"
                },
                {
                    id: 3,
                    name: "Suite",
                    image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023153/public/RENDERS/PROJETO%20RNT/SUITE/6_ndhw1d.jpg",
                    link: "#"
                },
                {
                    id: 4,
                    name: "Sala de Estar",
                    image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023155/public/RENDERS/PROJETO%20RNT/SOCIAL/1_jbbal8.jpg",
                    link: "#"
                }
            ],
            ecrt: [
                {
                    id: 1,
                    name: "Sala de Estar",
                    image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023146/public/RENDERS/PROJETO%20ECRT/SALA%20DE%20ESTAR/1_tzxee0.jpg",
                    link: "#"
                }
            ],
            esp: [
                {
                    id: 1,
                    name: "Escritório",
                    image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023146/public/RENDERS/PROJETO%20ESP/ESCRIT%C3%93RIO/2_j4elve.jpg",
                    link: "#"
                }
            ],
            fld: [
                {
                    id: 1,
                    name: "Fraldário",
                    image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023159/public/RENDERS/PROJETO%20FLD/FRALDARIO/1_baj194.png",
                    link: "#"
                }
            ],
            isab: [
                {
                    id: 1,
                    name: "Lavanderia",
                    image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023149/public/RENDERS/PROJETO%20ISAB/LAVANDERIA/2_vnhc1y.jpg",
                    link: "#"
                }
            ],
            oft: [
                {
                    id: 1,
                    name: "Clínica",
                    image: "https://res.cloudinary.com/djf0isef7/image/upload/v1634427119/03_fx3hs8.jpg",
                    link: "#"
                }
            ],
            ptg: [
                {
                    id: 1,
                    name: "Lavabo",
                    image: "https://res.cloudinary.com/djf0isef7/image/upload/v1635023155/public/RENDERS/PROJETO%20PTG/LAVABO/03_wkyj2t.jpg",
                    link: "#"
                }
            ]
        }
    );
}