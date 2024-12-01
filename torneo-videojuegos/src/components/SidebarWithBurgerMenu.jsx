import React from "react";
import {
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Alert,
    Input,
    Drawer,
    Card,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
    MagnifyingGlassIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

/* Icons */
import LogoImage from '../assets/Imágenes/sarmientoGaming.svg';
import SarmientoGamingTextIcon from '../assets/SVG/Sarmiento Gaming.svg';

export function SidebarWithBurgerMenu() {
    const [open, setOpen] = React.useState(0);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <section className="flex items-center justify-between w-[90vw] pt-[7vw]">
            <div className={`max-md:h-fit max-md:pl-[1vw] h-[4vw] w-fit flex items-center justify-between`} >
                {/* Contenedor del logo y texto de la barra de navegación */}
                <div className='flex items-center gap-[1.5vw] max-md:gap-[2vw]'>
                    <a href="#">
                        <img className='w-[12vw] hover:[filter:drop-shadow(0px_6px_10px_#00E3CD);] hover:shadow-emerald-300' src={LogoImage} alt="" />
                    </a>
                    {/* Texto del logo */}
                    <a href="#">
                        <img className='w-[60vw] hover:[filter:drop-shadow(0px_1px_2px_#00E3CD);]' src={SarmientoGamingTextIcon} alt="" />
                    </a>
                </div>
            </div>
            <IconButton className="w-[7.5vw] h-[7.5vw] mr-[2vw]" variant="text" size="lg">
                {isDrawerOpen ? (
                    <XMarkIcon className="h-[7.5vw] w-[7.5vw] stroke-2 stroke-white" />
                ) : (
                    <Bars3Icon className="h-[7.5vw] w-[7.5vw] stroke-2 stroke-white" onClick={openDrawer}/>
                )}
            </IconButton>
            <Drawer className="bg-gradient-to-b w-[80%]" open={isDrawerOpen} onClose={closeDrawer}>
                <Card
                    color="transparent"
                    shadow={false}
                    className="h-lvh w-full p-4"
                >
                    <div className="mb-2 flex items-center gap-[2vw] pl-[4vw] p-[2vw]">
                        <img
                            src={LogoImage}
                            alt="brand"
                            className="h-[8vw] w-[8vw]"
                        />
                        <Typography className="text-[#00E3CD]" variant="h5" color="">
                            <img className="w-[100%]" src={SarmientoGamingTextIcon} alt="text-logo" />
                        </Typography>
                    </div>
                    <List>
                        <hr className="my-[2vw] border-[#81ffdd3f] mb-[8vw] w-[80%]" />
                        <h3 className="text-start text-[4.4vw] mb-[6vw] font-semibold text-teal-50">Navegación</h3>
                        <ul className="flex flex-col gap-[6vw]">
                            <li className="list-none text-start font-light text-teal-50 text-[4.4vw]" onClick={closeDrawer}><a href="#">Inicio</a></li>
                            <li className="list-none text-start font-light text-teal-50 text-[4.4vw]" onClick={closeDrawer}><a href="#infoTorneo">Información del torneo</a></li>
                            <li className="list-none text-start font-light text-teal-50 text-[4.4vw]" onClick={closeDrawer}><a href="#cronograma">Cronograma</a></li>
                            <li className="list-none text-start font-light text-teal-50 text-[4.4vw]" onClick={closeDrawer}><a href="#puntuaciones">Puntuaciones</a></li>
                            <li className="list-none text-start font-light text-teal-50 text-[4.4vw]" onClick={closeDrawer}><a href="#contacto">Contacto</a></li>
                        </ul>
                    </List>
                </Card>
            </Drawer>
        </section>
    );
}