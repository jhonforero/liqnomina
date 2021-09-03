var boton = document.getElementById("botondos");
boton.addEventListener("click", GenerarProvisiones );


function GenerarProvisiones ()
{
  document.write (`El siguiente es el detalle de las Provisiones<br />`);
  document.write (`<br />Nombre | Salario básico| Aporte Salud Empleador | Aporte Pension Empleador | Aporte ARL |
  Aporte Caja de Compensacion | Aporte ICBF | Aporte SENA | Provsision Cesantias | Provision Intereses Cesantias | 
  Provision Prima Servicios | Provision Vacaciones `);
  
  for (x in empleado_activo)
  { 
        vr_hora_ordinaria= empleado_activo[x].sueldo_mes/240;
        vr_horas_extras_diurnas = vr_hora_ordinaria*(empleado_activo[x].horas_extras_diurnas*1.25);
        vr_horas_extras_nocturnas = vr_hora_ordinaria*(horas_extras_nocturnas*1.35);
        vr_horas_extras_diurna_dominical = vr_hora_ordinaria*(horas_extras_diurna_dominical*2);
        vr_horas_extras_nocturna_dominical = vr_hora_ordinaria*(horas_extras_nocturna_dominical*2.5);
        vr_horas_extras = vr_horas_extras_diurnas+vr_horas_extras_nocturnas+vr_horas_extras_diurna_dominical
        +vr_horas_extras_nocturna_dominical;

        sueldo_devengado = empleado_activo[x].sueldo_mes / 30 * (dias_trabajados - (empleado_activo[x].dias_vacaciones) - empleado_activo[x].dias_incap_empresa - empleado_activo[x].dias_licenc);

        valor_neto=0;
        vac_devengadas = empleado_activo[x].sueldo_mes/30*(empleado_activo[x].dias_vacaciones);
        vr_incap_empresa = empleado_activo[x].sueldo_mes/30*empleado_activo[x].dias_incap_empresa * 0.66;
        vr_auxilio_transp = aux_transp /30 * ( dias_trabajados - empleado_activo[x].dias_vacaciones - empleado_activo[x].dias_sinauxt - empleado_activo[x].dias_incap_empresa - empleado_activo[x].dias_licenc );
        
  
  // Condicional para calcular aporte de salud para mas de 10 salarios minimos o para practicantes
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
  else if (empleado_activo[x].tipo_de_contrato == "practicante" && sueldo_devengado >= salario_minimo) 
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
      apo_empresa_arl = ((salario_minimo*25) * porcent_arl)/30*(dias_trabajados - empleado_activo[x].dias_sinauxt - empleado_activo[x].dias_vacaciones - empleado_activo[x].dias_licenc - empleado_activo[x].dias_incap_empresa);
  }
  else if (empleado_activo[x].tipo_de_contrato == "practicante" && empleado_activo[x].sueldo_mes < salario_minimo) 
  {
      apo_empresa_arl = ((salario_minimo) * porcent_arl)/30*(dias_trabajados - empleado_activo[x].dias_sinauxt - empleado_activo[x].dias_vacaciones - empleado_activo[x].dias_licenc- empleado_activo[x].dias_incap_empresa);
  }
  else if (empleado_activo[x].tipo_de_salario == "ordinario") 
  {
      apo_empresa_arl = ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision) * porcent_arl)/30*(dias_trabajados - empleado_activo[x].dias_vacaciones - empleado_activo[x].dias_sinauxt - empleado_activo[x].dias_licenc -empleado_activo[x].dias_incap_empresa);
  }
  else if (empleado_activo[x].tipo_de_contrato != "practicante" && empleado_activo[x].tipo_de_salario == "integral") 
  {
      apo_empresa_arl = ((sueldo_devengado + vac_devengadas + vr_horas_extras + empleado_activo[x].comision)*0.7 * porcent_arl)/30*(dias_trabajados - empleado_activo[x].dias_vacaciones - empleado_activo[x].dias_sinauxt - empleado_activo[x].dias_licenc -empleado_activo[x].dias_incap_empresa);
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

 
  document.write (`<br /> ${empleado_activo[x].usuario}| ${sueldo_devengado} | ${apo_empresa_salud}|${apo_empresa_pens}|${apo_empresa_arl}
  |${apo_caja_comp}|${apo_empresa_icbf}|${apo_empresa_sena}|${prov_cesantias}| ${prov_intcesant} | ${prov_primaserv} | ${prov_vacaciones}`);
  }
}

