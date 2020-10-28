import React, {useState} from 'react';

import './style.css';
import PageTitle from '../../components/PageTitle';

import { ButtonBase } from '@material-ui/core';

import sections from '../../assets/data/section.js';

function Section({section}){
    return(
        <div className="section">
            <h1>{section.title}</h1>
            <p>{section.description}</p>
            <div className="section_itens container">
                <ImageSection imgs={section.items}/>
            </div>
        </div>
    )
}

function ImageSection({imgs}){
    return(
        imgs.map((item, index) => (
            <div className="img_section" key={index} >
                <p>{item.title}</p>
                <img width="305px" height="305px" src={item.image} alt=""/>
            </div>
            )
        )   
    )
}

function Button({section, setSection}){
    
    return(
        <ButtonBase onClick={() => setSection(section)} className="card_button" style={{padding:"10px"}}>
            <div>
                <img src={section.icon} alt=""/>
            </div>
            <p>{section.title}</p>
        </ButtonBase>
    ) 
}

function Services() {

    const [section, setSection] = useState(sections.marca);

    return (
        <div>
            <PageTitle 
                title="Serviços"
                description="Consulte aqui nossos serviços de acordo com a sua necessidade"
            />
            <div className="services center">
                <p>Escolha um para mais informações</p>
                <div className="buttons_group">
                    <Button section={sections.marca} setSection={setSection}/>
                    <Button section={sections.sistemas} setSection={setSection}/>
                    <Button section={sections.ilustrations} setSection={setSection}/>
                    <Button section={sections.model} setSection={setSection}/>
                </div>
                <Section section={section}/>
            </div>
        </div>
    );
    
}

export default Services;