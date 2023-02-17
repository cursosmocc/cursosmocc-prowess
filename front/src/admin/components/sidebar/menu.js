import SchoolIcon from '@mui/icons-material/School';
import PaymentIcon from '@mui/icons-material/Payment';
import PersonIcon from '@mui/icons-material/Person';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CategoryIcon from '@mui/icons-material/Category';
import ClassIcon from '@mui/icons-material/Class';
const menus =[
    {
        id: 1,
        title: "Area Personal",
        path: "/admin",
        icon: <AccountCircleIcon />,
    },
    {
        id:2,
        title:"Categorias",
        icon:<CategoryIcon/>,
        submenus:[
            {
                id:1,
                title:"Crear Categoria",
                path:"/admin/categorias/crear"
            },
            {
                id:2,
                title:"Ver Categorias",
                path:"/admin/categorias/ver"
            }
        ]
    },
    {
        id:3,
        title:"Cursos",
        icon:<ClassIcon/>,
        submenus:[
            {
                id:1,
                title:"Crear Curso",
                path:"/admin/cursos/crear"
            },
            {
                id:2,
                title:"Ver Cursos",
                path:"/admin/cursos/ver"
            }
        ]
    },
    {
        id:4,
        title:"Docentes",
        icon:<PersonIcon/>,
        submenus:[
            {
                id:1,
                title:"Crear Docente",
                path:"/admin/docentes/crear"
            },
            {
                id:2,
                title:"Ver Docentes",
                path:"/admin/docentes/ver"
            }
        ]
    },
    {
        id:5,
        title:"Registrar Pago Realizado",
        icon:<PaymentIcon/>,
        path:"/admin/pagos/crear"
    },
    {
        id:6,
        title:"Estudiantes",
        icon:<PersonIcon/>,
        submenus:[
            {
                id:1,
                title:"Crear Estudiante",
                path:"/admin/estudiantes/crear"
            },
            {
                id:2,
                title:"Ver Estudiantes",
                path:"/admin/estudiantes/ver"
            }
        ]
    },
    {
        id:7,
        title:"Gestion de Usuarios",
        icon:<AccountCircleIcon/>,
        submenus:[
            {
                id:1,
                title:"Descargar lista de estudiantes",
                path:"/admin/usuarios/estudiantes"
            },
            {
                id:2,
                title:"Descargar lista de docentes",
                path:"/admin/usuarios/docentes"
            }
        ]
    },
    {
        id:8,
        title:"Certificados",
        icon:<SchoolIcon/>,
        submenus:[
            {
                id:1,
                title:"Subir Plantilla de certificado",
                path:"/admin/certificados/plantilla"
            },
            {
                id:2,
                title:"Configuraciones",
                path:"/admin/certificados/configuraciones"
            }
        ]
    },
    {
        id:9,
        title:"Organizaciones",
        icon:<SchoolIcon/>,
        submenus:[
            {
                id:1,
                title:"Crear Organizacion",
                path:"/admin/organizaciones/crear"
            },
            {
                id:2,
                title:"Ver Organizaciones",
                path:"/admin/organizaciones/ver"
            }
        ]
    }
]
export default menus;