'use client'

import AtiBotaoNext from '../components/Atividades/AtiBotaoNext'
import AtiEtapas from '../components/Atividades/AtiEtapas'
import AtiPlanejamento from '../components/Atividades/AtiPlanejamento'
import AtiPlanejamentoEducador from '../components/Atividades/AtiPlanejamentoEducador'
import AtivHero from '../components/Atividades/AtivHero'
import AtiEstudante from '../components/Atividades/AtiEstudante'
import AtiSugestao from '../components/Atividades/AtiSugestao'
import { Divider } from '@nextui-org/react'
import Monitoramento from '../components/Atividades/Monitoramento'
import AtiDiarioBordo from '../components/Atividades/AtiDiarioBordo'
import Teste from '../components/Atividades/Teste'
import AtiPlanoPDA from '../components/Atividades/AtiPlanoPDA'
import AtiPDAAcordion from '../components/Atividades/AtiPDAAcordion'
import AtiProjColetivo from '../components/Atividades/AtiProjColetivo'
import AtiProximos from '../components/Atividades/AtiProximos'
function Atividades() {
  return (
    <>
        
        <AtivHero />
        <AtiEtapas />
        <Teste />
        <AtiPlanoPDA />
        <AtiPDAAcordion />
        <Divider className='max-w-5xl mx-auto'/>
        <AtiProjColetivo />
        <AtiSugestao />
        <AtiProximos />
        
        <AtiBotaoNext />
        
        
    </>
    
  )
}

export default Atividades