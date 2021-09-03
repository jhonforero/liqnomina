var boton = document.getElementById("botontres");
boton.addEventListener("click", GenerarArchivoPlano );

function GenerarArchivoPlano ()
{
    alert ("Archivo Plano Generandose")

    for (x in empleado_activo)
    {

        vr_hora_ordinaria= empleado_activo[x].sueldo_mes/240;
        vr_horas_extras_diurnas = vr_hora_ordinaria*(empleado_activo[x].horas_extras_diurnas*1.25);
        vr_horas_extras_nocturnas = vr_hora_ordinaria*(horas_extras_nocturnas*1.35);
        vr_horas_extras_diurna_dominical = vr_hora_ordinaria*(horas_extras_diurna_dominical*2);
        vr_horas_extras_nocturna_dominical = vr_hora_ordinaria*(horas_extras_nocturna_dominical*2.5);
        vr_horas_extras = vr_horas_extras_diurnas+vr_horas_extras_nocturnas+vr_horas_extras_diurna_dominical
        +vr_horas_extras_nocturna_dominical;

        sueldo_devengado = empleado_activo[x].sueldo_mes / 30 * (dias_trabajados - (dias_vacaciones) - empleado_activo[x].dias_sinauxt - empleado_activo[x].dias_incap_empresa - empleado_activo[x].dias_licenc);

        valor_neto=0;
        vac_devengadas = empleado_activo[x].sueldo_mes/30*(dias_vacaciones + empleado_activo[x].dias_sinauxt);
        vr_incap_empresa = empleado_activo[x].sueldo_mes/30*empleado_activo[x].dias_incap_empresa * 0.66;
        vr_licencia = empleado_activo[x].dias_licenc * empleado_activo[x].sueldo_mes/30
       
       
        
        if ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision)> (25*salario_minimo))
            {
                apo_trab_pens = (25*salario_minimo) *0.04;
                apo_trab_salud = (25*salario_minimo) *0.04;
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
                vr_auxilio_transp = aux_transp /30 * ( dias_trabajados - dias_vacaciones -empleado_activo[x].dias_licenc - empleado_activo[x].dias_sinauxt - empleado_activo[x].dias_incap_empresa );
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
            ingre_basef_retfte = ingre_basei_retfte - porcent_exento ;
    // Acabo de meter el valor del aFC disminuyendo esta formula
    
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
        
            valor_neto = sueldo_devengado + vr_incap_empresa + vr_horas_extras + empleado_activo[x].comision + empleado_activo[x].vr_nosalarial + otros_aux + vr_auxilio_transp + vac_devengadas 
            - apo_trab_pens - apo_trab_salud - aport_fsp - empleado_activo[x].aporte_fondo_emp - empleado_activo[x].dcto_prest - empleado_activo[x].apo_afc - vr_rtfte;
                    
            if ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) > (salario_minimo*25))
            {
                apo_empresa_salud = ((salario_minimo*25) * 0.085);
            }
            else if ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) > (salario_minimo*10))
            {
                apo_empresa_salud = ((sueldo_devengado + vr_incap_empresa + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * 0.085);
            }
            else if ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) > (salario_minimo*25))
            {
                apo_empresa_salud = ((salario_minimo*25) * 0.085);
            }
            else if (empleado_activo[x].tipo_de_contrato == "practicante" && sueldo_devengado > salario_minimo) 
            {
                apo_empresa_salud = ((sueldo_devengado + vr_incap_empresa + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * 0.125);
            }
            else if (empleado_activo[x].tipo_de_contrato == "practicante" && sueldo_devengado < salario_minimo) 
            {
                apo_empresa_salud = ((salario_minimo / 30 * dias_trabajados ) * 0.125);
            }
            else 
            {
                apo_empresa_salud = 0
            }
        
            // Condicional para que calcule el aporte de pension empresa
            if ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision)>(salario_minimo*25)) 
            {
                apo_empresa_pens = ((salario_minimo*25) * 0.12);
            }
            else if (empleado_activo[x].tipo_de_contrato != "practicante") 
            {
                apo_empresa_pens = ((sueldo_devengado + vr_incap_empresa + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * 0.12);
            }
            else
            {
                apo_empresa_pens = 0;
            }
        
        
            if (empleado_activo[x].riesgo_profes=="1")
            {
                porcent_arl = 0.00522
            }
            else if (empleado_activo[x].riesgo_profes=="2")
            {
                porcent_arl = 0.01044
            }
            else if (empleado_activo[x].riesgo_profes=="3")
            {
                porcent_arl = 0.02436
            }
            else if (empleado_activo[x].riesgo_profes=="4")
            {
                porcent_arl = 0.04350
            }
            else if (empleado_activo[x].riesgo_profes=="5")
            {
                porcent_arl = 0.0696
            }
            else
            {
                porcent_arl = 0;
            }
        
        
            // Condicional para que calcule el aporte de ARL
            if ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision)>(salario_minimo*25))
            {
                apo_empresa_arl = ((salario_minimo*25) * porcent_arl)/30*(dias_trabajados-dias_vacaciones);
            }
            else if (empleado_activo[x].tipo_de_contrato == "practicante" && empleado_activo[x].sueldo_mes < salario_minimo) 
            {
                apo_empresa_arl = ((salario_minimo) * porcent_arl)/30*(dias_trabajados-dias_vacaciones);
            }
            else if (empleado_activo[x].tipo_de_salario == "ordinario") 
            {
                apo_empresa_arl = ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * porcent_arl)/30*(dias_trabajados-dias_vacaciones - empleado_activo[x].dias_sinauxt - empleado_activo[x].dias_licenc);
            }
            else if (empleado_activo[x].tipo_de_contrato != "practicante" && empleado_activo[x].tipo_de_salario == "integral") 
            {
                apo_empresa_arl = ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision)*0.7 * porcent_arl)/30*(dias_trabajados-dias_vacaciones -empleado_activo[x].dias_sinauxt - empleado_activo[x].dias_licenc);
            }
            else
            {
                apo_empresa_arl = 0;
            }
        
            // Condicional para que calcule el aporte a Caja Compensacion Familiar
            if (empleado_activo[x].tipo_de_contrato != "practicante") 
            {
                apo_caja_comp = ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * 0.04);
            }
            else
            {
                apo_caja_comp = 0;
            }
        
        
            // Condicional para que calcule el aporte a ICBF
            if  ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision)>(salario_minimo*10))
            {
                apo_empresa_icbf = ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * 0.03);
            }
            else
            {
                apo_empresa_icbf = 0;
            }
        
        
            // Condicional para que calcule el aporte a SENA
            if  ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision)>(salario_minimo*10))
            {
                apo_empresa_sena = ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * 0.02);
            }
            else
            {
                apo_empresa_sena = 0;
            }
        
        
            // Condicional para que calcule las prestaciones sociales
            if (empleado_activo[x].tipo_de_contrato != "practicante" && empleado_activo[x].sueldo_mes < (salario_minimo*2)) 
            {
                prov_cesantias = ((sueldo_devengado + vr_auxilio_transp + vr_incap_empresa + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * 0.0833);
                prov_intcesant = ((sueldo_devengado + vr_auxilio_transp + vr_incap_empresa + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * 0.01);
                prov_primaserv = ((sueldo_devengado + vr_auxilio_transp + vr_incap_empresa + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * 0.0833);
                prov_vacaciones = ((sueldo_devengado + vr_incap_empresa + vac_devengadas ) * 0.0417);
            }
            else if (empleado_activo[x].tipo_de_contrato != "practicante" && empleado_activo[x].tipo_de_salario != "integral") 
            {
                prov_cesantias = ((sueldo_devengado + vr_incap_empresa + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * 0.0833);
                prov_intcesant = ((sueldo_devengado + vr_incap_empresa + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * 0.01);
                prov_primaserv = ((sueldo_devengado + vr_incap_empresa + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * 0.0833);
                prov_vacaciones = ((sueldo_devengado + vr_incap_empresa + vac_devengadas ) * 0.0417);
            }
            else
            {
                prov_cesantias = 0;
                prov_intcesant = 0;
                prov_primaserv = 0;
                prov_vacaciones = 0;
            }
                    
        if (empleado_activo[x].departamento == "administracion")
            {
            document.write (`<br> L|009|${nro_comprob}|5105060100|D|${sueldo_devengado}|${anio}|${mes}|${dia}|1|110|0|1| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5105150100|D|${vr_horas_extras}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5105240100|D|${vr_incap_empresa}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5105270100|D|${vr_auxilio_transp}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5105480100|D|${empleado_activo[x].vr_nosalarial}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2605100000|D|${empleado_activo[x].comision}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2610150100|D|${vac_devengadas}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2380950100|C|${empleado_activo[x].aporte_fondo_emp}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370450100|C|${empleado_activo[x].apo_afc}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|1365950100|C|${empleado_activo[x].dcto_prest}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2365050100|C|${vr_rtfte}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370050100|C|${apo_trab_salud}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].nit_eps}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2380300100|C|${apo_trab_pens}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].nit_fp}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2380300100|C|${aport_fsp}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].nit_fp}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2505050100|C|${valor_neto}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5105690000|D|${apo_empresa_salud}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].nit_eps}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370050100|C|${apo_empresa_salud}|${anio}|${mes}|${dia}|1|110|0|2||| ${empleado_activo[x].nit_eps}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5105700100|D|${apo_empresa_pens}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].nit_fp}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2380300100|C|${apo_empresa_pens}|${anio}|${mes}|${dia}|1|110|0|2||| ${empleado_activo[x].nit_fp}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5105680100|D|${apo_empresa_arl}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].nit_arl}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370060100|C|${apo_empresa_arl}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].nit_arl}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5105720100|D|${apo_caja_comp}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].nit_caja}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370100100|C|${apo_caja_comp}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].nit_caja}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5105750100|D|${apo_empresa_icbf}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${nit_icbf}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370100100|C|${apo_empresa_icbf}|${anio}|${mes}|${dia}|1|110|0|3||| ${nit_icbf}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5105780200|D|${apo_empresa_sena}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${nit_sena}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370100100|C|${apo_empresa_sena}|${anio}|${mes}|${dia}|1|110|0|3||| ${nit_sena}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5105300100|D|${prov_cesantias}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2610050100|C|${prov_cesantias}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5105330100|D|${prov_intcesant}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2610100100|C|${prov_intcesant}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5105360100|D|${prov_primaserv}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2610200000|C|${prov_primaserv}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5105390100|D|${prov_vacaciones}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2610150100|C|${prov_vacaciones}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            }
        else if (empleado_activo[x].departamento == "ventas")
            {
            document.write (`<br> L|009|${nro_comprob}|5205060100|D|${sueldo_devengado}|${anio}|${mes}|${dia}|1|110|0|1| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5205150100|D|${vr_horas_extras}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5205240100|D|${vr_incap_empresa}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5205270100|D|${vr_auxilio_transp}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5205480100|D|${empleado_activo[x].vr_nosalarial}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2605100000|D|${empleado_activo[x].comision}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2610150100|D|${vac_devengadas}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2380950100|C|${empleado_activo[x].aporte_fondo_emp}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370450100|C|${empleado_activo[x].apo_afc}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|1365950100|C|${empleado_activo[x].dcto_prest}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2365050100|C|${vr_rtfte}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370050100|C|${apo_trab_salud}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].nit_eps}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2380300100|C|${apo_trab_pens}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].nit_fp}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2380300100|C|${aport_fsp}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].nit_fp}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2505050100|C|${valor_neto}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5205690100|D|${apo_empresa_salud}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].nit_eps}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370050100|C|${apo_empresa_salud}|${anio}|${mes}|${dia}|1|110|0|2||| ${empleado_activo[x].nit_eps}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5205700100|D|${apo_empresa_pens}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].nit_fp}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2380300100|C|${apo_empresa_pens}|${anio}|${mes}|${dia}|1|110|0|2||| ${empleado_activo[x].nit_fp}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5205680100|D|${apo_empresa_arl}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].nit_arl}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370060100|C|${apo_empresa_arl}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].nit_arl}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5205720100|D|${apo_caja_comp}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].nit_caja}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370100100|C|${apo_caja_comp}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].nit_caja}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5205750100|D|${apo_empresa_icbf}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${nit_icbf}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370100100|C|${apo_empresa_icbf}|${anio}|${mes}|${dia}|1|110|0|3||| ${nit_icbf}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5205780200|D|${apo_empresa_sena}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${nit_sena}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370100100|C|${apo_empresa_sena}|${anio}|${mes}|${dia}|1|110|0|3||| ${nit_sena}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5205300100|D|${prov_cesantias}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2610050100|C|${prov_cesantias}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5205330100|D|${prov_intcesant}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2610100100|C|${prov_intcesant}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5205360100|D|${prov_primaserv}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2610200000|C|${prov_primaserv}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|5205390100|D|${prov_vacaciones}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2610150100|C|${prov_vacaciones}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            }
        else if (empleado_activo[x].departamento == "ingenieria")
            {
            document.write (`<br> L|009|${nro_comprob}|7205060100|D|${sueldo_devengado}|${anio}|${mes}|${dia}|1|110|0|1| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|7205150100|D|${vr_horas_extras}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|7205240000|D|${vr_incap_empresa}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|7205270100|D|${vr_auxilio_transp}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|7205480500|D|${empleado_activo[x].vr_nosalarial}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2605100000|D|${empleado_activo[x].comision}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2610150100|D|${vac_devengadas}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2380950100|C|${empleado_activo[x].aporte_fondo_emp}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370450100|C|${empleado_activo[x].apo_afc}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|1365950100|C|${empleado_activo[x].dcto_prest}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2365050100|C|${vr_rtfte}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370050100|C|${apo_trab_salud}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].nit_eps}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2380300100|C|${apo_trab_pens}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].nit_fp}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2380300100|C|${aport_fsp}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].nit_fp}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2505050100|C|${valor_neto}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|7205690000|D|${apo_empresa_salud}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].nit_eps}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370050100|C|${apo_empresa_salud}|${anio}|${mes}|${dia}|1|110|0|2||| ${empleado_activo[x].nit_eps}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|7205700100|D|${apo_empresa_pens}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].nit_fp}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2380300100|C|${apo_empresa_pens}|${anio}|${mes}|${dia}|1|110|0|2||| ${empleado_activo[x].nit_fp}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|7205680100|D|${apo_empresa_arl}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].nit_arl}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370060100|C|${apo_empresa_arl}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].nit_arl}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|7205720100|D|${apo_caja_comp}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].nit_caja}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370100100|C|${apo_caja_comp}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].nit_caja}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|7205750100|D|${apo_empresa_icbf}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370100100|C|${apo_empresa_icbf}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|7205780200|D|${apo_empresa_sena}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${nit_sena}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2370100100|C|${apo_empresa_sena}|${anio}|${mes}|${dia}|1|110|0|3||| ${nit_sena}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|7205300100|D|${prov_cesantias}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2610050100|C|${prov_cesantias}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|7205330100|D|${prov_intcesant}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2610100100|C|${prov_intcesant}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|7205360100|D|${prov_primaserv}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2610200000|C|${prov_primaserv}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|7205390100|D|${prov_vacaciones}|${anio}|${mes}|${dia}|1|110|0|2| ${empleado_activo[x].centro_costo}| ${empleado_activo[x].subcentro_costo}| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            document.write (`<br> L|009|${nro_comprob}|2610150100|C|${prov_vacaciones}|${anio}|${mes}|${dia}|1|110|0|3||| ${empleado_activo[x].cedula}|0|Nómina ${mes} ${anio}  ${empleado_activo[x].usuario}|0|N|0|0|0|0|0|0|0`);
            }
    }    
}
