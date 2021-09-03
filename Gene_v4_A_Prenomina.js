var boton = document.getElementById("boton");
boton.addEventListener("click", GenerarLaNomina );


function GenerarLaNomina ()
{
    alert ("hola")  
    document.write (`El siguiente es el detalle de la Liquidacion de Nomina<br />`);
    document.write (`<br />Nombre | Salario básico| dias trabajados | dias incapacidad empresa| Dias Incapacidad Empleado| Valor Incapacidad |
    Dias de Vacaciones | Valor de Vacaciones| Auxilio de Transporte|  horas extras | comision | otros aux| Aporte Salud| Aporte Pension| 
    Aporte FSP| Vr Retefte| Fondo Empleados| Otros AFC| Dcto Prestamos| Neto a Pagar `);
    
    for (x in empleado_activo)
   
   
    {

        vr_hora_ordinaria= empleado_activo[x].sueldo_mes/240;
        vr_horas_extras_diurnas = vr_hora_ordinaria*(empleado_activo[x].horas_extras_diurnas*1.25);
        vr_horas_extras_nocturnas = vr_hora_ordinaria*(horas_extras_nocturnas*1.35);
        vr_horas_extras_diurna_dominical = vr_hora_ordinaria*(horas_extras_diurna_dominical*2);
        vr_horas_extras_nocturna_dominical = vr_hora_ordinaria*(horas_extras_nocturna_dominical*2.5);
        vr_horas_extras = vr_horas_extras_diurnas+vr_horas_extras_nocturnas+vr_horas_extras_diurna_dominical
        +vr_horas_extras_nocturna_dominical;

        sueldo_devengado = empleado_activo[x].sueldo_mes / 30 * (dias_trabajados - empleado_activo[x].dias_vacaciones - empleado_activo[x].dias_sinauxt - empleado_activo[x].dias_incap_empresa - empleado_activo[x].dias_licenc);

        valor_neto=0;
        vac_devengadas = empleado_activo[x].sueldo_mes/30*(empleado_activo[x].dias_vacaciones);
        vr_incap_empresa = empleado_activo[x].sueldo_mes/30*empleado_activo[x].dias_incap_empresa * 0.66;
        vr_licencia = empleado_activo[x].dias_licenc * empleado_activo[x].sueldo_mes/30


        if ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision)> (25*salario_minimo))
            {
                apo_trab_pens = (25*salario_minimo) *0.04;
                apo_trab_salud = (25*salario_minimo) *0.04;
            }
            else if (empleado_activo[x].tipo_de_contrato === "pensionado")
            {
                apo_trab_pens = 0;
                apo_trab_salud = (sueldo_devengado  + vr_incap_empresa + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * porc_emple_pens;
            }
            else if (empleado_activo[x].tipo_de_contrato != "practicante" && empleado_activo[x].tipo_de_salario == "ordinario")
            {
                apo_trab_pens = (sueldo_devengado  + vr_incap_empresa + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * porc_emple_pens;
                apo_trab_salud = (sueldo_devengado  + vr_incap_empresa + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * porc_emple_salud;
            }
            
            else if (empleado_activo[x].tipo_de_contrato != "practicante" && empleado_activo[x].tipo_de_salario == "integral")
            {
                apo_trab_pens = (sueldo_devengado  + vr_incap_empresa  + vac_devengadas + vr_horas_extras + empleado_activo[x].comision)*0.7 * porc_emple_pens;
                apo_trab_salud = (sueldo_devengado  + vr_incap_empresa + vac_devengadas + vr_horas_extras + empleado_activo[x].comision)*0.7 * porc_emple_salud;
            }
            else 
            {
                apo_trab_pens = 0;
                apo_trab_salud = 0;
            }


        // Calcular el auxilio de transporte
        if (empleado_activo[x].tipo_de_contrato != "practicante" && empleado_activo[x].sueldo_mes<(salario_minimo*2)) 
            {
                vr_auxilio_transp = aux_transp /30 * ( dias_trabajados - empleado_activo[x].dias_vacaciones - empleado_activo[x].dias_licenc - empleado_activo[x].dias_sinauxt - empleado_activo[x].dias_incap_empresa - empleado_activo[x].dias_incap_empleado );
            } else
                vr_auxilio_transp=0;


        // quite la funcion y deje formula de calcular el aporte de solidaridad pensional s/n el valor del salario
        if ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision)> (25*salario_minimo))
            {
                aport_fsp = (25*salario_minimo) * 0.02;
            } else if ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision)> (20*salario_minimo)){
                aport_fsp = (sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * 0.02;
            } else if ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision)> (19*salario_minimo)) {
                aport_fsp = (sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * 0.018;
            } else if ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision)> (18*salario_minimo)) {
                aport_fsp = (sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * 0.016;
            } else if ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision)> (17*salario_minimo)) {
                aport_fsp = (sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * 0.014;
            } else if ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision)> (16*salario_minimo)) {
                aport_fsp = (sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * 0.012;
            } else if ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision)> (4*salario_minimo)) {
                aport_fsp = (sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * 0.01;
            } else {
                aport_fsp=0;
            }

    //Aqui vamos a poner la funcion de retfte

        ingresos_totales = sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision;
        ingr_no_const = apo_trab_pens + apo_trab_salud + aport_fsp;

        if (empleado_activo[x].dependientes == "si" && (ingresos_totales * 0.1) >(32*uvt))
            {
                vr_depend = (32*uvt);
            }
            else if (empleado_activo[x].dependientes == "si" && (ingresos_totales * 0.1) <(32*uvt))
            {
                vr_depend = ingresos_totales * 0.1;
            }
            else 
            {
                vr_depend = 0;
            }

        deuducc_retfte = empleado_activo[x].vr_int_viv + vr_depend + vr_prepaga;
        rentas_exentas = empleado_activo[x].apo_afc + porcent_exento;
        ingre_basei_retfte = ingresos_totales - ingr_no_const - deuducc_retfte - empleado_activo[x].apo_afc;
        porcent_exento = ingre_basei_retfte *0.25;
        ingre_basef_retfte = ingre_basei_retfte - porcent_exento;
        ingre_uvt = ingre_basef_retfte / uvt;


        if (ingre_uvt >= 2300)
            {
                vr_rtfte = ((ingre_uvt -2300)*0.39* uvt) + (770 * uvt); 
            } 
            else if (ingre_uvt >= 945)
            {
                vr_rtfte = ((ingre_uvt -945)*0.37* uvt) + (268 * uvt);
            } 
            else if (ingre_uvt >= 640)
            {
                vr_rtfte = ((ingre_uvt - 640)*0.35* uvt) + (162 * uvt);
            }
            else if (ingre_uvt >= 360)
            {
                vr_rtfte = ((ingre_uvt - 360)*0.33* uvt) + (69 * uvt);
            }
            else if (ingre_uvt >= 150)
            {
                vr_rtfte = ((ingre_uvt - 150)*0.28* uvt) + (10 * uvt);
            }
            else if (ingre_uvt >= 95)
            {
                vr_rtfte = ((ingre_uvt - 95)*0.19* uvt);
            }
            else 
            {
                vr_rtfte = 0;
            }

    // Hasta aqui incluimos la funcion de retencion

        valor_neto = sueldo_devengado + vr_incap_empresa + vr_horas_extras + empleado_activo[x].comision + empleado_activo[x].vr_nosalarial + otros_aux + vr_auxilio_transp + vac_devengadas 
        - apo_trab_pens - apo_trab_salud - aport_fsp - empleado_activo[x].aporte_fondo_emp - empleado_activo[x].dcto_prest - empleado_activo[x].apo_afc - vr_rtfte;
        
        valor_max_afc =  (((sueldo_devengado + vr_horas_extras + empleado_activo[x].comision + otros_aux + vr_auxilio_transp + vac_devengadas - apo_trab_pens - apo_trab_salud 
            - aport_fsp) * 0.4) - (deuducc_retfte + rentas_exentas + porcent_exento))/0.75;
    
            
        document.write (`<br /> ${empleado_activo[x].usuario}| ${empleado_activo[x].sueldo_mes} | ${dias_trabajados}|${empleado_activo[x].dias_sinauxt}|${empleado_activo[x].dias_incap_empresa}
        |${vr_incap_empresa}|${empleado_activo[x].dias_vacaciones}|${vac_devengadas}|${vr_auxilio_transp}| ${vr_horas_extras} | ${empleado_activo[x].comision} |${empleado_activo[x].vr_nosalarial} | ${otros_aux} | ${apo_trab_salud}
        |${apo_trab_pens}|${aport_fsp}|${vr_rtfte}|${empleado_activo[x].aporte_fondo_emp}|${empleado_activo[x].apo_afc}|${empleado_activo[x].dcto_prest}|${valor_neto}`);

          
    }
  
  }
