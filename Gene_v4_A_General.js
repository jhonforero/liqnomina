class Empleado
{
    constructor(usuario, papellido, sapellido, nombre, cedula, numtel,nit_eps, nit_fp, nit_caja, nit_arl, sueldo_mes, fecha_ingreso, tipo_de_contrato,
    tipo_de_salario, riesgo_profes, dependientes, departamento ,centro_costo, subcentro_costo, aporte_fondo_emp, apo_afc, vr_int_viv, comision, vr_nosalarial , horas_extras_diurnas, dias_vacaciones, 
    dias_sinauxt, dias_incap_empresa, dias_incap_empleado, dias_licenc, dcto_prest)
  {
    this.usuario = usuario;
    this.papellido = papellido;
    this.sapellido = sapellido;
    this.nombre = nombre;
    this.cedula = cedula;
    this.telefono = numtel;
    this.nit_eps = nit_eps;
    this.nit_fp = nit_fp;
    this.nit_caja = nit_caja;
    this.nit_arl = nit_arl;
    this.sueldo_mes = sueldo_mes;
    this.fecha_ingreso = fecha_ingreso;
    //this.fecha_retiro = fecha_final;
    this.tipo_de_contrato = tipo_de_contrato;
    this.tipo_de_salario = tipo_de_salario;
    this.riesgo_profes = riesgo_profes;
    this.dependientes = dependientes;
    this.departamento = departamento;
    this.centro_costo = centro_costo;
    this.subcentro_costo = subcentro_costo;
    this.aporte_fondo_emp = aporte_fondo_emp;
    this.apo_afc = apo_afc;
    this.vr_int_viv = vr_int_viv;
    this.comision = comision;
    this.vr_nosalarial = vr_nosalarial;
    this.horas_extras_diurnas = horas_extras_diurnas;
    this.dias_vacaciones = dias_vacaciones;
    this.dias_sinauxt= dias_sinauxt;
    this.dias_incap_empresa = dias_incap_empresa; 
    this.dias_incap_empleado = dias_incap_empleado;
    this.dias_licenc = dias_licenc;
    this.dcto_prest = dcto_prest; 
 
  }
}

var diasDisponib; 
var sueldo_mes; 
var sueldo_devengado;
var dias_trabajados=30;
var vac_devengadas;
var salario_minimo=908526;
var comision=0;
var bonif_nosalario = 0;
var aux_transp = 106454;
var tipo_de_contrato;
var tipo_de_salario;
var dependientes;
var apo_afc=0;
var aporte_fondo_emp=0;
var dcto_prest=0;



var cesantias;
var inter_cesant;
var prima;
var diasDeVac;
var diasVacac;
var fecha_ingreso = new Date(fecha_ingreso);
var fecha_retiro = new Date(fecha_retiro);
var fecha_cierre_anio = "2019-12-31";
var fecha_prima_junio = "2020-06-30";
var indemniMayor;
var indemniMenor;
var dias_vacaciones=0;
var dias_incap_empresa=0;
var dias_sinauxt = 0;
var dias_licenc =0;

// Variables globales que sirven para la función de Calcular Nomina
var vr_hora_ordinaria;
var horas_extras_diurnas=0;
var horas_extras_nocturnas=0;
var horas_extras_diurna_dominical=0;
var horas_extras_nocturna_dominical=0;
var vr_horas_extras_diurnas;
var vr_horas_extras_nocturnas;
var vr_horas_extras_diurna_dominical;
var vr_horas_extras_nocturna_dominical;
var vr_horas_extras;

// Variables globales que sirven para terminar de calcular la nomina
var sueldo_devengado;
var vac_devengadas;
var vr_incap_empresa;
var apo_trab_pens;
var apo_trab_salud;
var valor_neto;

// Variables globales que sirven para calcular la retencion en la fuente 
var ingresos_totales = 0;
var Ingr_no_const = 0;
var ingre_basei_retfte = 0;
var ingre_basef_retfte = 0;
var ingr_no_const = 0;
var deuducc_retfte = 0;
let vr_int_viv = 0;
var vr_depend = 0;
let vr_prepaga = 0;
var otros_aux = 0;
let rentas_exentas = 0;
let porcent_exento = 0;
var uvt = 36308;
var vr_rtfte = 0;
var valor_max_afc = 0;
var porc_emple_salud = 0.04;
var porc_emple_pens = 0.04;

