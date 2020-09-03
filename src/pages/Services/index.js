import React from 'react';

import './style.css';
import PageTitle from '../../components/PageTitle';

import { ButtonBase } from '@material-ui/core'

import ShieldIcon from '../../assets/images/icons/Shield.svg'
import Pen from '../../assets/images/icons/Pen.svg'
import Www from '../../assets/images/icons/Www.svg'
import Model from '../../assets/images/icons/3D.svg'

function Section({title, description, img}){
    return(
        <div className="section">
            <h1>{title}</h1>
            <p>{description}</p>
            <div>
                
            </div>
        </div>
    )
}

function ImageSection(imgs){

}

function Button({image, name}){
    return(
        <ButtonBase className="card_button" style={{padding:"10px"}}>
            <div>
                <img src={image} alt=""/>
            </div>
            <p>{name}</p>
        </ButtonBase>
    )
}

function Services() {
    return (
        <div>
            <PageTitle 
                title="Serviços"
                description="Consulte aqui nossos serviços de acordo com a sua necessidade"
            />
            <div className="services center">
                <p>Escolha um para mais informações</p>
                <div className="buttons_group">
                    <Button image={ShieldIcon} name="Marca"/>
                    <Button image={Www} name="Sistemas"/>
                    <Button image={Pen} name="Ilustrações"/>
                    <Button image={Model} name="3D"/>
                </div>
                <Section title="Marca" description="Nossos design dedicados e qualificados, irão criar o melhor para você e o seu negocio."/>
            </div>
        </div>
    );
}

export default Services;