var riesgo_profes;
var vr_auxilio_transp;
var vr_licencia;
var centro_costo;
var subcentro_costo;
var vr_nosalarial;
var x;
var nit_eps;
var nit_fp;
var nit_caja;
var nit_arl;
var nit_sena = 899999034;
var nit_icbf = 899999239;


var usuario = 0;
var mes = "Agosto";
var dia = "31";
var anio = "2020";
var nro_comprob = 785



var empleado_activo = []

empleado_activo.push ( new Empleado ("S.BARATO", "BARATO"," ","SANDRA MILENA","52424382","320","860066942", "800224808", "860066942", "800226175",2691000,"2019-01-03","indefinido","ordinario","1","si","ventas","1730","076",301799,0,0,0,0,0,9,0,0,0,0,0));
empleado_activo.push ( new Empleado ("J.BARRANTES", "BARRANTES","ALBARRACIN","JUAN FELIPE","1014225640","321","800130907", "800224808", "860066942", "800226175",2691000,"2019-01-03","indefinido","ordinario","1","no","ventas","1730","076",134550,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("I.BARREIRO", "BARREIRO","MONTES","INGRID JULIETH","1075272725","322","830003564", "0", "0", "800226175",681395,"2019-01-03","practicante","ordinario","5","no","ingenieria","1730","077",0,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("Y.BERNAL", "BERNAL","VILLABON","YONATAN ","1012390372","324","830003564", "800229739", "860066942", "800226175",1200000,"2019-01-03","indefinido","ordinario","5","no","ingenieria","1730","077",62100,0,0,0,0,21.8,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("J.CARDENAS", "CARDENAS","MARTINEZ","JAIMEEDGAR ALEXANDER","79324618","326","800251440", "900336004", "860066942", "800226175",3229200,"2019-01-03","indefinido","ordinario","1","si","administracion","1730","079",487840,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("J.CARRASQUILLA", "CARRASQUILLA","","JULIETH","1050952558","326","800251440", "800229739", "860066942", "800226175",1900000,"2019-01-03","indefinido","ordinario","5","no","administracion","1730","075",0,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("L.CASTAÑEDA", "CASTAÑEDA","CARDOZO","LINA TATIANA","53116846","325","800251440", "800229739", "860066942", "800226175",2691000,"2019-01-03","indefinido","ordinario","5","no","ventas","1730","076",181125,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("A.GOMEZ", "GOMEZ","MOQUE","ANDREY ALBERTO","1033732871","330","800251440", "800224808", "860066942", "800226175",1552500,"2019-01-03","indefinido","ordinario","5","no","ingenieria","1730","077",120297,0,0,0,0,45.2,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("G.MARIN", "MARIN","NARANJO","GELEN BIBIANA","51989762","335","860066942", "800224808", "860066942", "800226175",1800000,"2019-01-03","indefinido","ordinario","1","no","ventas","1730","076",180000,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("M.MELENDEZ", "MELENDEZ","","MARTHA CECILIA","52823523","335","860066942", "800224808", "860066942", "800226175",1850000,"2019-01-03","indefinido","ordinario","1","no","ventas","1730","076",0,0,0,0,0,0,0,0,2,0,26,0));
empleado_activo.push ( new Empleado ("I.MONTENEGRO", "MONTENEGRO","GOMEZ","IVAN DAVID","79937832","335","800251440", "800224808", "860066942", "800226175",1552500,"2019-01-03","indefinido","ordinario","5","no","ingenieria","1730","077",0,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("A.MONTOYA", "MONTOYA","USMA","ALEXANDER DE JESUS","1017131168","336","800088702", "900336004", "890900841", "800226175",1138500,"2019-01-03","indefinido","ordinario","5","no","ingenieria","1730","077",0,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("N.NIÑO", "NIÑO","FLOREZ","NIDIA BIBIANA","52552484","337","800251440", "800227940", "860066942", "800226175",2070000,"2019-01-03","indefinido","ordinario","1","no","ventas","1730","076",0,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("C.OLAYA", "OLAYA","CLAVIJO","CONNY YELIPZA","1018444525","349","900156264", "800224808", "860066942", "800226175",1100000,"2019-01-03","indefinido","ordinario","5","no","ingenieria","1730","077",0,0,0,0,0,22,0,0,2,1,0,0));
empleado_activo.push ( new Empleado ("C.OSORIO", "OSORIO","PALOMINO","CRISTHIAN ANDRES","1024509086","339","901097473", "800224808", "860066942", "800226175",1800000,"2019-01-03","indefinido","ordinario","5","no","ingenieria","1730","077",84630,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("G.RAMIREZ", "RAMIREZ","GARCIA","GIOVANNI ","79663872","341","800088702", "800227940", "860066942", "800226175",3726000,"2019-01-03","indefinido","ordinario","5","si","ingenieria","1730","077",862251,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("E.RAMIREZ", "RAMIREZ","MARTINEZ","ERIKA JULIEHT","1024489022","349","800251440", "800224808", "890900841", "800226175",1500000,"2019-01-03","indefinido","ordinario","1","no","ingenieria","1730","077",0,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("Y.RAMIREZ", "RAMIREZ","SAAVEDRA","YUVISNEY ","1070953070","342","800251440", "800224808", "860066942", "800226175",2200000,"2019-01-03","indefinido","ordinario","5","no","administracion","1730","075",0,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("R.REINA", "REINA","FRANCO","ROCIO ESPERANZA","51691857","343","800088702", "800229739", "860066942", "800226175",4140000,"2019-01-03","indefinido","ordinario","1","no","administracion","1730","075",165600,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("I.RODELO", "RODELO","BARRERO","INGRITH LISETH","1095826052","344","900914254", "800224808", "890200106", "800226175",1138500,"2019-01-03","indefinido","ordinario","5","no","ingenieria","1730","077",63000,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("O.ROZO", "ROZO","FLOREZ","OSCAR DAVID","1023888965","345","830003564", "800229739", "860066942", "800226175",1656000,"2019-01-03","indefinido","ordinario","5","no","ingenieria","1730","077",0,0,0,0,0,47.4,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("D.RUIZ", "RUIZ","PINTO","DEISSY GERALDINE","1014305147","346","800088702", "800227940", "860066942", "800226175",1494000,"2019-01-03","indefinido","ordinario","1","no","administracion","1730","075",0,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("J.SUAREZ", "SUAREZ","","JESSICA LORENA","1031142191","346","800251440", "800229739", "860066942", "800226175",1000000,"2019-01-03","indefinido","ordinario","1","no","ingenieria","1730","077",0,0,0,0,0,0,0,0,0,0,0,34850));
empleado_activo.push ( new Empleado ("C.SUSA", "SUSA","LUJAN","CRISTHIAN JHAVIER","80022089","347","860066942", "800224808", "860066942", "800226175",9000000,"2019-01-03","indefinido","ordinario","1","si","ventas","1730","076",450000,155000,580928,0,0,0,0,0,0,0,0,88623));
empleado_activo.push ( new Empleado ("G.VELASQUEZ", "VELASQUEZ","ARDILA","GYSEL ","1023966560","348","860066942", "900336004", "860066942", "800226175",1650000,"2019-01-03","indefinido","ordinario","1","no","ventas","1730","076",315909,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("S.SOTO", "SOTO","MUÑOZ","SERGIO ANDRES","80250656","348","800251440", "800229739", "860066942", "800226175",950000,"2019-01-03","indefinido","ordinario","5","no","ventas","1730","076",0,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("C.ANGARITA", "ANGARITA","MESTE","CRISPIN ARTURO","19394359","348","860066942", "800224808", "860066942", "800226175",908526,"2019-01-03","indefinido","ordinario","1","no","ventas","1730","076",0,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("D.CONTRERAS", "CONTRERAS","ARRIETA","DARIO JOSE","1052988131","348","806008394", "800229739", "890480023", "800226175",1100000,"2019-01-03","indefinido","ordinario","5","no","ingenieria","1730","077",0,0,0,0,0,0,0,0,0,0,0,80000));
empleado_activo.push ( new Empleado ("J.DUCUARA", "DUCUARA","CAPERA","JULIAN DAVID","1024593497","348","860066942", "800227940", "860066942", "800226175",1100000,"2019-01-03","indefinido","ordinario","5","no","ingenieria","1730","077",0,0,0,0,0,45.6,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("K.SEGURA", "SEGURA","JIMENEZ","KAREN VANESSA","1016942334","348","830003564", "0", "0", "800226175",454263,"2019-01-03","practicante","ordinario","1","no","administracion","1730","075",0,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("R.ZAMORA", "ZAMORA","","ROBINSON CAMILO","1026279638","348","830003564", "800229739", "860066942", "800226175",1000000,"2019-01-03","indefinido","ordinario","5","no","ingenieria","1730","077",0,0,0,0,0,31.4,0,0,2,0,0,0));
empleado_activo.push ( new Empleado ("L.HUESO", "HUESO","REYES","LUIS CARLOS","1024587889","348","900156264", "800229739", "860066942", "800226175",908526,"2019-01-03","indefinido","ordinario","5","no","ingenieria","1730","077",0,0,0,0,0,41,0,0,2,1,0,0));
empleado_activo.push ( new Empleado ("J.HERRERA", "HERRERA","CARPETA","JORDY FERNEY","1033794273","348","800251440", "800224808", "860066942", "800226175",1100000,"2019-01-03","indefinido","ordinario","5","no","ingenieria","1730","077",0,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("J.RAMOS", "RAMOS","COMBARIZA","JUAN MANUEL","79717525","348","800088702", "800229739", "860066942", "800226175",1200000,"2019-01-03","indefinido","ordinario","5","no","ingenieria","1730","077",0,0,0,0,0,36.8,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("D.GOMEZ", "GOMEZ","FERRO","DANIELA","1151961892","348","800088702", "900336004", "890303208", "800226175",1830000,"2019-01-03","indefinido","ordinario","5","no","ingenieria","1730","077",0,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("P.GARCIA", "GARCIA","DURAN","PAULA ANDREA","1030685670","348","830003564", "800224808", "860066942", "800226175",1100000,"2019-01-03","indefinido","ordinario","5","no","ingenieria","1730","077",0,0,0,0,0,4,0,0,2,1,0,0));
empleado_activo.push ( new Empleado ("L.MARTINEZ ", "MARTINEZ ","GARCIA","LINA MARIA","1073518208","348","830113831", "800227940", "860066942", "800226175",1400000,"2019-01-03","indefinido","ordinario","5","no","ingenieria","1730","077",0,0,0,0,0,9.8,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("E.REYES", "REYES","VILLAMIL","EVLYNN ZULAY","1024572763","348","830003564", "900336004", "860066942", "800226175",1200000,"2019-01-03","indefinido","ordinario","1","no","ingenieria","1730","077",0,0,0,0,0,0,0,0,0,0,0,0));
empleado_activo.push ( new Empleado ("J.LARROTA", "LARROTA","BELTRAN","JOHANNA","53106695","348","860066942", "800224808", "860066942", "800226175",908526,"2019-01-03","indefinido","ordinario","1","no","administracion","1730","075",0,0,0,0,0,0,0,0,0,0,1,0));
empleado_activo.push ( new Empleado ("A.ALVARADO", "ALVARADO","OSPINA","ANDREA DEL PILAR","52803656","348","830003564", "800224808", "860066942", "800226175",1300000,"2019-01-03","indefinido","ordinario","1","no","ventas","1730","076",0,0,0,0,0,0,0,0,0,0,19,0));


// Version 1 ya calcula la prenomina y provisiones sin novedades
// Armando archivo plano y la estructura de cada archivo final 
// Version 2 ya quedo listo el plano con Nit de la entidad. 
// Se reorganizo el orden de los datos.

// la version 3 incluira el 40% no salarial
// la V3 podría tambien partir cada archivo para que quede mas facil revisar y hacer cambios
